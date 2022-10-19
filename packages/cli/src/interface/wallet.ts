import { BridgeType } from '@mystikonetwork/config';

export type DepositOptions = {
  assetSymbol: string;
  bridge: BridgeType;
  amount: number;
  srcChainId: number;
  dstChainId: number;
};

export type TransactOptions = {
  type: string;
  chainId: number;
  publicAddress: string;
  walletPassword: string;
  assetSymbol: string;
  bridge: BridgeType;
  amount: number;
};

export interface IWallet<D = DepositOptions, T = TransactOptions> {
  deposit(param: D): Promise<void>;
  transact(param: T): Promise<void>;
  importCommitments(chainId: number, walletPassword: string): Promise<void>;
  address(): Promise<string>;
}
