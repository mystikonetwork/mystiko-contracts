import { expect } from 'chai';
// import { MerkleTree } from '@mystikonetwork/utils';
import { MerkleTreeHeight, MinRollupFee, RootHistoryLength } from '../util/constants';

export function testLoopConstructor(contractName: string, mystikoContract: any, minAmount: string) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minAmount correctly', async () => {
      expect(await mystikoContract.getMinAmount()).to.equal(minAmount);
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
    });
    it('should initialize sanction check disabled correctly', async () => {
      expect(await mystikoContract.isSanctionCheckDisabled()).to.equal(false);
    });
    it('should initialize sanction address correctly', async () => {
      expect(await mystikoContract.getSanctionsContract()).to.not.equal('');
    });
    it('should initialize bridge type correctly', async () => {
      expect(await mystikoContract.bridgeType()).to.equal('loop');
    });

    if (contractName === 'MystikoV2LoopERC20') {
      it('should initialize erc20 token correctly', async () => {
        expect(await mystikoContract.assetType()).to.equal('erc20');
        expect(await mystikoContract.assetName()).to.equal('Mystiko Test Token');
        expect(await mystikoContract.assetSymbol()).to.equal('MTT');
        expect(await mystikoContract.assetDecimals()).to.equal(18);
      });
    } else {
      it('should initialize main token correctly', async () => {
        expect(await mystikoContract.assetType()).to.equal('main');
      });
    }
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
    it('should initialize bridge type correctly', async () => {
      if (contractName === 'MystikoV2TBridgeMain' || contractName === 'MystikoV2TBridgeERC20') {
        expect(await mystikoContract.bridgeType()).to.equal('tbridge');
      } else if (contractName === 'MystikoV2CelerMain' || contractName === 'MystikoV2CelerERC20') {
        expect(await mystikoContract.bridgeType()).to.equal('celer');
      }
    });
  });
}

export function testCommitmentPoolConstructor(
  contractName: string,
  mystikoContract: any,
  { treeHeight = MerkleTreeHeight, rootHistoryLength = RootHistoryLength, minRollupFee = MinRollupFee },
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minRollupFee correctly', async () => {
      expect(await mystikoContract.getMinRollupFee()).to.equal(minRollupFee);
    });
    it('should initialize commitmentQueue related resources correctly', async () => {
      expect((await mystikoContract.getCommitmentIncludedCount()).toNumber()).to.equal(0);
    });
    it('should initialize tree related resources correctly', async () => {
      // const defaultZero = MerkleTree.calcDefaultZeroElement();
      // const zeros = MerkleTree.calcZeros(defaultZero, treeHeight);
      expect((await mystikoContract.getTreeCapacity()).toNumber()).to.equal(2 ** treeHeight);
      // expect((await mystikoContract.rootHistory(0)).toString()).to.equal(zeros[treeHeight].toString());
      expect(await mystikoContract.getRootHistoryLength()).to.equal(rootHistoryLength);
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.equal(false);
      expect(await mystikoContract.isRollupWhitelistDisabled()).to.equal(false);
    });
  });
}
