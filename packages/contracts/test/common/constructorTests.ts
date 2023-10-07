import { expect } from 'chai';
import { MerkleTreeHeight, MinRollupFee } from '../util/constants';

export function testLoopConstructor(
  contractName: string,
  mystikoContract: any,
  poolContract: any,
  minAmount: string,
  maxAmount: string,
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minAmount correctly', async () => {
      expect(await mystikoContract.getMinAmount()).to.equal(minAmount);
    });
    it('should initialize maxAmount correctly', async () => {
      expect(await mystikoContract.getMaxAmount()).to.equal(maxAmount);
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
    });
    it('should initialize sanction check disabled correctly', async () => {
      expect(await mystikoContract.sanctionsCheck()).to.equal(true);
    });
    it('should initialize sanction address correctly', async () => {
      expect(await mystikoContract.sanctionsList()).to.not.equal('');
    });
    it('should initialize bridge type correctly', async () => {
      expect(await mystikoContract.bridgeType()).to.equal('loop');
    });
    it('should initialize associated commitment pool correctly', async () => {
      expect(await mystikoContract.getAssociatedCommitmentPool()).to.equal(poolContract.address);
    });
    it('should enable sanctions check success', async () => {
      expect(await mystikoContract.enableSanctionsCheck());
    });

    if (contractName === 'MystikoV2LoopERC20') {
      it('should initialize erc20 token correctly', async () => {
        expect(await mystikoContract.assetType()).to.equal(0);
        expect(await mystikoContract.assetName()).to.equal('Mystiko Test Token');
        expect(await mystikoContract.assetSymbol()).to.equal('MTT');
        expect(await mystikoContract.assetDecimals()).to.equal(18);
      });
    } else {
      it('should initialize main token correctly', async () => {
        expect(await mystikoContract.assetType()).to.equal(1);
      });
    }
  });
}

export function testBridgeConstructor(
  contractName: string,
  mystikoContract: any,
  poolContract: any,
  minAmount: string,
  maxAmount: string,
  minBridgeFee: string,
  minExecutorFee: string,
  peerMinRoolupFee: string,
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minAmount correctly', async () => {
      expect(await mystikoContract.getMinAmount()).to.equal(minAmount);
    });
    it('should initialize maxAmount correctly', async () => {
      expect(await mystikoContract.getMaxAmount()).to.equal(maxAmount);
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
    it('should initialize associated commitment pool correctly', async () => {
      expect(await mystikoContract.getAssociatedCommitmentPool()).to.equal(poolContract.address);
    });
    it('should enable sanctions check success', async () => {
      expect(await mystikoContract.enableSanctionsCheck());
    });

    it('should initialize bridge type correctly', async () => {
      if (contractName === 'MystikoV2TBridgeMain' || contractName === 'MystikoV2TBridgeERC20') {
        expect(await mystikoContract.bridgeType()).to.equal('tbridge');
      } else if (contractName === 'MystikoV2CelerMain' || contractName === 'MystikoV2CelerERC20') {
        expect(await mystikoContract.bridgeType()).to.equal('celer');
      } else if (contractName === 'MystikoV2LayerZeroMain' || contractName === 'MystikoV2LayerZeroERC20') {
        expect(await mystikoContract.bridgeType()).to.equal('layerZero');
      } else if (contractName === 'MystikoV2AxelarMain' || contractName === 'MystikoV2AxelarERC20') {
        expect(await mystikoContract.bridgeType()).to.equal('axelar');
      }
    });
  });
}

export function testCommitmentPoolConstructor(
  contractName: string,
  mystikoContract: any,
  { treeHeight = MerkleTreeHeight, minRollupFee = MinRollupFee },
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minRollupFee correctly', async () => {
      expect(await mystikoContract.getMinRollupFee()).to.equal(minRollupFee);
    });
    it('should initialize commitment included count correctly', async () => {
      expect((await mystikoContract.getCommitmentQueuedCount()).toNumber()).to.equal(0);
    });
    it('should initialize commitment queue size correctly', async () => {
      expect((await mystikoContract.getCommitmentQueueSize()).toNumber()).to.equal(0);
    });
    it('should get queued commitments correctly', async () => {
      expect((await mystikoContract.getQueuedCommitments()).length).to.equal(0);
    });
    it('should initialize commitment count correctly', async () => {
      expect((await mystikoContract.getCommitmentCount()).toNumber()).to.equal(0);
    });
    it('should initialize commitment spent serial numbers count correctly', async () => {
      expect((await mystikoContract.getNullifierCount()).toNumber()).to.equal(0);
    });
    it('should initialize tree related resources correctly', async () => {
      // const defaultZero = MerkleTree.calcDefaultZeroElement();
      // const zeros = MerkleTree.calcZeros(defaultZero, treeHeight);
      expect((await mystikoContract.getTreeCapacity()).toNumber()).to.equal(2 ** treeHeight);
      // expect((await mystikoContract.rootHistory(0)).toString()).to.equal(zeros[treeHeight].toString());
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.equal(false);
      expect(await mystikoContract.isRollupWhitelistDisabled()).to.equal(false);
    });
    it('should enable sanctions check success', async () => {
      expect(await mystikoContract.enableSanctionsCheck());
    });
  });
}
