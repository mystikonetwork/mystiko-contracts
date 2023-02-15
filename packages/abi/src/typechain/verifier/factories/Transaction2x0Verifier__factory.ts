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
  '0x608060405234801561001057600080fd5b506121cf806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611fc9565b610057565b604051901515815260200160405180910390f35b60008151601e1461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce91906120d5565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b90611514565b610248576040516361586bdd60e01b815260040160405180910390fd5b610255846020015161158c565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f8460400151611514565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf61216d565b6020026020010151611676565b905060005b865181101561038c57838782815181106102fd576102fd61216d565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c91906120d5565b8151811061034c5761034c61216d565b60200260200101518a85815181106103665761036661216d565b60200260200101516116f3565b611676565b91508061038481612104565b9150506102e1565b5061039681611514565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c984611742565b85604001516103db8a60400151611742565b606088015188516103eb90611742565b89602001516117f0565b9695505050505050565b610407611d93565b6040805180820182527f11b76950653832be9e440c4714781235211046fe48a2c66f12e490bbc71f67f081527f0d83f8d9a8d9912ae18c8339fdb84e7d3edad2915c6e3522307bd6fb68c6683e6020808301919091529083528151608080820184527f168aa2076c942e02ce63f702ef06825b13f67db78710244dd562e08b4f7de9418285019081527f123c5cfa99bd07615832f3c0e764b6ce796605602f6fcc62f8414fc740a3c635606080850191909152908352845180860186527f2421b424cce7581aaf227fe8f6c72f5a64f453db67d2d9afb3392350ded297a981527f2a4f61dd8ca8bb525032bc1b0cf76c4c135c4b346c817e6cdf95eb20a885571e818601528385015285840192909252835180820185527f0789c21d432d92d647724d537ca9f8817c26a2919e8e76f353f9e2b3f8cd59c38186019081527f1308236ce72a609899937fd1e403027deb31818ec829eeaad2b6a7683fcfa9ee828501528152845180860186527f17ab08ce80217afebaf069354d4f81a96dfbd443b73180c6d3092a79ae1af3e481527f1b2ca0638d8d6794037c00e0835a7727054a08dff0d29b22d1cec330aa20760b818601528185015285850152835190810184527f110c07bb994d41b6c83ee58a06792a51f1d84f86e0425aea785f26ca5264180a8185019081527f1886c86c2709430d37d2e7cfa324c40ffac8a7d06c7afcb89d9d64351043f0b0828401528152835180850185527f2ba5b81e373dc090e4c712c0c61ccf611e677ffd10d5c40e42b71cda72a6cc7f81527f1124e95c2ca8e1bbaceb4def8f891d672325a446823ffb229d5a8c7d773141678185015281840152908401528151601f8082526104008201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068357505060808201908152604080518082019091527f222b6a68325b1c57df4ee4d6c868bf9c4daf8e3c144024ea923d39fb09eb636e81527f1c6dddd6d2fbd9389e6f99bd41a2f71097691712598bebe98a2aabd69167bec56020820152905180516000906107165761071661216d565b602002602001018190525060405180604001604052807f2c1e5352d09a69edf99d8ea5a813c28c32302c9620b467230835e4a80ea8eaa581526020017f03e79849cd558c82f545eebb1dca5d0b20bbe43a3f3190c09fcb311f38268d3b815250816080015160018151811061078d5761078d61216d565b602002602001018190525060405180604001604052807f02b637ec528c24d5d95ffe0919bf58f2dc7d53c99dfe3b35fc2b96a0a716835281526020017f1faf851054c0c9e225727d92578e6cb77cc2cacdf4b6b48632e08f7d28c464c881525081608001516002815181106108045761080461216d565b602002602001018190525060405180604001604052807f09fe9f5da4c19ab7e5446f9c73a0aaa05bcd3e891ba60e4788744f90ef245d4281526020017f26acc8e1f07131c11556c590eb835e9af260cbf58e25f99c8d27907f749f4387815250816080015160038151811061087b5761087b61216d565b602002602001018190525060405180604001604052807f2c542c8c719511d83c7aabb923e9b53697cc9c8d050ce7b9e51370ec2e1b7c2d81526020017f240658a5b38a5b41ffd4e27a8214594c2970279425bc2f480701538f683f538081525081608001516004815181106108f2576108f261216d565b602002602001018190525060405180604001604052807f200ea9a40498447f9bec398eaa202f21d7e21115ae7ceb2a98340cf19dc49a1981526020017f1138ba46158345face9f0f452f02aded17aab84135d551e25086127e8c6f59b681525081608001516005815181106109695761096961216d565b602002602001018190525060405180604001604052807f1798ffac3d33e4a161e8453d760d3760ec742f5aeff33795e7d63b113c68bf6f81526020017f2fd06b6c795d15ea0f1b020a0d945b2590c6b53f3d27e0d73046222332fe6f3181525081608001516006815181106109e0576109e061216d565b602002602001018190525060405180604001604052807f1865e477659c422ffe925cca54a13deb97406ef0744b7cdc5d89c4a74e54b07c81526020017f1e7958c50d6110f5f489fd75c17e28dcc9d4de1c9dcd85d8e72631739d262c248152508160800151600781518110610a5757610a5761216d565b602002602001018190525060405180604001604052807f06c11051b47820ac332d6f3992b75c7ad0e73d5494f8ce85e15648a43195441081526020017f01fa8e13ffd834a269617a439a93587622f9441644d651aab48487256a00057b8152508160800151600881518110610ace57610ace61216d565b602002602001018190525060405180604001604052807f0b7b7c8fef714a09ebfaf0797ec5164c7a7d40681697b012940f1a6fb8c918e381526020017f03ab5080eb0327bc2a0dae72033b893aa611d9eb6713e53dc15529382797b0e18152508160800151600981518110610b4557610b4561216d565b602002602001018190525060405180604001604052807f0614449bb9055d18355b4b0a839e1ac5cc0bfb56880378b744fd7ca8e623939181526020017f08b0eb9b751317a095bf8473db894f7fa9831cb73723116591e9fc3d865f45098152508160800151600a81518110610bbc57610bbc61216d565b602002602001018190525060405180604001604052807f2d69bde19f43849d480150139bd2358bad541668bdce2dc76b9837b768888fc181526020017f0f411c4457b2754906d9a5a92569b014fb02416aa86da611bae54130b7defec58152508160800151600b81518110610c3357610c3361216d565b602002602001018190525060405180604001604052807f0fc77dafffff21cf49276df0ddad11b4a3293e9a063b6c9bda6067c162d4f11181526020017f0a8d0041efd8673c299c89f61bde4af67c256b0b27a93624b814739430c5be758152508160800151600c81518110610caa57610caa61216d565b602002602001018190525060405180604001604052807f112fc33f8192811c346c39b863fdcc1e3bb49ac10a29e1022cd32daa998eb3db81526020017f1009489c745d129cb3e1ea04bcfa3311d9e6c24427ba4fc48e5a27bbadf352368152508160800151600d81518110610d2157610d2161216d565b602002602001018190525060405180604001604052807f29ac507fc7f05d99ad91acf492f55fdad14858bbffbc3e67cff23878358ca36081526020017f0ebc2dba432e916b4bc31207e50b7e48d8ef3d1bd99cb577e115f563b1f434c48152508160800151600e81518110610d9857610d9861216d565b602002602001018190525060405180604001604052807ebc56c474f42084c242a67e0409268aa009a3607faef55db0bbebb63480cd7c81526020017f239389c9984492cc2de8411d15ad4d82d6c52c15338791cd8f064acf8ea37ba08152508160800151600f81518110610e0e57610e0e61216d565b602002602001018190525060405180604001604052807f1c5d6ba9e0a04bf2a37dd6c909cde8b6e11060c862c28e223c8e694ee544d01a81526020017f20245a6a8ddc25f3c94dba4714bebaa056862a10c73ccde2e6a8d18855765e188152508160800151601081518110610e8557610e8561216d565b602002602001018190525060405180604001604052807f18246e934075c1dfff6d40c2162c5a7c923cb1447531d6131cb2bf7937cf88ba81526020017f042ae8bd965f0a27ab7c75c6642dbb25426d6e0cfea8c1b2edb53cbb757f85b68152508160800151601181518110610efc57610efc61216d565b602002602001018190525060405180604001604052807f20c961a767a067afdf69adb29f4d03d5f8650cbd7d11749d1039943e5c41bfcf81526020017f0e984876387fcad0863cee42e2dec0b1dbd5eb49f73fa38e75915d905c4de4048152508160800151601281518110610f7357610f7361216d565b602002602001018190525060405180604001604052807f1d4c69c6432f7f9ef7de8b617654797ba919a03b1c504ae1c81119c22620ab1781526020017f084df221d3bc27d1cf7ef110fd8eaa1e8b01dd13495a95c7b01add24c44cff6f8152508160800151601381518110610fea57610fea61216d565b602002602001018190525060405180604001604052807f160a3a465d20ad5b555728a0a0ba5faceea1874688f1d9a59555ca4039036d7881526020017f112fa0eead4773f21d111e0d661e5177044ced3d1f4617f413f88e0360bfe58981525081608001516014815181106110615761106161216d565b602002602001018190525060405180604001604052807f2252d14e1ede783a853c88d29f99f8d74d7c7c003a2ab5ce63864738d6b298ba81526020017f10394ee0b9f9fbf886211be8802499af061c403f9122f25f9c10a17b7ac5040681525081608001516015815181106110d8576110d861216d565b602002602001018190525060405180604001604052807f1e9f711728aeca5319f39126c8223605c4e5b6c339c8f4fac7a74c54506f8cca81526020017f1a6246f6071dc7129b105576b2c9440b2c5cd3b8263611177918d6487279bd79815250816080015160168151811061114f5761114f61216d565b602002602001018190525060405180604001604052807f07c1546356c418559581423d98d592e32a97616592f1ac9be4c1f650c0e8042a81526020017f232c224cb02841a7c237045078fee7a4d52f2c2fe03ec1605a0bfa94b61dbfcb81525081608001516017815181106111c6576111c661216d565b602002602001018190525060405180604001604052807f0762dc18378b7aae1bdc7b5da1109d4442fbe5230aeb266ab9f7c34024447d7d81526020017f20e9580dae53bb29816cdf7f8b377bc8a99fd7ecac237b8145977880a0b14ffe815250816080015160188151811061123d5761123d61216d565b602002602001018190525060405180604001604052807f0c62859e42d6fc2876688e73a6a05f7558d9e07fb5cf65bd3a1cefadf49e854081526020017f032e5fe2eafe8657f883080110a0e29b321f5bd317f9d122ffcb6c9a2a15490581525081608001516019815181106112b4576112b461216d565b602002602001018190525060405180604001604052807f12c49a643649921f8e8907c6c27aca70eab05777c7f41a025a8cbbb45547d8bd81526020017f0b100cd8e9157aca860592288cf175a1cffa6ce7bad99b50851bbaff017bfdee8152508160800151601a8151811061132b5761132b61216d565b602002602001018190525060405180604001604052807f238002685230060d1992cecea3670088340944b0d993e9dd65309f1a366e792d81526020017f288a6399d5d62a19f5283dbd8afeb4fd7f6d9ef0c91d9dce6125cc5e2f22d4708152508160800151601b815181106113a2576113a261216d565b602002602001018190525060405180604001604052807efd8e609a8a18aa3198dcbaed64151136f3604bccc4401b1cd608f1c1f0bdf281526020017f27ea3d5677f13b9d9d379dc73e08dcc56f83aa880da3c10d4c08fb56ae38e9688152508160800151601c815181106114185761141861216d565b602002602001018190525060405180604001604052807f1a40a84fe7fe4fdac3886d67ec960f7d30388df2e79e9584fb19a4ea95a2948281526020017f077d1967addf18e8661733be8271aa42108ae9e0990748554be87cb4c13c0e818152508160800151601d8151811061148f5761148f61216d565b602002602001018190525060405180604001604052807f2dfacbbc5738b22d092975c5c20ca41866e19f1bc4f96fdbe156a52abff3562b81526020017f1e779d10f900556bf800662dacb367a8cd188c1f9cb821733781b5eecde2103b8152508160800151601e815181106115065761150661216d565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4761154281600361211f565b818061155057611550612157565b8451838061156057611560612157565b8651800909828061157357611573612157565b6020860151800961158491906120ed565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d29285928392839283926115fc92909190829060015b6020020151611c51565b895180516020820151939750919550611621929060005b60200201518b5160016115f2565b8951919350915061163790839083906000611613565b909250905061164884848484611cd2565b909450925061165984848888611cd2565b90945092508315801561166a575082155b98975050505050505050565b6040805180820190915260008082526020820152611692611de4565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b50806116eb57604051633842fc7360e21b815260040160405180910390fd5b505092915050565b604080518082019091526000808252602082015261170f611e02565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b576116cc565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47906117ad57604051806040016040528082856000015161179c919061211f565b815260006020909101529392505050565b60405180604001604052808285600001516117c8919061211f565b81526020018285602001516117dd919061211f565b6117e790846120ed565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a60000151816000815181106118315761183161216d565b6020026020010181815250508a60200151816001815181106118555761185561216d565b60209081029190910101528951600160200201518160028151811061187c5761187c61216d565b602090810291909101015289515181518290600390811061189f5761189f61216d565b60200260200101818152505089602001516001600281106118c2576118c261216d565b6020020151816004815181106118da576118da61216d565b60200260200101818152505089602001516000600281106118fd576118fd61216d565b6020020151816005815181106119155761191561216d565b6020026020010181815250508860000151816006815181106119395761193961216d565b60200260200101818152505088602001518160078151811061195d5761195d61216d565b6020908102919091010152875160016020020151816008815181106119845761198461216d565b60209081029190910101528751518151829060099081106119a7576119a761216d565b60200260200101818152505087602001516001600281106119ca576119ca61216d565b602002015181600a815181106119e2576119e261216d565b6020026020010181815250508760200151600060028110611a0557611a0561216d565b602002015181600b81518110611a1d57611a1d61216d565b602002602001018181525050866000015181600c81518110611a4157611a4161216d565b602002602001018181525050866020015181600d81518110611a6557611a6561216d565b602090810291909101015285516001602002015181600e81518110611a8c57611a8c61216d565b602090810291909101015285515181518290600f908110611aaf57611aaf61216d565b6020026020010181815250508560200151600160028110611ad257611ad261216d565b602002015181601081518110611aea57611aea61216d565b6020026020010181815250508560200151600060028110611b0d57611b0d61216d565b602002015181601181518110611b2557611b2561216d565b602002602001018181525050846000015181601281518110611b4957611b4961216d565b602002602001018181525050846020015181601381518110611b6d57611b6d61216d565b602090810291909101015283516001602002015181601481518110611b9457611b9461216d565b6020908102919091010152835151815182906015908110611bb757611bb761216d565b6020026020010181815250508360200151600160028110611bda57611bda61216d565b602002015181601681518110611bf257611bf261216d565b6020026020010181815250508360200151600060028110611c1557611c1561216d565b602002015181601781518110611c2d57611c2d61216d565b602002602001018181525050611c4281611d1a565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611c93818689098280611c8a57611c8a612157565b86890983611d6f565b8180611ca157611ca1612157565b8280611caf57611caf612157565b8789098380611cc057611cc0612157565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611d01878683611d6f565b611d0c878684611d6f565b925092505094509492505050565b8051600090611d27611e20565b6000602082602085026020880160086107d05a03fa905080801561002b575080611d6457604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b60008180611d7f57611d7f612157565b611d8984846120ed565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611dbd611e3e565b8152602001611dca611e3e565b8152602001611dd7611e3e565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611e51611e63565b8152602001611e5e611e63565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611e9257600080fd5b611e9a612089565b808385604086011115611eac57600080fd5b60005b6002811015611ece578135845260209384019390910190600101611eaf565b509095945050505050565b600082601f830112611eea57600080fd5b8135602067ffffffffffffffff80831115611f0757611f07612183565b8260051b604051601f19603f83011681018181108482111715611f2c57611f2c612183565b60405284815283810192508684018288018501891015611f4b57600080fd5b600092505b85831015611f6e578035845292840192600192909201918401611f50565b50979650505050505050565b600060408284031215611f8c57600080fd5b6040516040810181811067ffffffffffffffff82111715611faf57611faf612183565b604052823581526020928301359281019290925250919050565b600080828403610120811215611fde57600080fd5b61010080821215611fee57600080fd5b611ff66120b2565b6120008787611f7a565b81526080603f198401121561201457600080fd5b61201c612089565b925061202b8760408801611e81565b835261203a8760808801611e81565b60208401528260208201526120528760c08801611f7a565b60408201529350840135905067ffffffffffffffff81111561207357600080fd5b61207f85828601611ed9565b9150509250929050565b6040805190810167ffffffffffffffff811182821017156120ac576120ac612183565b60405290565b6040516060810167ffffffffffffffff811182821017156120ac576120ac612183565b600082198211156120e8576120e8612141565b500190565b6000828210156120ff576120ff612141565b500390565b600060001982141561211857612118612141565b5060010190565b60008261213c57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212203ff23fc643cc6b81c699176c44da33981aeffcdbdbbad917a316ce0ef0947dd464736f6c63430008070033';

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
