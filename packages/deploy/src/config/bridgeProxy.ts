import { BaseConfig } from './base';

export interface RawBridgeProxyConfig {
  network: string;
  address: string;
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

  private asRawBridgeProxyConfig(): RawBridgeProxyConfig {
    return this.config as RawBridgeProxyConfig;
  }
}
