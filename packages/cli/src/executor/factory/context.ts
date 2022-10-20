import { ICommandLineContext, ICommandLineContextFactory, IConfig } from '../../interface';
import { CommandLineContext } from '../context';
import mystiko from '@mystikonetwork/node';

export class DefaultContextFactory implements ICommandLineContextFactory {
  private readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  async createCommandLineContext(): Promise<ICommandLineContext> {
    await mystiko.initialize({ isTestnet: !this.config.isMainNet });
    await mystiko.wallets?.create({
      password: this.config.walletPassword,
      masterSeed: this.config.walletMasterSeed,
    });

    const account = await mystiko.accounts?.create(this.config.walletPassword, {
      name: this.config.accountName,
    });
    if (!account) {
      return Promise.reject(new Error('create account failed'));
    }

    if (!this.config.privateKey) {
      return Promise.reject(new Error('privateKey cannot be null'));
    }

    mystiko.signers?.privateKey.setPrivateKey(this.config.privateKey);

    return new CommandLineContext(mystiko, account.shieldedAddress, this.config.privateKey);
  }
}
