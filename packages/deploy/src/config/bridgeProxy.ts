import { BaseConfig } from './base';

export interface RawBridgeProxyConfig {
  network: string;
  address: string;
  isExecutorWhitelistSet?: boolean;
  isRegisterWhitelistSet?: boolean;
}

export class BridgeProxyConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'network');
    BaseConfig.checkEthAddress(this.config, 'address', false);
  }

  public get network(): string {
    return this.asRawBridgeProxyConfig().network;
  }

  public get address(): string {
    return this.asRawBridgeProxyConfig().address;
  }

  public set address(addr: string) {
    this.asRawBridgeProxyConfig().address = addr;
  }

  public get isExecutorWhitelistSet(): boolean {
    return this.asRawBridgeProxyConfig().isExecutorWhitelistSet || false;
  }

  public set isExecutorWhitelistSet(set: boolean) {
    this.asRawBridgeProxyConfig().isExecutorWhitelistSet = set;
  }

  public get isRegisterWhitelistSet(): boolean {
    return this.asRawBridgeProxyConfig().isRegisterWhitelistSet || false;
  }

  public set isRegisterWhitelistSet(set: boolean) {
    this.asRawBridgeProxyConfig().isRegisterWhitelistSet = set;
  }

  public reset() {
    this.isExecutorWhitelistSet = false;
    this.isRegisterWhitelistSet = false;
  }

  private asRawBridgeProxyConfig(): RawBridgeProxyConfig {
    return this.config as RawBridgeProxyConfig;
  }
}
