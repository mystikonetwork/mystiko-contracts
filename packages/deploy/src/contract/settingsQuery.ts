import { MystikoSettings } from '@mystikonetwork/contracts-abi-settings';
import { LOGRED } from '../common/constant';
import { getSettingsCenterContract } from './settings';

export function settingsContractInstance(addr: string): Promise<MystikoSettings> {
  const SettingsFactory = getSettingsCenterContract();
  return Promise.resolve(SettingsFactory.attach(addr));
}

export function chainSanctionEnabled(settingsContract: MystikoSettings): Promise<boolean> {
  try {
    return settingsContract.sanctionsCheck();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}

export function chainAuditors(settingsContract: MystikoSettings): Promise<string[]> {
  try {
    return settingsContract.queryAllAuditorPublicKeys();
  } catch (err: any) {
    console.error(LOGRED, err);
    process.exit(1);
    return Promise.reject(new Error('error'));
  }
}
