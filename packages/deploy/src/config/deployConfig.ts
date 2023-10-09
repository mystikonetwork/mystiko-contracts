import { check } from '@mystikonetwork/utils';
import { BaseConfig } from './base';
import { ChainConfig, RawChainConfig } from './chain';
import { BridgeConfig, RawBridgeConfig } from './bridge';
import { OperatorConfig, RawOperatorConfig } from './operator';

export interface RawDeployConfig {
  version: number;
  poolName: string;
  circuits: string[];
  chains: RawChainConfig[];
  bridges: RawBridgeConfig[];
  operator: RawOperatorConfig;
  wrappedChains: { [key: string]: ChainConfig };
  wrappedBridges: { [key: string]: BridgeConfig };
  wrappedOperator: OperatorConfig;
}

/**
 * @class MystikoConfig
 * @extends BaseConfig
 * @param {Object} rawConfig raw configuration object.
 * @desc configuration class for this library.
 */
export class DeployConfig extends BaseConfig {
  constructor(rawConfig: any) {
    super(rawConfig);

    BaseConfig.checkNumber(this.config, 'version');
    BaseConfig.checkString(this.config, 'poolName');
    BaseConfig.checkStringArray(this.config, 'circuits');

    BaseConfig.checkObjectArray(this.config, 'chains', false);
    BaseConfig.checkObjectArray(this.config, 'bridges', false);

    this.createChainConfigs();
    this.createBridgeConfigs();
    this.createOperatorConfigs();
  }

  public get version(): number {
    return this.asRawDeployConfig().version;
  }

  public get poolName(): string {
    return this.asRawDeployConfig().poolName;
  }

  public get circuits(): string[] {
    return this.asRawDeployConfig().circuits;
  }

  public getChain(network: string): ChainConfig | undefined {
    return this.asRawDeployConfig().wrappedChains[network];
  }

  public getBridge(name: string): BridgeConfig | undefined {
    return this.asRawDeployConfig().wrappedBridges[name];
  }

  public getOperator(): OperatorConfig | undefined {
    return this.asRawDeployConfig().wrappedOperator;
  }

  public clone(): DeployConfig {
    return new DeployConfig(JSON.parse(JSON.stringify(this.config)));
  }

  private createChainConfigs() {
    const rawConfig = this.asRawDeployConfig();
    rawConfig.wrappedChains = {};
    if (rawConfig.chains) {
      rawConfig.chains.forEach((rawChainConfig) => {
        const conf = new ChainConfig(rawChainConfig);
        check(!rawConfig.wrappedChains[conf.network], 'duplicate chain config');
        rawConfig.wrappedChains[conf.network] = conf;
      });
    }
  }

  private createBridgeConfigs() {
    const rawConfig = this.asRawDeployConfig();
    rawConfig.wrappedBridges = {};
    if (rawConfig.bridges) {
      rawConfig.bridges.forEach((rawBridgeConfig) => {
        const conf = new BridgeConfig(rawBridgeConfig);
        check(!rawConfig.wrappedBridges[conf.name], 'duplicate bridge config');
        rawConfig.wrappedBridges[conf.name] = conf;
      });
    }
  }

  private createOperatorConfigs() {
    this.asRawDeployConfig().wrappedOperator = new OperatorConfig(this.asRawDeployConfig().operator);
  }

  private asRawDeployConfig(): RawDeployConfig {
    return this.config as RawDeployConfig;
  }
}
