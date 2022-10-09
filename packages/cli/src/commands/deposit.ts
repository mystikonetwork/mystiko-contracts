import { Flags } from '@oclif/core';
import { Base } from './base';
import { BridgeType } from '@mystikonetwork/config';
import { ERC20_TOKEN, MAIN_TOKEN } from '../config';
import { DepositOptions } from '../interface';

export default class Deposit extends Base<typeof Deposit> {
  static description = 'Deposit token from source chain id (test net)';

  static examples = ['<%= config.bin %> <%= command.id %> BNB --from 97 --to 97'];

  static flags = {
    from: Flags.integer({
      char: 'f',
      description: 'Token source chain id',
      required: true,
    }),
    to: Flags.integer({
      char: 't',
      description: 'Token dest chain id (default: from)',
    }),
    bridge: Flags.string({
      char: 'b',
      description: 'Bridge Type',
      default: 'loop',
      options: Object.values(BridgeType),
    }),
    privateKey: Flags.string({
      char: 'k',
      description: 'Signer private key',
    }),
    amount: Flags.integer({
      char: 'a',
      description: 'Deposit amount',
    }),
  };

  static args = [
    {
      name: 'token',
      description: 'Deposit token symbol',
      required: true,
      options: Object.values({ ...MAIN_TOKEN, ...ERC20_TOKEN }),
    },
  ];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Deposit);

    const isERC20 = Object.values(ERC20_TOKEN).includes(args.token);
    let amount = flags.amount;
    if (!amount && isERC20) {
      amount = this.iConfig!.erc20Amount;
    } else if (!amount && !isERC20) {
      amount = this.iConfig!.mainAmount;
    }

    return this.iWallet?.deposit(<DepositOptions>{
      amount: amount,
      assetSymbol: args.token,
      bridge: flags.bridge as BridgeType,
      srcChainId: flags.from,
      dstChainId: flags.to ?? flags.from,
    });
  }
}
