/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CustomErrors, CustomErrorsInterface } from "../CustomErrors";

const _abi = [
  {
    inputs: [],
    name: "AmountLessThanZero",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountTooLarge",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountTooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "AuditorIndexError",
    type: "error",
  },
  {
    inputs: [],
    name: "AuditorNotesLengthError",
    type: "error",
  },
  {
    inputs: [],
    name: "AuditorPublicKeyNotChanged",
    type: "error",
  },
  {
    inputs: [],
    name: "BridgeFeeTooFew",
    type: "error",
  },
  {
    inputs: [],
    name: "CallCrossChainSyncTxError",
    type: "error",
  },
  {
    inputs: [],
    name: "CallIsNotLzApp",
    type: "error",
  },
  {
    inputs: [],
    name: "CommitmentHasBeenSubmitted",
    type: "error",
  },
  {
    inputs: [],
    name: "CommitmentHashIncorrect",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositsDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "DestinationChainIsNotTrusted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "param",
        type: "string",
      },
    ],
    name: "Duplicated",
    type: "error",
  },
  {
    inputs: [],
    name: "ExecutorFeeTooFew",
    type: "error",
  },
  {
    inputs: [],
    name: "FromChainIdNotMatched",
    type: "error",
  },
  {
    inputs: [],
    name: "FromProxyAddressNotMatched",
    type: "error",
  },
  {
    inputs: [],
    name: "HashKGreaterThanFieldSize",
    type: "error",
  },
  {
    inputs: [],
    name: "IndexOutOfBound",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "param",
        type: "string",
      },
    ],
    name: "Invalid",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxAmountLessThanMinAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "MinAmountGreaterThanMaxAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "NewRootIsDuplicated",
    type: "error",
  },
  {
    inputs: [],
    name: "NoStoredMessage",
    type: "error",
  },
  {
    inputs: [],
    name: "NotChanged",
    type: "error",
  },
  {
    inputs: [],
    name: "NoteHasBeenSpent",
    type: "error",
  },
  {
    inputs: [],
    name: "NumInputsGreaterThanZero",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOperator",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyRegister",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWhitelistedExecutor",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWhitelistedRoller",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyWhitelistedSender",
    type: "error",
  },
  {
    inputs: [],
    name: "OutputNotesLessThanThree",
    type: "error",
  },
  {
    inputs: [],
    name: "RandomSGreaterThanFieldSize",
    type: "error",
  },
  {
    inputs: [],
    name: "RollupFeeToFew",
    type: "error",
  },
  {
    inputs: [],
    name: "RollupSizeNotPowerOfTwo",
    type: "error",
  },
  {
    inputs: [],
    name: "SanctionedAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "SenderIsNotBridgeProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "TreeHeightLessThanZero",
    type: "error",
  },
  {
    inputs: [],
    name: "TreeHeightOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "TreeIsFull",
    type: "error",
  },
  {
    inputs: [],
    name: "VerifierUpdatesHasBeenDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "WithdrawFailed",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d3d3cdd15227a451d0e4793b136830fbe97a7a240b5cc87735c17372a79a079864736f6c63430008070033";

type CustomErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CustomErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CustomErrors__factory extends ContractFactory {
  constructor(...args: CustomErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CustomErrors";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CustomErrors> {
    return super.deploy(overrides || {}) as Promise<CustomErrors>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CustomErrors {
    return super.attach(address) as CustomErrors;
  }
  connect(signer: Signer): CustomErrors__factory {
    return super.connect(signer) as CustomErrors__factory;
  }
  static readonly contractName: "CustomErrors";
  public readonly contractName: "CustomErrors";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CustomErrorsInterface {
    return new utils.Interface(_abi) as CustomErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CustomErrors {
    return new Contract(address, _abi, signerOrProvider) as CustomErrors;
  }
}