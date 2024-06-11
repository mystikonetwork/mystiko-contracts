import { check } from '@mystikonetwork/utils';
import { BaseConfig } from './base';

export interface RawChainSettingsConfig {
  sanctionCheck?: boolean;
  sanctionCheckTx?: string;
  sanctionListAddress?: string;
  sanctionListAddressTx?: string;
  certificateCheck?: boolean;
  certificateCheckTx?: string;
  auditors?: string[];
  auditorsTx?: string[];
  rollers?: string[];
  rollersTx?: string[];
  rollerPoolMinAmount?: string;
  rollerPoolMinAmountTx?: string;
  relayers?: string[];
  relayersTx?: string[];
  relayerPoolMinAmount?: string;
  relayerPoolMinAmountTx?: string;
}

export class ChainSettingsConfig extends BaseConfig {
  private auditorsByAddress: { [key: string]: boolean };

  private rollersByAddress: { [key: string]: boolean };

  private relayersByAddress: { [key: string]: boolean };

  constructor(rawConfig: any) {
    super(rawConfig);

    this.auditorsByAddress = {};
    this.asRawChainSettingsConfig().auditors?.forEach((auditor) => {
      check(this.auditorsByAddress[auditor] === undefined, 'auditor address duplicate');
      this.auditorsByAddress[auditor] = true;
    });

    this.rollersByAddress = {};
    this.asRawChainSettingsConfig().rollers?.forEach((roller) => {
      check(this.rollersByAddress[roller] === undefined, 'roller address duplicate');
      this.rollersByAddress[roller] = true;
    });

    this.relayersByAddress = {};
    this.asRawChainSettingsConfig().relayers?.forEach((relayer) => {
      check(this.relayersByAddress[relayer] === undefined, 'relayer address duplicate');
      this.relayersByAddress[relayer] = true;
    });
  }

  public get sanctionCheck(): boolean | undefined {
    return this.asRawChainSettingsConfig().sanctionCheck;
  }

  public get sanctionCheckTx(): string | undefined {
    return this.asRawChainSettingsConfig().sanctionCheckTx;
  }

  public isSanctionCheckChange(sanctionCheck: boolean): boolean {
    if (this.asRawChainSettingsConfig().sanctionCheck !== sanctionCheck) {
      return true;
    }
    return false;
  }

  public updateSanctionCheck(sanctionCheck: boolean, tx: string) {
    this.asRawChainSettingsConfig().sanctionCheck = sanctionCheck;
    this.asRawChainSettingsConfig().sanctionCheckTx = tx;
  }

  public get sanctionListAddress(): string | undefined {
    return this.asRawChainSettingsConfig().sanctionListAddress;
  }

  public get sanctionListAddressTx(): string | undefined {
    return this.asRawChainSettingsConfig().sanctionListAddressTx;
  }

  public isSanctionListAddressChange(sanctionListAddress: string): boolean {
    if (this.asRawChainSettingsConfig().sanctionListAddress !== sanctionListAddress) {
      return true;
    }
    return false;
  }

  public updateSanctionListAddress(sanctionListAddress: string, tx: string) {
    this.asRawChainSettingsConfig().sanctionListAddress = sanctionListAddress;
    this.asRawChainSettingsConfig().sanctionListAddressTx = tx;
  }

  public get certificateCheck(): boolean | undefined {
    return this.asRawChainSettingsConfig().certificateCheck;
  }

  public get certificateCheckTx(): string | undefined {
    return this.asRawChainSettingsConfig().certificateCheckTx;
  }

  public isCertificateCheckChange(certificateCheck: boolean): boolean {
    if (this.asRawChainSettingsConfig().certificateCheck !== certificateCheck) {
      return true;
    }
    return false;
  }

  public updateCertificateCheck(certificateCheck: boolean, tx: string) {
    this.asRawChainSettingsConfig().certificateCheck = certificateCheck;
    this.asRawChainSettingsConfig().certificateCheckTx = tx;
  }

  public get auditorsCount(): number {
    const { auditors } = this.asRawChainSettingsConfig();
    if (auditors === undefined) {
      return 0;
    }

    return auditors.length;
  }

  public isInAuditors(address: string): boolean {
    return this.auditorsByAddress[address];
  }

  public get auditorsTx(): string[] | undefined {
    return this.asRawChainSettingsConfig().auditorsTx;
  }

