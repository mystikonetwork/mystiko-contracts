import { check } from '@mystikonetwork/utils';
import { BaseConfig } from './base';

export interface RawPoolDeployConfig {
  network: string;
  assetSymbol: string;
  address?: string;
  nonce?: number;
  syncStart?: number;
  disabledAt?: number;
  minRollupFee?: string;
  rollup1Verifier?: string;
  rollup2Verifier?: string;
  rollup4Verifier?: string;
  rollup8Verifier?: string;
  rollup16Verifier?: string;
  transact1x0Verifier?: string;
  transact1x1Verifier?: string;
  transact1x2Verifier?: string;
  transact2x0Verifier?: string;
  transact2x1Verifier?: string;
  transact2x2Verifier?: string;
  sanctionCheck?: boolean;
  tokenTransfer?: string;
  operator?: string;
  enqueueWhitelist?: string[];
  rollupWhitelist?: string[];
  auditors?: string[];
}

export class PoolDeployConfig extends BaseConfig {
  private enqueueWhitelistByAddress: { [key: string]: boolean };

  private rollupWhitelistByAddress: { [key: string]: boolean };

  private auditorsByAddress: { [key: string]: boolean };

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

    this.rollupWhitelistByAddress = {};
    this.asRawContractDeployConfig().rollupWhitelist?.forEach((rollupAddress) => {
      check(this.rollupWhitelistByAddress[rollupAddress] === undefined, 'rollup address duplicate');
      this.rollupWhitelistByAddress[rollupAddress] = true;
    });

    this.auditorsByAddress = {};
    this.asRawContractDeployConfig().auditors?.forEach((auditos) => {
      check(this.auditorsByAddress[auditos] === undefined, 'auditor address duplicate');
      this.auditorsByAddress[auditos] = true;
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

  public set disabledAt(block: number | undefined) {
    this.asRawContractDeployConfig().disabledAt = block;
  }

  public get minRollupFee(): string | undefined {
    return this.asRawContractDeployConfig().minRollupFee;
  }

  public isMinRollupFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minRollupFee !== fee) {
      return true;
    }
    return false;
  }

  public updateMinRollupFee(fee: string) {
    this.asRawContractDeployConfig().minRollupFee = fee;
  }

  public isRollup1VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup1Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup1Verifier(address: string) {
    this.asRawContractDeployConfig().rollup1Verifier = address;
  }

  public isRollup2VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup2Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup2Verifier(address: string) {
    this.asRawContractDeployConfig().rollup2Verifier = address;
  }

  public isRollup4VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup4Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup4Verifier(address: string) {
    this.asRawContractDeployConfig().rollup4Verifier = address;
  }

  public isRollup8VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup8Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup8Verifier(address: string) {
    this.asRawContractDeployConfig().rollup8Verifier = address;
  }

  public isRollup16VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup16Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup16Verifier(address: string) {
    this.asRawContractDeployConfig().rollup16Verifier = address;
  }

  public isTransact1x0VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact1x0Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact1x0Verifier(address: string) {
    this.asRawContractDeployConfig().transact1x0Verifier = address;
  }

  public isTransact1x1VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact1x1Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact1x1Verifier(address: string) {
    this.asRawContractDeployConfig().transact1x1Verifier = address;
  }

  public isTransact1x2VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact1x2Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact1x2Verifier(address: string) {
    this.asRawContractDeployConfig().transact1x2Verifier = address;
  }

  public isTransact2x0VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact2x0Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact2x0Verifier(address: string) {
    this.asRawContractDeployConfig().transact2x0Verifier = address;
  }

  public isTransact2x1VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact2x1Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact2x1Verifier(address: string) {
    this.asRawContractDeployConfig().transact2x1Verifier = address;
  }

  public isTransact2x2VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact2x2Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact2x2Verifier(address: string) {
    this.asRawContractDeployConfig().transact2x2Verifier = address;
  }

  public isTransact1x1VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact1x1Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact1x1VerifierDisabled() {
    this.asRawContractDeployConfig().transact1x1Verifier = 'disabled';
  }

  public isTransact1x2VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact1x2Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact1x2VerifierDisabled() {
    this.asRawContractDeployConfig().transact1x2Verifier = 'disabled';
  }

  public isTransact2x1VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact2x1Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact2x1VerifierDisabled() {
    this.asRawContractDeployConfig().transact2x1Verifier = 'disabled';
  }

  public isTransact2x2VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact2x2Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact2x2VerifierDisabled() {
    this.asRawContractDeployConfig().transact2x2Verifier = 'disabled';
  }

