import { LOGRED } from '../common/constant';
import { getMystikoPoolContract } from './pool';

export function poolContractInstance(erc20: boolean, addr: string | undefined): Promise<any> {
  const PoolContractFactory = getMystikoPoolContract(erc20);
  return Promise.resolve(PoolContractFactory.attach(addr));
}

export function poolIncludedCount(poolContract: any): Promise<number> {
  try {
    return poolContract.getCommitmentIncludedCount();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function poolQueuedCount(poolContract: any): Promise<number> {
  try {
    return poolContract.getCommitmentQueuedCount();
  } catch (err: any) {
    console.error(LOGRED, err);
    return Promise.resolve(0);
  }
}

export function poolCommitmentCount(poolContract: any): Promise<number> {
  try {
    return poolContract.getCommitmentCount();
  } catch (err: any) {
    console.error(LOGRED, err);
    return Promise.resolve(0);
  }
}

export function poolQueuedCommitments(poolContract: any): Promise<number> {
  try {
    return poolContract.getQueuedCommitments();
  } catch (err: any) {
    console.error(LOGRED, err);
    return Promise.resolve(0);
  }
}

export function poolIsKnowRoot(poolContract: any, rootHash: string): Promise<boolean> {
  try {
    return poolContract.isKnownRoot(rootHash);
  } catch (err: any) {
    console.error(LOGRED, err);
    return Promise.resolve(false);
  }
}

export function poolNullifierCount(poolContract: any): Promise<number> {
  try {
    return poolContract.getNullifierCount();
  } catch (err: any) {
    console.error(LOGRED, err);
    return Promise.resolve(0);
  }
}

export function poolMinRollupFee(poolContract: any): Promise<number> {
  try {
    return poolContract.getMinRollupFee();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function poolSanctionCheckQuery(poolContract: any): Promise<boolean> {
  try {
    return poolContract.sanctionsCheck();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function poolAllAuditorPublicKeys(poolContract: any): Promise<string[]> {
  try {
    return poolContract.getAllAuditorPublicKeys();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function poolSanctionListQuery(poolContract: any): Promise<string[]> {
  try {
    return poolContract.sanctionsList();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}
