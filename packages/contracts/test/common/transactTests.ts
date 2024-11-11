import { MockSanctionList, MockToken } from '@mystikonetwork/contracts-abi';
import { MystikoRelayerPool, MystikoSettings } from '@mystikonetwork/contracts-abi-settings';
import { ECIES } from '@mystikonetwork/ecies';
import { MerkleTree } from '@mystikonetwork/merkle';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { readCompressedFile, readFile, toBN, toBuff, toHex, toHexNoPrefix } from '@mystikonetwork/utils';
import { ZKProof } from '@mystikonetwork/zkp';
import BN from 'bn.js';
import { expect } from 'chai';
import { ethers } from 'ethers';
import { getBalance } from '../util/common';
import { CommitmentInfo } from './commitment';

function generateSignatureKeys(): { wallet: ethers.Wallet; pk: Buffer; sk: Buffer } {
  const wallet = ethers.Wallet.createRandom();
  return { wallet, pk: toBuff(wallet.address), sk: toBuff(wallet.privateKey) };
}

async function generateProof(
  protocol: MystikoProtocolV2,
  numInputs: number,
  numOutputs: number,
  commitmentInfo: CommitmentInfo<CommitmentOutput>,
  inCommitmentsIndices: number[],
  includedCount: number,
  sigPk: Buffer,
  publicAmount: BN,
  relayerFeeAmount: BN,
  outAmounts: BN[],
  rollupFeeAmounts: BN[],
  randomAuditingSecretKey: BN,
  auditorPublicKeys: BN[],
  programFile: string,
  abiFile: string,
  provingKeyFile: string,
): Promise<{ proof: ZKProof; outCommitments: CommitmentOutput[] }> {
  const commitments = commitmentInfo.commitments.slice(0, includedCount);
  const merkleTree = MerkleTree.fromLeaves(
    commitments.map((c) => c.commitmentHash),
    { maxLevels: protocol.merkleTreeLevels },
  );
  const inVerifyPks: Buffer[] = [];
  const inVerifySks: Buffer[] = [];
  const inEncPks: Buffer[] = [];
  const inEncSks: Buffer[] = [];
  const inCommitments: BN[] = [];
  const inPrivateNotes: Buffer[] = [];
  const pathIndices: number[][] = [];
  const pathElements: BN[][] = [];
  for (let i = 0; i < numInputs; i += 1) {
    inVerifyPks.push(commitmentInfo.pkVerify);
    inVerifySks.push(protocol.secretKeyForVerification(commitmentInfo.rawSkVerify));
    inEncPks.push(commitmentInfo.pkEnc);
    inEncSks.push(protocol.secretKeyForEncryption(commitmentInfo.rawSkEnc));
    inCommitments.push(commitmentInfo.commitments[inCommitmentsIndices[i]].commitmentHash);
    inPrivateNotes.push(commitmentInfo.commitments[inCommitmentsIndices[i]].encryptedNote);
    const fullPath = merkleTree.path(inCommitmentsIndices[i]);
    pathIndices.push(fullPath.pathIndices);
    pathElements.push(fullPath.pathElements);
  }
  const outVerifyPks: Buffer[] = [];
  const outCommitments: BN[] = [];
  const outFullCommitments: CommitmentOutput[] = [];
  const outRandomPs: BN[] = [];
  const outRandomRs: BN[] = [];
  const outRandomSs: BN[] = [];
  const outCommitmentsPromises: Promise<CommitmentOutput>[] = [];
  for (let i = 0; i < numOutputs; i += 1) {
    outVerifyPks.push(commitmentInfo.pkVerify);
    outCommitmentsPromises.push(
      protocol.commitment({
        publicKeys: { pkVerify: commitmentInfo.pkVerify, pkEnc: commitmentInfo.pkEnc },
        amount: outAmounts[i],
      }),
    );
  }
  (await Promise.all(outCommitmentsPromises)).forEach((commitment) => {
    outFullCommitments.push(commitment);
    outCommitments.push(commitment.commitmentHash);
    outRandomPs.push(commitment.randomP);
    outRandomRs.push(commitment.randomR);
    outRandomSs.push(commitment.randomS);
  });
  return protocol
    .zkProveTransaction({
      numInputs,
      numOutputs,
      inVerifyPks,
      inVerifySks,
      inEncPks,
      inEncSks,
      inCommitments,
      inPrivateNotes,
      pathIndices,
      pathElements,
      sigPk,
      treeRoot: merkleTree.root(),
      publicAmount,
      relayerFeeAmount,
      rollupFeeAmounts,
      outVerifyPks,
      outAmounts,
      outCommitments,
      outRandomPs,
      outRandomRs,
      outRandomSs,
      randomAuditingSecretKey,
      auditorPublicKeys,
      program: await readCompressedFile(programFile),
      abi: (await readFile(abiFile)).toString(),
      provingKey: await readCompressedFile(provingKeyFile),
    })
    .then((proof) => ({ proof, outCommitments: outFullCommitments }));
}

