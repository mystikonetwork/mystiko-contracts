import { Wallet } from '@ethersproject/wallet';
import { MockToken } from '@mystikonetwork/contracts-abi';
import { MerkleTree } from '@mystikonetwork/merkle';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { readCompressedFile, readFile, toBN } from '@mystikonetwork/utils';
import { expect } from 'chai';
import { waffle } from 'hardhat';
import { MystikoRollerPool, MystikoBridgeSettings } from '@mystikonetwork/contracts-abi-settings';
import {
  CircuitsPath,
  MerkleTreeHeight,
  MinRollupFee,
  PeerMinRollupFee,
  RollupAccountIndex1,
  RollupAccountIndex2,
} from '../util/constants';

async function generateProof(
  protocol: MystikoProtocolV2,
  commitments: CommitmentOutput[],
  depositContract: any,
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
  const tree = MerkleTree.fromLeaves(oldLeaves, { maxLevels: treeHeight });
  let proof: any;
  if (rollupSize === 1) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      program: await readCompressedFile(CircuitsPath.concat('Rollup1.program.gz')),
      abi: (await readFile(CircuitsPath.concat('Rollup1.program.gz'))).toString(),
      provingKey: await readCompressedFile(CircuitsPath.concat('Rollup1.pkey.gz')),
    });
  } else if (rollupSize === 2) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      program: await readCompressedFile(CircuitsPath.concat('Rollup2.program.gz')),
      abi: (await readFile(CircuitsPath.concat('Rollup2.program.gz'))).toString(),
      provingKey: await readCompressedFile(CircuitsPath.concat('Rollup2.pkey.gz')),
    });
  } else if (rollupSize === 4) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      program: await readCompressedFile(CircuitsPath.concat('Rollup4.program.gz')),
      abi: (await readFile(CircuitsPath.concat('Rollup4.program.gz'))).toString(),
      provingKey: await readCompressedFile(CircuitsPath.concat('Rollup4.pkey.gz')),
    });
  } else if (rollupSize === 8) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      program: await readCompressedFile(CircuitsPath.concat('Rollup8.program.gz')),
      abi: (await readFile(CircuitsPath.concat('Rollup8.program.gz'))).toString(),
      provingKey: await readCompressedFile(CircuitsPath.concat('Rollup8.pkey.gz')),
    });
  } else if (rollupSize === 16) {
    proof = await protocol.zkProveRollup({
      tree,
      newLeaves,
      program: await readCompressedFile(CircuitsPath.concat('Rollup16.program.gz')),
      abi: (await readFile(CircuitsPath.concat('Rollup16.program.gz'))).toString(),
      provingKey: await readCompressedFile(CircuitsPath.concat('Rollup16.pkey.gz')),
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
  mockToken: MockToken,
  settings: MystikoBridgeSettings,
  rollerPool: MystikoRollerPool,
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
      const rollerRole = await rollerPool.ROLLER_ROLE();
      await rollerPool.grantRole(rollerRole, rollupAccount.address);
      await rollerPool.grantRole(rollerRole, rollupAccount2.address);
      proof = await generateProof(
        protocol,
        commitments,
        commitmentPoolContract,
        treeHeight,
        rollupSize,
        includedCount,
      );
    });

    it('should revert when not roller role', async () => {
      await expect(
        commitmentPoolContract
          .connect(accounts[0])
          .rollup([[proof.proofA, proof.proofB, proof.proofC], 1234, proof.newRoot, proof.leafHash]),
      ).to.be.revertedWith('0x2bb7f0d4'); // GovernanceErrors.UnauthorizedRole();
    });

    it('should revert verifier invalid param', async () => {
      const fieldSize = '31888242871839275222246405745257275088548364400416034343698204186575808495617';
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([[proof.proofA, proof.proofB, proof.proofC], `${rollupSize}`, fieldSize, proof.leafHash]),
      ).to.be.revertedWith('0xd2529034'); // revertedWith('InvalidParam()');
    });

    it('should revert invalid rollup Size 0 ', async () => {
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([[proof.proofA, proof.proofB, proof.proofC], 0, proof.newRoot, proof.leafHash]),
      ).to.be.revertedWith('0xa8530bd8'); // RollupSizeTooSmall();
    });

    it('should revert invalid rollup Size 1234', async () => {
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([[proof.proofA, proof.proofB, proof.proofC], 1234, proof.newRoot, proof.leafHash]),
      ).to.be.revertedWith('Invalid("rollupSize")');
    });

    it('should revert invalid rollup Size when disable verifier', async () => {
      await settings.disableRollupVerifier(rollupSize);
      const expectRevertError = `RollupVerifierDisabled(${rollupSize})`;
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([
            [proof.proofA, proof.proofB, proof.proofC],
            `${rollupSize}`,
            proof.newRoot,
            proof.leafHash,
          ]),
      ).to.be.revertedWith(expectRevertError);
      await settings.enableRollupVerifier(rollupSize);
    });

    it('should revert wrong proof', async () => {
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([
            [proof.proofA, proof.proofB, proof.proofA],
            `${rollupSize}`,
            proof.newRoot,
            proof.leafHash,
          ]),
      ).to.be.revertedWith('Invalid("proof")');
    });

    it('should revert wrong newRoot', async () => {
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([
            [proof.proofA, proof.proofB, proof.proofC],
            `${rollupSize}`,
            protocol.randomBigInt().toString(),
            proof.leafHash,
          ]),
      ).to.be.revertedWith('Invalid("proof")');
    });

    it('should revert wrong leaf hash', async () => {
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([
            [proof.proofA, proof.proofB, proof.proofC],
            `${rollupSize}`,
            proof.newRoot,
            protocol.randomBigInt().toString(),
          ]),
      ).to.be.revertedWith('Invalid("leafHash")');
    });

    it('test rollup should rollup successfully', async () => {
      const balanceBefore = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await mockToken.balanceOf(rollupAccount2.address);
      const beforeQueuedSize = (await commitmentPoolContract.getCommitmentQueuedCount()).toNumber();
      const beforeIncludedCount = (await commitmentPoolContract.getCommitmentIncludedCount()).toNumber();
      const beforeCommitmentsCount = (await commitmentPoolContract.getCommitmentCount()).toNumber();

      const gasLimit = await commitmentPoolContract
        .connect(rollupAccount2)
        .estimateGas.rollup([
          [proof.proofA, proof.proofB, proof.proofC],
          `${rollupSize}`,
          proof.newRoot,
          proof.leafHash,
        ]);

      const rollupTx = await commitmentPoolContract
        .connect(rollupAccount2)
        .rollup(
          [[proof.proofA, proof.proofB, proof.proofC], `${rollupSize}`, proof.newRoot, proof.leafHash],
          { gasLimit: gasLimit.mul(120).div(100) },
        );

      const txReceipt = await waffle.provider.getTransactionReceipt(rollupTx.hash);
      const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);

      const balanceAfter = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await mockToken.balanceOf(rollupAccount2.address);

      const totalRollupFee = isMainAsset
        ? balanceAfter.add(totalGasFee).sub(balanceBefore)
        : balanceAfter.sub(balanceBefore);
      const expectRollupFee = toBN(rollupFee).muln(rollupSize).toString();
      expect(totalRollupFee.toString()).to.equal(expectRollupFee.toString());
      expect(await commitmentPoolContract.isKnownRoot(proof.newRoot)).to.equal(true);

      const afterQueuedSize = (await commitmentPoolContract.getCommitmentQueuedCount()).toNumber();
      const afterIncludedCount = (await commitmentPoolContract.getCommitmentIncludedCount()).toNumber();
      const afterCommitmentsCount = (await commitmentPoolContract.getCommitmentCount()).toNumber();

      expect(beforeQueuedSize).to.equal(afterQueuedSize + rollupSize);
      expect(afterIncludedCount).to.equal(beforeIncludedCount + rollupSize);
      expect(beforeCommitmentsCount).to.equal(afterCommitmentsCount);
      expect((await commitmentPoolContract.getQueuedCommitments()).length).to.equal(afterQueuedSize);
    });

    it('should revert known root', async () => {
      await expect(
        commitmentPoolContract
          .connect(rollupAccount)
          .rollup([[proof.proofA, proof.proofB, proof.proofC], 1, proof.newRoot, proof.leafHash]),
      ).to.be.revertedWith('NewRootIsDuplicated()');
    });
  });
}

