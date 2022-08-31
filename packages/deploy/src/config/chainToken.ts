import { check } from '@mystikonetwork/utils';
import { BaseConfig } from './base';

export interface RawChainTokenConfig {
  assetSymbol: string;
  assetDecimals: number;
  erc20: boolean;
  minAmount: string;
  maxAmount: string;
  minExecutorFee: string;
  minRollupFee: string;
  recommendedAmounts: string[];
  address?: string;
}

export class ChainTokenConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'assetSymbol');
    BaseConfig.checkNumber(this.config, 'assetDecimals');
    BaseConfig.checkString(this.config, 'minAmount');
    BaseConfig.checkString(this.config, 'maxAmount');
    BaseConfig.checkString(this.config, 'minExecutorFee');
    BaseConfig.checkString(this.config, 'minRollupFee');
    BaseConfig.checkStringArray(this.config, 'recommendedAmounts');

    check(rawConfig.erc20 === false || rawConfig.erc20 === true, 'erc20 configure not exist');
    if (rawConfig.erc20) {
      BaseConfig.checkEthAddress(this.config, 'address');
    }
  }

  public get assetSymbol(): string {
    return this.asRawChainConfig().assetSymbol;
  }

  public get assetDecimals(): number {
    return this.asRawChainConfig().assetDecimals;
  }

  public get erc20(): boolean {
    return this.asRawChainConfig().erc20;
  }

  public get minAmount(): string {
    return this.asRawChainConfig().minAmount;
  }

  public get maxAmount(): string {
    return this.asRawChainConfig().maxAmount;
  }

  public get minExecutorFee(): string {
    return this.asRawChainConfig().minExecutorFee;
  }

  public get minRollupFee(): string {
    return this.asRawChainConfig().minRollupFee;
  }

  public get address(): string {
    return this.asRawChainConfig().address || '';
  }

  public set address(addr: string) {
    this.asRawChainConfig().address = addr;
  }

  public get recommendedAmounts(): string[] {
    return this.asRawChainConfig().recommendedAmounts;
  }

  private asRawChainConfig(): RawChainTokenConfig {
    return this.config as RawChainTokenConfig;
  }
}
