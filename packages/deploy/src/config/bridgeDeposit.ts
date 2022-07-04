import { BaseConfig } from './base';

export interface RawDepositDeployConfig {
  network: string;
  assetSymbol: string;
  address?: string;
  syncStart?: number;
  minAmount?: string;
  minBridgeFee?: string;
  minExecutorFee?: string;
  peerMinExecutorFee?: string;
  peerMinRollupFee?: string;
  commitmentPool?: string;
  bridgeProxy?: string;
  peerContract?: string;
  trustedRemote?: string;
  sanctionCheckDisable?: boolean;
  operator?: string;
}

export class DepositDeployConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'network');
    BaseConfig.checkString(this.config, 'assetSymbol');
    BaseConfig.checkNumber(this.config, 'syncStart', false);
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

  public get syncStart(): number {
    return this.asRawContractDeployConfig().syncStart || 1;
  }

  public set syncStart(start: number) {
    this.asRawContractDeployConfig().syncStart = start;
  }

  public get minAmount(): string | undefined {
    return this.asRawContractDeployConfig().minAmount;
  }

  public isMinAmountChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minAmount !== fee) {
      return true;
    }
    return false;
  }

  public updateMinAmount(amount: string) {
    this.asRawContractDeployConfig().minAmount = amount;
  }

  public isMinBridgeFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minBridgeFee !== fee) {
      return true;
    }
    return false;
  }

  public updateMinBridgeFee(fee: string) {
    this.asRawContractDeployConfig().minBridgeFee = fee;
  }

  public get minExecutorFee(): string | undefined {
    return this.asRawContractDeployConfig().minExecutorFee;
  }

  public isMinExecutorFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minExecutorFee !== fee) {
      return true;
    }
    return false;
  }

  public updateMinExecutorFee(fee: string) {
    this.asRawContractDeployConfig().minExecutorFee = fee;
  }

  public isPeerMinExecutorFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().peerMinExecutorFee !== fee) {
      return true;
    }
    return false;
  }

  public get peerMinExecutorFee(): string | undefined {
    return this.asRawContractDeployConfig().peerMinExecutorFee;
  }

  public updatePeerMinExecutorFee(fee: string) {
    this.asRawContractDeployConfig().peerMinExecutorFee = fee;
  }

  public isPeerMinRollupFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().peerMinRollupFee !== fee) {
      return true;
    }
    return false;
  }

  public updatePeerMinRollupFee(fee: string) {
    this.asRawContractDeployConfig().peerMinRollupFee = fee;
  }

  public isCommitmentPoolChange(address: string): boolean {
    if (this.asRawContractDeployConfig().commitmentPool !== address) {
      return true;
    }
    return false;
  }

  public updateCommitmentPool(address: string) {
    this.asRawContractDeployConfig().commitmentPool = address;
  }

  public isBridgeProxyChange(address: string): boolean {
    if (this.asRawContractDeployConfig().bridgeProxy !== address) {
      return true;
    }
    return false;
  }

  public updateBridgeProxy(address: string) {
    this.asRawContractDeployConfig().bridgeProxy = address;
  }

  public isPeerContractChange(address: string): boolean {
    if (this.asRawContractDeployConfig().peerContract !== address) {
      return true;
    }
    return false;
  }

  public updatePeerContract(address: string) {
    this.asRawContractDeployConfig().peerContract = address;
  }

  public isTrustedRemoteChange(address: string): boolean {
    if (this.asRawContractDeployConfig().trustedRemote !== address) {
      return true;
    }
    return false;
  }

  public updateTrustedRemote(address: string) {
    this.asRawContractDeployConfig().trustedRemote = address;
  }

  public isSanctionCheckDisableChange(check: boolean): boolean {
    if (this.asRawContractDeployConfig().sanctionCheckDisable !== check) {
      return true;
    }
    return false;
  }

  public updateSanctionCheckDisable(check: boolean) {
    this.asRawContractDeployConfig().sanctionCheckDisable = check;
  }

  public get operator(): string | undefined {
    return this.asRawContractDeployConfig().operator;
  }

  public updateOperator(addr: string) {
    this.asRawContractDeployConfig().operator = addr;
  }

  public isOperatorChange(address: string): boolean {
    if (this.asRawContractDeployConfig().operator !== address) {
      return true;
    }
    return false;
  }

  public reset() {
    this.asRawContractDeployConfig().address = undefined;
    this.asRawContractDeployConfig().syncStart = undefined;
    this.asRawContractDeployConfig().minAmount = undefined;
    this.asRawContractDeployConfig().minBridgeFee = undefined;
    this.asRawContractDeployConfig().minExecutorFee = undefined;
    this.asRawContractDeployConfig().peerMinExecutorFee = undefined;
    this.asRawContractDeployConfig().peerMinRollupFee = undefined;
    this.asRawContractDeployConfig().commitmentPool = undefined;
    this.asRawContractDeployConfig().bridgeProxy = undefined;
    this.asRawContractDeployConfig().peerContract = undefined;
    this.asRawContractDeployConfig().sanctionCheckDisable = undefined;
  }

  private asRawContractDeployConfig(): RawDepositDeployConfig {
    return this.config as RawDepositDeployConfig;
  }
}
