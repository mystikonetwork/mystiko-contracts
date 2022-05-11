import { expect } from 'chai';
import { MerkleTree } from '@mystikonetwork/utils';

export function testLoopConstructor(contractName: string, mystikoContract: any, minAmount: string) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minAmount correctly', async () => {
      expect(await mystikoContract.getMinAmount()).to.equal(minAmount);
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
    });
  });
}

export function testBridgeConstructor(
  contractName: string,
  mystikoContract: any,
  minAmount: string,
  minBridgeFee: string,
  minExecutorFee: string,
  peerMinRoolupFee: string,
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minAmount correctly', async () => {
      expect(await mystikoContract.getMinAmount()).to.equal(minAmount);
    });
    it('should initialize minBridgeFee correctly', async () => {
      expect(await mystikoContract.getMinBridgeFee()).to.equal(minBridgeFee);
    });
    it('should initialize minExecutorFee correctly', async () => {
      expect(await mystikoContract.getMinExecutorFee()).to.equal(minExecutorFee);
    });
    it('should initialize peerMinExecutorFee correctly', async () => {
      expect(await mystikoContract.getPeerMinExecutorFee()).to.equal(minExecutorFee);
    });
    it('should initialize peerMinRollupFee correctly', async () => {
      expect(await mystikoContract.getPeerMinRollupFee()).to.equal(peerMinRoolupFee);
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
    });
  });
}

export function testCommitmentPoolConstructor(
  contractName: string,
  mystikoContract: any,
  treeHeight: number,
  rootHistoryLength: number,
  minRollupFee: number,
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minRollupFee correctly', async () => {
      expect(await mystikoContract.minRollupFee()).to.equal(minRollupFee);
    });
    it('should initialize commitmentQueue related resources correctly', async () => {
      expect((await mystikoContract.commitmentIncludedCount()).toNumber()).to.equal(0);
    });
    it('should initialize tree related resources correctly', async () => {
      const defaultZero = MerkleTree.calcDefaultZeroElement();
      const zeros = MerkleTree.calcZeros(defaultZero, treeHeight);
      expect((await mystikoContract.getTreeCapacity()).toNumber()).to.equal(2 ** treeHeight);
      expect((await mystikoContract.rootHistory(0)).toString()).to.equal(zeros[treeHeight].toString());
      expect(await mystikoContract.rootHistoryLength()).to.equal(rootHistoryLength);
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.equal(false);
      expect(await mystikoContract.isRollupWhitelistDisabled()).to.equal(false);
    });
  });
}
