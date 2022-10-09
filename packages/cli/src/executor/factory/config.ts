import { IConfigFactory } from '../../interface';
import { IConfig } from '../../interface';
import { EnvConfig } from '../../config';

export class ConfigFactory implements IConfigFactory {
  private readonly configPath: string;

  constructor(configPath: string) {
    this.configPath = configPath;
  }

  getConfig(): IConfig {
    return new EnvConfig(this.configPath);
  }
}
