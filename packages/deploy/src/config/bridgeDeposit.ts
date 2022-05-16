import { BaseConfig } from './base';

export interface RawDepositDeployConfig {
  network: string;
  assetSymbol: string;
  address?: string;
  syncStart?: number;
  isMinAmountSet?: boolean;
  isMinBridgeFeeSet?: boolean;
  isMinExecutorFeeSet?: boolean;
  isPeerMinExecutorFeeSet?: boolean;
  isPeerMinRollupFeeSet?: boolean;
  isCommitmentPoolSet?: boolean;
  isBridgeProxySet?: boolean;
  isPeerContractSet?: boolean;
  isSanctionCheckSet?: boolean;
}

export class DepositDeployConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'network');
    BaseConfig.checkString(this.config, 'assetSymbol');
    BaseConfig.checkNumber(this.config, 'syncStart', false);
    BaseConfig.checkEthAddress(this.config, 'address', false);
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

  public get syncStart(): number {
    return this.asRawContractDeployConfig().syncStart || 1;
  }

  public set syncStart(start: number) {
    this.asRawContractDeployConfig().syncStart = start;
  }

  public get isMinBridgeFeeSet(): boolean {
    return this.asRawContractDeployConfig().isMinBridgeFeeSet || false;
  }

  public set isMinBridgeFeeSet(set: boolean) {
    this.asRawContractDeployConfig().isMinBridgeFeeSet = set;
  }

  public get isMinExecutorFeeSet(): boolean {
    return this.asRawContractDeployConfig().isMinExecutorFeeSet || false;
  }

  public set isMinExecutorFeeSet(set: boolean) {
    this.asRawContractDeployConfig().isMinExecutorFeeSet = set;
  }

  public get isPeerMinExecutorFeeSet(): boolean {
    return this.asRawContractDeployConfig().isPeerMinExecutorFeeSet || false;
  }

  public set isPeerMinExecutorFeeSet(set: boolean) {
    this.asRawContractDeployConfig().isPeerMinExecutorFeeSet = set;
  }

  public get isPeerMinRollupFeeSet(): boolean {
    return this.asRawContractDeployConfig().isPeerMinRollupFeeSet || false;
  }

  public set isPeerMinRollupFeeSet(set: boolean) {
    this.asRawContractDeployConfig().isPeerMinRollupFeeSet = set;
  }

  public get isMinAmountSet(): boolean {
    return this.asRawContractDeployConfig().isMinAmountSet || false;
  }

  public set isMinAmountSet(set: boolean) {
    this.asRawContractDeployConfig().isMinAmountSet = set;
  }

  public get isCommitmentPoolSet(): boolean {
    return this.asRawContractDeployConfig().isCommitmentPoolSet || false;
  }

  public set isCommitmentPoolSet(set: boolean) {
    this.asRawContractDeployConfig().isCommitmentPoolSet = set;
  }

  public get isBridgeProxySet(): boolean {
    return this.asRawContractDeployConfig().isBridgeProxySet || false;
  }

  public set isBridgeProxySet(set: boolean) {
    this.asRawContractDeployConfig().isBridgeProxySet = set;
  }

  public get isPeerContractSet(): boolean {
    return this.asRawContractDeployConfig().isPeerContractSet || false;
  }

  public set isPeerContractSet(set: boolean) {
    this.asRawContractDeployConfig().isPeerContractSet = set;
  }

  public get isSanctionCheckSet(): boolean {
    return this.asRawContractDeployConfig().isSanctionCheckSet || false;
  }

  public set isSanctionCheckSet(set: boolean) {
    this.asRawContractDeployConfig().isSanctionCheckSet = set;
  }

  public reset() {
    this.address = '';
    this.syncStart = 0;
    this.isMinAmountSet = false;
    this.isCommitmentPoolSet = false;
    this.isMinBridgeFeeSet = false;
    this.isMinExecutorFeeSet = false;
    this.isPeerMinExecutorFeeSet = false;
    this.isPeerMinRollupFeeSet = false;
    this.isBridgeProxySet = false;
    this.isPeerContractSet = false;
    this.isSanctionCheckSet = false;
  }

  private asRawContractDeployConfig(): RawDepositDeployConfig {
    return this.config as RawDepositDeployConfig;
  }
}
