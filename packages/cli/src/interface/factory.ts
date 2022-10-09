import { ICommandLineContext } from './context';
import { IWallet } from './wallet';
import { IConfig } from './config';

export interface ICommandLineContextFactory {
  createCommandLineContext(): Promise<ICommandLineContext>;
}

export interface IWalletFactory {
  getWalletExecutor(): IWallet;
}

export interface IConfigFactory {
  getConfig(): IConfig;
}
