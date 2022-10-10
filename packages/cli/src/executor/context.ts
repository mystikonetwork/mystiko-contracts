import { ICommandLineContext } from '../interface';
import { MystikoInNode } from '@mystikonetwork/node';

export class CommandLineContext implements ICommandLineContext {
  public nodeClient: MystikoInNode;

  public shieldedAddress: string;

  public privateKey: string;

  constructor(nodeClient: MystikoInNode, shieldedAddress: string, privateKey: string) {
    this.nodeClient = nodeClient;
    this.shieldedAddress = shieldedAddress;
    this.privateKey = privateKey;
  }
}
