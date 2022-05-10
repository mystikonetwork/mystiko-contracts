import { ethers } from 'ethers';
import { check } from '@mystikonetwork/utils';

/**
 * @class BaseConfig
 * @param {any} rawConfig raw configuration object.
 * @desc common base class of configuration. It contains some useful helper functions.
 */
export class BaseConfig {
  // protected readonly rawConfig: Object;

  protected readonly config: Object;

  constructor(_rawConfig: any) {
    this.config = _rawConfig;
    // this.config = deepCopy(_rawConfig);
  }

  // public getRawConfig(): Object {
  //   return this.rawConfig;
  // }

  // /**
  //  * @desc get the human-readable JSON string of this config.
  //  * @returns {string}
  //  */
  // public rawToString(): string {
  //   return JSON.stringify(this.rawConfig, null, 2);
  // }

  private replacer(key: string, value: any) {
    if (key.includes('wrapped')) {
      return undefined;
    }
    return value;
  }

  public toString(): string {
    return JSON.stringify(this.config, this.replacer, 2);
  }

  /**
   * @desc check whether given key exists in the config.
   * @param {any} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @returns {boolean} true if it exists, otherwise returns false.
   */
  public static isKeyExists(config: any, key: string): boolean {
    return !!(config && key && config[key]);
  }

  /**
   * @desc check whether given key exists in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @throws {Error} if the specified key does not exist.
   */
  public static checkKeyExists(config: any, key: string) {
    check(BaseConfig.isKeyExists(config, key), `${key} does not exist in config`);
  }

  /**
   * @desc check whether the corresponding value of given key is string in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is not string type, or key does not exist if the requestExists
   * set to be true.
   */
  public static checkString(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(
        typeof config[key] === 'string' || config[key] instanceof String,
        `value of ${key} is not string nor String type`,
      );
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }

  /**
   * @desc check whether the corresponding value of given key is number in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is not number type, or key does not exist if the requestExists
   * set to be true.
   */
  public static checkNumber(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(
        typeof config[key] === 'number' || config[key] instanceof Number,
        `value of ${key} is not number nor Number type`,
      );
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }

  /**
   * @desc check whether the corresponding value of given key is string as number in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is not string number type, or key does not exist if the requestExists
   * set to be true.
   */
  public static checkNumberString(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(
        typeof config[key] === 'string' || config[key] instanceof String,
        `value of ${key} is not string nor String type`,
      );
      check(!!config[key].match(/^\d+$/), `${config[key]} is an invalid string number`);
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }

  /**
   * @desc check whether the corresponding value of given key is Object in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is not Object instance, or key does not exist if the requestExists
   * set to be true.
   */
  public static checkObject(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(config[key] instanceof Object, `value of ${key} is not Object type`);
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }

  /**
   * @desc check whether the corresponding value of given key is an array of number in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is not an array of number,
   * or key does not exist if the requestExists set to be true.
   */
  public static checkNumberArray(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(config[key] instanceof Array, `value of ${key} is not Array type`);
      config[key].forEach((item: any) => {
        check(typeof item === 'number' || item instanceof Number, `${item} is not number nor Number type`);
      });
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }

  /**
   * @desc check whether the corresponding value of given key is an array of string in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is not an array of string,
   * or key does not exist if the requestExists set to be true.
   */
  public static checkStringArray(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(config[key] instanceof Array, `value of ${key} is not Array type`);
      config[key].forEach((item: any) => {
        check(typeof item === 'string' || item instanceof String, `${item} is not number nor String type`);
      });
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }

  /**
   * @desc check whether the corresponding value of given key is an array of Object in the config, if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is not an array of Object,
   * or key does not exist if the requestExists set to be true.
   */
  public static checkObjectArray(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(config[key] instanceof Array, `value of ${key} is not Array type`);
      config[key].forEach((item: any) => {
        check(item instanceof Object, `${item} is not Object type`);
      });
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }

  /**
   * @desc check whether the corresponding value of given key is a valid Ethereum address in the config,
   * if not, raise error.
   * @param {Object} config an object contains configuration.
   * @param {string} key the key of configuration.
   * @param {boolean} requireExists if true, it will raise error if given key does not exist.
   * @throws {Error} if the value of specified key is an invalid Ethereum address,
   * or key does not exist if the requestExists set to be true.
   */
  public static checkEthAddress(config: any, key: string, requireExists: boolean = true) {
    if (BaseConfig.isKeyExists(config, key)) {
      check(ethers.utils.isAddress(config[key]), `${config[key]} is invalid address`);
    } else if (requireExists) {
      BaseConfig.checkKeyExists(config, key);
    }
  }
}

/**
 * @enum BridgeType
 * @desc all supported cross-chain bridges.
 * @property {string} LOOP a loop bridge indicates no cross-chain needed.
 * The deposits and withdraws happens on the same blockchain.
 * @property {string} POLY the {@link https://poly.network Poly Bridge} cross-chain network.
 */
export enum BridgeType {
  LOOP = 'loop',
  POLY = 'poly',
  TBRIDGE = 'tbridge',
  CELER = 'celer',
}

/**
 * @enum AssetType
 * @desc all supported asset types.
 * @property {string} ERC20 the {@link https://ethereum.org/en/developers/docs/standards/tokens/erc-20/ ERC20 Token}
 * standard.
 * @property {string} MAIN main asset type of the blockchains, e.g. ETH/BNB
 */
export enum AssetType {
  ERC20 = 'erc20',
  MAIN = 'main',
}

/**
 * @function module:mystiko/models.isValidBridgeType
 * @desc check whether given type is one of the supported bridge types.
 * @param {string} type bridge type to be checked.
 * @returns {boolean} true if the type is supported, otherwise returns false.
 */
export function isValidBridgeType(type: BridgeType): boolean {
  return Object.values(BridgeType).includes(type);
}

/**
 * @function module:mystiko/models.isValidAssetType
 * @desc check whether given type is one of the supported asset types.
 * @param {string} type bridge type to be checked.
 * @returns {boolean} true if the type is supported, otherwise returns false.
 */
export function isValidAssetType(type: AssetType): boolean {
  return Object.values(AssetType).includes(type);
}
