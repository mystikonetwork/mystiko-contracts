import { DepositOptions, IWallet, TransactOptions } from '../interface';
import { CommandLineExecutor } from './executor';
import { TransactionEnum } from '@mystikonetwork/database';
// eslint-disable-next-line node/no-extraneous-import
import { TransactionOptions } from '@mystikonetwork/core/build/cjs/interface/handler/transaction';
import { BridgeType, PoolContractConfig } from '@mystikonetwork/config';

export class WalletExecutor extends CommandLineExecutor implements IWallet {
  deposit(param: DepositOptions): Promise<void> {
    const client = this.context.nodeClient;

    const depositConfig = client.config?.getDepositContractConfig(
      param.srcChainId,
      param.dstChainId,
      param.assetSymbol,
      param.bridge,
    );

    let amount = param.amount;
    if (!amount) {
      this.logger.info(`amount is undefined, use ${depositConfig!.minAmountNumber}`)
      amount = depositConfig!.minAmountNumber;
    }

    const depositOption = {
      srcChainId: param.srcChainId,
      dstChainId: param.dstChainId,
      assetSymbol: param.assetSymbol,
      bridge: param.bridge,
      amount: amount,
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
    let expectAmount = param.amount;

    // 1. check balances
    const balance = await client.assets?.balance({ chainId: param.chainId, asset: param.assetSymbol });
    this.logger.info(balance);
    if (!balance) {
      return Promise.reject(
        new Error(`chainId ${param.chainId} assets ${param.assetSymbol} balances not found`),
      );
    }

    if (!expectAmount) {
      expectAmount = balance.unspentTotal + balance.pendingTotal;
    }

    // 1.1 balance unspentTotal must greater than expect amount
    if (balance.unspentTotal + balance.pendingTotal < expectAmount) {
      return Promise.reject(
        new Error(
          `chainId ${param.chainId} assets ${param.assetSymbol} balances unspentTotal ` +
            `${balance.unspentTotal} and pendingTotal ${balance.pendingTotal} less than expect amount ${expectAmount}`,
        ),
      );
    }

    // 1.2 if unspentTotal less than amount，import commitments
    try {
      await this.waitBalanceEnough(expectAmount, param.assetSymbol, param.chainId, param.walletPassword);
    } catch (error) {
      return Promise.reject(error);
    }

    // 2. Construct
    const transactOption: TransactionOptions = {
      type: param.type,
      chainId: param.chainId,
      assetSymbol: param.assetSymbol,
      bridgeType: param.bridge,
      publicAddress: param.publicAddress,
      walletPassword: param.walletPassword,
      signer: client.signers!.privateKey,
    };

    if (param.type === TransactionEnum.WITHDRAW) {
      transactOption.publicAmount = expectAmount;
    } else if (param.type === TransactionEnum.TRANSFER) {
      transactOption.amount = expectAmount;
      transactOption.shieldedAddress = param.shieldedAddress;
    }

    const poolConfig = this.getPoolContractConfig(
      param.chainId,
      param.assetSymbol,
      param.bridge,
      param.version,
    );
    if (!poolConfig) {
      return Promise.reject(new Error('pool contract config not found'));
    }

    transactOption.rollupFee = poolConfig.minRollupFeeNumber;

    // 3. withdraw
    return new Promise((resolve, reject) => {
      client.transactions?.create(transactOption).then((resp) => {
        resp.transactionPromise
          .then(() => {
            this.logger.info(
              `[chainId: ${param.chainId}][${param.assetSymbol}][bridge: ${param.bridge}] ` +
                `${param.type} $${param.amount} successful`,
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

  private async waitBalanceEnough(
    expectAmount: number,
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
      if (balance!.unspentTotal >= expectAmount) {
        return Promise.resolve();
      }

      this.logger.info(
        `Sync: expect amount: ${expectAmount}, balances: pending ${balance!.pendingTotal},` +
          `unspent ${balance!.unspentTotal}, wait 10s will sync again`,
      );

      // eslint-disable-next-line no-await-in-loop
      await this.timeout(10_000);
    }

    return Promise.reject(
      new Error(`importCommitment ${maxRetry} times, but balances insufficient(less than ${expectAmount})`),
    );
  }

  private timeout(ms: number): Promise<void> {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private getPoolContractConfig(
    chainId: number,
    assetSymbol: string,
    bridge: BridgeType,
    version?: number,
  ): PoolContractConfig | undefined {
    let poolContractConfig: PoolContractConfig | undefined;
    const client = this.context.nodeClient;

    if (version) {
      poolContractConfig = client.config?.getPoolContractConfig(chainId, assetSymbol, bridge, version);
    } else {
      const poolContractsConfigs = client.config!.getPoolContractConfigs(chainId, assetSymbol, bridge);
      if (poolContractsConfigs.length > 0) {
        poolContractsConfigs.sort((c1, c2) => c2.version - c1.version);
        [poolContractConfig] = poolContractsConfigs;
      }
    }

    return poolContractConfig;
  }
}
