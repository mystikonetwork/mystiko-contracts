import { ICommandLineContext, IWallet, IWalletFactory } from '../../interface';
import { WalletExecutor } from '../wallet';

export class WalletExecutorFactory implements IWalletFactory {
  private readonly context: ICommandLineContext;

  constructor(context: ICommandLineContext) {
    this.context = context;
  }

  getWalletExecutor(): IWallet {
    return new WalletExecutor(this.context);
  }
}
