import { getMystikoDeployContract } from './depsit';
import { LOGRED } from '../common/constant';

export function depositContractInstance(
  bridgeName: string,
  erc20: boolean,
  addr: string | undefined,
): Promise<any> {
  const DepositContractFactory = getMystikoDeployContract(bridgeName, erc20);
  return Promise.resolve(DepositContractFactory.attach(addr));
}

export function depositMinAmount(depositContract: any): Promise<number> {
  try {
    return depositContract.getMinAmount();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositMaxAmount(depositContract: any): Promise<number> {
  try {
    return depositContract.getMaxAmount();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositMinExecutorFee(depositContract: any): Promise<number> {
  try {
    return depositContract.getMinExecutorFee();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositPeerMinRollupFee(depositContract: any): Promise<number> {
  try {
    return depositContract.getPeerMinRollupFee();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositPeerMinExecutorFee(depositContract: any): Promise<number> {
  try {
    return depositContract.getPeerMinExecutorFee();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositMinBridgeFee(depositContract: any): Promise<number> {
  try {
    return depositContract.getMinBridgeFee();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositSanctionCheckQuery(depositContract: any): Promise<boolean> {
  try {
    return depositContract.sanctionsCheck();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositSanctionListQuery(depositContract: any): Promise<string[]> {
  try {
    return depositContract.sanctionsList();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function depositAssociatedCommitmentPool(depositContract: any): Promise<string> {
  try {
    return depositContract.getAssociatedCommitmentPool();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}
