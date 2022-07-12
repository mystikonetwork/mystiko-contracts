/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Rollup4Verifier, Rollup4VerifierInterface } from '../Rollup4Verifier';

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'X',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'Y',
                type: 'uint256',
              },
            ],
            internalType: 'struct Pairing.G1Point',
            name: 'a',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256[2]',
                name: 'X',
                type: 'uint256[2]',
              },
              {
                internalType: 'uint256[2]',
                name: 'Y',
                type: 'uint256[2]',
              },
            ],
            internalType: 'struct Pairing.G2Point',
            name: 'b',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'X',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'Y',
                type: 'uint256',
              },
            ],
            internalType: 'struct Pairing.G1Point',
            name: 'c',
            type: 'tuple',
          },
        ],
        internalType: 'struct VerifierLib.Proof',
        name: 'proof',
        type: 'tuple',
      },
      {
        internalType: 'uint256[]',
        name: 'input',
        type: 'uint256[]',
      },
    ],
    name: 'verifyTx',
    outputs: [
      {
        internalType: 'bool',
        name: 'r',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506114a9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e3660046112a3565b610057565b604051901515815260200160405180910390f35b600081516004146100ae5760405162461bcd60e51b815260206004820152601460248201527f696e76616c696420696e707574206c656e677468000000000000000000000000604482015260640160405180910390fd5b6100b882846100bf565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100eb610316565b90508060800151518551600161010191906113af565b1461010b57600080fd5b835151821161011957600080fd5b835160200151821161012a57600080fd5b60208401515151821161013c57600080fd5b602084810151015151821161015057600080fd5b602084810151510151821161016457600080fd5b6020848101518101510151821161017a57600080fd5b604084015151821161018b57600080fd5b818460400151602001511061019f57600080fd5b83516101aa90610816565b6101b357600080fd5b6101c0846020015161088e565b6101c957600080fd5b6101d68460400151610816565b6101df57600080fd5b604080518082019091526000808252602082018190525b865181101561028d578387828151811061021257610212611447565b60200260200101511061022457600080fd5b61027982610274856080015184600161023d91906113af565b8151811061024d5761024d611447565b60200260200101518a858151811061026757610267611447565b6020026020010151610978565b6109d6565b915080610285816113de565b9150506101f6565b506102b68183608001516000815181106102a9576102a9611447565b60200260200101516109d6565b90506102c181610816565b6102ca57600080fd5b61030c856000015186602001516102e084610a30565b85604001516102f28a60400151610a30565b6060880151885161030290610a30565b8960200151610ade565b9695505050505050565b61031e61106d565b6040805180820182527f2130e4cbd27307edc9c93dbb4d20543b3ceb0b0ffa4d5b4fc10033241008c10b81527f012ce5aaa86b0e25d4ab63dcb41c5e42438724369842b7b894f324ebc59380006020808301919091529083528151608080820184527f228ae7a38d4a659b166d4d516cafee700be86ee07fdd89c414186ea8ed8771b28285019081527f1dea8a6277c09970b6e607251295ff1eca658c09564692e9f9a9921842d8f886606080850191909152908352845180860186527f10210f0f93899dde45d463503d8a61544195b50c4fe6a54c0912d9789af4595481527f0626f96b5482d440d16a8b4a86c8e7f1d4b022b1cb29d5a2c635b2714e88ca2b818601528385015285840192909252835180820185527f2f3909b53b6bd7c25b62ac4570abb23e61be8c2e6d50827625bfd589552f5a898186019081527f0cc745e3ce61d17ae58ab17799a4a719f4285d04d6ef965ba6962b8286dcbb6b828501528152845180860186527f27969732d0fa1861843443efb30c65562a669824d0ee76536cf79c218fefb2f981527f0fb7856fad7949da0ec30c9e2861cb121e2bb0c3a356d06c68f4b3a0e466a24e818601528185015285850152835190810184527f192b0da2be293435f840ed74fb2bbcc07bdd535f888c49505140352539c373a58185019081527f092126bdb84b30d3be295f56006646fdd2abfd6dcc5a7a880041b17eba293365828401528152835180850185527f231a53d7d7a6c23cdde323cd23bdf1a6540e3800d013a5aba2be2eafc5c74bfb81527f0c6b59bd310290ef0716fb628d8467f358dd19e4570ba317f34f2c61dea2a3e38185015281840152908401528151600580825260c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161059957505060808201908152604080518082019091527f1793a0a642c5e4a36f41c80a8eb12be6c8208579dd0376877038c2327dcf503081527f188e31b4ed1d31e2390449de5415ec77b4967c461c2a1d640e145ad52bf9f3a060208201529051805160009061062c5761062c611447565b602002602001018190525060405180604001604052807f1487c60d5bcfa3d785094a98e03cf0e69acb0b6acc3eec8fbb3d9e3c5bd63c9d81526020017f193d3c5e790f006845789382d2b3b0dabf236226a30d03f2ff6bc5ba7cbeda9281525081608001516001815181106106a3576106a3611447565b602002602001018190525060405180604001604052807f06164b8ff25487bba83d4d4c90c837b60244c0eac0bc6abd605a732afe522fe681526020017f1b2a28602c6d6039cf5db1febda269dc3f3a0367f846f82dd06189ed0ffc32f0815250816080015160028151811061071a5761071a611447565b602002602001018190525060405180604001604052807f0bf0b8955107b418d4cfd7b7fc1e9933a7383e5be48c5d948a356c669e586e1e81526020017f080e9f3af1e2c823eb67cdf012f77b135f6adc2462d431323d57fb6def408dd7815250816080015160038151811061079157610791611447565b602002602001018190525060405180604001604052807f19ef70ca2e6edce5703f252ad4449226f5d528dd4eb0f576116e3dfa7d1e038581526020017f1b8ff129e3fda12eab4a59e973b619b69d066c605bfeeb1ea864928293df6f90815250816080015160048151811061080857610808611447565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476108448160036113f9565b818061085257610852611431565b8451838061086257610862611431565b8651800909828061087557610875611431565b6020860151800961088691906113c7565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926108fe92909190829060015b6020020151610f3f565b895180516020820151939750919550610923929060005b60200201518b5160016108f4565b8951919350915061093990839083906000610915565b909250905061094a84848484610fc0565b909450925061095b84848888610fc0565b90945092508315801561096c575082155b98975050505050505050565b60408051808201909152600080825260208201526109946110be565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b575b50806109ce57600080fd5b505092915050565b60408051808201909152600080825260208201526109f26110dc565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b576109c3565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790610a9b576040518060400160405280828560000151610a8a91906113f9565b815260006020909101529392505050565b6040518060400160405280828560000151610ab691906113f9565b8152602001828560200151610acb91906113f9565b610ad590846113c7565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a6000015181600081518110610b1f57610b1f611447565b6020026020010181815250508a6020015181600181518110610b4357610b43611447565b602090810291909101015289516001602002015181600281518110610b6a57610b6a611447565b6020908102919091010152895151815182906003908110610b8d57610b8d611447565b6020026020010181815250508960200151600160028110610bb057610bb0611447565b602002015181600481518110610bc857610bc8611447565b6020026020010181815250508960200151600060028110610beb57610beb611447565b602002015181600581518110610c0357610c03611447565b602002602001018181525050886000015181600681518110610c2757610c27611447565b602002602001018181525050886020015181600781518110610c4b57610c4b611447565b602090810291909101015287516001602002015181600881518110610c7257610c72611447565b6020908102919091010152875151815182906009908110610c9557610c95611447565b6020026020010181815250508760200151600160028110610cb857610cb8611447565b602002015181600a81518110610cd057610cd0611447565b6020026020010181815250508760200151600060028110610cf357610cf3611447565b602002015181600b81518110610d0b57610d0b611447565b602002602001018181525050866000015181600c81518110610d2f57610d2f611447565b602002602001018181525050866020015181600d81518110610d5357610d53611447565b602090810291909101015285516001602002015181600e81518110610d7a57610d7a611447565b602090810291909101015285515181518290600f908110610d9d57610d9d611447565b6020026020010181815250508560200151600160028110610dc057610dc0611447565b602002015181601081518110610dd857610dd8611447565b6020026020010181815250508560200151600060028110610dfb57610dfb611447565b602002015181601181518110610e1357610e13611447565b602002602001018181525050846000015181601281518110610e3757610e37611447565b602002602001018181525050846020015181601381518110610e5b57610e5b611447565b602090810291909101015283516001602002015181601481518110610e8257610e82611447565b6020908102919091010152835151815182906015908110610ea557610ea5611447565b6020026020010181815250508360200151600160028110610ec857610ec8611447565b602002015181601681518110610ee057610ee0611447565b6020026020010181815250508360200151600060028110610f0357610f03611447565b602002015181601781518110610f1b57610f1b611447565b602002602001018181525050610f3081611008565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610f81818689098280610f7857610f78611431565b86890983611049565b8180610f8f57610f8f611431565b8280610f9d57610f9d611431565b8789098380610fae57610fae611431565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610fef878683611049565b610ffa878684611049565b925092505094509492505050565b80516000906110156110fa565b6000602082602085026020880160086107d05a03fa905080801561002b57508061103e57600080fd5b505115159392505050565b6000818061105957611059611431565b61106384846113c7565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611097611118565b81526020016110a4611118565b81526020016110b1611118565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b604051806040016040528061112b61113d565b815260200161113861113d565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261116c57600080fd5b611174611363565b80838560408601111561118657600080fd5b60005b60028110156111a8578135845260209384019390910190600101611189565b509095945050505050565b600082601f8301126111c457600080fd5b8135602067ffffffffffffffff808311156111e1576111e161145d565b8260051b604051601f19603f830116810181811084821117156112065761120661145d565b6040528481528381019250868401828801850189101561122557600080fd5b600092505b8583101561124857803584529284019260019290920191840161122a565b50979650505050505050565b60006040828403121561126657600080fd5b6040516040810181811067ffffffffffffffff821117156112895761128961145d565b604052823581526020928301359281019290925250919050565b6000808284036101208112156112b857600080fd5b610100808212156112c857600080fd5b6112d061138c565b6112da8787611254565b81526080603f19840112156112ee57600080fd5b6112f6611363565b9250611305876040880161115b565b8352611314876080880161115b565b602084015282602082015261132c8760c08801611254565b60408201529350840135905067ffffffffffffffff81111561134d57600080fd5b611359858286016111b3565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156113865761138661145d565b60405290565b6040516060810167ffffffffffffffff811182821017156113865761138661145d565b600082198211156113c2576113c261141b565b500190565b6000828210156113d9576113d961141b565b500390565b60006000198214156113f2576113f261141b565b5060010190565b60008261141657634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220eaf815c27309dd2578a1554b25b38bcd2eca93b04755c226e1f1e50d6ea3fa7f64736f6c63430008070033';

type Rollup4VerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Rollup4VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Rollup4Verifier__factory extends ContractFactory {
  constructor(...args: Rollup4VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Rollup4Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Rollup4Verifier> {
    return super.deploy(overrides || {}) as Promise<Rollup4Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Rollup4Verifier {
    return super.attach(address) as Rollup4Verifier;
  }
  connect(signer: Signer): Rollup4Verifier__factory {
    return super.connect(signer) as Rollup4Verifier__factory;
  }
  static readonly contractName: 'Rollup4Verifier';
  public readonly contractName: 'Rollup4Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Rollup4VerifierInterface {
    return new utils.Interface(_abi) as Rollup4VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Rollup4Verifier {
    return new Contract(address, _abi, signerOrProvider) as Rollup4Verifier;
  }
}
