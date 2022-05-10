import { check } from '@mystikonetwork/utils';
import { ContractDeployConfig, RawContractDeployConfig } from './bridgeDeploy';
import { BaseConfig } from './base';

export interface RawBridgeDepositPairConfig {
  pair: RawContractDeployConfig[];
  wrappedDeposits: ContractDeployConfig[];
}

export class BridgeDepositPairConfig extends BaseConfig {
  // first key is network, second key is token asset symbol
  private readonly depositByNetworkAndToken = new Map();

  constructor(rawConfig: any) {
    super(rawConfig);
    this.asRawBridgeTokenPairConfig().wrappedDeposits = this.asRawBridgeTokenPairConfig().pair.map(
      (deposit) => {
        const depositCfg = new ContractDeployConfig(deposit);
        this.insertDepositConfig(depositCfg);
        return depositCfg;
      },
    );

    check(
      this.asRawBridgeTokenPairConfig().wrappedDeposits.length === 1 ||
        this.asRawBridgeTokenPairConfig().wrappedDeposits.length === 2,
      'wasmFile is empty',
    );
  }

  insertDepositConfig(depositCfg: ContractDeployConfig) {
    let m1 = this.depositByNetworkAndToken.get(depositCfg.network);
    if (m1 === undefined) {
      m1 = new Map();
      m1.set(depositCfg.assetSymbol, depositCfg);
      this.depositByNetworkAndToken.set(depositCfg.network, m1);
    } else {
      check(m1.get(depositCfg.assetSymbol) === undefined, 'pair configure error');
      m1.set(depositCfg.assetSymbol, depositCfg);
    }
  }

  public get pairTokens(): ContractDeployConfig[] {
    return Object.values(this.asRawBridgeTokenPairConfig().wrappedDeposits);
  }

  public getPairDepositCfg(network: string, token: string): ContractDeployConfig | undefined {
    return this.depositByNetworkAndToken.get(network)?.get(token);
  }

  public getPairPeerDepositCfg(
    network: string,
    assetSymbol: string,
    dstNetwork: string,
  ): ContractDeployConfig | undefined {
    if (this.pairTokens.length === 1) {
      check(network === dstNetwork, 'src network must same with dst network');
      return this.getPairDepositCfg(network, assetSymbol);
    }
    const m1 = this.depositByNetworkAndToken.get(dstNetwork);

    let depost: any;
    m1.forEach((value: ContractDeployConfig) => {
      if (value.assetSymbol !== assetSymbol || value.network !== network) {
        depost = value;
      }
    });
    return depost;
  }

  private asRawBridgeTokenPairConfig(): RawBridgeDepositPairConfig {
    return this.config as RawBridgeDepositPairConfig;
  }
}
