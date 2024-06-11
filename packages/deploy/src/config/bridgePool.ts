import { check } from '@mystikonetwork/utils';
import { BaseConfig } from './base';

export interface RawPoolDeployConfig {
  network: string;
  assetSymbol: string;
  address?: string;
  nonce?: number;
  syncStart?: number;
  disabledAt?: number;
  tokenTransfer?: string;
  enqueueWhitelist?: string[];
  disabledAtTx?: string[];
  tokenTransferTx?: string;
  enqueueWhitelistTx?: string[];
}

export class PoolDeployConfig extends BaseConfig {
  private enqueueWhitelistByAddress: { [key: string]: boolean };

  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'network');
    BaseConfig.checkString(this.config, 'assetSymbol');
    BaseConfig.checkNumber(this.config, 'syncStart', false);
    BaseConfig.checkNumber(this.config, 'disabledAt', false);
    BaseConfig.checkEthAddress(this.config, 'address', false);
    BaseConfig.checkEthAddress(this.config, 'operator', false);

    this.enqueueWhitelistByAddress = {};
    this.asRawContractDeployConfig().enqueueWhitelist?.forEach((enqueueAddress) => {
      check(this.enqueueWhitelistByAddress[enqueueAddress] === undefined, 'enqueue address duplicate');
      this.enqueueWhitelistByAddress[enqueueAddress] = true;
    });
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

  public updateDisabledAt(block: number) {
    this.asRawContractDeployConfig().disabledAt = block;
  }

  public get tokenTransfer(): string | undefined {
    return this.asRawContractDeployConfig().tokenTransfer;
  }

  public get tokenTransferTx(): string | undefined {
    return this.asRawContractDeployConfig().tokenTransferTx;
  }

  public isTokenTransfer(): boolean {
    if (
      this.asRawContractDeployConfig().tokenTransfer === undefined ||
      this.asRawContractDeployConfig().tokenTransfer === ''
    ) {
      return false;
    }
    return true;
  }

  public updateTokenTransfer(transfer: string, tx: string) {
    this.asRawContractDeployConfig().tokenTransfer = transfer;
    this.asRawContractDeployConfig().tokenTransferTx = tx;
  }

  public isInEnqueueWhitelist(address: string): boolean {
    return this.enqueueWhitelistByAddress[address];
  }

  public get enqueueWhitelistTx(): string[] | undefined {
    return this.asRawContractDeployConfig().enqueueWhitelistTx;
  }

  public AddEnqueueToWhitelist(address: string, tx: string) {
    if (this.isInEnqueueWhitelist(address)) {
      return;
    }

    const raw = this.asRawContractDeployConfig();
    if (raw.enqueueWhitelist === undefined) {
      raw.enqueueWhitelist = [];
    }

    if (raw.enqueueWhitelistTx === undefined) {
      raw.enqueueWhitelistTx = [];
    }

    raw.enqueueWhitelist.push(address);
    raw.enqueueWhitelistTx.push(tx);
    this.enqueueWhitelistByAddress[address] = true;
  }

  public reset() {
    this.asRawContractDeployConfig().address = undefined;
    this.asRawContractDeployConfig().syncStart = undefined;
    this.asRawContractDeployConfig().nonce = undefined;
    this.asRawContractDeployConfig().disabledAt = undefined;
    this.asRawContractDeployConfig().tokenTransfer = undefined;
    this.asRawContractDeployConfig().enqueueWhitelist = undefined;
    this.enqueueWhitelistByAddress = {};
    this.asRawContractDeployConfig().disabledAtTx = undefined;
    this.asRawContractDeployConfig().tokenTransferTx = undefined;
    this.asRawContractDeployConfig().enqueueWhitelistTx = undefined;
  }

  private asRawContractDeployConfig(): RawPoolDeployConfig {
    return this.config as RawPoolDeployConfig;
  }
}
