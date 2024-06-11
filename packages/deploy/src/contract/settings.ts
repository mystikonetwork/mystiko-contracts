import {
  getCertificateArtifact,
  getRelayerArtifact,
  getRollerArtifact,
  getSettingsArtifact,
  waitConfirm,
} from '../common/utils';
import { saveConfig } from '../config/config';
import { MystikoCertificate__factory } from '@mystikonetwork/contracts-abi-certificate';
import {
  MystikoRelayerPool__factory,
  MystikoRelayerRegister__factory,
} from '@mystikonetwork/contracts-abi-relayer';
import { MystikoRollerPool__factory } from '@mystikonetwork/contracts-abi-roller';
import { MystikoSettings__factory } from '@mystikonetwork/contracts-abi-settings';
import { LOGRED, MystikoMainnet, MystikoTestnet } from '../common/constant';
import { ChainSettingsConfig } from '../config/chainSettings';

let CertifacteFactory: MystikoCertificate__factory;
let RelayerPoolFactory: MystikoRelayerPool__factory;
let RelayerRegisterFactory: MystikoRelayerRegister__factory;
let RollerFactory: MystikoRollerPool__factory;
let SettingsFactory: MystikoSettings__factory;

let ethers: any;

export async function initSettingsContractFactory(eth: any) {
  ethers = eth;

  const certificateArtifact = await getCertificateArtifact('MystikoCertificate');
  CertifacteFactory = (await ethers.getContractFactoryFromArtifact(
    certificateArtifact,
  )) as MystikoCertificate__factory;

  const relayerPoolArtifact = await getRelayerArtifact('MystikoRelayerPool');
  RelayerPoolFactory = (await ethers.getContractFactoryFromArtifact(
    relayerPoolArtifact,
  )) as MystikoRelayerPool__factory;

  const relayerRegisterArtifact = await getRelayerArtifact('MystikoRelayerRegister');
  RelayerRegisterFactory = (await ethers.getContractFactoryFromArtifact(
    relayerRegisterArtifact,
  )) as MystikoRelayerRegister__factory;

  const rollerArtifact = await getRollerArtifact('MystikoRollerPool');
  RollerFactory = (await ethers.getContractFactoryFromArtifact(rollerArtifact)) as MystikoRollerPool__factory;

  const settingsArtifact = await getSettingsArtifact('MystikoSettings');
  SettingsFactory = (await ethers.getContractFactoryFromArtifact(
    settingsArtifact,
  )) as MystikoSettings__factory;
}

export function getSettingsCenterContract() {
  return SettingsFactory;
}

export function getRollerPoolContract() {
  return RollerFactory;
}

export function getRelayerPoolContract() {
  return RelayerPoolFactory;
}

export function getRelayerRegisterContract() {
  return RelayerRegisterFactory;
}

export function getCertifacteContract() {
  return CertifacteFactory;
}

