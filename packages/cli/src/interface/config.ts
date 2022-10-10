export interface IConfig {
  get privateKey(): string;

  get walletPassword(): string;

  get walletMasterSeed(): string;

  get accountName(): string;

  get mainAmount(): number;

  get erc20Amount(): number;
}
