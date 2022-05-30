import { DummySanctionsList, TestToken } from '@mystikonetwork/contracts-abi';
import { MerkleTree } from '@mystikonetwork/merkle';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toBN, toBuff, toHex, toHexNoPrefix } from '@mystikonetwork/utils';
import { ZKProof } from '@mystikonetwork/zkp';
import BN from 'bn.js';
import { expect } from 'chai';
import { ethers } from 'ethers';
import { CommitmentInfo } from './commitment';
import { getBalance } from '../util/common';

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
  programFile: string,
  abiFile: string,
  provingKeyFile: string,
): Promise<{ proof: ZKProof; outCommitments: CommitmentOutput[] }> {
  const commitments = commitmentInfo.commitments.slice(0, includedCount);
  const merkleTree = new MerkleTree(
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
      programFile,
      abiFile,
      provingKeyFile,
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
) {
  return [
    [proof.proof.a, proof.proof.b, proof.proof.c],
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
  ];
}

export function testTransact(
  contractName: string,
  protocol: MystikoProtocolV2,
  commitmentPoolContract: any,
  transactVerifier: any,
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
  testToken: TestToken | undefined = undefined,
  isLoop: boolean = true,
) {
  const numInputs = inCommitmentsIndices.length;
  const numOutputs = outAmounts.length;
  const publicRecipientAddress = '0x2Bd6FBfDA256cebAC13931bc3E91F6e0f59A5e23';
  const relayerAddress = '0xc9192277ea18ff49618E412197C9c9eaCF43A5e3';
  const signatureKeys = generateSignatureKeys();
  let recipientBalance: BN;
  let relayerBalance: BN;
  let proof: ZKProof;
  const outCommitments: CommitmentOutput[] = [];
  let outEncryptedNotes: Buffer[];
  let signature: string;
  let txReceipt: any;
  const events: ethers.utils.LogDescription[] = [];

  describe(`Test ${contractName} transaction${numInputs}x${numOutputs} operations`, () => {
    before(async () => {
      await commitmentPoolContract.enableTransactVerifier(numInputs, numOutputs, transactVerifier.address);
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
      recipientBalance = await getBalance(publicRecipientAddress, testToken);
      relayerBalance = await getBalance(relayerAddress, testToken);
    });

    it('should transact successfully', async () => {
      await commitmentPoolContract.toggleSanctionCheck(true);

      expect(await protocol.zkVerify(proof, vkeyFile)).to.equal(true);
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
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

    it('should have correct balance', async () => {
      const newRecipientBalance = await getBalance(publicRecipientAddress, testToken);
      const newRelayerBalance = await getBalance(relayerAddress, testToken);
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
  protocol: MystikoProtocolV2,
  commitmentPoolContract: any,
  sanctionList: DummySanctionsList,
  transactVerifier: any,
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
  testToken: TestToken | undefined = undefined,
) {
  const numInputs = inCommitmentsIndices.length;
  const numOutputs = outAmounts.length;
  const publicRecipientAddress = '0x2Bd6FBfDA256cebAC13931bc3E91F6e0f59A5e23';
  const relayerAddress = '0xc9192277ea18ff49618E412197C9c9eaCF43A5e3';
  let recipientBalance: BN;
  let relayerBalance: BN;
  const signatureKeys = generateSignatureKeys();
  let proof: ZKProof;
  let outCommitments: CommitmentOutput[];
  let outEncryptedNotes: Buffer[];
  let signature: string;
  describe(`Test ${contractName} transaction${numInputs}x${numOutputs} operations revert`, () => {
    before(async () => {
      await commitmentPoolContract.enableTransactVerifier(numInputs, numOutputs, transactVerifier.address);
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

      recipientBalance = await getBalance(publicRecipientAddress, testToken);
      relayerBalance = await getBalance(relayerAddress, testToken);
    });

    it('should revert when recipient in sanction list', async () => {
      await sanctionList.addToSanctionsList(publicRecipientAddress);
      const request = buildRequest(
        numInputs,
        numOutputs,
        proof,
        publicRecipientAddress,
        relayerAddress,
        outEncryptedNotes,
      );

      await expect(commitmentPoolContract.transact(request, signature)).to.be.revertedWith(
        'sanctioned address',
      );
      await sanctionList.removeToSanctionsList(publicRecipientAddress);
    });

    it('should have correct balance', async () => {
      const newRecipientBalance = await getBalance(publicRecipientAddress, testToken);
      const newRelayerBalance = await getBalance(relayerAddress, testToken);
      expect(newRecipientBalance.toString()).to.equal(recipientBalance.toString());
      expect(newRelayerBalance.toString()).to.equal(relayerBalance.toString());
    });
  });
}