export async function setChainSanctionCheck(
  c: any,
  check: boolean,
  settingsConfig: ChainSettingsConfig,
  settingsAddress: string,
) {
  console.log('set chain sanction check ', check);

  if (!settingsConfig.isSanctionCheckChange(check)) {
    return;
  }

  const settingsFactory = getSettingsCenterContract();
  const settingsContract = settingsFactory.attach(settingsAddress);
  let rsp: any;
  try {
    if (check) {
      rsp = await settingsContract.enableSanctionsCheck();
      console.log('settings rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    } else {
      rsp = await settingsContract.disableSanctionsCheck();
      console.log('settings rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }
    settingsConfig.updateSanctionCheck(check, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setChainSanctionListAddress(
  c: any,
  settingsConfig: ChainSettingsConfig,
  settingsAddress: string,
  sanctionListAddress: string,
) {
  console.log('set chain sanction list address');

  if (!settingsConfig.isSanctionListAddressChange(sanctionListAddress)) {
    return;
  }

  const settingsFactory = getSettingsCenterContract();
  const settingsContract = settingsFactory.attach(settingsAddress);
  let rsp: any;
  try {
    rsp = await settingsContract.setSanctionsListAddress(sanctionListAddress);
    console.log('settings rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    settingsConfig.updateSanctionListAddress(sanctionListAddress, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function updateSettingsPoolAddress(
  c: any,
  settingsConfig: ChainSettingsConfig,
  settingsAddress: string,
) {
  console.log('update settings pool address ');

  const settingsFactory = getSettingsCenterContract();
  const settingsContract = settingsFactory.attach(settingsAddress);
  let rsp: any;
  try {
    const { rollerPool } = c.srcChainCfg;
    const settingsRollerPool = await settingsContract.rollerPool();
    if (rollerPool.toLowerCase() !== settingsRollerPool.toLowerCase()) {
      rsp = await settingsContract.setRollerPool(rollerPool);
      console.log('settings update roller pool tx hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }

    const { relayerPool } = c.srcChainCfg;
    const settingsRelayerPool = await settingsContract.relayerPool();
    if (relayerPool.toLowerCase() !== settingsRelayerPool.toLowerCase()) {
      rsp = await settingsContract.setRelayerPool(relayerPool);
      console.log('settings update relayer pool tx hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }

    const { certificateVerifier } = c.srcChainCfg;
    const settingsCertificateVerifier = await settingsContract.certificate();
    if (certificateVerifier.toLowerCase() !== settingsCertificateVerifier.toLowerCase()) {
      rsp = await settingsContract.setCertificateVerifier(certificateVerifier);
      console.log('settings update certificate verifier tx hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setChainCertificateCheck(
  c: any,
  check: boolean,
  settingsConfig: ChainSettingsConfig,
  certificateAddress: string,
) {
  console.log('set chain certifiate check ', check);

  if (!settingsConfig.isCertificateCheckChange(check)) {
    return;
  }

  const certFactory = getCertifacteContract();
  const certContract = certFactory.attach(certificateAddress);
  let rsp: any;
  try {
    if (check) {
      rsp = await certContract.enableCertificateCheck();
      console.log('certificate rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    } else {
      rsp = await certContract.disableCertificateCheck();
      console.log('certificate rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }
    settingsConfig.updateCertificateCheck(check, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setRollerPoolRole(
  c: any,
  check: boolean,
  settingsConfig: ChainSettingsConfig,
  settingsAddress: string,
) {
  console.log('set chain sanction check ', check);

  if (!settingsConfig.isSanctionCheckChange(check)) {
    return;
  }

  const settingsContract = await SettingsFactory.attach(settingsAddress);
  let rsp: any;
  try {
    if (check) {
      rsp = await settingsContract.enableSanctionsCheck();
      console.log('settings rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    } else {
      rsp = await settingsContract.disableSanctionsCheck();
      console.log('settings rsp hash ', rsp.hash);
      await waitConfirm(ethers, rsp, true);
    }
    settingsConfig.updateSanctionCheck(check, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

// deploy hasher and verifier
export async function deploySettingsContract(c: any) {
  const chainCfg = c.srcChainCfg;
  const { daoRegistry } = chainCfg;
  const { issuer } = c.operatorCfg;

  if (chainCfg.certificateVerifier === undefined) {
    const certificate = await CertifacteFactory.deploy(daoRegistry, issuer, false);
    const certificateAddress = certificate.address;
    console.log('certificateVerifier address: ', certificateAddress);
    chainCfg.certificateVerifier = certificateAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  const amount = ethers.utils.parseUnits('0', 18);
  let voteTokenAddress;
  if (chainCfg.vXZKAddress === undefined) {
    voteTokenAddress = '0x0000000000000000000000000000000000000000';
  } else {
    voteTokenAddress = chainCfg.vXZKAddress;
  }

  if (chainCfg.relayerPool === undefined) {
    console.log('deploy relayerPool');
    const relayerPool = await RelayerPoolFactory.deploy(daoRegistry, voteTokenAddress, amount);
    await relayerPool.deployed();
    const relayerAddress = relayerPool.address;
    console.log('relayerPool address: ', relayerAddress);
    chainCfg.relayerPool = relayerAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (chainCfg.relayerRegister === undefined) {
    console.log('deploy relayerRegister');
    const relayerRegister = await RelayerRegisterFactory.deploy(daoRegistry);
    await relayerRegister.deployed();
    const relayerAddress = relayerRegister.address;
    console.log('relayerRegister address: ', relayerAddress);
    chainCfg.relayerRegister = relayerAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (chainCfg.rollerPool === undefined) {
    console.log('deploy rollerPool');
    const roller = await RollerFactory.deploy(daoRegistry, voteTokenAddress, amount, c.operatorCfg.rollers);
    await roller.deployed();
    const rollerAddress = roller.address;
    console.log('rollerPool address: ', rollerAddress);
    chainCfg.rollerPool = rollerAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }

  if (chainCfg.settingsCenter === undefined) {
    console.log('deploy settings');
    const settings = await SettingsFactory.deploy(
      daoRegistry,
      chainCfg.certificateVerifier,
      chainCfg.rollerPool,
      chainCfg.relayerPool,
      [
        chainCfg.rollup1Address,
        chainCfg.rollup2Address,
        chainCfg.rollup4Address,
        chainCfg.rollup8Address,
        chainCfg.rollup16Address,
        chainCfg.rollup32Address,
        chainCfg.rollup64Address,
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
      ],
      [
        chainCfg.transaction1x0VerifierAddress,
        chainCfg.transaction1x1VerifierAddress,
        chainCfg.transaction1x2VerifierAddress,
        chainCfg.transaction2x0VerifierAddress,
        chainCfg.transaction2x1VerifierAddress,
        chainCfg.transaction2x2VerifierAddress,
      ],
      c.operatorCfg.auditors,
    );
    await settings.deployed();
    const settingsAddress = settings.address;
    console.log('settings address: ', settingsAddress);
    chainCfg.settingsCenter = settingsAddress;
    saveConfig(c.mystikoNetwork, c.cfg);
  }
}

export async function enableRollerPoolRole(
  c: any,
  settingsConfig: ChainSettingsConfig,
  roller: string,
  rollerPoolAddress: string,
) {
  console.log('enable roller pool role ');

  if (settingsConfig.isInRollers(roller)) {
    return;
  }

  const rollerPoolFactory = getRollerPoolContract();
  const rollerPool = await rollerPoolFactory.attach(rollerPoolAddress);
  let rsp: any;
  try {
    const rollerRole = await rollerPool.ROLLER_ROLE();
    rsp = await rollerPool.grantRole(rollerRole, roller);
    console.log('grant role rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    settingsConfig.addRoller(roller, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function enableRelayerPoolRole(
  c: any,
  settingsConfig: ChainSettingsConfig,
  relayer: string,
  relayerPoolAddress: string,
) {
  console.log('enable relayer pool role');

  if (settingsConfig.isInRelayers(relayer)) {
    return;
  }

  const relayerPoolFactory = getRelayerPoolContract();
  const relayerPool = await relayerPoolFactory.attach(relayerPoolAddress);
  let rsp: any;
  try {
    const relayerRole = await relayerPool.RELAYER_ROLE();
    rsp = await relayerPool.grantRole(relayerRole, relayer);
    console.log('grant role rsp hash ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    settingsConfig.addRelayer(relayer, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setRollerPoolMinAmount(
  c: any,
  settingsConfig: ChainSettingsConfig,
  rollerPoolAddress: string,
  minAmount: string,
) {
  console.log('set roller pool min amount');

  if (!settingsConfig.isRollerPoolMinAmountChange(minAmount)) {
    return;
  }

  const rollerPoolFactory = getRollerPoolContract();
  const rollerPool = await rollerPoolFactory.attach(rollerPoolAddress);
  let rsp: any;
  try {
    rsp = await rollerPool.setRollerMinVoteTokenAmount(minAmount);
    console.log('set min vote token amount ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    settingsConfig.updateRollerPoolMinAmount(minAmount, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function setRelayerPoolMinAmount(
  c: any,
  settingsConfig: ChainSettingsConfig,
  relayerPoolAddress: string,
  minAmount: string,
) {
  console.log('set relayer pool min amount');

  if (!settingsConfig.isRelayerPoolMinAmountChange(minAmount)) {
    return;
  }

  const relayerPoolFactory = getRelayerPoolContract();
  const relayerPool = await relayerPoolFactory.attach(relayerPoolAddress);
  let rsp: any;
  try {
    rsp = await relayerPool.setRelayerMinVoteTokenAmount(minAmount);
    console.log('set min vote token amount ', rsp.hash);
    await waitConfirm(ethers, rsp, true);
    settingsConfig.updateRelayerPoolMinAmount(minAmount, rsp.hash);
    saveConfig(c.mystikoNetwork, c.cfg);
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
  }
}

export async function doSettingsCenterConfig(c: any) {
  const chainCfg = c.srcChainCfg;

  if (
    c.mystikoNetwork === MystikoTestnet ||
    (c.mystikoNetwork === MystikoMainnet && c.srcChainCfg.network === 'Linea')
  ) {
    await setChainSanctionCheck(c, false, chainCfg.settingsConfig, chainCfg.settingsCenter);
  }

  if (c.mystikoNetwork === MystikoMainnet && c.srcChainCfg.network === 'Base') {
    await setChainSanctionListAddress(
      c,
      chainCfg.settingsConfig,
      chainCfg.settingsCenter,
      '0x3A91A31cB3dC49b4db9Ce721F50a9D076c8D739B',
    );
  }

  await updateSettingsPoolAddress(c, chainCfg.settingsConfig, chainCfg.settingsCenter);
  // await setChainCertificateCheck(c, false, chainCfg.settingsConfig, chainCfg.certificateVerifier);

  // todo change min vote amount
  // await setRollerPoolMinAmount(c, chainCfg.settingsConfig, chainCfg.rollerPool, '0');
  // await setRelayerPoolMinAmount(c, chainCfg.settingsConfig, chainCfg.relayerPool, '0');

  /* eslint-disable no-await-in-loop */
  // for (const roller of c.operatorCfg.rollers) {
  //   await enableRollerPoolRole(c, chainCfg.settingsConfig, roller, chainCfg.rollerPool);
  // }
  //
  // for (const relayer of c.operatorCfg.relayers) {
  //   await enableRelayerPoolRole(c, chainCfg.settingsConfig, relayer, chainCfg.relayerPool);
  // }
  /* eslint-enable no-await-in-loop  */
}
