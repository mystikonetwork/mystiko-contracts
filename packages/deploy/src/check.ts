// deploy mystiko contract and config contract
import { LOGRED } from './common/constant';
import { loadConfig } from './config/config';
import {
  depositAssociatedCommitmentPool,
  depositContractInstance,
  depositMaxAmount,
  depositMinAmount,
  depositMinExecutorFee,
  depositPeerMinExecutorFee,
  depositPeerMinRollupFee,
  depositSanctionCheckQuery,
  isDepositsDisabled,
} from './contract/depsitQuery';
import {
  poolAllAuditorPublicKeys,
  poolContractInstance,
  poolMinRollupFee,
  poolSanctionCheckQuery,
} from './contract/poolQuery';

export async function checkPool(c: any) {
  const poolContract = await poolContractInstance(c.srcTokenCfg.erc20, c.srcPoolCfg?.address);

  const minRollupFee = await poolMinRollupFee(poolContract);
  if (minRollupFee.toString() !== c.srcPoolCfg?.minRollupFee) {
    console.log(LOGRED, 'minRollupFee mismatch ', minRollupFee, c.srcPoolCfg?.minRollupFee);
  }

  const poolSactionCheck = await poolSanctionCheckQuery(poolContract);
  if (poolSactionCheck && c.srcPoolCfg?.sanctionCheck === false) {
    console.log(LOGRED, 'pool saction check mismatch ', poolSactionCheck, c.srcPoolCfg?.sanctionCheck);
  }

  const auditorKeys = await poolAllAuditorPublicKeys(poolContract);
  if (auditorKeys.length < c.srcPoolCfg?.auditorsCount) {
    console.log(
      LOGRED,
      'pool auditor public address mismatch ',
      auditorKeys,
      c.srcPoolCfg?.auditorsByAddress,
    );
  }

  for (let i = 0; i < auditorKeys.length; i += 1) {
    if (auditorKeys[i].toString() !== '') {
      if (!c.srcPoolCfg?.isInAuditors(auditorKeys[i].toString())) {
        console.log(
          LOGRED,
          'pool auditor public address mismatch ',
          auditorKeys[i],
          c.srcPoolCfg?.auditorsByAddress[i],
        );
      }
    }
  }
}

export async function checkDeposit(c: any) {
  const depositContract = await depositContractInstance(
    c.bridgeCfg.name,
    c.srcTokenCfg.erc20,
    c.pairSrcDepositCfg?.address,
  );

  const minAmount = await depositMinAmount(depositContract);
  if (minAmount.toString() !== c.pairSrcDepositCfg.minAmount) {
    console.log(LOGRED, 'deposit min amount mismatch', minAmount, c.pairSrcDepositCfg.minAmount);
  }

  const maxAmount = await depositMaxAmount(depositContract);
  if (maxAmount.toString() !== c.pairSrcDepositCfg.maxAmount) {
    console.log(LOGRED, 'deposit max amount mismatch', maxAmount, c.pairSrcDepositCfg.maxAmount);
  }

  if (c.bridgeCfg.name !== 'loop') {
    const minExcFee = await depositMinExecutorFee(depositContract);
    if (minExcFee.toString() !== c.pairSrcDepositCfg.minExecutorFee) {
      console.log(LOGRED, 'deposit min executor fee mismatch', minExcFee, c.pairSrcDepositCfg.minExecutorFee);
    }

    const pMinExcFee = await depositPeerMinExecutorFee(depositContract);
    if (pMinExcFee.toString() !== c.pairSrcDepositCfg.peerMinExecutorFee) {
      console.log(
        LOGRED,
        'deposit peer min executor fee mismatch',
        pMinExcFee,
        c.pairSrcDepositCfg.peerMinExecutorFee,
      );
    }

    const pMinRollupFee = await depositPeerMinRollupFee(depositContract);
    if (pMinRollupFee.toString() !== c.pairSrcDepositCfg.peerMinRollupFee) {
      console.log(
        LOGRED,
        'deposit peer min rollup fee mismatch',
        pMinRollupFee,
        c.pairSrcDepositCfg.peerMinRollupFee,
      );
    }
  }

  const sactionCheck = await depositSanctionCheckQuery(depositContract);
  if (c.pairSrcDepositCfg.sanctionCheck === undefined) {
    if (!sactionCheck) {
      console.log(LOGRED, 'deposit sanction mismatch', sactionCheck, c.pairSrcDepositCfg.sanctionCheck);
    }
  } else if (sactionCheck !== c.pairSrcDepositCfg.sanctionCheck) {
    console.log(LOGRED, 'deposit sanction mismatch', sactionCheck, c.pairSrcDepositCfg.sanctionCheck);
  }

  const depositEnable = await isDepositsDisabled(depositContract);
  if (depositEnable) {
    console.log(LOGRED, 'deposit disable');
  }

  const poolAddress = await depositAssociatedCommitmentPool(depositContract);
  if (poolAddress.toString() !== c.srcPoolCfg.address) {
    console.log(LOGRED, 'deposit pool address mismatch ', poolAddress, c.srcPoolCfg.address);
  }
}

export async function check(eth: any, taskArgs: any) {
  const c = loadConfig(taskArgs);
  await checkPool(c);
  await checkDeposit(c);
}
