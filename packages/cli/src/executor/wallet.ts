import { DepositOptions, IWallet, TransactOptions } from '../interface';
import { CommandLineExecutor } from './executor';
import { TransactionEnum } from '@mystikonetwork/database';

export class WalletExecutor extends CommandLineExecutor implements IWallet {
  deposit(param: DepositOptions): Promise<void> {
    const client = this.context.nodeClient;

    const depositConfig = client.config?.getDepositContractConfig(
      param.srcChainId,
      param.dstChainId,
      param.assetSymbol,
      param.bridge,
    );

    const depositOption = {
      srcChainId: param.srcChainId,
      dstChainId: param.dstChainId,
      assetSymbol: param.assetSymbol,
      bridge: param.bridge,
      amount: param.amount,
      rollupFee: depositConfig!.minRollupFeeNumber,
      bridgeFee: depositConfig!.minBridgeFeeNumber,
      executorFee: depositConfig!.minExecutorFeeNumber,
      shieldedAddress: this.context.shieldedAddress,
      signer: client.signers!.privateKey,
    };

    return new Promise((resolve, reject) => {
      client.deposits?.create(depositOption).then((resp) => {
        resp.depositPromise
          .then(() => {
            this.logger.info(
              `[srcChainId: ${depositOption.srcChainId} to dstChainId: ${depositOption.dstChainId}]` +
                `[${depositOption.assetSymbol}][bridge:${depositOption.bridge}] Deposit successful`,
            );
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  async transact(param: TransactOptions): Promise<void> {
    const client = this.context.nodeClient;
    // 1. check balances
    const balance = await client.assets?.balance({ chainId: param.chainId, asset: param.assetSymbol });
    if (!balance) {
      return Promise.reject(
        new Error(`chainId ${param.chainId} assets ${param.assetSymbol} balances not found`),
      );
    }

    // 1.1 balance unspentTotal must greater than amount
    if (balance.unspentTotal + balance.pendingTotal < param.amount) {
      return Promise.reject(
        new Error(
          `chainId ${param.chainId} assets ${param.assetSymbol} balances unspentTotal` +
            `${balance.unspentTotal} and pendingTotal ${balance.pendingTotal} less than amount ${param.amount}`,
        ),
      );
    }

    // 1.2 if unspentTotal less than amount，import commitments
    try {
      await this.waitBalanceEnough(param.amount, param.assetSymbol, param.chainId, param.walletPassword);
    } catch (error) {
      return Promise.reject(error);
    }

    const transactOption = {
      type: param.type as TransactionEnum,
      chainId: param.chainId,
      assetSymbol: param.assetSymbol,
      bridgeType: param.bridge,
      publicAddress: param.publicAddress,
      publicAmount: param.amount,
      walletPassword: param.walletPassword,
      signer: client.signers!.privateKey,
    };

    // 2. withdraw
    return new Promise((resolve, reject) => {
      client.transactions?.create(transactOption).then((resp) => {
        resp.transactionPromise
          .then(() => {
            this.logger.info(
              `[chainId: ${param.chainId}][${param.assetSymbol}][bridge: ${param.bridge}]` +
                `withdraw ${param.amount} successful`,
            );
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  async importCommitments(chainId: number, walletPassword: string): Promise<void> {
    const client = this.context.nodeClient;
    await client.commitments?.import({ chainId: chainId, walletPassword: walletPassword });
    return Promise.resolve();
  }

  address(): Promise<string> {
    const client = this.context.nodeClient;

    return client.signers!.privateKey.signer.getAddress();
  }

  async waitBalanceEnough(
    amount: number,
    asset: string,
    chainId: number,
    walletPassword: string,
  ): Promise<void> {
    const client = this.context.nodeClient;
    const maxRetry = 5;

    for (let i = 0; i < maxRetry; i++) {
      // eslint-disable-next-line no-await-in-loop
      await this.importCommitments(chainId, walletPassword);
      // eslint-disable-next-line no-await-in-loop
      const balance = await client.assets?.balance({ chainId: chainId, asset: asset });
      if (balance!.unspentTotal >= amount) {
        return Promise.resolve();
      }

      // eslint-disable-next-line no-await-in-loop
      await this.timeout(10_000);
    }

    return Promise.reject(
      new Error(`importCommitment ${maxRetry} times, but balances insufficient(less than ${amount})`),
    );
  }

  timeout(ms: number): Promise<void> {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


}
