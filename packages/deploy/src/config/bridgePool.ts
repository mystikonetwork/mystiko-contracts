import { BaseConfig } from './base';

export interface RawPoolDeployConfig {
  network: string;
  assetSymbol: string;
  address?: string;
  syncStart?: number;
  isMinRollupFeeSet?: boolean;
  isRollup1VerifierSet?: boolean;
  isRollup4VerifierSet?: boolean;
  isRollup16VerifierSet?: boolean;
  isTransact1x0VerifierSet?: boolean;
  isTransact1x1VerifierSet?: boolean;
  isTransact1x2VerifierSet?: boolean;
  isTransact2x0VerifierSet?: boolean;
  isTransact2x1VerifierSet?: boolean;
  isTransact2x2VerifierSet?: boolean;
  isRollupWhitelistSet?: boolean;
  isEnqueueWhitelistSet?: boolean;
  isSanctionCheckSet?: boolean;
  isTokenTransferSet?: boolean;
}

export class PoolDeployConfig extends BaseConfig {
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

  public get isMinRollupFeeSet(): boolean {
    return this.asRawContractDeployConfig().isMinRollupFeeSet || false;
  }

  public set isMinRollupFeeSet(set: boolean) {
    this.asRawContractDeployConfig().isMinRollupFeeSet = set;
  }

  public get isRollup1VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isRollup1VerifierSet || false;
  }

  public set isRollup1VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isRollup1VerifierSet = set;
  }

  public get isRollup4VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isRollup4VerifierSet || false;
  }

  public set isRollup4VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isRollup4VerifierSet = set;
  }

  public get isRollup16VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isRollup16VerifierSet || false;
  }

  public set isRollup16VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isRollup16VerifierSet = set;
  }

  public get isTransact1x0VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isTransact1x0VerifierSet || false;
  }

  public set isTransact1x0VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isTransact1x0VerifierSet = set;
  }

  public get isTransact1x1VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isTransact1x1VerifierSet || false;
  }

  public set isTransact1x1VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isTransact1x1VerifierSet = set;
  }

  public get isTransact1x2VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isTransact1x2VerifierSet || false;
  }

  public set isTransact1x2VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isTransact1x2VerifierSet = set;
  }

  public get isTransact2x0VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isTransact2x0VerifierSet || false;
  }

  public set isTransact2x0VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isTransact2x0VerifierSet = set;
  }

  public get isTransact2x1VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isTransact2x1VerifierSet || false;
  }

  public set isTransact2x1VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isTransact2x1VerifierSet = set;
  }

  public get isTransact2x2VerifierSet(): boolean {
    return this.asRawContractDeployConfig().isTransact2x2VerifierSet || false;
  }

  public set isTransact2x2VerifierSet(set: boolean) {
    this.asRawContractDeployConfig().isTransact2x2VerifierSet = set;
  }

  public get isRollupWhitelistSet(): boolean {
    return this.asRawContractDeployConfig().isRollupWhitelistSet || false;
  }

  public set isRollupWhitelistSet(set: boolean) {
    this.asRawContractDeployConfig().isRollupWhitelistSet = set;
  }

  public get isEnqueueWhitelistSet(): boolean {
    return this.asRawContractDeployConfig().isEnqueueWhitelistSet || false;
  }

  public set isEnqueueWhitelistSet(set: boolean) {
    this.asRawContractDeployConfig().isEnqueueWhitelistSet = set;
  }

  public get isSanctionCheckSet(): boolean {
    return this.asRawContractDeployConfig().isSanctionCheckSet || false;
  }

  public set isSanctionCheckSet(set: boolean) {
    this.asRawContractDeployConfig().isSanctionCheckSet = set;
  }

  public get isTokenTransferSet(): boolean {
    return this.asRawContractDeployConfig().isTokenTransferSet || false;
  }

  public set isTokenTransferSet(set: boolean) {
    this.asRawContractDeployConfig().isTokenTransferSet = set;
  }

  public reset() {
    this.isMinRollupFeeSet = false;
    this.isRollup1VerifierSet = false;
    this.isRollup4VerifierSet = false;
    this.isRollup16VerifierSet = false;
    this.isTransact1x0VerifierSet = false;
    this.isTransact1x1VerifierSet = false;
    this.isTransact1x2VerifierSet = false;
    this.isTransact2x0VerifierSet = false;
    this.isTransact2x1VerifierSet = false;
    this.isTransact2x2VerifierSet = false;
    this.isRollupWhitelistSet = false;
    this.isEnqueueWhitelistSet = false;
    this.isSanctionCheckSet = false;
    this.isTokenTransferSet = false;
  }

  private asRawContractDeployConfig(): RawPoolDeployConfig {
    return this.config as RawPoolDeployConfig;
  }
}
