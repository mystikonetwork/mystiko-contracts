import { MystikoSettings } from '@mystikonetwork/contracts-abi-settings';
import { LOGRED } from '../common/constant';
import { ChainConfig } from '../config/chain';

export async function settingsQueryVerifier(chainCfg: ChainConfig, settingsContract: MystikoSettings) {
  const verifier1 = await settingsContract.queryRollupVerifier(1);
  console.log('rollup1 verifier address', verifier1.verifier);
  if (verifier1.verifier !== chainCfg.rollup1Address) {
    console.error(LOGRED, 'rollup verifier address mismatch', verifier1, chainCfg.rollup1Address);
  }
  if (!verifier1.enabled) {
    console.error(LOGRED, 'rollup verifier not enabled');
  }

  const verifier2 = await settingsContract.queryRollupVerifier(2);
  console.log('rollup2 verifier address', verifier2.verifier);
  if (verifier2.verifier !== chainCfg.rollup2Address) {
    console.error(LOGRED, 'rollup verifier address mismatch', verifier2, chainCfg.rollup2Address);
  }
  if (!verifier2.enabled) {
    console.error(LOGRED, 'rollup verifier not enabled');
  }

  const verifier4 = await settingsContract.queryRollupVerifier(4);
  console.log('rollup4 verifier address', verifier4.verifier);
  if (verifier4.verifier !== chainCfg.rollup4Address) {
    console.error(LOGRED, 'rollup verifier address mismatch', verifier4, chainCfg.rollup4Address);
  }
  if (!verifier4.enabled) {
    console.error(LOGRED, 'rollup verifier not enabled');
  }

  const verifier8 = await settingsContract.queryRollupVerifier(8);
  console.log('rollup8 verifier address', verifier8.verifier);
  if (verifier8.verifier !== chainCfg.rollup8Address) {
    console.error(LOGRED, 'rollup verifier address mismatch', verifier8, chainCfg.rollup8Address);
  }
  if (!verifier8.enabled) {
    console.error(LOGRED, 'rollup verifier not enabled');
  }

  const verifier16 = await settingsContract.queryRollupVerifier(16);
  console.log('rollup16 verifier address', verifier16.verifier);
  if (verifier16.verifier !== chainCfg.rollup16Address) {
    console.error(LOGRED, 'rollup verifier address mismatch', verifier16, chainCfg.rollup16Address);
  }
  if (!verifier16.enabled) {
    console.error(LOGRED, 'rollup verifier not enabled');
  }

  const verifier32 = await settingsContract.queryRollupVerifier(32);
  console.log('rollup32 verifier address', verifier32.verifier);
  if (verifier32.verifier !== chainCfg.rollup32Address) {
    console.error(LOGRED, 'rollup verifier address mismatch', verifier32, chainCfg.rollup32Address);
  }
  if (!verifier32.enabled) {
    console.error(LOGRED, 'rollup verifier not disabled');
  }

  const verifier64 = await settingsContract.queryRollupVerifier(64);
  console.log('rollup64 verifier address', verifier64.verifier);
  if (verifier64.verifier !== chainCfg.rollup64Address) {
    console.error(LOGRED, 'rollup verifier address mismatch', verifier64, chainCfg.rollup64Address);
  }
  if (!verifier64.enabled) {
    console.error(LOGRED, 'rollup verifier not disabled');
  }
}

export async function settingsQueryTransact(chainCfg: ChainConfig, settingsContract: MystikoSettings) {
  const transact1 = await settingsContract.queryTransactVerifier(1, 0);
  console.log('transact1 verifier address', transact1.verifier);
  if (transact1.verifier !== chainCfg.transaction1x0VerifierAddress) {
    console.error(
      LOGRED,
      'transact verifier address mismatch',
      transact1,
      chainCfg.transaction1x0VerifierAddress,
    );
  }
  if (!transact1.enabled) {
    console.error(LOGRED, 'transact verifier not enabled');
  }

  const transact2 = await settingsContract.queryTransactVerifier(1, 1);
  console.log('transact2 verifier address', transact2.verifier);
  if (transact2.verifier !== chainCfg.transaction1x1VerifierAddress) {
    console.error(
      LOGRED,
      'transact verifier address mismatch',
      transact2,
      chainCfg.transaction1x1VerifierAddress,
    );
  }
  if (!transact2.enabled) {
    console.error(LOGRED, 'transact verifier not enabled');
  }

  const transact3 = await settingsContract.queryTransactVerifier(1, 2);
  console.log('transact3 verifier address', transact3.verifier);
  if (transact3.verifier !== chainCfg.transaction1x2VerifierAddress) {
    console.error(
      LOGRED,
      'transact verifier address mismatch',
      transact3,
      chainCfg.transaction1x2VerifierAddress,
    );
  }
  if (!transact3.enabled) {
    console.error(LOGRED, 'transact verifier not enabled');
  }

  const transact4 = await settingsContract.queryTransactVerifier(2, 0);
  console.log('transact4 verifier address', transact4.verifier);
  if (transact4.verifier !== chainCfg.transaction2x0VerifierAddress) {
    console.error(
      LOGRED,
      'transact verifier address mismatch',
      transact4,
      chainCfg.transaction2x0VerifierAddress,
    );
  }
  if (!transact4.enabled) {
    console.error(LOGRED, 'transact verifier not enabled');
  }

  const transact5 = await settingsContract.queryTransactVerifier(2, 1);
  console.log('transact5 verifier address', transact5.verifier);
  if (transact5.verifier !== chainCfg.transaction2x1VerifierAddress) {
    console.error(
      LOGRED,
      'transact verifier address mismatch',
      transact5,
      chainCfg.transaction2x1VerifierAddress,
    );
  }
  if (!transact5.enabled) {
    console.error(LOGRED, 'transact verifier not enabled');
  }

  const transact6 = await settingsContract.queryTransactVerifier(2, 2);
  console.log('transact6 verifier address', transact6.verifier);
  if (transact6.verifier !== chainCfg.transaction2x2VerifierAddress) {
    console.error(
      LOGRED,
      'transact verifier address mismatch',
      transact6,
      chainCfg.transaction2x2VerifierAddress,
    );
  }
  if (!transact6.enabled) {
    console.error(LOGRED, 'transact verifier not enabled');
  }
}