  public get sanctionCheck(): boolean | undefined {
    return this.asRawContractDeployConfig().sanctionCheck;
  }

  public isSanctionCheckChange(bCheck: boolean): boolean {
    if (this.asRawContractDeployConfig().sanctionCheck !== bCheck) {
      return true;
    }
    return false;
  }

  public updateSanctionCheck(bCheck: boolean) {
    this.asRawContractDeployConfig().sanctionCheck = bCheck;
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

  public get tokenTransfer(): string | undefined {
    return this.asRawContractDeployConfig().tokenTransfer;
  }

  public updateTokenTransfer(transfer: string) {
    this.asRawContractDeployConfig().tokenTransfer = transfer;
  }

  public get operator(): string | undefined {
    return this.asRawContractDeployConfig().operator;
  }

  public updateOperator(addr: string) {
    this.asRawContractDeployConfig().operator = addr;
  }

  public isOperatorChange(addr: string) {
    if (this.asRawContractDeployConfig().operator === addr) {
      return false;
    }
    return true;
  }

  public isInRollupWhitelist(address: string): boolean {
    return this.rollupWhitelistByAddress[address];
  }

  public addRollupToWhitelist(address: string) {
    if (this.isInRollupWhitelist(address)) {
      return;
    }

    const raw = this.asRawContractDeployConfig();
    if (raw.rollupWhitelist === undefined) {
      raw.rollupWhitelist = [];
    }

    raw.rollupWhitelist.push(address);
    this.rollupWhitelistByAddress[address] = true;
  }

  public get auditorsCount(): number {
    const { auditors } = this.asRawContractDeployConfig();
    if (auditors === undefined) {
      return 0;
    }

    return auditors.length;
  }

  public isInAuditors(address: string): boolean {
    return this.auditorsByAddress[address];
  }

  public addAuditor(address: string) {
    if (this.isInAuditors(address)) {
      return;
    }

    const raw = this.asRawContractDeployConfig();
    if (raw.auditors === undefined) {
      raw.auditors = [];
    }

    raw.auditors.push(address);
    this.auditorsByAddress[address] = true;
  }

  public isInEnqueueWhitelist(address: string): boolean {
    return this.enqueueWhitelistByAddress[address];
  }

  public AddEnqueueToWhitelist(address: string) {
    if (this.isInEnqueueWhitelist(address)) {
      return;
    }

    const raw = this.asRawContractDeployConfig();
    if (raw.enqueueWhitelist === undefined) {
      raw.enqueueWhitelist = [];
    }

    raw.enqueueWhitelist.push(address);
    this.enqueueWhitelistByAddress[address] = true;
  }

  public reset() {
    this.asRawContractDeployConfig().address = undefined;
    this.asRawContractDeployConfig().syncStart = undefined;
    this.asRawContractDeployConfig().disabledAt = undefined;
    this.asRawContractDeployConfig().minRollupFee = undefined;
    this.asRawContractDeployConfig().rollup1Verifier = undefined;
    this.asRawContractDeployConfig().rollup2Verifier = undefined;
    this.asRawContractDeployConfig().rollup4Verifier = undefined;
    this.asRawContractDeployConfig().rollup8Verifier = undefined;
    this.asRawContractDeployConfig().rollup16Verifier = undefined;
    this.asRawContractDeployConfig().transact1x0Verifier = undefined;
    this.asRawContractDeployConfig().transact1x1Verifier = undefined;
    this.asRawContractDeployConfig().transact1x2Verifier = undefined;
    this.asRawContractDeployConfig().transact2x0Verifier = undefined;
    this.asRawContractDeployConfig().transact2x1Verifier = undefined;
    this.asRawContractDeployConfig().transact2x2Verifier = undefined;
    this.asRawContractDeployConfig().sanctionCheck = undefined;
    this.asRawContractDeployConfig().tokenTransfer = undefined;
    this.asRawContractDeployConfig().rollupWhitelist = undefined;
    this.rollupWhitelistByAddress = {};
    this.asRawContractDeployConfig().enqueueWhitelist = undefined;
    this.enqueueWhitelistByAddress = {};
    this.asRawContractDeployConfig().operator = undefined;
    this.auditorsByAddress = {};
    this.asRawContractDeployConfig().auditors = undefined;
    this.asRawContractDeployConfig().nonce = undefined;
  }

  private asRawContractDeployConfig(): RawPoolDeployConfig {
    return this.config as RawPoolDeployConfig;
  }
}
