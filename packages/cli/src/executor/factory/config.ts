import { IConfigFactory } from '../../interface';
import { IConfig } from '../../interface';
import { EnvConfig } from '../../config';

export class ConfigFactory implements IConfigFactory {
  private readonly configPath: string;

  private readonly isMainNet: boolean;

  private readonly privateKey: string;

  constructor(configPath: string, isMainNet: boolean, privateKey: string) {
    this.configPath = configPath;
    this.isMainNet = isMainNet;
    this.privateKey = privateKey;
  }

  getConfig(): IConfig {
    return new EnvConfig(this.configPath, this.isMainNet, this.privateKey);
  }
}