export function rollup(
  contractName: string,
  protocol: MystikoProtocolV2,
  commitmentPoolContract: any,
  mockToken: MockToken,
  rollerPool: MystikoRollerPool,
  accounts: Wallet[],
  commitments: any[],
  {
    isMainAsset = true,
    rollupFee = PeerMinRollupFee,
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
      const rollerRole = await rollerPool.ROLLER_ROLE();
      await rollerPool.grantRole(rollerRole, rollupAccount.address);
      await rollerPool.grantRole(rollerRole, rollupAccount2.address);
      proof = await generateProof(
        protocol,
        commitments,
        commitmentPoolContract,
        treeHeight,
        rollupSize,
        includedCount,
      );
    });

    it('rollup should rollup successfully', async () => {
      const balanceBefore = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await mockToken.balanceOf(rollupAccount2.address);

      const rollupTx = await commitmentPoolContract
        .connect(rollupAccount2)
        .rollup([[proof.proofA, proof.proofB, proof.proofC], `${rollupSize}`, proof.newRoot, proof.leafHash]);

      const txReceipt = await waffle.provider.getTransactionReceipt(rollupTx.hash);
      const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);

      const balanceAfter = isMainAsset
        ? await waffle.provider.getBalance(rollupAccount2.address)
        : await mockToken.balanceOf(rollupAccount2.address);

      const totalRollupFee = isMainAsset
        ? balanceAfter.add(totalGasFee).sub(balanceBefore)
        : balanceAfter.sub(balanceBefore);
      const expectRollupFee = toBN(rollupFee).muln(rollupSize).toString();
      expect(totalRollupFee.toString()).to.equal(expectRollupFee.toString());
      expect(await commitmentPoolContract.isKnownRoot(proof.newRoot)).to.equal(true);
    });
  });
}
