import { Base } from './base';
import { Flags } from '@oclif/core';
import { ERC20_TOKEN, MAIN_TOKEN } from '../config';
import { BridgeType } from '@mystikonetwork/config';
import { TransactionEnum } from '@mystikonetwork/database';

export default class Withdraw extends Base<typeof Withdraw> {
  static description = 'Withdraw token from chain id';

  static examples = ['<%= config.bin %> <%= command.id %> BNB --from 97'];

  static flags = {
    from: Flags.integer({
      char: 'f',
      description: 'Token source chain id',
      required: true,
    }),
    bridge: Flags.string({
      char: 'b',
      description: 'Bridge Type',
      default: 'loop',
      options: Object.values(BridgeType),
    }),
    amount: Flags.string({
      char: 'a',
      description: 'Deposit amount',
    }),
    publicAddress: Flags.string({
      char: 'p',
      description: 'withdraw public address',
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
    const { args, flags } = await this.parse(Withdraw);

    let amount = Number(flags.amount);
    const isERC20 = Object.values(ERC20_TOKEN).includes(args.token);
    if (!amount && isERC20) {
      amount = this.iConfig!.erc20Amount;
    } else if (!amount && !isERC20) {
      amount = this.iConfig!.mainAmount;
    }

    const publicAddress = flags.publicAddress ?? (await this.iWallet?.address());
    if (!publicAddress) {
      this.error('public address undefined');
    }

    await this.iWallet?.transact({
      type: TransactionEnum.WITHDRAW,
      amount: amount,
      assetSymbol: args.token,
      bridge: flags.bridge as BridgeType,
      chainId: flags.from,
      publicAddress: publicAddress,
      walletPassword: this.iConfig!.walletPassword,
    });

    this.exit();
  }
}
