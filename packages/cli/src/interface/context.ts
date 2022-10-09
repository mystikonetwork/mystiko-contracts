import { MystikoInNode } from '@mystikonetwork/node';

export interface ICommandLineContext {
  get nodeClient(): MystikoInNode;

  get shieldedAddress(): string;

  get privateKey(): string;
}
