import { DepositOptions, IWallet } from '../interface';
import { CommandLineExecutor } from './executor';

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

    client.deposits?.create(depositOption).then(async (resp) => {
      await resp.depositPromise;
      this.logger.info(
        `[srcChainId: ${depositOption.srcChainId} to dstChainId: ${depositOption.dstChainId}]` +
          `[${depositOption.assetSymbol}][bridge:${depositOption.bridge}] Deposit successful`,
      );
    });

    return Promise.resolve();
  }
}