  public addAuditor(address: string, tx: string) {
    if (this.isInAuditors(address)) {
      return;
    }

    const raw = this.asRawChainSettingsConfig();
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

  public get rollerCount(): number {
    const { rollers } = this.asRawChainSettingsConfig();
    if (rollers === undefined) {
      return 0;
    }

    return rollers.length;
  }

  public isInRollers(address: string): boolean {
    return this.rollersByAddress[address];
  }

  public get rollersTx(): string[] | undefined {
    return this.asRawChainSettingsConfig().rollersTx;
  }

  public addRoller(address: string, tx: string) {
    if (this.isInRollers(address)) {
      return;
    }

    const raw = this.asRawChainSettingsConfig();
    if (raw.rollers === undefined) {
      raw.rollers = [];
    }

    if (raw.rollersTx === undefined) {
      raw.rollersTx = [];
    }

    raw.rollers.push(address);
    raw.rollersTx.push(tx);
    this.rollersByAddress[address] = true;
  }

  public get relayerCount(): number {
    const { relayers } = this.asRawChainSettingsConfig();
    if (relayers === undefined) {
      return 0;
    }

    return relayers.length;
  }

  public isInRelayers(address: string): boolean {
    return this.relayersByAddress[address];
  }

  public get relayersTx(): string[] | undefined {
    return this.asRawChainSettingsConfig().relayersTx;
  }

  public addRelayer(address: string, tx: string) {
    if (this.isInRelayers(address)) {
      return;
    }

    const raw = this.asRawChainSettingsConfig();
    if (raw.relayers === undefined) {
      raw.relayers = [];
    }

    if (raw.relayersTx === undefined) {
      raw.relayersTx = [];
    }

    raw.relayers.push(address);
    raw.relayersTx.push(tx);
    this.rollersByAddress[address] = true;
  }

  public get rollerPoolMinAmount(): string | undefined {
    return this.asRawChainSettingsConfig().rollerPoolMinAmount;
  }

  public get rollerPoolMinAmountTx(): string | undefined {
    return this.asRawChainSettingsConfig().rollerPoolMinAmountTx;
  }

  public isRollerPoolMinAmountChange(rollerPoolMinAmount: string): boolean {
    if (this.asRawChainSettingsConfig().rollerPoolMinAmount !== rollerPoolMinAmount) {
      return true;
    }
    return false;
  }

  public updateRollerPoolMinAmount(rollerPoolMinAmount: string, tx: string) {
    this.asRawChainSettingsConfig().rollerPoolMinAmount = rollerPoolMinAmount;
    this.asRawChainSettingsConfig().rollerPoolMinAmountTx = tx;
  }

  public get relayerPoolMinAmount(): string | undefined {
    return this.asRawChainSettingsConfig().relayerPoolMinAmount;
  }

  public get relayerPoolMinAmountTx(): string | undefined {
    return this.asRawChainSettingsConfig().relayerPoolMinAmountTx;
  }

  public isRelayerPoolMinAmountChange(relayerPoolMinAmount: string): boolean {
    if (this.asRawChainSettingsConfig().relayerPoolMinAmount !== relayerPoolMinAmount) {
      return true;
    }
    return false;
  }

  public updateRelayerPoolMinAmount(relayerPoolMinAmount: string, tx: string) {
    this.asRawChainSettingsConfig().relayerPoolMinAmount = relayerPoolMinAmount;
    this.asRawChainSettingsConfig().relayerPoolMinAmountTx = tx;
  }

  public reset() {
    this.auditorsByAddress = {};
    this.relayersByAddress = {};
    this.rollersByAddress = {};
    this.asRawChainSettingsConfig().sanctionCheck = undefined;
    this.asRawChainSettingsConfig().sanctionCheckTx = undefined;
    this.asRawChainSettingsConfig().auditors = undefined;
    this.asRawChainSettingsConfig().auditorsTx = undefined;
    this.asRawChainSettingsConfig().rollers = undefined;
    this.asRawChainSettingsConfig().rollersTx = undefined;
    this.asRawChainSettingsConfig().relayers = undefined;
    this.asRawChainSettingsConfig().relayersTx = undefined;
    this.asRawChainSettingsConfig().rollerPoolMinAmount = undefined;
    this.asRawChainSettingsConfig().rollerPoolMinAmountTx = undefined;
    this.asRawChainSettingsConfig().relayerPoolMinAmount = undefined;
    this.asRawChainSettingsConfig().relayerPoolMinAmountTx = undefined;
  }

  private asRawChainSettingsConfig(): RawChainSettingsConfig {
    return this.config as RawChainSettingsConfig;
  }
}
