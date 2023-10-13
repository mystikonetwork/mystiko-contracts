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
  disabledAtTx?: string[];
  minRollupFeeTx?: string;
  rollup1VerifierTx?: string;
  rollup2VerifierTx?: string;
  rollup4VerifierTx?: string;
  rollup8VerifierTx?: string;
  rollup16VerifierTx?: string;
  transact1x0VerifierTx?: string;
  transact1x1VerifierTx?: string;
  transact1x2VerifierTx?: string;
  transact2x0VerifierTx?: string;
  transact2x1VerifierTx?: string;
  transact2x2VerifierTx?: string;
  sanctionCheckTx?: string;
  tokenTransferTx?: string;
  operatorTx?: string;
  enqueueWhitelistTx?: string[];
  rollupWhitelistTx?: string[];
  auditorsTx?: string[];
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
    this.asRawContractDeployConfig().auditors?.forEach((auditor) => {
      check(this.auditorsByAddress[auditor] === undefined, 'auditor address duplicate');
      this.auditorsByAddress[auditor] = true;
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

  public get minRollupFee(): string | undefined {
    return this.asRawContractDeployConfig().minRollupFee;
  }

  public get minRollupFeeTx(): string | undefined {
    return this.asRawContractDeployConfig().minRollupFeeTx;
  }

  public isMinRollupFeeChange(fee: string): boolean {
    if (this.asRawContractDeployConfig().minRollupFee !== fee) {
      return true;
    }
    return false;
  }

  public updateMinRollupFee(fee: string, tx: string) {
    this.asRawContractDeployConfig().minRollupFee = fee;
    this.asRawContractDeployConfig().minRollupFeeTx = tx;
  }

  public get Rollup1Verifier(): string | undefined {
    return this.asRawContractDeployConfig().rollup1Verifier;
  }

  public get Rollup1VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().rollup1VerifierTx;
  }

  public isRollup1VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup1Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup1Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().rollup1Verifier = address;
    this.asRawContractDeployConfig().rollup1VerifierTx = tx;
  }

  public get Rollup2Verifier(): string | undefined {
    return this.asRawContractDeployConfig().rollup2Verifier;
  }

  public get Rollup2VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().rollup2VerifierTx;
  }

  public isRollup2VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup2Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup2Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().rollup2Verifier = address;
    this.asRawContractDeployConfig().rollup2VerifierTx = tx;
  }

  public get Rollup4Verifier(): string | undefined {
    return this.asRawContractDeployConfig().rollup4Verifier;
  }

  public get Rollup4VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().rollup4VerifierTx;
  }

  public isRollup4VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup4Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup4Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().rollup4Verifier = address;
    this.asRawContractDeployConfig().rollup4VerifierTx = tx;
  }

  public get Rollup8Verifier(): string | undefined {
    return this.asRawContractDeployConfig().rollup8Verifier;
  }

  public get Rollup8VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().rollup8VerifierTx;
  }

  public isRollup8VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup8Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup8Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().rollup8Verifier = address;
    this.asRawContractDeployConfig().rollup8VerifierTx = tx;
  }

  public get Rollup16Verifier(): string | undefined {
    return this.asRawContractDeployConfig().rollup16Verifier;
  }

  public get Rollup16VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().rollup16VerifierTx;
  }

  public isRollup16VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().rollup16Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateRollup16Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().rollup16Verifier = address;
    this.asRawContractDeployConfig().rollup16VerifierTx = tx;
  }

  public get Transact1x0Verifier(): string | undefined {
    return this.asRawContractDeployConfig().transact1x0Verifier;
  }

  public get Transact1x0VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().transact1x0VerifierTx;
  }

  public isTransact1x0VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact1x0Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact1x0Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().transact1x0Verifier = address;
    this.asRawContractDeployConfig().transact1x0VerifierTx = tx;
  }

  public get Transact1x1Verifier(): string | undefined {
    return this.asRawContractDeployConfig().transact1x1Verifier;
  }

  public get Transact1x1VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().transact1x1VerifierTx;
  }

  public isTransact1x1VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact1x1Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact1x1Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().transact1x1Verifier = address;
    this.asRawContractDeployConfig().transact1x1VerifierTx = tx;
  }

  public get Transact1x2Verifier(): string | undefined {
    return this.asRawContractDeployConfig().transact1x2Verifier;
  }

  public get Transact1x2VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().transact1x2VerifierTx;
  }

  public isTransact1x2VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact1x2Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact1x2Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().transact1x2Verifier = address;
    this.asRawContractDeployConfig().transact1x2VerifierTx = tx;
  }

  public get Transact2x0Verifier(): string | undefined {
    return this.asRawContractDeployConfig().transact2x0Verifier;
  }

  public get Transact2x0VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().transact2x0VerifierTx;
  }

  public isTransact2x0VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact2x0Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact2x0Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().transact2x0Verifier = address;
    this.asRawContractDeployConfig().transact2x0VerifierTx = tx;
  }

  public get Transact2x1Verifier(): string | undefined {
    return this.asRawContractDeployConfig().transact2x1Verifier;
  }

  public get Transact2x1VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().transact2x1VerifierTx;
  }

  public isTransact2x1VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact2x1Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact2x1Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().transact2x1Verifier = address;
    this.asRawContractDeployConfig().transact2x1VerifierTx = tx;
  }

  public get Transact2x2Verifier(): string | undefined {
    return this.asRawContractDeployConfig().transact2x2Verifier;
  }

  public get Transact2x2VerifierTx(): string | undefined {
    return this.asRawContractDeployConfig().transact2x2VerifierTx;
  }

  public isTransact2x2VerifierChange(address: string): boolean {
    if (this.asRawContractDeployConfig().transact2x2Verifier !== address) {
      return true;
    }
    return false;
  }

  public updateTransact2x2Verifier(address: string, tx: string) {
    this.asRawContractDeployConfig().transact2x2Verifier = address;
    this.asRawContractDeployConfig().transact2x2VerifierTx = tx;
  }

  public isTransact1x1VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact1x1Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact1x1VerifierDisabled(tx: string) {
    this.asRawContractDeployConfig().transact1x1Verifier = 'disabled';
    this.asRawContractDeployConfig().transact1x1VerifierTx = tx;
  }

  public isTransact1x2VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact1x2Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact1x2VerifierDisabled(tx: string) {
    this.asRawContractDeployConfig().transact1x2Verifier = 'disabled';
    this.asRawContractDeployConfig().transact1x2VerifierTx = tx;
  }

  public isTransact2x1VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact2x1Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact2x1VerifierDisabled(tx: string) {
    this.asRawContractDeployConfig().transact2x1Verifier = 'disabled';
    this.asRawContractDeployConfig().transact2x1VerifierTx = tx;
  }

  public isTransact2x2VerifierDisabled(): boolean {
    if (this.asRawContractDeployConfig().transact2x2Verifier !== 'disabled') {
      return true;
    }
    return false;
  }

  public setTransact2x2VerifierDisabled(tx: string) {
    this.asRawContractDeployConfig().transact2x2Verifier = 'disabled';
    this.asRawContractDeployConfig().transact2x2VerifierTx = tx;
  }

  public get sanctionCheck(): boolean | undefined {
    return this.asRawContractDeployConfig().sanctionCheck;
  }

  public get sanctionCheckTx(): string | undefined {
    return this.asRawContractDeployConfig().sanctionCheckTx;
  }

  public isSanctionCheckChange(bCheck: boolean): boolean {
    if (this.asRawContractDeployConfig().sanctionCheck !== bCheck) {
      return true;
    }
    return false;
  }

  public updateSanctionCheck(bCheck: boolean, tx: string) {
    this.asRawContractDeployConfig().sanctionCheck = bCheck;
    this.asRawContractDeployConfig().sanctionCheckTx = tx;
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

  public get operator(): string | undefined {
    return this.asRawContractDeployConfig().operator;
  }

  public get operatorTx(): string | undefined {
    return this.asRawContractDeployConfig().operatorTx;
  }

  public isOperatorChange(addr: string) {
    if (this.asRawContractDeployConfig().operator === addr) {
      return false;
    }
    return true;
  }

  public updateOperator(addr: string, tx: string) {
    this.asRawContractDeployConfig().operator = addr;
    this.asRawContractDeployConfig().operatorTx = tx;
  }

  public isInRollupWhitelist(address: string): boolean {
    return this.rollupWhitelistByAddress[address];
  }

  public get rollupWhitelistTx(): string[] | undefined {
    return this.asRawContractDeployConfig().rollupWhitelistTx;
  }

  public addRollupToWhitelist(address: string, tx: string) {
    if (this.isInRollupWhitelist(address)) {
      return;
    }

    const raw = this.asRawContractDeployConfig();
    if (raw.rollupWhitelist === undefined) {
      raw.rollupWhitelist = [];
    }

    if (raw.rollupWhitelistTx === undefined) {
      raw.rollupWhitelistTx = [];
    }

    raw.rollupWhitelist.push(address);
    raw.rollupWhitelistTx.push(tx);
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

  public get auditorsTx(): string[] | undefined {
    return this.asRawContractDeployConfig().auditorsTx;
  }

  public addAuditor(address: string, tx: string) {
    if (this.isInAuditors(address)) {
      return;
    }

    const raw = this.asRawContractDeployConfig();
    if (raw.auditors === undefined) {
      raw.auditors = [];
    }

    if (raw.auditorsTx === undefined) {
      raw.auditorsTx = [];
    }

    raw.auditors.push(address);
    raw.auditorsTx.push(tx);
    this.auditorsByAddress[address] = true;
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
    this.asRawContractDeployConfig().disabledAtTx = undefined;
    this.asRawContractDeployConfig().minRollupFeeTx = undefined;
    this.asRawContractDeployConfig().rollup1VerifierTx = undefined;
    this.asRawContractDeployConfig().rollup2VerifierTx = undefined;
    this.asRawContractDeployConfig().rollup4VerifierTx = undefined;
    this.asRawContractDeployConfig().rollup8VerifierTx = undefined;
    this.asRawContractDeployConfig().rollup16VerifierTx = undefined;
    this.asRawContractDeployConfig().transact1x0VerifierTx = undefined;
    this.asRawContractDeployConfig().transact1x1VerifierTx = undefined;
    this.asRawContractDeployConfig().transact1x2VerifierTx = undefined;
    this.asRawContractDeployConfig().transact2x0VerifierTx = undefined;
    this.asRawContractDeployConfig().transact2x1VerifierTx = undefined;
    this.asRawContractDeployConfig().transact2x2VerifierTx = undefined;
    this.asRawContractDeployConfig().sanctionCheckTx = undefined;
    this.asRawContractDeployConfig().tokenTransferTx = undefined;
    this.asRawContractDeployConfig().rollupWhitelistTx = undefined;
    this.asRawContractDeployConfig().enqueueWhitelistTx = undefined;
    this.asRawContractDeployConfig().operatorTx = undefined;
    this.asRawContractDeployConfig().auditorsTx = undefined;
  }

  private asRawContractDeployConfig(): RawPoolDeployConfig {
    return this.config as RawPoolDeployConfig;
  }
}
