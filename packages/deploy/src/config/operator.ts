import { check } from '@mystikonetwork/utils';
import { ethers } from 'ethers';
import { BaseConfig } from './base';

export interface RawOperatorConfig {
  admin: string;
  executors: string[];
  rollers: string[];
  relayers: string[];
  auditors: string[];
  issuer: string;
}

export class OperatorConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkEthAddress(this.config, 'admin', false);
    BaseConfig.checkStringArray(this.config, 'executors');
    this.asRawOperatorConfig().executors.forEach((executor) => {
      check(ethers.utils.isAddress(executor), `${executor} is invalid address`);
    });

    BaseConfig.checkStringArray(this.config, 'rollers');
    this.asRawOperatorConfig().rollers.forEach((roller) => {
      check(ethers.utils.isAddress(roller), `${roller} is invalid address`);
    });

    BaseConfig.checkStringArray(this.config, 'relayers');
    if (this.asRawOperatorConfig().relayers !== undefined) {
      this.asRawOperatorConfig().relayers.forEach((relayer) => {
        check(ethers.utils.isAddress(relayer), `${relayer} is invalid address`);
      });
    }
    BaseConfig.checkEthAddress(this.config, 'issuer');
    BaseConfig.checkStringArray(this.config, 'auditors');
  }

  public get admin(): string {
    return this.asRawOperatorConfig().admin;
  }

  public get executors(): string[] {
    return this.asRawOperatorConfig().executors;
  }

  public get rollers(): string[] {
    return this.asRawOperatorConfig().rollers;
  }

  public get relayers(): string[] {
    return this.asRawOperatorConfig().relayers;
  }

  public get issuer(): string {
    return this.asRawOperatorConfig().issuer;
  }

  public get auditors(): string[] {
    return this.asRawOperatorConfig().auditors;
  }

  private asRawOperatorConfig(): RawOperatorConfig {
    return this.config as RawOperatorConfig;
  }
}