function signRequest(
  wallet: ethers.Wallet,
  publicRecipient: string,
  relayerAddress: string,
  outEncryptedNotes: Buffer[],
): Promise<string> {
  const bytes = Buffer.concat([toBuff(publicRecipient), toBuff(relayerAddress), ...outEncryptedNotes]);
  return wallet.signMessage(toBuff(ethers.utils.keccak256(bytes)));
}

function buildRequest(
  numInputs: number,
  numOutputs: number,
  proof: ZKProof,
  publicRecipientAddress: string,
  relayerAddress: string,
  outEncryptedNotes: Buffer[],
  randomAuditingSecretKey: BN,
  encryptedAuditorNotes: BN[],
) {
  const abc = proof.proof as { a: string; b: string; c: string };
  const randomAuditingPublicKey = ECIES.publicKey(randomAuditingSecretKey);
  return [
    [abc.a, abc.b, abc.c],
    proof.inputs[0],
    proof.inputs.slice(1, 1 + numInputs),
    proof.inputs.slice(1 + numInputs, 1 + 2 * numInputs),
    proof.inputs[1 + 2 * numInputs],
    proof.inputs[2 + 2 * numInputs],
    proof.inputs[3 + 2 * numInputs],
    proof.inputs.slice(4 + 2 * numInputs, 4 + 2 * numInputs + numOutputs),
    proof.inputs.slice(4 + 2 * numInputs + numOutputs, 4 + 2 * numInputs + 2 * numOutputs),
    publicRecipientAddress,
    relayerAddress,
    outEncryptedNotes.map(toHex),
    randomAuditingPublicKey.toString(),
    encryptedAuditorNotes.map((e) => e.toString()),
  ];
}

