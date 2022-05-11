import { expect } from 'chai';
import { waffle } from 'hardhat';
import { Wallet } from '@ethersproject/wallet';
import { TestToken } from '@mystikonetwork/contracts-abi';
import { CommitmentV2, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toBN, MerkleTree } from '@mystikonetwork/utils';
import { MerkleTreeHeight, MinRollupFee, RollupAccountIndex1, RollupAccountIndex2 } from '../util/constants';

async function enableRollupVerifier(
  mystikoContract: any,
  rollupVerifierContract: any,
  rollupSize: number,
  rollupAccount1: Wallet,
  rollupAccount2: Wallet,
) {
  await mystikoContract.enableRollupVerifier(rollupSize, rollupVerifierContract.address);
  await mystikoContract.addRollupWhitelist(rollupAccount1.address);
  await mystikoContract.addRollupWhitelist(rollupAccount2.address);
}

async function generateProof(
  protocol: MystikoProtocolV2,
  commitments: CommitmentV2[],
  mystikoContract: any,
  treeHeight: number,
  rollupSize: number,
  includedCount: number,
) {
  const oldLeaves = [];
  const newLeaves = [];
  let i = 0;
  for (; i < includedCount; i += 1) {
    oldLeaves.push(commitments[i].commitmentHash);
  }
  expect(includedCount + rollupSize).lte(commitments.length);
  for (; i < includedCount + rollupSize; i += 1) {
    newLeaves.push(commitments[i].commitmentHash);
  }
  const tree = new MerkleTree(oldLeaves, { maxLevels: treeHeight });
  let proof: any;
  if (rollupSize === 1) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      programFile: 'circuits/dist/zokrates/dev/Rollup1.program.gz',
      abiFile: 'circuits/dist/zokrates/dev/Rollup1.abi.json',
      provingKeyFile: 'circuits/dist/zokrates/dev/Rollup1.pkey.gz',
    });
  } else if (rollupSize === 4) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      programFile: 'circuits/dist/zokrates/dev/Rollup4.program.gz',
      abiFile: 'circuits/dist/zokrates/dev/Rollup4.abi.json',
      provingKeyFile: 'circuits/dist/zokrates/dev/Rollup4.pkey.gz',
    });
  } else if (rollupSize === 16) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      programFile: 'circuits/dist/zokrates/dev/Rollup16.program.gz',
      abiFile: 'circuits/dist/zokrates/dev/Rollup16.abi.json',
      provingKeyFile: 'circuits/dist/zokrates/dev/Rollup16.pkey.gz',
    });
  }
  expect(proof).to.not.equal(undefined);
  const proofA = proof.proof.a;
  const proofB = proof.proof.b;
  const proofC = proof.proof.c;
  const newRoot = proof.inputs[1];
  const leafHash = proof.inputs[2];
  return {
    proofA,
    proofB,
    proofC,
    newRoot,
    leafHash,
  };
}

