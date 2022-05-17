import { check } from '@mystikonetwork/utils';
import { BaseConfig } from './base';

export interface RawBridgeProxyConfig {
  network: string;
  remoteNetwork: string;
  address: string;
  executorWhitelist?: string[];
  registerWhitelist?: string[];
}

export class BridgeProxyConfig extends BaseConfig {
  private executorWhitelistByAddress: { [key: string]: boolean };

  private registerWhitelistByAddress: { [key: string]: boolean };

  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'network');
    BaseConfig.checkString(this.config, 'remoteNetwork', false);
    BaseConfig.checkEthAddress(this.config, 'address', false);

    this.executorWhitelistByAddress = {};
    this.asRawBridgeProxyConfig().executorWhitelist?.forEach((executor) => {
      check(this.executorWhitelistByAddress[executor] === undefined, 'executor address duplicate');
      this.executorWhitelistByAddress[executor] = true;
    });

    this.registerWhitelistByAddress = {};
    this.asRawBridgeProxyConfig().registerWhitelist?.forEach((executor) => {
      check(this.registerWhitelistByAddress[executor] === undefined, 'executor address duplicate');
      this.registerWhitelistByAddress[executor] = true;
    });
  }

  public get network(): string {
    return this.asRawBridgeProxyConfig().network;
  }

  public get remoteNetwork(): string {
    return this.asRawBridgeProxyConfig().remoteNetwork;
  }

  public get address(): string {
    return this.asRawBridgeProxyConfig().address;
  }

  public set address(addr: string) {
    this.asRawBridgeProxyConfig().address = addr;
  }

  public isInExecutorWhitelist(address: string): boolean {
    return this.executorWhitelistByAddress[address];
  }

  public addExecutorToWhitelist(address: string) {
    if (this.isInExecutorWhitelist(address)) {
      return;
    }

    const raw = this.asRawBridgeProxyConfig();
    if (raw.executorWhitelist === undefined) {
      raw.executorWhitelist = [];
    }

    raw.executorWhitelist.push(address);
    this.executorWhitelistByAddress[address] = true;
  }

  public isInRegisterWhitelist(address: string): boolean {
    return this.registerWhitelistByAddress[address];
  }

  public addRegisterToWhitelist(address: string) {
    if (this.isInRegisterWhitelist(address)) {
      return;
    }

    const raw = this.asRawBridgeProxyConfig();
    if (raw.registerWhitelist === undefined) {
      raw.registerWhitelist = [];
    }

    raw.registerWhitelist.push(address);
    this.registerWhitelistByAddress[address] = true;
  }

  public reset() {
    this.address = '';
    this.asRawBridgeProxyConfig().executorWhitelist = undefined;
    this.executorWhitelistByAddress = {};
    this.asRawBridgeProxyConfig().registerWhitelist = undefined;
    this.registerWhitelistByAddress = {};
  }

  private asRawBridgeProxyConfig(): RawBridgeProxyConfig {
    return this.config as RawBridgeProxyConfig;
  }
}
