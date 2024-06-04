import { expect } from 'chai';
import { MerkleTreeHeight, PeerMinRollupFee } from '../util/constants';

export function testLoopConstructor(
  contractName: string,
  depositContract: any,
  poolContract: any,
  minAmount: string,
  maxAmount: string,
  mockTokenAddress: string,
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minAmount correctly', async () => {
      expect(await depositContract.getMinAmount()).to.equal(minAmount);
    });
    it('should initialize maxAmount correctly', async () => {
      expect(await depositContract.getMaxAmount()).to.equal(maxAmount);
    });
    it('should initialize admin related resources correctly', async () => {
      expect(await depositContract.isDepositsDisabled()).to.equal(false);
    });
    it('should initialize bridge type correctly', async () => {
      expect(await depositContract.bridgeType()).to.equal('loop');
    });

    if (contractName === 'MystikoV2LoopERC20') {
      it('should initialize erc20 token correctly', async () => {
        expect(await depositContract.assetType()).to.equal(0);
        expect(await depositContract.assetName()).to.equal('Mystiko Token');
        expect(await depositContract.assetSymbol()).to.equal('XZK');
        expect(await depositContract.assetDecimals()).to.equal(18);
        expect(await depositContract.assetAddress()).to.equal(mockTokenAddress);
      });
    } else {
      it('should initialize main token correctly', async () => {
        expect(await depositContract.assetType()).to.equal(1);
        expect(await depositContract.assetAddress()).to.equal('0x0000000000000000000000000000000000000000');
      });
    }
  });
}

export function testBridgeConstructor(
  contractName: string,
  depositContract: any,
  poolContract: any,
  minAmount: string,
  maxAmount: string,
  minBridgeFee: string,
  minExecutorFee: string,
  peerMinRoolupFee: string,
  peerChainId: number,
  peerContractAddress: string,
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minAmount correctly', async () => {
      expect(await depositContract.getMinAmount()).to.equal(minAmount);
    });
    it('should initialize maxAmount correctly', async () => {
      expect(await depositContract.getMaxAmount()).to.equal(maxAmount);
    });
    it('should initialize minBridgeFee correctly', async () => {
      expect(await depositContract.getMinBridgeFee()).to.equal(minBridgeFee);
    });
    it('should initialize peerMinExecutorFee correctly', async () => {
      expect(await depositContract.getPeerMinExecutorFee()).to.equal(minExecutorFee);
    });
    it('should initialize peerMinRollupFee correctly', async () => {
      expect(await depositContract.getPeerMinRollupFee()).to.equal(peerMinRoolupFee);
    });
    it('should initialize deposit disabled correctly', async () => {
      expect(await depositContract.isDepositsDisabled()).to.equal(false);
    });
    it('should initialize peer chain and contract correctly', async () => {
      expect(await depositContract.peerChainId()).to.equal(peerChainId);
      expect(await depositContract.peerContract()).to.equal(peerContractAddress);
      expect(await depositContract.isPeerContractSet()).to.equal(true);
    });

    it('should initialize bridge type correctly', async () => {
      if (contractName === 'MystikoV2TBridgeMain' || contractName === 'MystikoV2TBridgeERC20') {
        expect(await depositContract.bridgeType()).to.equal('tbridge');
      } else if (contractName === 'MystikoV2CelerMain' || contractName === 'MystikoV2CelerERC20') {
        expect(await depositContract.bridgeType()).to.equal('celer');
      } else if (contractName === 'MystikoV2LayerZeroMain' || contractName === 'MystikoV2LayerZeroERC20') {
        expect(await depositContract.bridgeType()).to.equal('layerZero');
      } else if (contractName === 'MystikoV2AxelarMain' || contractName === 'MystikoV2AxelarERC20') {
        expect(await depositContract.bridgeType()).to.equal('axelar');
      }
    });
  });
}

export function testCommitmentPoolConstructor(
  contractName: string,
  depositContract: any,
  { treeHeight = MerkleTreeHeight, minRollupFee = PeerMinRollupFee },
) {
  describe(`Test ${contractName} constructor`, () => {
    it('should initialize minRollupFee correctly', async () => {
      expect(await depositContract.getMinRollupFee()).to.equal(minRollupFee);
    });
    it('should initialize commitment included count correctly', async () => {
      expect((await depositContract.getCommitmentIncludedCount()).toNumber()).to.equal(0);
    });
    it('should initialize commitment queue size correctly', async () => {
      expect((await depositContract.getCommitmentQueuedCount()).toNumber()).to.equal(0);
    });
    it('should get queued commitments correctly', async () => {
      expect((await depositContract.getQueuedCommitments()).length).to.equal(0);
    });
    it('should initialize commitment count correctly', async () => {
      expect((await depositContract.getCommitmentCount()).toNumber()).to.equal(0);
    });
    it('should initialize commitment spent serial numbers count correctly', async () => {
      expect((await depositContract.getNullifierCount()).toNumber()).to.equal(0);
    });
    it('should initialize tree related resources correctly', async () => {
      // const defaultZero = MerkleTree.calcDefaultZeroElement();
      // const zeros = MerkleTree.calcZeros(defaultZero, treeHeight);
      expect((await depositContract.getTreeCapacity()).toNumber()).to.equal(2 ** treeHeight);
      // expect((await depositContract.rootHistory(0)).toString()).to.equal(zeros[treeHeight].toString());
    });
  });
}
