import dotenv from 'dotenv';
import { IConfig } from '../interface';

const defaultConfig = Object.freeze({
  erc20Amount: 1,
  mainAmount: 0.1,
  walletPassword: 'mystiko@psd_12432RDfaf!',
  walletMasterSeed: 'beefbeef',
  accountName: 'mystiko@acc_nmid123',
});

export class EnvConfig implements IConfig {
  constructor(path: string) {
    dotenv.config({ path: path });
  }

  public get privateKey(): string {
    if (!process.env.PRIVATE_KEY) {
      return '';
    }

    return process.env.PRIVATE_KEY;
  }

  public get walletPassword(): string {
    if (!process.env.WALLET_PASSWORD) {
      return defaultConfig.walletPassword;
    }

    return process.env.WALLET_PASSWORD;
  }

  public get walletMasterSeed(): string {
    if (!process.env.WALLET_MASTER_SEED) {
      return defaultConfig.walletMasterSeed;
    }

    return process.env.WALLET_MASTER_SEED;
  }

  public get accountName(): string {
    if (!process.env.ACCOUNT_NAME) {
      return defaultConfig.accountName;
    }

    return process.env.ACCOUNT_NAME;
  }

  get erc20Amount(): number {
    if (!process.env.ERC20_AMOUNT) {
      return defaultConfig.erc20Amount;
    }

    return Number(process.env.ERC20_AMOUNT);
  }

  get mainAmount(): number {
    if (!process.env.MAIN_AMOUNT) {
      return defaultConfig.mainAmount;
    }

    return Number(process.env.MAIN_AMOUNT);
  }
}
