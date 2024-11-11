/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction1x1Verifier, Transaction1x1VerifierInterface } from '../Transaction1x1Verifier';

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
  '0x6080604052348015600f57600080fd5b50611f3f8061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611dbe565b610057565b604051901515815260200160405180910390f35b6000815160191461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008e565b90505b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100ba6103f7565b9050806080015151855160016100d09190611e95565b146100ee57604051633494a40d60e21b815260040160405180910390fd5b835151821161011057604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013557604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015b57604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018357604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101ab57604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d557604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101fa57604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022257604051633494a40d60e21b815260040160405180910390fd5b835161022d906112bb565b61024a576040516361586bdd60e01b815260040160405180910390fd5b6102578460200151611333565b610274576040516361586bdd60e01b815260040160405180910390fd5b61028184604001516112bb565b61029e576040516361586bdd60e01b815260040160405180910390fd5b60006102de604051806040016040528060008152602001600081525083608001516000815181106102d1576102d1611ea8565b602002602001015161141d565b905060005b865181101561038457838782815181106102ff576102ff611ea8565b60200260200101511061032557604051633494a40d60e21b815260040160405180910390fd5b61037a82610375856080015184600161033e9190611e95565b8151811061034e5761034e611ea8565b60200260200101518a858151811061036857610368611ea8565b602002602001015161149d565b61141d565b91506001016102e3565b5061038e816112bb565b6103ab576040516361586bdd60e01b815260040160405180910390fd5b6103ed856000015186602001516103c1846114eb565b85604001516103d38a604001516114eb565b606088015188516103e3906114eb565b896020015161159c565b9695505050505050565b6103ff611b43565b6040805180820182527f2a2c1c2c246a417711fb7bb5d13703f7d3feb5d77b5b9fe19d1892c4e3012ceb81527f05c3c532898ab1755e1b0b9da11404c071ab472ca1c4f2f2b861666c69f5256d6020808301919091529083528151608080820184527f090703f77fae8e061b5832458fa8d05a6c888ff8b36d0cc068c23064caccef198285019081527f06184e848da7d955a2cffec1cb17caa36ec450f5efd97694394649288827ad81606080850191909152908352845180860186527f2eb7b9f9c622fd1c4b01b3b88a4bfec32a7328b4c59b3dd186ed1f9275b50d5b81527f218326dfbb0d451dfc85aa36517f2348998b23d39fe963a18b6546121f3786a7818601528385015285840192909252835180820185527f2a0c5a7add9cb61291af8640efde3ae7644693857598c93b4711e9836864fc038186019081527f0b3f53d8426d749394a541cb3d73fc305831ec3e5b1b4fc76b1921b403941971828501528152845180860186527f1a79a29c454d6e22f6082c7e37e705f21f37b6ebdd0e1da8f381492d35c94d4081527f19c637aef958a9ddc195263482d0de0ee0ad026748dac564a0bf1071f0b3ea39818601528185015285850152835190810184527f0e4550e03865dda7b48118712351bee3240a75461b90e3d37fedf7d694be63468185019081527f302b4edaf7d5224e6fd45b159a9bd5b15d6e130d596db8f6ebeb2c76f75b6a01828401528152835180850185527f24b59324ae68d35e72a939f3e44206f2ce51cd62db90db0a072ac8b205c293ea81527f1741e69ea348455d30cf108afadf12b975106ce99bbd444726647ebd784623348185015281840152908401528151601a8082526103608201909352919082015b604080518082019091526000808252602082015281526020019060019003908161067b57505060808201908152604080518082019091527f09227fdac8eb60570ad6304ac15e5602dbc37a78569ded6acbd5686359d9ba1281527f26f0ac8890d372b2f98549fb48db3a093c21ae89ada2d3f05cb8779caeef8ad460208201529051805160009061070e5761070e611ea8565b602002602001018190525060405180604001604052807f2181251b37cc669b6d4dddf3d3beed4f61b1553e5ebdc066bdc8021220d464c681526020017f12ca956cf777d5ec79e2c35709c72f9ed850413d124784dd7c0c999ff8c152fb815250816080015160018151811061078557610785611ea8565b602002602001018190525060405180604001604052807f23f034484d2b8959d4ad176d718de96e992df75ece639d69b99b2986cf8a062281526020017f276777344143fff9c5c6b88c4871e0bbf06ab8f95ad82ce3c880b872e5c5b5c781525081608001516002815181106107fc576107fc611ea8565b602002602001018190525060405180604001604052807f23a93210e722355c31cf0c6523d9a7fe0b810334af8ba22133ebf231e539348381526020017f0537b474b97d3eb2e464dba47cf79b3de6ab5f3f3a26dfc9d956a327502f323a815250816080015160038151811061087357610873611ea8565b602002602001018190525060405180604001604052807f1a2324087b49c0108c673c146cdce3646cdfc06064de4feb17c5e22b0bb21e2581526020017f0b8688ffb1297d956694041c549b8e746325d8e371329aebe96cadb24070d51a81525081608001516004815181106108ea576108ea611ea8565b602002602001018190525060405180604001604052807f1be64c1858d9e5102623fb20a208a324d872acb0e39c2e7b2e87714212f1fd2f81526020017f19b4e9f97207c48346415751d7621ea341164a4af10dcaf007f6fd80b97f61ee815250816080015160058151811061096157610961611ea8565b602002602001018190525060405180604001604052807f2686f0d5d67c795f88b095ca51b617c7091e23642d5a0562feeab0b965167dd281526020017f17e4922f5ade76a262f7a07b616227c875d97b77d5f7dd2079c0b596529ce55981525081608001516006815181106109d8576109d8611ea8565b602002602001018190525060405180604001604052807f0cf4a4d98050196de7c11d66f3309c6aa4e192f9b9305c93ecf69384cdb0deda81526020017f0bda6fac106442ca2601f39954473f466e40d182360a3f5d5728859f124f52778152508160800151600781518110610a4f57610a4f611ea8565b602002602001018190525060405180604001604052807f0f57e5f752a6a31e18d441f06d6793761f87b9eb255e9259b76aea104cbde21d81526020017f1ebebe2c05e2262e3c59f6caf33f14fc302cc2d1878cf8a3d61924ccfbd3aca58152508160800151600881518110610ac657610ac6611ea8565b602002602001018190525060405180604001604052807f1ebb6add71e58f0a50212d8525385fecfca4fd25a9724f9a401c53a1f078103781526020017f2c856ca3865689f1375a25db57837b91639e302b3ec761f9c273e80500402bbc8152508160800151600981518110610b3d57610b3d611ea8565b602002602001018190525060405180604001604052807f1b6ec32a4f4908088175d91b34f9b62075310e8f6ec058fe72457b558edad7c081526020017f04292621ab206347c0e445698fb8ca040eac2f02dbd5d678c16f76d45cc070d68152508160800151600a81518110610bb457610bb4611ea8565b602002602001018190525060405180604001604052807f0d41375c0806780657c3dc55e7830e2d8a951205924314af619583a601c5384281526020017f282c78c9492c0a27b941727a155e73e1d8184d0959dcd768d98f43bc6924012e8152508160800151600b81518110610c2b57610c2b611ea8565b602002602001018190525060405180604001604052807f22e95629d9d434ada4c2c2a88974a6ccef93cd79aaa985f307dfe5d988ebe5e181526020017f16dfe601e592921977c3bbcf9964088ed850e70372b364e389704a2c182ea8aa8152508160800151600c81518110610ca257610ca2611ea8565b602002602001018190525060405180604001604052807f06b806cb6f2292b6f77d50a7531fba126d84bdc0f7a2c5c7cd292615f2f0083981526020017f1b8a8c3dd861c0017d161f08cf4a141fd2af43d121dab2250bd1098db1b6a7258152508160800151600d81518110610d1957610d19611ea8565b602002602001018190525060405180604001604052807f2706d34b1e6b534512c54ddb9e638dfded266f72153a395b2cd23073f77826c581526020017f0a05f472f2c307543e900146bf731704f200ff19e0d3d1bda1185edeaf26cd3a8152508160800151600e81518110610d9057610d90611ea8565b602002602001018190525060405180604001604052807f2f8f600f41138b3d4048ccc2b905a2776e8c48593c37a44dad401a151102d6bd81526020017f0aa39741cc598c67422d106172ea8c9585734da6f33d2ccd95b02b3985f6bee58152508160800151600f81518110610e0757610e07611ea8565b602002602001018190525060405180604001604052807f2cb6e966cfa18510d88efd1813af1f0a39456e7a52ae8c2b9e76e21fb13e8dc281526020017f147e11e32cd32e4bc92fdc6664cdc8cbd0bec7519b589cda7dfee7dba6e2e9778152508160800151601081518110610e7e57610e7e611ea8565b602002602001018190525060405180604001604052807f24f92a5e6d6f4824404f3789358e006aa75c0071d0ba34839297ea146780d73f81526020017f2d0be928bb984ebdd5a7a1f14634b49d359efb3387ca74047e36681d690de4958152508160800151601181518110610ef557610ef5611ea8565b602002602001018190525060405180604001604052807f0b587944695f8555bb4c9dee03fd24bdc5ed9e3c583a5e13cdc19f36e022af1881526020017f03e3257e6eb5436baee02d1442b354770f10a3da2ffc6c8a3f0fece51a7c2c1b8152508160800151601281518110610f6c57610f6c611ea8565b602002602001018190525060405180604001604052807f2fc1c70c56af51d988471376de202273fc93f4b73ed6a9ed6ad9fa1d8db88c5781526020017f06c64f31d26540c41d42d151cd06ed2913b49620d457601069e65580a60eadce8152508160800151601381518110610fe357610fe3611ea8565b602002602001018190525060405180604001604052807f0cb9e8ed2ad9b7f5c49e310e9e42aba083f3d23708c1ea6e2619bb9f3b27a77f81526020017f1b2505c4d354cbeca111ad0744e39540c02e4ca2d8fdf1e36790d8a74e587702815250816080015160148151811061105a5761105a611ea8565b602002602001018190525060405180604001604052807f3004d152833025e99118823c1bccf4c83cc0e5e16a495326f301d08091b262c081526020017f1f798cbde83d8920c7c3d8f82b2866f2a8055fa035cb5e5fb95321c36f68db9081525081608001516015815181106110d1576110d1611ea8565b602002602001018190525060405180604001604052807f14b6a34577357d53f9e15f8d60be5725c0a4dd67331b257ee693b7cac6908f3d81526020017f11378c952cc15a50e0747dfdcb29c8ecd00476c84eb8ced37fafbc55d2d6017c815250816080015160168151811061114857611148611ea8565b602002602001018190525060405180604001604052807f04267b2701d28c0c05f4c1eacf6e39173c3285c87af07e7d54755e777d22b80481526020017f256ce316484bf6e8f9f53bfd22f4887545c9c322fe97c8182df36abcbec7c2c481525081608001516017815181106111bf576111bf611ea8565b602002602001018190525060405180604001604052807f25a80ed2ebf2c5454d16791d04d01e225ada0258bf6244f1475bab7bcc9daaa881526020017f19f5107d7d400129701d14269b2c1695154d7ad02913e5ae64a48ed9cb777519815250816080015160188151811061123657611236611ea8565b602002602001018190525060405180604001604052807f0ab546129e5cf1bebb47e88878df3f54d524ee276702bfd6c007d6712f40950781526020017f2ec27c5aed9a3756aaee29884cb9576f5dd2d8b68064d3fae873174359f20b0681525081608001516019815181106112ad576112ad611ea8565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476112e9816003611ed4565b81806112f7576112f7611ebe565b8451838061130757611307611ebe565b8651800909828061131a5761131a611ebe565b6020860151800961132b9190611ef6565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926113a392909190829060015b60200201516119fd565b8951805160208201519397509195506113c8929060005b60200201518b516001611399565b895191935091506113de908390839060006113ba565b90925090506113ef84848484611a7e565b909450925061140084848888611a7e565b909450925083158015611411575082155b98975050505050505050565b6040805180820190915260008082526020820152611439611b94565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808061147657600080fd5b508061149557604051633842fc7360e21b815260040160405180910390fd5b505092915050565b60408051808201909152600080825260208201526114b9611bb2565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808061147657600080fd5b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47906000036115595760405180604001604052808285600001516115489190611ed4565b815260006020909101529392505050565b60405180604001604052808285600001516115749190611ed4565b81526020018285602001516115899190611ed4565b6115939084611ef6565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a60000151816000815181106115dd576115dd611ea8565b6020026020010181815250508a602001518160018151811061160157611601611ea8565b60209081029190910101528951600160200201518160028151811061162857611628611ea8565b602090810291909101015289515181518290600390811061164b5761164b611ea8565b602002602001018181525050896020015160016002811061166e5761166e611ea8565b60200201518160048151811061168657611686611ea8565b60200260200101818152505089602001516000600281106116a9576116a9611ea8565b6020020151816005815181106116c1576116c1611ea8565b6020026020010181815250508860000151816006815181106116e5576116e5611ea8565b60200260200101818152505088602001518160078151811061170957611709611ea8565b60209081029190910101528751600160200201518160088151811061173057611730611ea8565b602090810291909101015287515181518290600990811061175357611753611ea8565b602002602001018181525050876020015160016002811061177657611776611ea8565b602002015181600a8151811061178e5761178e611ea8565b60200260200101818152505087602001516000600281106117b1576117b1611ea8565b602002015181600b815181106117c9576117c9611ea8565b602002602001018181525050866000015181600c815181106117ed576117ed611ea8565b602002602001018181525050866020015181600d8151811061181157611811611ea8565b602090810291909101015285516001602002015181600e8151811061183857611838611ea8565b602090810291909101015285515181518290600f90811061185b5761185b611ea8565b602002602001018181525050856020015160016002811061187e5761187e611ea8565b60200201518160108151811061189657611896611ea8565b60200260200101818152505085602001516000600281106118b9576118b9611ea8565b6020020151816011815181106118d1576118d1611ea8565b6020026020010181815250508460000151816012815181106118f5576118f5611ea8565b60200260200101818152505084602001518160138151811061191957611919611ea8565b60209081029190910101528351600160200201518160148151811061194057611940611ea8565b602090810291909101015283515181518290601590811061196357611963611ea8565b602002602001018181525050836020015160016002811061198657611986611ea8565b60200201518160168151811061199e5761199e611ea8565b60200260200101818152505083602001516000600281106119c1576119c1611ea8565b6020020151816017815181106119d9576119d9611ea8565b6020026020010181815250506119ee81611ac6565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611a3f818689098280611a3657611a36611ebe565b86890983611b1f565b8180611a4d57611a4d611ebe565b8280611a5b57611a5b611ebe565b8789098380611a6c57611a6c611ebe565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611aad878683611b1f565b611ab8878684611b1f565b925092505094509492505050565b8051600090611ad3611bd0565b6000602082602085026020880160086107d05a03fa90508080611af557600080fd5b5080611b1457604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b60008180611b2f57611b2f611ebe565b611b398484611ef6565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611b6d611bee565b8152602001611b7a611bee565b8152602001611b87611bee565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611c01611c13565b8152602001611c0e611c13565b905290565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611c6a57611c6a611c31565b60405290565b6040516060810167ffffffffffffffff81118282101715611c6a57611c6a611c31565b604051601f8201601f1916810167ffffffffffffffff81118282101715611cbc57611cbc611c31565b604052919050565b600060408284031215611cd657600080fd5b611cde611c47565b823581526020928301359281019290925250919050565b600082601f830112611d0657600080fd5b611d0e611c47565b806040840185811115611d2057600080fd5b845b81811015611d3a578035845260209384019301611d22565b509095945050505050565b600082601f830112611d5657600080fd5b813567ffffffffffffffff811115611d7057611d70611c31565b8060051b611d8060208201611c93565b91825260208185018101929081019086841115611d9c57600080fd5b6020860192505b838310156103ed578235825260209283019290910190611da3565b600080828403610120811215611dd357600080fd5b610100811215611de257600080fd5b611dea611c70565b611df48686611cc4565b81526080603f1983011215611e0857600080fd5b611e10611c47565b9150611e1f8660408701611cf5565b8252611e2e8660808701611cf5565b6020830152816020820152611e468660c08701611cc4565b604082015292505061010083013567ffffffffffffffff811115611e6957600080fd5b611e7585828601611d45565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561008857610088611e7f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611ef157634e487b7160e01b600052601260045260246000fd5b500690565b8181038181111561008857610088611e7f56fea26469706673582212208917a578c23b16db2dcf3415649dccac0e1ad4cf52d4030717c6c4f7552b67c164736f6c634300081a0033';

type Transaction1x1VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction1x1VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction1x1Verifier__factory extends ContractFactory {
  constructor(...args: Transaction1x1VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction1x1Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction1x1Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction1x1Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction1x1Verifier {
    return super.attach(address) as Transaction1x1Verifier;
  }
  connect(signer: Signer): Transaction1x1Verifier__factory {
    return super.connect(signer) as Transaction1x1Verifier__factory;
  }
  static readonly contractName: 'Transaction1x1Verifier';
  public readonly contractName: 'Transaction1x1Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction1x1VerifierInterface {
    return new utils.Interface(_abi) as Transaction1x1VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction1x1Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction1x1Verifier;
  }
}
