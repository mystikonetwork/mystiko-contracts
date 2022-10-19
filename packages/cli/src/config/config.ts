import dotenv from 'dotenv';
import { IConfig } from '../interface';
import { boolean } from "@oclif/core/lib/parser";

const defaultConfig = Object.freeze({
  erc20Amount: 1,
  mainAmount: 0.1,
  walletPassword: 'mystiko@psd_12432RDfaf!',
  walletMasterSeed: 'beefbeef',
  accountName: 'mystiko@acc_nmid123',
  isMainNet: false,
});

export class EnvConfig implements IConfig {
  private readonly _isMainNet: boolean;

  private readonly _privateKey: string;

  constructor(path: string, isMainNet: boolean, privateKey: string) {
    dotenv.config({ path: path });
    this._isMainNet = isMainNet;
    this._privateKey = privateKey;
  }

  public get privateKey(): string {
    if (this._privateKey) {
      return this._privateKey;
    }

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

  get isMainNet(): boolean {
    if (this._isMainNet) {
      return this._isMainNet;
    }

    if (!process.env.IS_MAIN_NET) {
      return defaultConfig.isMainNet;
    }

    return process.env.IS_MAIN_NET === 'true';
  }
}
