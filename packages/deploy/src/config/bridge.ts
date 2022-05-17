import { check } from '@mystikonetwork/utils';
import { BridgeProxyConfig, RawBridgeProxyConfig } from './bridgeProxy';
import { PoolDeployConfig, RawPoolDeployConfig } from './bridgePool';
import { BridgeDepositPairConfig, RawBridgeDepositPairConfig } from './bridgePair';
import { BaseConfig } from './base';
import { BridgeFeeConfig, RawBridgeFeeConfig } from './bridgeFee';

export interface RawBridgeConfig {
  name: string;
  contractName: string;
  proxys: RawBridgeProxyConfig[];
  fees: RawBridgeFeeConfig[];
  commitmentPools: RawPoolDeployConfig[];
  pairs: RawBridgeDepositPairConfig[];
  wrappedProxys: BridgeProxyConfig[];
  wrappedFees: BridgeFeeConfig[];
  wrappedCommitmentPools: PoolDeployConfig[];
  wrappedPairs: BridgeDepositPairConfig[];
}

export class BridgeConfig extends BaseConfig {
  private readonly feesByNetwork: { [key: string]: BridgeFeeConfig };

  // first key is network, second key is remote network, for celer remote network is ''
  private readonly proxyByNetworkAndRemote = new Map();

  // first key is network, second key is token
  // private readonly poolByNetworkAndToken: { [key: string]: { [key: string]: ContractDeployConfig } };
  private readonly poolByNetworkAndToken = new Map();

  // first key is src network, second key is src token, third is dst network
  private readonly pairByNetworkAndToken = new Map();

  constructor(rawConfig: any) {
    super(rawConfig);
    BaseConfig.checkString(this.config, 'name');
    BaseConfig.checkString(this.config, 'contractName');

    this.feesByNetwork = {};
    this.asRawBridgeConfig().wrappedFees = this.asRawBridgeConfig().fees.map((fee) => {
      const feeConfig = new BridgeFeeConfig(fee);
      check(this.feesByNetwork[fee.network] === undefined, 'fees duplicate');
      this.feesByNetwork[fee.network] = feeConfig;
      return feeConfig;
    });

    this.asRawBridgeConfig().wrappedProxys = this.asRawBridgeConfig().proxys.map((proxy) => {
      const proxyConfig = new BridgeProxyConfig(proxy);
      this.insertProxyConfig(proxyConfig);
      return proxyConfig;
    });

    this.asRawBridgeConfig().wrappedCommitmentPools = this.asRawBridgeConfig().commitmentPools.map((pool) => {
      const poolConfig = new PoolDeployConfig(pool);
      this.insertCommitmentPoolConfig(poolConfig);
      return poolConfig;
    });

    this.asRawBridgeConfig().wrappedPairs = this.asRawBridgeConfig().pairs.map((pair) => {
      const pairCfg = new BridgeDepositPairConfig(pair);
      check(pairCfg.pairTokens.length === 1 || pairCfg.pairTokens.length === 2, 'token pair configure error');

      const src = pairCfg.pairTokens[0];
      if (pairCfg.pairTokens.length === 1) {
        this.insertPairConfig(src.network, src.assetSymbol, src.network, pairCfg);
      } else {
        const dst = pairCfg.pairTokens[1];
        check(this.getBridgeFeeConfig(src.network) !== undefined, 'bridge minimal fee not exist');
        check(this.getBridgeFeeConfig(dst.network) !== undefined, 'bridge minimal fee not exist');
        this.insertPairConfig(src.network, src.assetSymbol, dst.network, pairCfg);
        this.insertPairConfig(dst.network, dst.assetSymbol, src.network, pairCfg);
      }

      return pairCfg;
    });
  }

