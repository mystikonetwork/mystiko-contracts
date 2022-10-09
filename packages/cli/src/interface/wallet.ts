import { BridgeType } from '@mystikonetwork/config';

export type DepositOptions = {
  assetSymbol: string;
  bridge: BridgeType;
  amount: number;
  srcChainId: number;
  dstChainId: number;
};

export interface IWallet<D = DepositOptions> {
  deposit(param: D): Promise<void>;
}
