import { BaseConfig } from './base';

export interface RawDepositDeployConfig {
  network: string;
  assetSymbol: string;
  address?: string;
  nonce?: number;
  syncStart?: number;
  disabledAt?: number;
  commitmentPool?: string;
  bridgeProxy?: string;
  peerContract?: string;
  lzTrustedRemote?: string;
  lzEndpoint?: string;
  disabledAtTx?: string;
  commitmentPoolTx?: string;
  bridgeProxyTx?: string;
  peerContractTx?: string;
  lzTrustedRemoteTx?: string;
  lzEndpointTx?: string;
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

  public get lzTrustedRemote(): string | undefined {
    return this.asRawContractDeployConfig().lzTrustedRemote;
  }

  public get lzTrustedRemoteTx(): string | undefined {
    return this.asRawContractDeployConfig().lzTrustedRemoteTx;
  }

  public isLZTrustedRemoteChange(address: string): boolean {
    if (this.asRawContractDeployConfig().lzTrustedRemote !== address) {
      return true;
    }
    return false;
  }

  public updateLZTrustedRemote(address: string, tx: string) {
    this.asRawContractDeployConfig().lzTrustedRemote = address;
    this.asRawContractDeployConfig().lzTrustedRemoteTx = tx;
  }

  public get lzEndpoint(): string | undefined {
    return this.asRawContractDeployConfig().lzEndpoint;
  }

  public get lzEndpointTx(): string | undefined {
    return this.asRawContractDeployConfig().lzEndpointTx;
  }

  public isLzEndpointChange(endpoint: string): boolean {
    if (this.asRawContractDeployConfig().lzEndpoint !== endpoint) {
      return true;
    }
    return false;
  }

  public updateLzEndpoint(endpoint: string, tx: string) {
    this.asRawContractDeployConfig().lzEndpoint = endpoint;
    this.asRawContractDeployConfig().lzEndpointTx = tx;
  }

  public reset() {
    this.asRawContractDeployConfig().address = undefined;
    this.asRawContractDeployConfig().syncStart = undefined;
    this.asRawContractDeployConfig().nonce = undefined;
    this.asRawContractDeployConfig().disabledAt = undefined;
    this.asRawContractDeployConfig().commitmentPool = undefined;
    this.asRawContractDeployConfig().bridgeProxy = undefined;
    this.asRawContractDeployConfig().peerContract = undefined;
    this.asRawContractDeployConfig().lzTrustedRemote = undefined;
    this.asRawContractDeployConfig().disabledAtTx = undefined;
    this.asRawContractDeployConfig().commitmentPoolTx = undefined;
    this.asRawContractDeployConfig().bridgeProxyTx = undefined;
    this.asRawContractDeployConfig().peerContractTx = undefined;
    this.asRawContractDeployConfig().lzTrustedRemoteTx = undefined;
  }

  private asRawContractDeployConfig(): RawDepositDeployConfig {
    return this.config as RawDepositDeployConfig;
  }
}