export function testTransact(
  contractName: string,
  account: any,
  protocol: MystikoProtocolV2,
  commitmentPoolContract: any,
  settings: MystikoSettings,
  relayerPool: MystikoRelayerPool,
  commitmentInfo: CommitmentInfo<CommitmentOutput>,
  inCommitmentsIndices: number[],
  queueSize: number,
  includedCount: number,
  publicAmount: BN,
  relayerFeeAmount: BN,
  outAmounts: BN[],
  rollupFeeAmounts: BN[],
  programFile: string,
  abiFile: string,
  provingKeyFile: string,
  vkeyFile: string,
  mockToken: MockToken | undefined = undefined,
  isLoop: boolean = true,
) {
  const numInputs = inCommitmentsIndices.length;
  const numOutputs = outAmounts.length;
  const publicRecipientAddress = '0x2Bd6FBfDA256cebAC13931bc3E91F6e0f59A5e23';
  const relayerAddress = '0xc9192277ea18ff49618E412197C9c9eaCF43A5e3';
  const signatureKeys = generateSignatureKeys();
  const randomAuditingSecretKey = ECIES.generateSecretKey();
  let recipientBalance: BN;
  let relayerBalance: BN;
  let proof: ZKProof;
  const outCommitments: CommitmentOutput[] = [];
  let outEncryptedNotes: Buffer[];
  let signature: string;
  let txReceipt: any;
  const auditorPublicKeys: BN[] = [];
  let encryptedAuditorNotes: BN[] = [];
  const events: ethers.utils.LogDescription[] = [];
  let spendSnNumber: number;

  describe(`Test ${contractName} transaction${numInputs}x${numOutputs} operations`, () => {
    before(async () => {
      const relayerRole = await relayerPool.RELAYER_ROLE();
      // todo eric check relayer role
      await relayerPool.grantRole(relayerRole, account.address);

      for (let i = 0; i < protocol.numOfAuditors; i += 1) {
        const auditorSecretKey = ECIES.generateSecretKey();
        const auditorPublicKey = ECIES.publicKey(auditorSecretKey);
        auditorPublicKeys.push(auditorPublicKey);
        await settings.setAuditorPublicKey(i, auditorPublicKey.toString());
      }
      const proofWithCommitments = await generateProof(
        protocol,
        numInputs,
        numOutputs,
        commitmentInfo,
        inCommitmentsIndices,
        includedCount,
        signatureKeys.pk,
        publicAmount,
        relayerFeeAmount,
        outAmounts,
        rollupFeeAmounts,
        randomAuditingSecretKey,
        auditorPublicKeys,
        programFile,
        abiFile,
        provingKeyFile,
      );
      proof = proofWithCommitments.proof;
      proofWithCommitments.outCommitments.forEach((p) => {
        outCommitments.push(p);
        commitmentInfo.commitments.push(p);
      });
      outEncryptedNotes = outCommitments.map((c) => c.encryptedNote);
      signature = await signRequest(
        signatureKeys.wallet,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
      );
      recipientBalance = await getBalance(publicRecipientAddress, mockToken);
      relayerBalance = await getBalance(relayerAddress, mockToken);
      encryptedAuditorNotes = proof.inputs
        .slice(proof.inputs.length - numInputs * protocol.numOfAuditors)
        .map((n) => toBN(toHexNoPrefix(n), 16));
      spendSnNumber = (await commitmentPoolContract.getNullifierCount()).toNumber();
    });

    it('should transact successfully', async () => {
      expect(await protocol.zkVerify(proof, (await readCompressedFile(vkeyFile)).toString())).to.equal(true);
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
        randomAuditingSecretKey,
        encryptedAuditorNotes,
      );
      const tx = await commitmentPoolContract.transact(request, signature);
      txReceipt = await tx.wait();
      for (let i = 0; i < txReceipt.logs.length; i += 1) {
        try {
          const parsedLog: ethers.utils.LogDescription = commitmentPoolContract.interface.parseLog(
            txReceipt.logs[i],
          );
          events.push(parsedLog);
        } catch (e) {
          // do nothing
        }
      }
    });

    it('should emit correct events', () => {
      expect(events.length).to.gt(0);
      for (let i = 0; i < numInputs; i += 1) {
        const sn = proof.inputs[i + 1];
        const rootHash = proof.inputs[0];
        const index = events.findIndex(
          (event) =>
            event.name === 'CommitmentSpent' &&
            event.args.serialNumber.toString() === toBN(toHexNoPrefix(sn), 16).toString() &&
            event.args.rootHash.toString() === toBN(toHexNoPrefix(rootHash), 16).toString(),
        );
        expect(index).to.gte(0);
        for (let j = 0; j < protocol.numOfAuditors; j += 1) {
          const id = toBN(i).shln(32).or(toBN(j));
          const auditorPublicKey = auditorPublicKeys[j];
          const encryptedAuditorNote = encryptedAuditorNotes[i * protocol.numOfAuditors + j];
          const notesIndex = events.findIndex((event) => event.name === 'EncryptedAuditorNotes');
          expect(notesIndex).to.gt(0);
          const { notes } = events[notesIndex].args;

          let bFind = false;
          for (let k = 0; k < notes.length; k += 1) {
            if (
              notes[k].id.toString() === id.toString(10) &&
              notes[k].publicKey.toString() === auditorPublicKey.toString(10) &&
              notes[k].note.toString() === encryptedAuditorNote.toString(10)
            ) {
              bFind = true;
              break;
            }
          }
          expect(bFind).equal(true);
        }
      }
      for (let i = 0; i < numOutputs; i += 1) {
        const outCommitment = outCommitments[i].commitmentHash;
        const outEncryptedNote = outEncryptedNotes[i];
        const leafIndex = queueSize + includedCount + i;
        const commitmentIndex = events.findIndex(
          (event) =>
            event.name === 'CommitmentQueued' &&
            event.args.commitment.toString() === outCommitment.toString() &&
            event.args.rollupFee.toString() === rollupFeeAmounts[i].toString() &&
            event.args.leafIndex.toString() === leafIndex.toString() &&
            event.args.encryptedNote === toHex(outEncryptedNote),
        );
        expect(commitmentIndex).to.gte(0);
      }
    });

    it('should have correct spend sn number count', async () => {
      const newSpendSnNumber = (await commitmentPoolContract.getNullifierCount()).toNumber();
      expect(newSpendSnNumber).to.gte(spendSnNumber + numInputs);
    });

    it('should have correct balance', async () => {
      const newRecipientBalance = await getBalance(publicRecipientAddress, mockToken);
      const newRelayerBalance = await getBalance(relayerAddress, mockToken);
      expect(newRecipientBalance.toString()).to.equal(recipientBalance.add(publicAmount).toString());
      expect(newRelayerBalance.toString()).to.equal(relayerBalance.add(relayerFeeAmount).toString());
    });

    it('should set spentSerialNumbers correctly', async () => {
      const snPromises: Promise<boolean>[] = [];
      for (let i = 1; i < numInputs + 1; i += 1) {
        const sn = proof.inputs[i];
        snPromises.push(commitmentPoolContract.isSpentSerialNumber(sn));
      }
      const snExists = await Promise.all(snPromises);
      snExists.forEach((exist) => expect(exist).to.equal(true));
    });

    it('should set historicCommitments/relayCommitments correctly', async () => {
      const commitmentPromises: Promise<boolean>[] = [];
      for (let i = 0; i < outCommitments.length; i += 1) {
        const commitment = outCommitments[i].commitmentHash;
        if (isLoop) {
          commitmentPromises.push(commitmentPoolContract.isHistoricCommitment(commitment.toString()));
        } else {
          commitmentPromises.push(commitmentPoolContract.relayCommitments(commitment.toString()));
        }
      }
      const commitmentExists = await Promise.all(commitmentPromises);
      commitmentExists.forEach((exist) => expect(exist).to.equal(true));
    });
  });
}

