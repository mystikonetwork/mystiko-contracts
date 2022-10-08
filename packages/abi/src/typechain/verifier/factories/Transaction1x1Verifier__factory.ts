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
  '0x608060405234801561001057600080fd5b50611f7c806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611d76565b610057565b604051901515815260200160405180910390f35b6000815160191461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce9190611e82565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b906112c1565b610248576040516361586bdd60e01b815260040160405180910390fd5b6102558460200151611339565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f84604001516112c1565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf611f1a565b6020026020010151611423565b905060005b865181101561038c57838782815181106102fd576102fd611f1a565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c9190611e82565b8151811061034c5761034c611f1a565b60200260200101518a858151811061036657610366611f1a565b60200260200101516114a0565b611423565b91508061038481611eb1565b9150506102e1565b50610396816112c1565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c9846114ef565b85604001516103db8a604001516114ef565b606088015188516103eb906114ef565b896020015161159d565b9695505050505050565b610407611b40565b6040805180820182527f1f927f157f67c034ca8e8442260fbfe42c6b9671236402dec77f9840e2f7a58b81527f1ac05f694c1f36f3540821750c1a38196a615a403204d65f97ce9e6f6a2a8fe76020808301919091529083528151608080820184527f090072a5d09fe277e65ffc464679811c2d71f8143294cd0556f1cfaa3ab857678285019081527f095de797fea292d846cae02c746918d90395f0ef48c29cbc2c7936493f8f51ab606080850191909152908352845180860186527f29f6c0290fac50d90dd739b4941b3cf29df9b8092eeed31190b02856935bb9a581527f1bbdfaa14fd2b954e6b8e1f32e45487129f9789689bddb4e2d72d38f890630e6818601528385015285840192909252835180820185527f02d2cc60995ee2012d62b73dae3c7b2cfc646579d09f3eb911f7d7c2df89a1598186019081527f138ceba59970632b1544e96777200c91094565cc6dd3e19323fb77a48c12d4b6828501528152845180860186527f07b8273afd8fc5748516baacd688c526b25c0083f3e0e07eb55cce24e4d6ac1481527f1117765e23de5ffd67d8b29bb087163d5aae2b4fdad3068889082ac550e291b9818601528185015285850152835190810184527f0dcd3fdb041b0956129e885db339aeec2dc70d7144051c3372d32fa31ec866698185019081527f2541f4534e1f8f01f65c545401f9ceea826fb88e5c38f78834e19484da9c9e3d828401528152835180850185527f09193f424931c1aeb8d42aec773522255d77f47ced60b19cb236e35bb8241d7d81527f15fa263509495140a6b7c322eba0209937f4b49c2527a72a61057a5e855667f98185015281840152908401528151601a8082526103608201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068357505060808201908152604080518082019091527f0eade1ae8e6c0ee3a436ef711f57902066728192d9fdd238a9ad1e249360d9aa81527f1de48646a06c6d1636c4df52ece53bcfdcfa538e4770e1b51ea66b8b99aa894b60208201529051805160009061071657610716611f1a565b602002602001018190525060405180604001604052807f135acc215bfa654200e9a39a8b8cef29541ac858d9ae926533999081266952a781526020017f0f23d14f277abba3dbdaecf501285dac8017ce1316a8cc0d855b5863bbf16ed1815250816080015160018151811061078d5761078d611f1a565b602002602001018190525060405180604001604052807f02c63021c60d1afe4f31d25859f2103b88e799182ad60c697615ff42626ba48281526020017f0f95e35204aad0573b18f9f3f149a24c23d7d70eb9d259b4bc9d17948776501e815250816080015160028151811061080457610804611f1a565b602002602001018190525060405180604001604052807f07a9a7fe91e6051c9be93dc500d2b361f4e648c3374ebc1506082b693c467ca181526020017f15c86385563b97cc2474968b804e224de1166d0ba69a5238c02c77dc3a468faf815250816080015160038151811061087b5761087b611f1a565b602002602001018190525060405180604001604052807eafb64a889d7503f9c1b74a33502255c1640320fa18634d772c1fd076e0ffa481526020017f1282c99df612df4ccfffc0260095a0e3948d00405a78a4cede00dd713e084b1281525081608001516004815181106108f1576108f1611f1a565b602002602001018190525060405180604001604052807f0cb316317d30c316feaa5a9ec423520fe46f9da9aad70e3a4b02b3ec7e27a2f981526020017f220a8b030f6c2c04ac8101e09d7d29a0198c162a4fb7faf5ba6b7e15825b3ce9815250816080015160058151811061096857610968611f1a565b602002602001018190525060405180604001604052807f1242a0a34fb6e3d8c78289f963eada22f8b65f75bd6324fb87cc681dc9f0649281526020017f076afc0f5f1836c061ed24935708ae55c9d969d4bdaf7d5faaec3e33447d126f81525081608001516006815181106109df576109df611f1a565b602002602001018190525060405180604001604052807f12721f52e12c744d73d98085fb972ee165e912e2ca8494c539dbef038a582c4181526020017f125ea11140c24719c49f7faba0eee6f0035ebf6eb9cf3188222118981ef2247d8152508160800151600781518110610a5657610a56611f1a565b602002602001018190525060405180604001604052807f0679ea8159ba166492a9689573f89df8f9bb8117468c23f95754d623b3409c4881526020017f0ed62a2f3726d24d56d1cbb2cafb9273e8c9fd0dd1deea3e4461c4ff16016e3b8152508160800151600881518110610acd57610acd611f1a565b602002602001018190525060405180604001604052807f23548770758ec2466758f72ce7bca4af74260813b37225806e96ebc503c7050681526020017f2148852b8ba78e665ff24b66bdbadc0be839f0a03416a9a161bbf582885625d08152508160800151600981518110610b4457610b44611f1a565b602002602001018190525060405180604001604052807f28bbfbb2e9d85d4395a1de80bf3c03b33b4d7705f6950271b0763412e4abf50981526020017f074cecc61112bde2c23ec0f497f68766b37fcf0142c743107d661e0264cdab7e8152508160800151600a81518110610bbb57610bbb611f1a565b602002602001018190525060405180604001604052807f259a9e46089aa43f0a319f21ad2f786c20c92f3547419c93c37b41255608f2c981526020017f2c522afed6a51bbab51fd9286deaaae9ca649a5534a8fa5755450f98675cc0d08152508160800151600b81518110610c3257610c32611f1a565b602002602001018190525060405180604001604052807f16f413dadfca30d54a4ca12802cb78a9c6d19f080bbccea8c8489e544b5cd40f81526020017f04922716fd4c5bbc2995027623d045a98245902514b32687b9d2b40a63194ac08152508160800151600c81518110610ca957610ca9611f1a565b602002602001018190525060405180604001604052807f17f25bcfc039a7e143dd6119400dcda354754cdf3f6c3335c406714db455000a81526020017f0e9d00083f861df6c104ca4012a55496e9698cb46cf8229d5dfb6de2e76ef6958152508160800151600d81518110610d2057610d20611f1a565b602002602001018190525060405180604001604052807f2f4ccc906257b2ce4fa093ee28b15e1d2b46fedd85b9d920a56e415399ae287b81526020017f1c02c62071e5a47e5863da5ff9e853a31f95ece5a7cdc4567a307e183ae75aa88152508160800151600e81518110610d9757610d97611f1a565b602002602001018190525060405180604001604052807f16821d21f78c39bd72b86e74872bbfef063e9b5ecbb03d5b5bc50068a4109dfe81526020017f0475b74c6b0d2aa7cb345fa3a8f844b5af516f771ca8788f7f72e86c98cff6608152508160800151600f81518110610e0e57610e0e611f1a565b602002602001018190525060405180604001604052807f201daf9a42d45936efecb0f58142b54433dcdb8e86e5dbf78b1f65848811eff381526020017f16a1bf43b73b3b489793524764351adc86976c3c02457e87f854910a58d7d6d28152508160800151601081518110610e8557610e85611f1a565b602002602001018190525060405180604001604052807f2081def272d687853438a6ca4f469a729f98b3caa61800337d31f76d46bcc97b81526020017f16912058a6e89ae647d78387335b242dd2efe684fa4064500eafec65261210cf8152508160800151601181518110610efc57610efc611f1a565b602002602001018190525060405180604001604052807f18c7f585adfa21451cc4d535a0d8b82d51b71630661a0000a3f8c080609c9a2d81526020017f2fe6fce5b3c04fac5423fdc22cd2e5bb6346e4fa47889f72c86d97ee12860aec8152508160800151601281518110610f7357610f73611f1a565b602002602001018190525060405180604001604052807f17d9cada17446fd4b4b69b204c99d82082ecfaf263d0d41d8eae5015ca34b20881526020017ec9c57931d54020107254ee8b6e1f55f45e2712578e44901e6d310ee61cad188152508160800151601381518110610fe957610fe9611f1a565b602002602001018190525060405180604001604052807f0d106be5be7a86780f269af2435d8f1545e66c4a4b902112933f0cf99d9b01f181526020017f2e2bb9933c0cfd65a7700b72a184bd59946e040616f6136ef27eb35f566b7dc4815250816080015160148151811061106057611060611f1a565b602002602001018190525060405180604001604052807f2fe00fab5216e39e283bc7163f46afdc17f70e147aa04ca4886880e9a9b40a9a81526020017f2702d0c46f8cfa19bff493174804afdb2df88efc44dc5d4ec1e57c4bcef0e2d381525081608001516015815181106110d7576110d7611f1a565b602002602001018190525060405180604001604052807f1b9ba7dcbe9300397f7ce50208f9ab2c5a9defad16b75b53b54aac47a7c583c181526020017f2fe5a7e104c2042c21846d6766c3dd972b4d51eb126bea9a3bc650a5f43dacd7815250816080015160168151811061114e5761114e611f1a565b602002602001018190525060405180604001604052807f2cc964272995b9282c3d77941bd15e2f941c8730123b6df1accb18107b80c76d81526020017f0e59778a403dcb3ddd8d2b1a9daae43af40b47561e1ea45c4b763ccbc4cea56681525081608001516017815181106111c5576111c5611f1a565b602002602001018190525060405180604001604052807f2c443165f3c9062792851721aad5e137637a6c405f5accecc0a9a2b9e55792a381526020017f02fe13ac592d0869761f9930c87cbb9915fc2b0be98cfab67071208eaca2f042815250816080015160188151811061123c5761123c611f1a565b602002602001018190525060405180604001604052807f22e3933eac38579a895a9cddd68dfe5facbe9c64502be91c88d656044138bee881526020017f0d816f4ccdc0ec068d2b4c01b8e5a556eb8b9c225a389df00d1c7f7dcc873afe81525081608001516019815181106112b3576112b3611f1a565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476112ef816003611ecc565b81806112fd576112fd611f04565b8451838061130d5761130d611f04565b8651800909828061132057611320611f04565b602086015180096113319190611e9a565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926113a992909190829060015b60200201516119fe565b8951805160208201519397509195506113ce929060005b60200201518b51600161139f565b895191935091506113e4908390839060006113c0565b90925090506113f584848484611a7f565b909450925061140684848888611a7f565b909450925083158015611417575082155b98975050505050505050565b604080518082019091526000808252602082015261143f611b91565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b508061149857604051633842fc7360e21b815260040160405180910390fd5b505092915050565b60408051808201909152600080825260208201526114bc611baf565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b57611479565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479061155a5760405180604001604052808285600001516115499190611ecc565b815260006020909101529392505050565b60405180604001604052808285600001516115759190611ecc565b815260200182856020015161158a9190611ecc565b6115949084611e9a565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a60000151816000815181106115de576115de611f1a565b6020026020010181815250508a602001518160018151811061160257611602611f1a565b60209081029190910101528951600160200201518160028151811061162957611629611f1a565b602090810291909101015289515181518290600390811061164c5761164c611f1a565b602002602001018181525050896020015160016002811061166f5761166f611f1a565b60200201518160048151811061168757611687611f1a565b60200260200101818152505089602001516000600281106116aa576116aa611f1a565b6020020151816005815181106116c2576116c2611f1a565b6020026020010181815250508860000151816006815181106116e6576116e6611f1a565b60200260200101818152505088602001518160078151811061170a5761170a611f1a565b60209081029190910101528751600160200201518160088151811061173157611731611f1a565b602090810291909101015287515181518290600990811061175457611754611f1a565b602002602001018181525050876020015160016002811061177757611777611f1a565b602002015181600a8151811061178f5761178f611f1a565b60200260200101818152505087602001516000600281106117b2576117b2611f1a565b602002015181600b815181106117ca576117ca611f1a565b602002602001018181525050866000015181600c815181106117ee576117ee611f1a565b602002602001018181525050866020015181600d8151811061181257611812611f1a565b602090810291909101015285516001602002015181600e8151811061183957611839611f1a565b602090810291909101015285515181518290600f90811061185c5761185c611f1a565b602002602001018181525050856020015160016002811061187f5761187f611f1a565b60200201518160108151811061189757611897611f1a565b60200260200101818152505085602001516000600281106118ba576118ba611f1a565b6020020151816011815181106118d2576118d2611f1a565b6020026020010181815250508460000151816012815181106118f6576118f6611f1a565b60200260200101818152505084602001518160138151811061191a5761191a611f1a565b60209081029190910101528351600160200201518160148151811061194157611941611f1a565b602090810291909101015283515181518290601590811061196457611964611f1a565b602002602001018181525050836020015160016002811061198757611987611f1a565b60200201518160168151811061199f5761199f611f1a565b60200260200101818152505083602001516000600281106119c2576119c2611f1a565b6020020151816017815181106119da576119da611f1a565b6020026020010181815250506119ef81611ac7565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611a40818689098280611a3757611a37611f04565b86890983611b1c565b8180611a4e57611a4e611f04565b8280611a5c57611a5c611f04565b8789098380611a6d57611a6d611f04565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611aae878683611b1c565b611ab9878684611b1c565b925092505094509492505050565b8051600090611ad4611bcd565b6000602082602085026020880160086107d05a03fa905080801561002b575080611b1157604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b60008180611b2c57611b2c611f04565b611b368484611e9a565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611b6a611beb565b8152602001611b77611beb565b8152602001611b84611beb565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611bfe611c10565b8152602001611c0b611c10565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611c3f57600080fd5b611c47611e36565b808385604086011115611c5957600080fd5b60005b6002811015611c7b578135845260209384019390910190600101611c5c565b509095945050505050565b600082601f830112611c9757600080fd5b8135602067ffffffffffffffff80831115611cb457611cb4611f30565b8260051b604051601f19603f83011681018181108482111715611cd957611cd9611f30565b60405284815283810192508684018288018501891015611cf857600080fd5b600092505b85831015611d1b578035845292840192600192909201918401611cfd565b50979650505050505050565b600060408284031215611d3957600080fd5b6040516040810181811067ffffffffffffffff82111715611d5c57611d5c611f30565b604052823581526020928301359281019290925250919050565b600080828403610120811215611d8b57600080fd5b61010080821215611d9b57600080fd5b611da3611e5f565b611dad8787611d27565b81526080603f1984011215611dc157600080fd5b611dc9611e36565b9250611dd88760408801611c2e565b8352611de78760808801611c2e565b6020840152826020820152611dff8760c08801611d27565b60408201529350840135905067ffffffffffffffff811115611e2057600080fd5b611e2c85828601611c86565b9150509250929050565b6040805190810167ffffffffffffffff81118282101715611e5957611e59611f30565b60405290565b6040516060810167ffffffffffffffff81118282101715611e5957611e59611f30565b60008219821115611e9557611e95611eee565b500190565b600082821015611eac57611eac611eee565b500390565b6000600019821415611ec557611ec5611eee565b5060010190565b600082611ee957634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122020c18925a0ce4b68435325fe5a64d1bac10068a78793ca3882980ec40fcfe15b64736f6c63430008070033';

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
