import { BaseConfig } from './base';

export interface RawDepositDeployConfig {
  network: string;
  assetSymbol: string;
  address?: string;
  nonce?: number;
  syncStart?: number;
  disabledAt?: number;
  minAmount?: string;
  maxAmount?: string;
  minBridgeFee?: string;
  minExecutorFee?: string;
  peerMinExecutorFee?: string;
  peerMinRollupFee?: string;
  commitmentPool?: string;
  bridgeProxy?: string;
  peerContract?: string;
  trustedRemote?: string;
  sanctionCheck?: boolean;
  operator?: string;
  disabledAtTx?: string;
  minAmountTx?: string;
  maxAmountTx?: string;
  minBridgeFeeTx?: string;
  minExecutorFeeTx?: string;
  peerMinExecutorFeeTx?: string;
  peerMinRollupFeeTx?: string;
  commitmentPoolTx?: string;
  bridgeProxyTx?: string;
  peerContractTx?: string;
  trustedRemoteTx?: string;
  sanctionCheckTx?: string;
  operatorTx?: string;
}

export class DepositDeployConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'network');
    BaseConfig.checkString(this.config, 'assetSymbol');
    BaseConfig.checkNumber(this.config, 'syncStart', false);
    BaseConfig.checkNumber(this.config, 'disabledAt', false);
    BaseConfig.checkEthAddress(this.config, 'address', false);
    BaseConfig.checkEthAddress(this.config, 'operator', false);
  }

  public get network(): string {
    return this.asRawContractDeployConfig().network;
  }

  public set network(net: string) {
    this.asRawContractDeployConfig().network = net;
  }

  public get assetSymbol(): string {
    return this.asRawContractDeployConfig().assetSymbol;
  }

  public set assetSymbol(asset) {
    this.asRawContractDeployConfig().assetSymbol = asset;
  }

  public get address(): string {
    return this.asRawContractDeployConfig().address || '';
  }

  public set address(addr: string) {
    this.asRawContractDeployConfig().address = addr;
  }

  public get nonce(): number | undefined {
    return this.asRawContractDeployConfig().nonce;
  }

  public set nonce(nonce: number | undefined) {
    this.asRawContractDeployConfig().nonce = nonce;
  }

  public get syncStart(): number {
    return this.asRawContractDeployConfig().syncStart || 1;
  }

  public set syncStart(start: number) {
    this.asRawContractDeployConfig().syncStart = start;
  }

  public get disabled(): boolean {
    return this.asRawContractDeployConfig().disabledAt !== undefined;
  }

  public get disabledAt(): number | undefined {
    return this.asRawContractDeployConfig().disabledAt;
  }

  public get disabledAtTx(): string | undefined {
    return this.asRawContractDeployConfig().disabledAtTx;
  }

  public updateDisabledAt(block: number, tx: string) {
    this.asRawContractDeployConfig().disabledAt = block;
    this.asRawContractDeployConfig().disabledAtTx = tx;
  }

  public get minAmount(): string | undefined {
    return this.asRawContractDeployConfig().minAmount;
  }

  public get minAmountTx(): string | undefined {
    return this.asRawContractDeployConfig().minAmountTx;
  }

  public isMinAmountChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minAmount !== fee) {
      return true;
    }
    return false;
  }

  public updateMinAmount(amount: string, tx: string) {
    this.asRawContractDeployConfig().minAmount = amount;
    this.asRawContractDeployConfig().minAmountTx = tx;
  }

  public get maxAmount(): string | undefined {
    return this.asRawContractDeployConfig().maxAmount;
  }

  public get maxAmountTx(): string | undefined {
    return this.asRawContractDeployConfig().maxAmountTx;
  }

  public isMaxAmountChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().maxAmount !== fee) {
      return true;
    }
    return false;
  }

  public updateMaxAmount(amount: string, tx: string) {
    this.asRawContractDeployConfig().maxAmount = amount;
    this.asRawContractDeployConfig().maxAmountTx = tx;
  }

  public get minBridgeFee(): string | undefined {
    return this.asRawContractDeployConfig().minBridgeFee;
  }

  public get minBridgeFeeTx(): string | undefined {
    return this.asRawContractDeployConfig().minBridgeFeeTx;
  }

  public isMinBridgeFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minBridgeFee !== fee) {
      return true;
    }
    return false;
  }

  public updateMinBridgeFee(fee: string, tx: string) {
    this.asRawContractDeployConfig().minBridgeFee = fee;
    this.asRawContractDeployConfig().minBridgeFeeTx = tx;
  }

  public get minExecutorFee(): string | undefined {
    return this.asRawContractDeployConfig().minExecutorFee;
  }

  public get minExecutorFeeTx(): string | undefined {
    return this.asRawContractDeployConfig().minExecutorFeeTx;
  }

  public isMinExecutorFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minExecutorFee !== fee) {
      return true;
    }
    return false;
  }

  public updateMinExecutorFee(fee: string, tx: string) {
    this.asRawContractDeployConfig().minExecutorFee = fee;
    this.asRawContractDeployConfig().minExecutorFeeTx = tx;
  }

  public get peerMinExecutorFee(): string | undefined {
    return this.asRawContractDeployConfig().peerMinExecutorFee;
  }

  public get peerMinExecutorFeeTx(): string | undefined {
    return this.asRawContractDeployConfig().peerMinExecutorFeeTx;
  }

  public isPeerMinExecutorFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().peerMinExecutorFee !== fee) {
      return true;
    }
    return false;
  }

  public updatePeerMinExecutorFee(fee: string, tx: string) {
    this.asRawContractDeployConfig().peerMinExecutorFee = fee;
    this.asRawContractDeployConfig().peerMinExecutorFeeTx = tx;
  }

  public get peerMinRollupFee(): string | undefined {
    return this.asRawContractDeployConfig().peerMinRollupFee;
  }

  public get peerMinRollupFeeTx(): string | undefined {
    return this.asRawContractDeployConfig().peerMinRollupFeeTx;
  }

  public isPeerMinRollupFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().peerMinRollupFee !== fee) {
      return true;
    }
    return false;
  }

  public updatePeerMinRollupFee(fee: string, tx: string) {
    this.asRawContractDeployConfig().peerMinRollupFee = fee;
    this.asRawContractDeployConfig().peerMinRollupFeeTx = tx;
  }

  public get commitmentPool(): string | undefined {
    return this.asRawContractDeployConfig().commitmentPool;
  }

  public get commitmentPoolTx(): string | undefined {
    return this.asRawContractDeployConfig().commitmentPoolTx;
  }

  public isCommitmentPoolChange(address: string): boolean {
    if (this.asRawContractDeployConfig().commitmentPool !== address) {
      return true;
    }
    return false;
  }

  public updateCommitmentPool(address: string, tx: string) {
    this.asRawContractDeployConfig().commitmentPool = address;
    this.asRawContractDeployConfig().commitmentPoolTx = tx;
  }

  public get bridgeProxy(): string | undefined {
    return this.asRawContractDeployConfig().bridgeProxy;
  }

  public get bridgeProxyTx(): string | undefined {
    return this.asRawContractDeployConfig().bridgeProxyTx;
  }

  public isBridgeProxyChange(address: string): boolean {
    if (this.asRawContractDeployConfig().bridgeProxy !== address) {
      return true;
    }
    return false;
  }

  public updateBridgeProxy(address: string, tx: string) {
    this.asRawContractDeployConfig().bridgeProxy = address;
    this.asRawContractDeployConfig().bridgeProxyTx = tx;
  }

  public get peerContract(): string | undefined {
    return this.asRawContractDeployConfig().peerContract;
  }

  public get peerContractTx(): string | undefined {
    return this.asRawContractDeployConfig().peerContractTx;
  }

  public isPeerContractChange(address: string): boolean {
    if (this.asRawContractDeployConfig().peerContract !== address) {
      return true;
    }
    return false;
  }

  public updatePeerContract(address: string, tx: string) {
    this.asRawContractDeployConfig().peerContract = address;
    this.asRawContractDeployConfig().peerContractTx = tx;
  }

  public get trustedRemote(): string | undefined {
    return this.asRawContractDeployConfig().trustedRemote;
  }

  public get trustedRemoteTx(): string | undefined {
    return this.asRawContractDeployConfig().trustedRemoteTx;
  }

  public isTrustedRemoteChange(address: string): boolean {
    if (this.asRawContractDeployConfig().trustedRemote !== address) {
      return true;
    }
    return false;
  }

  public updateTrustedRemote(address: string, tx: string) {
    this.asRawContractDeployConfig().trustedRemote = address;
    this.asRawContractDeployConfig().trustedRemoteTx = tx;
  }

  public get sanctionCheck(): boolean | undefined {
    return this.asRawContractDeployConfig().sanctionCheck;
  }

  public get sanctionCheckTx(): string | undefined {
    return this.asRawContractDeployConfig().sanctionCheckTx;
  }

  public isSanctionCheckChange(bCheck: boolean): boolean {
    if (this.asRawContractDeployConfig().sanctionCheck !== bCheck) {
      return true;
    }
    return false;
  }

  public updateSanctionCheck(bCheck: boolean, tx: string) {
    this.asRawContractDeployConfig().sanctionCheck = bCheck;
    this.asRawContractDeployConfig().sanctionCheckTx = tx;
  }

  public get operator(): string | undefined {
    return this.asRawContractDeployConfig().operator;
  }

  public get operatorTx(): string | undefined {
    return this.asRawContractDeployConfig().operatorTx;
  }

  public isOperatorChange(address: string): boolean {
    if (this.asRawContractDeployConfig().operator !== address) {
      return true;
    }
    return false;
  }

  public updateOperator(addr: string, tx: string) {
    this.asRawContractDeployConfig().operator = addr;
    this.asRawContractDeployConfig().operatorTx = tx;
  }

  public reset() {
    this.asRawContractDeployConfig().address = undefined;
    this.asRawContractDeployConfig().syncStart = undefined;
    this.asRawContractDeployConfig().nonce = undefined;
    this.asRawContractDeployConfig().disabledAt = undefined;
    this.asRawContractDeployConfig().minAmount = undefined;
    this.asRawContractDeployConfig().maxAmount = undefined;
    this.asRawContractDeployConfig().minBridgeFee = undefined;
    this.asRawContractDeployConfig().minExecutorFee = undefined;
    this.asRawContractDeployConfig().peerMinExecutorFee = undefined;
    this.asRawContractDeployConfig().peerMinRollupFee = undefined;
    this.asRawContractDeployConfig().commitmentPool = undefined;
    this.asRawContractDeployConfig().bridgeProxy = undefined;
    this.asRawContractDeployConfig().peerContract = undefined;
    this.asRawContractDeployConfig().trustedRemote = undefined;
    this.asRawContractDeployConfig().sanctionCheck = undefined;
    this.asRawContractDeployConfig().operator = undefined;
    this.asRawContractDeployConfig().disabledAtTx = undefined;
    this.asRawContractDeployConfig().minAmountTx = undefined;
    this.asRawContractDeployConfig().maxAmountTx = undefined;
    this.asRawContractDeployConfig().minBridgeFeeTx = undefined;
    this.asRawContractDeployConfig().minExecutorFeeTx = undefined;
    this.asRawContractDeployConfig().peerMinExecutorFeeTx = undefined;
    this.asRawContractDeployConfig().peerMinRollupFeeTx = undefined;
    this.asRawContractDeployConfig().commitmentPoolTx = undefined;
    this.asRawContractDeployConfig().bridgeProxyTx = undefined;
    this.asRawContractDeployConfig().peerContractTx = undefined;
    this.asRawContractDeployConfig().trustedRemoteTx = undefined;
    this.asRawContractDeployConfig().sanctionCheckTx = undefined;
    this.asRawContractDeployConfig().operatorTx = undefined;
  }

  private asRawContractDeployConfig(): RawDepositDeployConfig {
    return this.config as RawDepositDeployConfig;
  }
}
