/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction1x0Verifier, Transaction1x0VerifierInterface } from '../Transaction1x0Verifier';

const _abi = [
  {
    inputs: [],
    name: 'InvalidParam',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotOnCurve',
    type: 'error',
  },
  {
    inputs: [],
    name: 'StaticCallFailed',
    type: 'error',
  },
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
  '0x608060405234801561001057600080fd5b50611e63806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611cca565b610057565b604051901515815260200160405180910390f35b6000815160171461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008e565b90505b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100ba610401565b9050806080015151855160016100d09190611da0565b146100ee57604051633494a40d60e21b815260040160405180910390fd5b835151821161011057604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013557604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015b57604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018357604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101ab57604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d557604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101fa57604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022257604051633494a40d60e21b815260040160405180910390fd5b835161022d906111d7565b61024a576040516361586bdd60e01b815260040160405180910390fd5b610257846020015161124f565b610274576040516361586bdd60e01b815260040160405180910390fd5b61028184604001516111d7565b61029e576040516361586bdd60e01b815260040160405180910390fd5b60006102de604051806040016040528060008152602001600081525083608001516000815181106102d1576102d1611db3565b6020026020010151611339565b905060005b865181101561038e57838782815181106102ff576102ff611db3565b60200260200101511061032557604051633494a40d60e21b815260040160405180910390fd5b61037a82610375856080015184600161033e9190611da0565b8151811061034e5761034e611db3565b60200260200101518a858151811061036857610368611db3565b60200260200101516113b9565b611339565b91508061038681611dc9565b9150506102e3565b50610398816111d7565b6103b5576040516361586bdd60e01b815260040160405180910390fd5b6103f7856000015186602001516103cb84611407565b85604001516103dd8a60400151611407565b606088015188516103ed90611407565b89602001516114b8565b9695505050505050565b610409611a5f565b6040805180820182527f2d4e461ec3f6e35d3da4e10564e7bb48f33a0abe4277cc8b4710d0b25753dfb881527f08c5c13a88b4228bc3783639c3f3332c54c01f155f4068fefd2b8ce77297466b6020808301919091529083528151608080820184527f0ffefb5eea8094cf5231ee68292521c063d4f5bb9653096c74a302ad9f69ee558285019081527f2cec46fea95279577dde8d81d545f2796d2eefca77e2e7876850993742272364606080850191909152908352845180860186527f132c04f69fd5de240ade4bfa6eb51c670c3851bf71fd4ba70915a4418a22ef7881527f1afd460eb6ed3b06a5d7a01cb36cc019545c2bd81fe2fda4e1dfd79830cf1167818601528385015285840192909252835180820185527f19989973f5d3be6f06bbde03deaf95230370ac099737741aa64cc4c451122ffd8186019081527f2695127e934673205d8376ac20ae7d5354e49c70de01c3b7a645e04bbb5b923a828501528152845180860186527f10e43c0e25b6491f5718c31bb338150e1b6919f2ad447261445051cce9a3917881527f05e9db4870d400fde876dbcf077161ac18f05e564edda81dc7ee760b05501b3e818601528185015285850152835190810184527f236b573dc072f52b474b2ffed476e5a39bd2d0afa88b52d18b43a89ee1527fb68185019081527f05652dd0313b7ffef4ca72fd48dd2176de57806555a769e7d16526b7b493e934828401528152835180850185527f16be3f6b9dded9aa9746e1abf76372b8325ec43443db21b1164f45268789022781527f2ee1a9adc95d3c90fe5ac4e9ed3dd8e31e03e95ef2ad66f4bed8b07ebecf2af0818501528184015290840152815160188082526103208201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068557505060808201908152604080518082019091527f1ead88fe983659d046ff24142c12e48e58f06cdf090c8eeea242354663211a0281527f08eadd33f6b0501417de97aa65583c2215b037597b8ffb47e067053aa14a873c60208201529051805160009061071857610718611db3565b602002602001018190525060405180604001604052807f2fe7efc3063598eea382aad19ff13224cbda6ef4e07d7ff2f05eede647e5917581526020017f108c9f8295926774f6b2e405fda726d6725ff4f6889f5708d5a09943380b1b59815250816080015160018151811061078f5761078f611db3565b602002602001018190525060405180604001604052807f06e4eb197945362a754a972337acf9337f7aee6e01f43ee1984dd4f0dacb159481526020017f242a3e32347759bc36ca220c17d40a9eb707ca02aee161bf3c6679d046333fcf815250816080015160028151811061080657610806611db3565b602002602001018190525060405180604001604052807f022e7915ca69f75566d69934bd17119c54fea00a3347b27765f31b5ed1351f1081526020017f18f909bec0b2b9cfb5f9ca87d04d86f9a1d032a8425716f14d3517cf2690e67f815250816080015160038151811061087d5761087d611db3565b602002602001018190525060405180604001604052807f10b6f07f7fc71bcf41f3e188a9e90eadf851b3555125f1cbd85b122397dbf2ad81526020017f18961368690148053e82f22dcc9d4bed81798a8ab671e41b2c8ad1fabecd09ec81525081608001516004815181106108f4576108f4611db3565b602002602001018190525060405180604001604052807f209b0540f43e4998faf28feb6c8e8df0a073c7364a7aaec973357fbc1ac247b181526020017f22dd142420144702cf65b3168e8a2bdacd02bb1591e86bda62679652f2f7701b815250816080015160058151811061096b5761096b611db3565b602002602001018190525060405180604001604052807f1cbeb37d44772fd7c074445b5cfa26c55439f871b51302f60ff32c8af756d0cb81526020017f2ad96ed65ccd28f476c9524bcc96b6d98724b8f9934df9f3ff7b147b1e47e2e781525081608001516006815181106109e2576109e2611db3565b602002602001018190525060405180604001604052807f0ebc954c258216fca006abdd6d2803e5f9e1619b5b67f4c14b823130c7463eb981526020017f044d886cea3015ecdbf80ad6123724b414a8fec8c41b691db14f9b64ed5aa87a8152508160800151600781518110610a5957610a59611db3565b602002602001018190525060405180604001604052807f08aa6ba414888bdf8bafca4abf2394cf862aab1ea66dc36f460f54a698c10a2e81526020017f2e744f25e0f9e34efd105b2f7674954296fe56a14046ac9232fd717e5b200e2e8152508160800151600881518110610ad057610ad0611db3565b602002602001018190525060405180604001604052807f220d063265b3f99bf0b132a02f5093435ed74c518267a1582f6aded2c458cede81526020017f10ca6bd9a7bd84f8cb589499736a533a8987ed8731293969943b1566776145af8152508160800151600981518110610b4757610b47611db3565b602002602001018190525060405180604001604052807f053a32cb21a1b8d80f5ffebf4ab9910782eba9ee8e10228a18f90a3751a8701781526020017f16f0aa9280c58feebb4a426ea584ae07baa5f3dd04f7d2caed6877e9796c3c658152508160800151600a81518110610bbe57610bbe611db3565b602002602001018190525060405180604001604052807f1bf0d1df96e27ea338ab3cf7ee0163a96e4615a88131e3965d65e803e6d4eb7181526020017f08dfc7f767a447062296e6e5f0058912824555560baa434f51fdf871a1b2d1d88152508160800151600b81518110610c3557610c35611db3565b602002602001018190525060405180604001604052807f0cbad963fdb5400a3dfe1d1e81e19e23ae4b7c6659f95b264db78c02b83c154d81526020017f1906a84da067e30eda607c15eb37493117ab3e94ebb96a0e23571158189708da8152508160800151600c81518110610cac57610cac611db3565b602002602001018190525060405180604001604052807f0125bfc31b95475e4c494d6cc82e2c0be53620be819cf462dc20a9d5eaca444081526020017f151477e671daa70bd2fddd6f2a22cd1e59715779b05348f5c56dbc87fd7604c18152508160800151600d81518110610d2357610d23611db3565b602002602001018190525060405180604001604052807f243d14cdcce95f64b0b7459199debf5055bc4f4775fe86ba48ae292faeb7753981526020017f0bb2e1fb234522e9d6f93563153ecab80904af25bf5d1eecd4644394f6b5321c8152508160800151600e81518110610d9a57610d9a611db3565b602002602001018190525060405180604001604052807f286a5d5b3248d2c0f8e9520379dce636d9e389f2f07a7b396e8a4c2a3b5a625681526020017f2a0c63ced32f2246c9cd78863534e5de8285a22e8f50883b7282efd465192bae8152508160800151600f81518110610e1157610e11611db3565b602002602001018190525060405180604001604052807f2abaeec3f20b69f6be271dabb063c2b10d77170ebaa43913a7bae51307f93fe881526020017f158969db7bde102cae27f7c07fa21998dcc5c300689a963a98d23e80d50061138152508160800151601081518110610e8857610e88611db3565b602002602001018190525060405180604001604052807f18ef9afd389962a4474220dae7376a32a239814f9d2e2c25c2435904d045bb1b81526020017f05952460070abee9349cc455cf97d5f07f82725b9cd37adc552f610ecfd0c6ad8152508160800151601181518110610eff57610eff611db3565b602002602001018190525060405180604001604052807f163c0add05af5a8f36624fd7b70043abaf099b3cc25bc311fbcfcb46597900d381526020017f2f127653d15a89839ffecc02ecf33c6ffe63a36f34d79df224c96feb1e5e96af8152508160800151601281518110610f7657610f76611db3565b602002602001018190525060405180604001604052807f25eadffd0e4a3126393c95067fe8433290120d21b765110a7012ded7803913ca81526020017f1d4081d3521b65e1993f70f19bbe13361407f3538264b9e588324ea68f6387e68152508160800151601381518110610fed57610fed611db3565b602002602001018190525060405180604001604052807f04d0bd0752d6491f47b0279767b49276e831e047a5dba4a4120dd5043b26dfe181526020017f1a598b809a46bf6366994faac2c0f6956e095344ef7b0d6c8edfaae841f9a8d8815250816080015160148151811061106457611064611db3565b602002602001018190525060405180604001604052807f2bdd2ab24f068e4edeac28acaa05b11566e357de19b288bdd6311b4b6e1200ee81526020017f07f7ec844a902c35ee1015dfb64e1dd3ab009045112afb88136ff3498e3112d781525081608001516015815181106110db576110db611db3565b602002602001018190525060405180604001604052807f204fa68402f1ef6b3f54de4b6dec989f33397feebed5220820869940ade3232a81526020017f1d2986a8585bb97a4403e7ab05f73ceef5f47d8c983b6d7d2a8c41466699f2fb815250816080015160168151811061115257611152611db3565b602002602001018190525060405180604001604052807f2aaea6c3144d7feb79e054a8644e3d60248b06b617ba796b453b77bd2929f5e181526020017f05401d7bee12f8c5fd3ced07fa1899453c3462b824231d8afe6194f190d1e19981525081608001516017815181106111c9576111c9611db3565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611205816003611df8565b818061121357611213611de2565b8451838061122357611223611de2565b8651800909828061123657611236611de2565b602086015180096112479190611e1a565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926112bf92909190829060015b6020020151611919565b8951805160208201519397509195506112e4929060005b60200201518b5160016112b5565b895191935091506112fa908390839060006112d6565b909250905061130b8484848461199a565b909450925061131c8484888861199a565b90945092508315801561132d575082155b98975050505050505050565b6040805180820190915260008082526020820152611355611ab0565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808061139257600080fd5b50806113b157604051633842fc7360e21b815260040160405180910390fd5b505092915050565b60408051808201909152600080825260208201526113d5611ace565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808061139257600080fd5b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47906000036114755760405180604001604052808285600001516114649190611df8565b815260006020909101529392505050565b60405180604001604052808285600001516114909190611df8565b81526020018285602001516114a59190611df8565b6114af9084611e1a565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a60000151816000815181106114f9576114f9611db3565b6020026020010181815250508a602001518160018151811061151d5761151d611db3565b60209081029190910101528951600160200201518160028151811061154457611544611db3565b602090810291909101015289515181518290600390811061156757611567611db3565b602002602001018181525050896020015160016002811061158a5761158a611db3565b6020020151816004815181106115a2576115a2611db3565b60200260200101818152505089602001516000600281106115c5576115c5611db3565b6020020151816005815181106115dd576115dd611db3565b60200260200101818152505088600001518160068151811061160157611601611db3565b60200260200101818152505088602001518160078151811061162557611625611db3565b60209081029190910101528751600160200201518160088151811061164c5761164c611db3565b602090810291909101015287515181518290600990811061166f5761166f611db3565b602002602001018181525050876020015160016002811061169257611692611db3565b602002015181600a815181106116aa576116aa611db3565b60200260200101818152505087602001516000600281106116cd576116cd611db3565b602002015181600b815181106116e5576116e5611db3565b602002602001018181525050866000015181600c8151811061170957611709611db3565b602002602001018181525050866020015181600d8151811061172d5761172d611db3565b602090810291909101015285516001602002015181600e8151811061175457611754611db3565b602090810291909101015285515181518290600f90811061177757611777611db3565b602002602001018181525050856020015160016002811061179a5761179a611db3565b6020020151816010815181106117b2576117b2611db3565b60200260200101818152505085602001516000600281106117d5576117d5611db3565b6020020151816011815181106117ed576117ed611db3565b60200260200101818152505084600001518160128151811061181157611811611db3565b60200260200101818152505084602001518160138151811061183557611835611db3565b60209081029190910101528351600160200201518160148151811061185c5761185c611db3565b602090810291909101015283515181518290601590811061187f5761187f611db3565b60200260200101818152505083602001516001600281106118a2576118a2611db3565b6020020151816016815181106118ba576118ba611db3565b60200260200101818152505083602001516000600281106118dd576118dd611db3565b6020020151816017815181106118f5576118f5611db3565b60200260200101818152505061190a816119e2565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761195b81868909828061195257611952611de2565b86890983611a3b565b818061196957611969611de2565b828061197757611977611de2565b878909838061198857611988611de2565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476119c9878683611a3b565b6119d4878684611a3b565b925092505094509492505050565b80516000906119ef611aec565b6000602082602085026020880160086107d05a03fa90508080611a1157600080fd5b5080611a3057604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b60008180611a4b57611a4b611de2565b611a558484611e1a565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611a89611b0a565b8152602001611a96611b0a565b8152602001611aa3611b0a565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611b1d611b2f565b8152602001611b2a611b2f565b905290565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611b8657611b86611b4d565b60405290565b6040516060810167ffffffffffffffff81118282101715611b8657611b86611b4d565b600060408284031215611bc157600080fd5b611bc9611b63565b9050813581526020820135602082015292915050565b600082601f830112611bf057600080fd5b611bf8611b63565b806040840185811115611c0a57600080fd5b845b81811015611c24578035845260209384019301611c0c565b509095945050505050565b600082601f830112611c4057600080fd5b8135602067ffffffffffffffff80831115611c5d57611c5d611b4d565b8260051b604051601f19603f83011681018181108482111715611c8257611c82611b4d565b604052938452858101830193838101925087851115611ca057600080fd5b83870191505b84821015611cbf57813583529183019190830190611ca6565b979650505050505050565b600080828403610120811215611cdf57600080fd5b61010080821215611cef57600080fd5b611cf7611b8c565b611d018787611baf565b81526080603f1984011215611d1557600080fd5b611d1d611b63565b9250611d2c8760408801611bdf565b8352611d3b8760808801611bdf565b6020840152826020820152611d538760c08801611baf565b60408201529350840135905067ffffffffffffffff811115611d7457600080fd5b611d8085828601611c2f565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561008857610088611d8a565b634e487b7160e01b600052603260045260246000fd5b600060018201611ddb57611ddb611d8a565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611e1557634e487b7160e01b600052601260045260246000fd5b500690565b8181038181111561008857610088611d8a56fea26469706673582212200bdcd1befc4a0a3b191577a17a704e9065880821ad7fb647174b07b19be059f664736f6c63430008140033';

type Transaction1x0VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction1x0VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction1x0Verifier__factory extends ContractFactory {
  constructor(...args: Transaction1x0VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction1x0Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction1x0Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction1x0Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction1x0Verifier {
    return super.attach(address) as Transaction1x0Verifier;
  }
  connect(signer: Signer): Transaction1x0Verifier__factory {
    return super.connect(signer) as Transaction1x0Verifier__factory;
  }
  static readonly contractName: 'Transaction1x0Verifier';
  public readonly contractName: 'Transaction1x0Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction1x0VerifierInterface {
    return new utils.Interface(_abi) as Transaction1x0VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction1x0Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction1x0Verifier;
  }
}
