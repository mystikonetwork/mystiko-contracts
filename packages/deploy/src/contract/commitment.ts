import { CommitmentPoolMain__factory, CommitmentPoolERC20__factory } from '@mystikonetwork/contracts-abi';
import { ChainConfig } from '../config/chain';
import { ChainTokenConfig } from '../config/chainToken';
import { OperatorConfig } from '../config/operator';
import { ContractDeployConfig } from '../config/bridgeDeploy';
import {
  LOGRED,
  MerkleTreeHeight,
  MystikoDevelopment,
  MystikoTestnet,
  RootHistoryLength,
} from '../common/constant';
import { BridgeConfig } from '../config/bridge';

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

async function deployCommitmentPool(
  commitmentPoolCfg: ContractDeployConfig,
  chainCfg: ChainConfig,
  chainTokenCfg: ChainTokenConfig,
) {
  let pool: any;
  const poolCfg = commitmentPoolCfg;
  const PoolContractFactory = getMystikoPoolContract(chainTokenCfg.erc20);

  console.log('deploy Mystiko commitment pool contract');
  if (chainTokenCfg.erc20) {
    pool = await PoolContractFactory.deploy(MerkleTreeHeight, RootHistoryLength, chainTokenCfg.address);
  } else {
    pool = await PoolContractFactory.deploy(MerkleTreeHeight, RootHistoryLength);
  }
  await pool.deployed();

  await pool.setMinRollupFee(chainTokenCfg.minRollupFee);
  await pool.enableRollupVerifier(1, chainCfg.rollup1Address);
  await pool.enableRollupVerifier(4, chainCfg.rollup4Address);
  await pool.enableRollupVerifier(16, chainCfg.rollup16Address);
  await pool.enableTransactVerifier(1, 0, chainCfg.transaction1x0VerifierAddress);
  await pool.enableTransactVerifier(1, 1, chainCfg.transaction1x1VerifierAddress);
  await pool.enableTransactVerifier(1, 2, chainCfg.transaction1x2VerifierAddress);
  await pool.enableTransactVerifier(2, 0, chainCfg.transaction2x0VerifierAddress);
  await pool.enableTransactVerifier(2, 1, chainCfg.transaction2x1VerifierAddress);
  await pool.enableTransactVerifier(2, 2, chainCfg.transaction2x2VerifierAddress);

  const syncStart = await ethers.provider.getBlockNumber();

  console.log('commitmentPool address is ', pool.address);
  poolCfg.address = pool.address;
  poolCfg.syncStart = syncStart;

  return pool.address;
}

export async function togglePoolSanctionCheck(erc20: boolean, addr: string, check: boolean) {
  console.log('toggle pool sanction check disable ', check);
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const poolContract = await PoolContractFactory.attach(addr);

  try {
    await poolContract.toggleSanctionCheck(check);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function addRollupWhitelist(erc20: boolean, addr: string, rollers: string[]) {
  console.log('add roller whitelist');
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const pool = await PoolContractFactory.attach(addr);

  try {
    const all = [];
    for (let i = 0; i < rollers.length; i += 1) {
      const add = pool.addRollupWhitelist(rollers[i]);
      all.push(add);
    }
    await Promise.all(all);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function addEnqueueWhitelist(erc20: boolean, addr: string, enqueueContractAddress: string) {
  const PoolContractFactory = getMystikoPoolContract(erc20);
  const pool = await PoolContractFactory.attach(addr);
  console.log('add enqueue whitelist');
  try {
    await pool.addEnqueueWhitelist(enqueueContractAddress);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function getOrDeployCommitPool(
  mystikoNetwork: string,
  bridgeCfg: BridgeConfig,
  chainCfg: ChainConfig,
  chainTokenCfg: ChainTokenConfig,
  pairSrcPoolCfg: ContractDeployConfig | undefined,
  operatorCfg: OperatorConfig,
) {
  if (pairSrcPoolCfg === undefined) {
    const newPairPoolCfg = bridgeCfg.addNewPoolDeployConfig(
      chainCfg.network,
      chainTokenCfg.assetSymbol,
      '',
      0,
    );
    console.log('commitment pool not exist, deploy');
    const commitmentPoolAddress = await deployCommitmentPool(newPairPoolCfg, chainCfg, chainTokenCfg);
    await addRollupWhitelist(chainTokenCfg.erc20, commitmentPoolAddress, operatorCfg.rollers);

    if (mystikoNetwork === MystikoTestnet) {
      togglePoolSanctionCheck(chainTokenCfg.erc20, commitmentPoolAddress, true);
    }

    return commitmentPoolAddress;
  }

  if (mystikoNetwork === MystikoDevelopment) {
    const commitmentPoolAddress = await deployCommitmentPool(pairSrcPoolCfg, chainCfg, chainTokenCfg);
    await addRollupWhitelist(chainTokenCfg.erc20, commitmentPoolAddress, operatorCfg.rollers);
    return commitmentPoolAddress;
  }

  return pairSrcPoolCfg.address;
}
