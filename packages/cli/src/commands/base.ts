import { Command, Flags, Interfaces } from '@oclif/core';
import { ICommandLineContext, IConfig, IWallet } from '../interface';
import { ConfigFactory } from '../executor/factory/config';
import { DefaultContextFactory, WalletExecutorFactory } from '../executor/factory';

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<
  typeof Base['globalFlags'] & T['flags']
>;

export abstract class Base<T extends typeof Command> extends Command {
  static globalFlags = {
    env: Flags.string({
      char: 'e',
      description: 'Env path',
      default: '.env',
      required: false,
    }),
    main: Flags.boolean({
      char: 'm',
      description: 'Is main net',
      default: false,
      required: false,
    }),
    privateKey: Flags.string({
      char: 'k',
      description: 'Signer private key',
      required: false,
    }),
  };

  protected flags!: Flags<T>;

  protected iConfig: IConfig | undefined;

  protected iContext: ICommandLineContext | undefined;

  protected iWallet: IWallet | undefined;

  public async init(): Promise<void> {
    await super.init();
    const { flags } = await this.parse(this.constructor as Interfaces.Command.Class);
    this.flags = flags;

    this.iConfig = new ConfigFactory(flags.env, flags.main, flags.privateKey).getConfig();
    if (!this.iConfig) {
      this.error('config is undefined');
    }

    this.iContext = await new DefaultContextFactory(this.iConfig).createCommandLineContext();
    if (!this.iContext) {
      this.error('context is undefined');
    }

    this.iWallet = new WalletExecutorFactory(this.iContext).getWalletExecutor();
    if (!this.iWallet) {
      this.error('wallet is undefined');
    }
  }
}