export function testRollup(
  contractName: string,
  protocol: MystikoProtocolV2,
  commitmentPoolContract: any,
  rollupVerifierContract: any,
  testTokenContract: TestToken,
  accounts: Wallet[],
  commitments: any[],
  {
    isMainAsset = true,
    rollupFee = MinRollupFee,
    rollupSize = 4,
    includedCount = 0,
    treeHeight = MerkleTreeHeight,
  },
) {
  let proof: any;
  const rollupAccount = accounts[RollupAccountIndex1];
  const rollupAccount2 = accounts[RollupAccountIndex2];

  describe(`Test ${contractName} rollup${rollupSize} operation`, () => {
    before(async () => {
      await enableRollupVerifier(
        commitmentPoolContract,
        rollupVerifierContract,
        rollupSize,
        rollupAccount,
        rollupAccount2,
      );

      proof = await generateProof(
        protocol,
        commitments,
        commitmentPoolContract,
        treeHeight,
        rollupSize,
        includedCount,
      );
    });

    it('should revert unsupported rollup Size', () => {
      expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([[proof.proofA, proof.proofB, proof.proofC], 1234, proof.newRoot, proof.leafHash]),
      ).to.be.revertedWith('invalid rollupSize');
    });

    it('should revert wrong leaf hash', () => {
      expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([
            [proof.proofA, proof.proofB, proof.proofC],
            `${rollupSize}`,
            proof.newRoot,
            protocol.randomBigInt().toString(),
          ]),
      ).to.be.revertedWith('invalid leafHash');
    });

    it('should revert wrong proof', () => {
      expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([
            [proof.proofA, proof.proofB, proof.proofC],
            `${rollupSize}`,
            protocol.randomBigInt().toString(),
            proof.leafHash,
          ]),
      ).to.be.revertedWith('invalid proof');
    });

    it('should rollup successfully', async () => {
      const balanceBefore = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await testTokenContract.balanceOf(rollupAccount2.address);

      const rollupTx = await commitmentPoolContract
        .connect(rollupAccount2)
        .rollup([[proof.proofA, proof.proofB, proof.proofC], `${rollupSize}`, proof.newRoot, proof.leafHash]);

      const txReceipt = await waffle.provider.getTransactionReceipt(rollupTx.hash);
      const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);

      const balanceAfter = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await testTokenContract.balanceOf(rollupAccount2.address);

      const totalRollupFee = isMainAsset
        ? balanceAfter.add(totalGasFee).sub(balanceBefore)
        : balanceAfter.sub(balanceBefore);
      const expectRollupFee = toBN(rollupFee).muln(rollupSize).toString();
      expect(totalRollupFee.toString()).to.equal(expectRollupFee.toString());
      expect(await commitmentPoolContract.isKnownRoot(proof.newRoot)).to.equal(true);
    });

    it('should revert known root', async () => {
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([
            [proof.proofA, proof.proofB, proof.proofC],
            `${rollupSize}`,
            proof.newRoot,
            proof.leafHash,
          ]),
      ).to.be.revertedWith('newRoot is duplicated');
    });
  });
}

export function rollup(
  contractName: string,
  protocol: MystikoProtocolV2,
  commitmentPoolContract: any,
  rollupVerifierContract: any,
  testTokenContract: TestToken,
  accounts: Wallet[],
  commitments: any[],
  {
    isMainAsset = true,
    rollupFee = MinRollupFee,
    rollupSize = 4,
    includedCount = 0,
    treeHeight = MerkleTreeHeight,
  },
) {
  let proof: any;
  const rollupAccount = accounts[RollupAccountIndex1];
  const rollupAccount2 = accounts[RollupAccountIndex2];

  describe(`${contractName} rollup${rollupSize} operation`, () => {
    before(async () => {
      await enableRollupVerifier(
        commitmentPoolContract,
        rollupVerifierContract,
        rollupSize,
        rollupAccount,
        rollupAccount2,
      );

      proof = await generateProof(
        protocol,
        commitments,
        commitmentPoolContract,
        treeHeight,
        rollupSize,
        includedCount,
      );
    });

    it('should rollup successfully', async () => {
      const balanceBefore = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await testTokenContract.balanceOf(rollupAccount2.address);

      const rollupTx = await commitmentPoolContract
        .connect(rollupAccount2)
        .rollup([[proof.proofA, proof.proofB, proof.proofC], `${rollupSize}`, proof.newRoot, proof.leafHash]);

      const txReceipt = await waffle.provider.getTransactionReceipt(rollupTx.hash);
      const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);

      const balanceAfter = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await testTokenContract.balanceOf(rollupAccount2.address);

      const totalRollupFee = isMainAsset
        ? balanceAfter.add(totalGasFee).sub(balanceBefore)
        : balanceAfter.sub(balanceBefore);
      const expectRollupFee = toBN(rollupFee).muln(rollupSize).toString();
      expect(totalRollupFee.toString()).to.equal(expectRollupFee.toString());
      expect(await commitmentPoolContract.isKnownRoot(proof.newRoot)).to.equal(true);
    });
  });
}
