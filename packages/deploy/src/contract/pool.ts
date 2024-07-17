import { CommitmentPoolMain__factory, CommitmentPoolERC20__factory } from '@mystikonetwork/contracts-abi';
import { checkNonceExpect } from '../common/utils';
import { ChainConfig } from '../config/chain';
import { ChainTokenConfig } from '../config/chainToken';
import { OperatorConfig } from '../config/operator';
import { PoolDeployConfig } from '../config/bridgePool';
import { MerkleTreeHeight, MystikoDevelopment } from '../common/constant';
import { BridgeConfig } from '../config/bridge';
import { saveConfig } from '../config/config';

let CommitmentPoolMain: CommitmentPoolMain__factory;
let CommitmentPoolERC20: CommitmentPoolERC20__factory;

let ethers: any;

export async function initPoolContractFactory(eth: any) {
  ethers = eth;
  CommitmentPoolMain = await ethers.getContractFactory('CommitmentPoolMain');
  CommitmentPoolERC20 = await ethers.getContractFactory('CommitmentPoolERC20');
}

export function getMystikoPoolContract(bErc20: boolean) {
  let coreContract: any;
  if (bErc20) {
    coreContract = CommitmentPoolERC20;
  } else {
    coreContract = CommitmentPoolMain;
  }

  return coreContract;
}

export function poolContractInstance(erc20: boolean, addr: string | undefined): Promise<any> {
  const PoolContractFactory = getMystikoPoolContract(erc20);
  return Promise.resolve(PoolContractFactory.attach(addr));
}

async function deployCommitmentPoolContract(
  commitmentPoolCfg: PoolDeployConfig,
  chainCfg: ChainConfig,
  chainTokenCfg: ChainTokenConfig,
) {
  let pool: any;
  const poolCfg = commitmentPoolCfg;
  const PoolContractFactory = getMystikoPoolContract(chainTokenCfg.erc20);

  const nonce = await checkNonceExpect(ethers, poolCfg.nonce);

  console.log('deploy Mystiko commitment pool contract');
  if (chainTokenCfg.erc20) {
    pool = await PoolContractFactory.deploy(
      MerkleTreeHeight,
      chainTokenCfg.minRollupFee,
      chainTokenCfg.address,
      chainCfg.settingsCenter,
    );
  } else {
    pool = await PoolContractFactory.deploy(
      MerkleTreeHeight,
      chainTokenCfg.minRollupFee,
      chainCfg.settingsCenter,
    );
  }
  await pool.deployed();

  const syncStart = await ethers.provider.getBlockNumber();
  console.log('commitmentPool address ', pool.address);
  poolCfg.address = pool.address;
  poolCfg.syncStart = syncStart;
  poolCfg.nonce = nonce;

  return pool.address;
}

export async function deployCommitmentPool(
  c: any,
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  chainCfg: ChainConfig,
  chainTokenCfg: ChainTokenConfig,
  inPoolCfg: PoolDeployConfig | undefined,
  operatorCfg: OperatorConfig,
  override: string,
) {
  let poolCfg = inPoolCfg;
  if (poolCfg === undefined) {
    poolCfg = bridgeCfg.addCommitmentPoolConfig(chainCfg.network, chainTokenCfg.assetSymbol, '', 0);
  }

  if (override === 'true' || poolCfg.address === '') {
    poolCfg.reset();

    if (mystikoNetwork === MystikoDevelopment) {
      poolCfg.nonce = undefined;
    }
  }

  if (poolCfg.address !== '') {
    return poolCfg;
  }

  console.log('deploy commitment pool');
  await deployCommitmentPoolContract(poolCfg, chainCfg, chainTokenCfg);

  saveConfig(c.mystikoNetwork, c.cfg);
  return poolCfg;
}
