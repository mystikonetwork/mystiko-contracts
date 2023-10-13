// deploy mystiko contract and config contract
import { LOGRED } from './common/constant';
import { loadConfig } from './config/config';
import { checkOneTx } from './contract/depsit';
import {
  depositAssociatedCommitmentPool,
  depositContractInstance,
  depositMaxAmount,
  depositMinAmount,
  depositMinExecutorFee,
  depositPeerMinExecutorFee,
  depositPeerMinRollupFee,
  depositSanctionCheckQuery,
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

async function checkPoolTx(c: any) {
  let tx = c.srcPoolCfg?.disabledAtTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.minRollupFeeTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.rollup1VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.rollup2VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.rollup4VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.rollup8VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.rollup16VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.transact1x0VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.transact1x1VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.transact1x2VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.transact2x0VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.transact2x1VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.transact2x2VerifierTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.sanctionCheckTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.tokenTransferTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.operatorTx;
  await checkOneTx(tx);

  /* eslint-disable no-await-in-loop */
  /* eslint-disable no-restricted-syntax */
  let txs = c.srcPoolCfg?.enqueueWhitelistTx;
  if (txs) {
    for (const enqueueTx of txs) {
      await checkOneTx(enqueueTx);
    }
  }

  txs = c.srcPoolCfg?.rollupWhitelistTx;
  if (txs) {
    for (const rollupTx of txs) {
      await checkOneTx(rollupTx);
    }
  }

  txs = c.srcPoolCfg?.auditorsTx;
  if (txs) {
    for (const auditorTx of txs) {
      await checkOneTx(auditorTx);
    }
  }
  /* eslint-enable no-await-in-loop */
  /* eslint-enable no-restricted-syntax */
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

  const poolAddress = await depositAssociatedCommitmentPool(depositContract);
  if (poolAddress.toString() !== c.srcPoolCfg.address) {
    console.log(LOGRED, 'deposit pool address mismatch ', poolAddress, c.srcPoolCfg.address);
  }
}

async function checkDepositTx(c: any) {
  let tx = c.srcPoolCfg?.disabledAtTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.minAmountTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.maxAmountTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.minBridgeFeeTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.minExecutorFeeTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.peerMinExecutorFeeTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.peerMinRollupFeeTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.commitmentPoolTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.bridgeProxyTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.peerContractTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.trustedRemoteTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.sanctionCheckTx;
  await checkOneTx(tx);
  tx = c.srcPoolCfg?.operatorTx;
  await checkOneTx(tx);
}

export async function check(eth: any, taskArgs: any) {
  const c = loadConfig(taskArgs);
  await checkPool(c);
  await checkPoolTx(c);
  await checkDeposit(c);
  await checkDepositTx(c);
}