export function testTransactRevert(
  contractName: string,
  accounts: any[],
  protocol: MystikoProtocolV2,
  commitmentPoolContract: any,
  mockSanctionList: MockSanctionList,
  relayerPool: MystikoRelayerPool,
  settings: MystikoSettings,
  commitmentInfo: CommitmentInfo<CommitmentOutput>,
  inCommitmentsIndices: number[],
  queueSize: number,
  includedCount: number,
  publicAmount: BN,
  relayerFeeAmount: BN,
  outAmounts: BN[],
  rollupFeeAmounts: BN[],
  programFile: string,
  abiFile: string,
  provingKeyFile: string,
  mockToken: MockToken | undefined = undefined,
) {
  const numInputs = inCommitmentsIndices.length;
  const numOutputs = outAmounts.length;
  const publicRecipientAddress = '0x2Bd6FBfDA256cebAC13931bc3E91F6e0f59A5e23';
  const relayerAddress = '0xc9192277ea18ff49618E412197C9c9eaCF43A5e3';
  const randomAuditingSecretKey = ECIES.generateSecretKey();
  let recipientBalance: BN;
  let relayerBalance: BN;
  const signatureKeys = generateSignatureKeys();
  let proof: ZKProof;
  let outCommitments: CommitmentOutput[];
  let outEncryptedNotes: Buffer[];
  let signature: string;
  let encryptedAuditorNotes: BN[] = [];
  describe(`Test ${contractName} transaction${numInputs}x${numOutputs} operations revert`, () => {
    before(async () => {
      const relayerRole = await relayerPool.RELAYER_ROLE();
      // todo eric check relayer role
      await relayerPool.grantRole(relayerRole, accounts[0].address);
      const auditorPublicKeys: BN[] = (await commitmentPoolContract.getAllAuditorPublicKeys()).map((k: any) =>
        toBN(k.toString()),
      );
      const proofWithCommitments = await generateProof(
        protocol,
        numInputs,
        numOutputs,
        commitmentInfo,
        inCommitmentsIndices,
        includedCount,
        signatureKeys.pk,
        publicAmount,
        relayerFeeAmount,
        outAmounts,
        rollupFeeAmounts,
        randomAuditingSecretKey,
        auditorPublicKeys,
        programFile,
        abiFile,
        provingKeyFile,
      );
      proof = proofWithCommitments.proof;
      outCommitments = proofWithCommitments.outCommitments;
      outEncryptedNotes = outCommitments.map((c) => c.encryptedNote);
      signature = await signRequest(
        signatureKeys.wallet,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
      );

      recipientBalance = await getBalance(publicRecipientAddress, mockToken);
      relayerBalance = await getBalance(relayerAddress, mockToken);
      encryptedAuditorNotes = proof.inputs
        .slice(proof.inputs.length - numInputs * protocol.numOfAuditors)
        .map((n) => toBN(toHexNoPrefix(n), 16));
    });

    // todo eric should check relayer role
    it('should revert when public amount error', async () => {
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
        randomAuditingSecretKey,
        encryptedAuditorNotes,
      );

      request[5] = '0x0000000000000000000000000001100000000000000000022b1c8c1227a00000';
      await expect(commitmentPoolContract.transact(request, signature)).to.be.revertedWith(
        'Invalid("transact proof")',
      );
    });

    it('should revert when relayer fee amount error', async () => {
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
        randomAuditingSecretKey,
        encryptedAuditorNotes,
      );

      request[6] = '0x0000000000000000000000000000000000000000000000000000000000000001';
      await expect(commitmentPoolContract.transact(request, signature)).to.be.revertedWith(
        'Invalid("transact proof")',
      );
    });

    it('should revert when verifier disabled', async () => {
      await settings.disableTransactVerifier(numInputs, numOutputs);
      const expectRevertError = `TransactVerifierDisabled(${numInputs}, ${numOutputs})`;
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
        randomAuditingSecretKey,
        encryptedAuditorNotes,
      );
      await expect(commitmentPoolContract.transact(request, signature)).to.be.revertedWith(expectRevertError);
      await settings.enableTransactVerifier(numInputs, numOutputs);
    });

    it('should revert when sender in sanction list', async () => {
      await mockSanctionList.addToSanctionsList(accounts[0].address);
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
        randomAuditingSecretKey,
        encryptedAuditorNotes,
      );

      await expect(commitmentPoolContract.transact(request, signature)).to.be.revertedWith(
        'SanctionedAddress()',
      );
      await mockSanctionList.removeFromSanctionsList(accounts[0].address);
    });

    it('should revert when recipient in sanction list', async () => {
      await mockSanctionList.addToSanctionsList(publicRecipientAddress);
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
        randomAuditingSecretKey,
        encryptedAuditorNotes,
      );

      await expect(commitmentPoolContract.transact(request, signature)).to.be.revertedWith(
        'SanctionedAddress()',
      );
      await mockSanctionList.removeFromSanctionsList(publicRecipientAddress);
    });

    it('should have correct balance', async () => {
      const newRecipientBalance = await getBalance(publicRecipientAddress, mockToken);
      const newRelayerBalance = await getBalance(relayerAddress, mockToken);
      expect(newRecipientBalance.toString()).to.equal(recipientBalance.toString());
      expect(newRelayerBalance.toString()).to.equal(relayerBalance.toString());
    });
  });
}