  insertProxyConfig(proxyConfig: BridgeProxyConfig) {
    let m1 = this.proxyByNetworkAndRemote.get(proxyConfig.network);
    if (m1 === undefined) {
      m1 = new Map();
      m1.set(proxyConfig.remoteNetwork, proxyConfig);
      this.proxyByNetworkAndRemote.set(proxyConfig.network, m1);
    } else {
      check(m1.get(proxyConfig.remoteNetwork) === undefined, 'proxy configure duplicate');
      m1.set(proxyConfig.remoteNetwork, proxyConfig);
    }
  }

  insertCommitmentPoolConfig(poolConfig: PoolDeployConfig) {
    let m1 = this.poolByNetworkAndToken.get(poolConfig.network);
    if (m1 === undefined) {
      m1 = new Map();
      m1.set(poolConfig.assetSymbol, poolConfig);
      this.poolByNetworkAndToken.set(poolConfig.network, m1);
    } else {
      check(m1.get(poolConfig.assetSymbol) === undefined, 'pool configure duplicate');
      m1.set(poolConfig.assetSymbol, poolConfig);
    }
  }

  public getBridgeProxyConfig(network: string, remoteNetwork: string): BridgeProxyConfig | undefined {
    return this.proxyByNetworkAndRemote.get(network)?.get(remoteNetwork);
  }

  public addBridgeProxyConfig(network: string, remoteNetwork: string, address: string) {
    const rawProxyCfg = {
      network,
      remoteNetwork,
      address,
    };
    const proxyConfig = new BridgeProxyConfig(rawProxyCfg);
    this.asRawBridgeConfig().proxys.push(rawProxyCfg);
    this.insertProxyConfig(proxyConfig);
    return proxyConfig;
  }

  public getCommitmentPoolConfig(network: string, assetSymbol: string): PoolDeployConfig | undefined {
    return this.poolByNetworkAndToken.get(network)?.get(assetSymbol);
  }

  public addCommitmentPoolConfig(network: string, assetSymbol: string, address: string, syncStart: number) {
    const rawPoolCfg = {
      network,
      assetSymbol,
      address,
      syncStart,
    };
    const poolCfg = new PoolDeployConfig(rawPoolCfg);
    this.asRawBridgeConfig().commitmentPools.push(rawPoolCfg);
    this.insertCommitmentPoolConfig(poolCfg);
    return poolCfg;
  }

  public insertPairConfig(
    srcNetwork: string,
    token: string,
    dstNetwork: string,
    pairCfg: BridgeDepositPairConfig,
  ) {
    let m1 = this.pairByNetworkAndToken.get(srcNetwork);
    if (m1 === undefined) {
      const m2 = new Map();
      m2.set(dstNetwork, pairCfg);
      m1 = new Map();
      m1.set(token, m2);
      this.pairByNetworkAndToken.set(srcNetwork, m1);
    } else {
      let m2 = m1.get(token);
      if (m2 === undefined) {
        m2 = new Map();
        m2.set(dstNetwork, pairCfg);
        m1.set(token, m2);
      } else {
        check(m2.get(dstNetwork) === undefined, 'pair config duplicate');
        m2.set(dstNetwork, pairCfg);
      }
    }
  }

  public get name(): string {
    return this.asRawBridgeConfig().name;
  }

  public get contractName(): string {
    return this.asRawBridgeConfig().contractName;
  }

  public getBridgeFeeConfig(network: string): BridgeFeeConfig {
    return this.feesByNetwork[network];
  }

  public getMinBridgeFee(network: string): string | undefined {
    const brideFeeCfg = this.feesByNetwork[network];
    if (brideFeeCfg !== undefined) {
      return brideFeeCfg.minimal;
    }
    return undefined;
  }

  public getBridgeTokenPair(
    srcNetwork: string,
    token: string,
    dstNetwork: string,
  ): BridgeDepositPairConfig | undefined {
    return this.pairByNetworkAndToken.get(srcNetwork)?.get(token)?.get(dstNetwork);
  }

  private asRawBridgeConfig(): RawBridgeConfig {
    return this.config as RawBridgeConfig;
  }
}
