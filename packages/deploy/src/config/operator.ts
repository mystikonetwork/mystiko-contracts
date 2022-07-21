import { check } from '@mystikonetwork/utils';
import { ethers } from 'ethers';
import { BaseConfig } from './base';

export interface RawOperatorConfig {
  admin: string;
  serviceFeeCollector: string;
  executors: string[];
  rollers: string[];
}

export class OperatorConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkEthAddress(this.config, 'admin', false);
    BaseConfig.checkEthAddress(this.config, 'serviceFeeCollector', true);

    BaseConfig.checkStringArray(this.config, 'executors');
    this.asRawOperatorConfig().executors.forEach((executor) => {
      check(ethers.utils.isAddress(executor), `${executor} is invalid address`);
    });

    BaseConfig.checkStringArray(this.config, 'rollers');
    this.asRawOperatorConfig().rollers.forEach((roller) => {
      check(ethers.utils.isAddress(roller), `${roller} is invalid address`);
    });
  }

  public get admin(): string {
    return this.asRawOperatorConfig().admin;
  }

  public get serviceFeeCollector(): string {
    return this.asRawOperatorConfig().serviceFeeCollector;
  }

  public get executors(): string[] {
    return this.asRawOperatorConfig().executors;
  }

  public get rollers(): string[] {
    return this.asRawOperatorConfig().rollers;
  }

  private asRawOperatorConfig(): RawOperatorConfig {
    return this.config as RawOperatorConfig;
  }
}
