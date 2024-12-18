import { BaseConfig } from './base';

export interface RawBridgeFeeConfig {
  network: string;
  minimal: string;
  gasLimit?: string;
}

export class BridgeFeeConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'network');
    BaseConfig.checkString(this.config, 'minimal');
  }

  public get network(): string {
    return this.asRawBridgeProxyConfig().network;
  }

  public get minimal(): string {
    return this.asRawBridgeProxyConfig().minimal;
  }

  public get gasLimit(): string | undefined {
    return this.asRawBridgeProxyConfig().gasLimit;
  }

  private asRawBridgeProxyConfig(): RawBridgeFeeConfig {
    return this.config as RawBridgeFeeConfig;
  }
}
