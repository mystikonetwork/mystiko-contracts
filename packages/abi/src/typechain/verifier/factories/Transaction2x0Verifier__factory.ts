/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction2x0Verifier, Transaction2x0VerifierInterface } from '../Transaction2x0Verifier';

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
  '0x608060405234801561001057600080fd5b506121d0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611fca565b610057565b604051901515815260200160405180910390f35b60008151601e1461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce91906120d6565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b90611515565b610248576040516361586bdd60e01b815260040160405180910390fd5b610255846020015161158d565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f8460400151611515565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf61216e565b6020026020010151611677565b905060005b865181101561038c57838782815181106102fd576102fd61216e565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c91906120d6565b8151811061034c5761034c61216e565b60200260200101518a85815181106103665761036661216e565b60200260200101516116f4565b611677565b91508061038481612105565b9150506102e1565b5061039681611515565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c984611743565b85604001516103db8a60400151611743565b606088015188516103eb90611743565b89602001516117f1565b9695505050505050565b610407611d94565b6040805180820182527f1dbc416d430b1cb625e6f2ceda15ddbea8f66ca2d773656bb75f5e7539bcd5ff81527f28703a4074b5fb494c8fe80cc8c97b85759a310c71de6eda464ca0e6ee43da316020808301919091529083528151608080820184527f075e925f07b197fa8e84e17da50d3608dbd983383363974de4e6b442d5e307c58285019081527f0f89a45458860e27865901b62d7c59c3de4bafecab203488f688e9c0e009545c606080850191909152908352845180860186527f0efded24c044f7cd365559ac0cb8516db3009f19621e2134b42732c3426efda781527f13ddfafab1477fd2cc0ecf74efc5638753a8f43c58b5ba41f88afc6425cd9cc7818601528385015285840192909252835180820185527f1f8eef7e4bc11bb8eccda24df1aec8a98f75391ef452ddd1384a407dcaa2d1408186019081527f0ed15b19c085cf452e092f08842baf9b24dc6bcd002594d82c5ce547f4395fa6828501528152845180860186527f05125a7c741c1792f15663382fcbc87c263e70a3f04bd04e3ff77e705f593f4f81527f1329de02bb59cfae70deaabec3d37b55b369f11e1eefc012ee92cfd6497d123d818601528185015285850152835190810184527f037e560e4d352bf26b050e34f032790e69ecedc0ff69acab390102ea722e45fc8185019081527f12791eb5b6051435085f8a67ffad118117a90a37d4d01090f8c5e760fb77b1e6828401528152835180850185527f09ae99a176d1288abda849c5d45eba04efa6ccf7b75d2371b8d94590d20f8f8b81527f13b0b0b646eb89fd5bf70b8a8342b42d509b60d5eb4583156dd15e61620950938185015281840152908401528151601f8082526104008201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068357505060808201908152604080518082019091527f09008707454f39234e5059e62616d0eaec1d010937a7ec6b6a364510db8e4e7881527f2fccd5be8473d345f2cb0051325c6a3b41ea5dc4c8f2801ac06b79ef1964a9576020820152905180516000906107165761071661216e565b602002602001018190525060405180604001604052807f1707bb0411e52a401702fca631612b47570d72ead00b8ebfd3dcfaf48cbb373d81526020017f04f5b19329f4af8b4c474a2d49eb29a1a6d570288f418477cb972f2d10c73bde815250816080015160018151811061078d5761078d61216e565b602002602001018190525060405180604001604052807f2c26c60a7c0df48b129c3b409142d3a38118c080aae65ef15b7c4d1b69d1edbc81526020017f2906df8f216c113de87168d63056798c7a3a7efcaf1ee811f1c1b54e2b2687da81525081608001516002815181106108045761080461216e565b602002602001018190525060405180604001604052807f1aad9166b230bc533839c4ea5539f14d89a19b4ed9bd0a4934d3a3618c5f4aa381526020017f0401107578316347bd603fb24f3b5ccd32115424be0fdc149fd34ed78eea9f6e815250816080015160038151811061087b5761087b61216e565b602002602001018190525060405180604001604052807f151ea6c9618b7eeb97de9a542fa50bf985dbca1eaa24a0078439971566e53a7981526020017f01c00921c6b3ca97f152c33a0b3c3301369cb6570f8dce28b8807425bb19ffce81525081608001516004815181106108f2576108f261216e565b602002602001018190525060405180604001604052807f12e6b774f3f33463d2882ccaf2d99d0725398ef3dd9d6d1105d0b143ca4ef61081526020017f2bcfd6664cb29178c6592d8d6678f80f6e84d7ecdc4d03d3dae617faf7d866f881525081608001516005815181106109695761096961216e565b602002602001018190525060405180604001604052807f270824b8709d688272bd24593739e6b68908844c13b0359c16dcb5ed863b7d2481526020017f08d36581ab768f6169587e54d5b5b25f07ce2968fbc8ec823181b75bcfb3d90581525081608001516006815181106109e0576109e061216e565b602002602001018190525060405180604001604052807f0fc9920d7a8e76420cd5edf130a75da9f73c1f213f054c7ddf5ecb191c0f107b81526020017f028502adc0a3123e96d5615a960de48b648c68a4e2c43abaa37066be6e0fd1408152508160800151600781518110610a5757610a5761216e565b602002602001018190525060405180604001604052807e6e4eecae6aa80867368cfa485f3f8e866e8f1d3b220c62959e6dd5a265e2be81526020017f0bd512038d95d7905939115221533bb78905085455a7b2ae7c55dbb9923459538152508160800151600881518110610acd57610acd61216e565b602002602001018190525060405180604001604052807f1f61677440788bbdb33819f2cf589a98863450ebe39593609998e7e2ed29146381526020017f0782a7b92eadcb37c4c4e8dc5003f13649be6638b8f84441ac0d5b556df3aa308152508160800151600981518110610b4457610b4461216e565b602002602001018190525060405180604001604052807f1dbd72e0e7abeae9eb074fa4e2314693f62588bd965299ef1c65e2e8a14f5bf881526020017f0651e06bef131ab31c24a7b5a119f116401ead903f261ee7d8c5a4f4380962418152508160800151600a81518110610bbb57610bbb61216e565b602002602001018190525060405180604001604052807f226320fda7ffec842777a97b1de224701c2b1496d43b5fbd75da2d427c8a452781526020017f20bdace6eb7c976c1977f47b8ce1157a24072e86d810e8099c673a966b848cc88152508160800151600b81518110610c3257610c3261216e565b602002602001018190525060405180604001604052807f0a766fc27e44eb3492d5af8d2943cf069d8f1c1eae372b4a9264df7202e670f981526020017f2fbfa7c5a9dc68c307bf80c7b94d6f1aa202915d83565a47739722b1a373add68152508160800151600c81518110610ca957610ca961216e565b602002602001018190525060405180604001604052807f1de80e795a14c821eeb9a10a6c06eb7e2fd8a9528ecc54b16a0b7a7c22a3accd81526020017f26649d5a9090cd50fc45cf1e95eeb5510e4e2e7dd49ebd96e470f20f19b232e68152508160800151600d81518110610d2057610d2061216e565b602002602001018190525060405180604001604052807f056c50ff184aa025e9bca0a9e4f840a4e16210b8c8e817bfb1ca37177c5eb81181526020017f1a474d4636006221c0029c740fac67c3f3343a9f2f0b640de7a1cfce6f91393f8152508160800151600e81518110610d9757610d9761216e565b602002602001018190525060405180604001604052807f0f99f5c88c6740233b7900a6b3d3251f98e649992b3d27a2548b67d99808af9981526020017f030e20210c9dff9d88d22f8cf8cfea885da2373d334c067d4ee44577341378d78152508160800151600f81518110610e0e57610e0e61216e565b602002602001018190525060405180604001604052807f26d63d66f27e5cb4c21de9b1f2e2ef4a5faf7751a4f7cddb2689de3fb6ff50c281526020017f04c492c2f9cf783856325a1b619e5b2540de19375b1666c1c6ad31730f45f0018152508160800151601081518110610e8557610e8561216e565b602002602001018190525060405180604001604052807f1ce97e17b59bfa09a3e158571779e65b5532fe9c6e6c95a7e4eb4978cc4b58b681526020017f207f25876e16f4732be1f987a80248750e937e39e34d21b73ec477464e09ff1b8152508160800151601181518110610efc57610efc61216e565b602002602001018190525060405180604001604052807f17109678f21cceb9d981f5c6d80d0fe1f1bb055f24c3ea98927bc5236132239381526020017f2a823531f08de3ea11fe2719ec5160e500f2993b0640b925032a03792dbf70fc8152508160800151601281518110610f7357610f7361216e565b602002602001018190525060405180604001604052807f2f3c905177e3804768995cb0624840e288548ebbef5d4618be9b3e9c2fdf9e9481526020017f115d0a233c9f9ac8702335883fd4270f6b4934f1a794b9597266bb011d0898f78152508160800151601381518110610fea57610fea61216e565b602002602001018190525060405180604001604052807f271fa010486108f17d9e4b0ec9ec9f519ebbe754f76efdcad9632dc5bd7142c781526020017f1821d4e11977433bc1cb5e3b682a1f097d73cecd068142eed0a6550a4c636f7381525081608001516014815181106110615761106161216e565b602002602001018190525060405180604001604052807f2dde3b137d2ff5362d7c8f3b5139283326307db2d8d61efcc61bb8861fc611e981526020017f0bdad2e41db14604ce909881f559a85302fb0592a483d2eca73ba722bfa5933081525081608001516015815181106110d8576110d861216e565b602002602001018190525060405180604001604052807f11b114feaab9752429e3d3897ae8d0b8dcb949e4318a9e980d2ec014edd7971881526020017f0a864891186061ac41e444ac0bc51d9fd091a23ee3d86d3852342051e6b396ed815250816080015160168151811061114f5761114f61216e565b602002602001018190525060405180604001604052807f25bcf4ef0a838c06a3b66f45f05a65739b905d4d9b8cfea4145f72d8bb90600781526020017f1d98d3141a33de854202b357be7bb45a2e294973bd422ad0e60652eaa2a704e481525081608001516017815181106111c6576111c661216e565b602002602001018190525060405180604001604052807f0cef32b6aa9f3637083881429facc4f8f01aa05ce3d22db1f855056a2e798b7c81526020017f21857afa5c49549e6c1e0b18a8b4b717706c10e6a2c9b7947c663cdbe8bf3809815250816080015160188151811061123d5761123d61216e565b602002602001018190525060405180604001604052807f0174e4d690666fd8d120e5332f462a142e727ce0a10f3699664147f59b2d160c81526020017f1a768f8c0952b6984366a77fdb8a61e256aaf9dae4beb56d8f048a8a99b76f8181525081608001516019815181106112b4576112b461216e565b602002602001018190525060405180604001604052807f11577cbabea7adeab48d7ed360e024715feb042e5e122e5d3204e9bcdb9c978281526020017f19f47123e9d84e2abeefaefe5c6e51e0fbc8e7513348ca76f5ca4d1154d836388152508160800151601a8151811061132b5761132b61216e565b602002602001018190525060405180604001604052807f0ffed73bc8048c7d02960756bebcbf4042fd46c43c01c2dc41c482746f13641381526020017f2ed9d40d2f457090ab8d280b1517aab17c6081c964624e90b0259a53af6729628152508160800151601b815181106113a2576113a261216e565b602002602001018190525060405180604001604052807f0e0722558db478ed628cebc7323dac19d6b77690515ab2c3845ad2df627208a181526020017f2ab12aaf9bc5b4fb6286ebbb03f673bf0e448527ec6fe45804c4e1231b063d7b8152508160800151601c815181106114195761141961216e565b602002602001018190525060405180604001604052807f1024665b8b047af37966bdb1c40ddd383b8330e4db172e24bebbe8380420d9e481526020017f1717411adc89ef83041daceb80556282260216b4fe904d78a6e47f6fe0ec8db48152508160800151601d815181106114905761149061216e565b602002602001018190525060405180604001604052807f2b3767878d66df0c99b1d404888507d2b10c351b7bbb8244856d47442cdfcf7581526020017f2af96c3cf5667d7b7fbf17edf5dc3e97279939766da5ea172dc5df18f1d675f98152508160800151601e815181106115075761150761216e565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611543816003612120565b818061155157611551612158565b8451838061156157611561612158565b8651800909828061157457611574612158565b6020860151800961158591906120ee565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926115fd92909190829060015b6020020151611c52565b895180516020820151939750919550611622929060005b60200201518b5160016115f3565b8951919350915061163890839083906000611614565b909250905061164984848484611cd3565b909450925061165a84848888611cd3565b90945092508315801561166b575082155b98975050505050505050565b6040805180820190915260008082526020820152611693611de5565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b50806116ec57604051633842fc7360e21b815260040160405180910390fd5b505092915050565b6040805180820190915260008082526020820152611710611e03565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b576116cd565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47906117ae57604051806040016040528082856000015161179d9190612120565b815260006020909101529392505050565b60405180604001604052808285600001516117c99190612120565b81526020018285602001516117de9190612120565b6117e890846120ee565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a60000151816000815181106118325761183261216e565b6020026020010181815250508a60200151816001815181106118565761185661216e565b60209081029190910101528951600160200201518160028151811061187d5761187d61216e565b60209081029190910101528951518151829060039081106118a0576118a061216e565b60200260200101818152505089602001516001600281106118c3576118c361216e565b6020020151816004815181106118db576118db61216e565b60200260200101818152505089602001516000600281106118fe576118fe61216e565b6020020151816005815181106119165761191661216e565b60200260200101818152505088600001518160068151811061193a5761193a61216e565b60200260200101818152505088602001518160078151811061195e5761195e61216e565b6020908102919091010152875160016020020151816008815181106119855761198561216e565b60209081029190910101528751518151829060099081106119a8576119a861216e565b60200260200101818152505087602001516001600281106119cb576119cb61216e565b602002015181600a815181106119e3576119e361216e565b6020026020010181815250508760200151600060028110611a0657611a0661216e565b602002015181600b81518110611a1e57611a1e61216e565b602002602001018181525050866000015181600c81518110611a4257611a4261216e565b602002602001018181525050866020015181600d81518110611a6657611a6661216e565b602090810291909101015285516001602002015181600e81518110611a8d57611a8d61216e565b602090810291909101015285515181518290600f908110611ab057611ab061216e565b6020026020010181815250508560200151600160028110611ad357611ad361216e565b602002015181601081518110611aeb57611aeb61216e565b6020026020010181815250508560200151600060028110611b0e57611b0e61216e565b602002015181601181518110611b2657611b2661216e565b602002602001018181525050846000015181601281518110611b4a57611b4a61216e565b602002602001018181525050846020015181601381518110611b6e57611b6e61216e565b602090810291909101015283516001602002015181601481518110611b9557611b9561216e565b6020908102919091010152835151815182906015908110611bb857611bb861216e565b6020026020010181815250508360200151600160028110611bdb57611bdb61216e565b602002015181601681518110611bf357611bf361216e565b6020026020010181815250508360200151600060028110611c1657611c1661216e565b602002015181601781518110611c2e57611c2e61216e565b602002602001018181525050611c4381611d1b565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611c94818689098280611c8b57611c8b612158565b86890983611d70565b8180611ca257611ca2612158565b8280611cb057611cb0612158565b8789098380611cc157611cc1612158565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611d02878683611d70565b611d0d878684611d70565b925092505094509492505050565b8051600090611d28611e21565b6000602082602085026020880160086107d05a03fa905080801561002b575080611d6557604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b60008180611d8057611d80612158565b611d8a84846120ee565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611dbe611e3f565b8152602001611dcb611e3f565b8152602001611dd8611e3f565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611e52611e64565b8152602001611e5f611e64565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611e9357600080fd5b611e9b61208a565b808385604086011115611ead57600080fd5b60005b6002811015611ecf578135845260209384019390910190600101611eb0565b509095945050505050565b600082601f830112611eeb57600080fd5b8135602067ffffffffffffffff80831115611f0857611f08612184565b8260051b604051601f19603f83011681018181108482111715611f2d57611f2d612184565b60405284815283810192508684018288018501891015611f4c57600080fd5b600092505b85831015611f6f578035845292840192600192909201918401611f51565b50979650505050505050565b600060408284031215611f8d57600080fd5b6040516040810181811067ffffffffffffffff82111715611fb057611fb0612184565b604052823581526020928301359281019290925250919050565b600080828403610120811215611fdf57600080fd5b61010080821215611fef57600080fd5b611ff76120b3565b6120018787611f7b565b81526080603f198401121561201557600080fd5b61201d61208a565b925061202c8760408801611e82565b835261203b8760808801611e82565b60208401528260208201526120538760c08801611f7b565b60408201529350840135905067ffffffffffffffff81111561207457600080fd5b61208085828601611eda565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156120ad576120ad612184565b60405290565b6040516060810167ffffffffffffffff811182821017156120ad576120ad612184565b600082198211156120e9576120e9612142565b500190565b60008282101561210057612100612142565b500390565b600060001982141561211957612119612142565b5060010190565b60008261213d57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122084eb7203333cc14738e01aeab049968ed4a7c3d1ddf87e0d4b38111418a95cc764736f6c63430008070033';

type Transaction2x0VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction2x0VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction2x0Verifier__factory extends ContractFactory {
  constructor(...args: Transaction2x0VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction2x0Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction2x0Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction2x0Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction2x0Verifier {
    return super.attach(address) as Transaction2x0Verifier;
  }
  connect(signer: Signer): Transaction2x0Verifier__factory {
    return super.connect(signer) as Transaction2x0Verifier__factory;
  }
  static readonly contractName: 'Transaction2x0Verifier';
  public readonly contractName: 'Transaction2x0Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction2x0VerifierInterface {
    return new utils.Interface(_abi) as Transaction2x0VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction2x0Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction2x0Verifier;
  }
}
