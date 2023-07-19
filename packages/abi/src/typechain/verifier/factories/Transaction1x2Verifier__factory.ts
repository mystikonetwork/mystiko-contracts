/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Transaction1x2Verifier, Transaction1x2VerifierInterface } from '../Transaction1x2Verifier';

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
  '0x608060405234801561001057600080fd5b5061206c806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c941764714610030575b600080fd5b61004361003e366004611e66565b610057565b604051901515815260200160405180910390f35b60008151601b1461007b57604051633494a40d60e21b815260040160405180910390fd5b610085828461008c565b9392505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816100b86103ff565b9050806080015151855160016100ce9190611f72565b146100ec57604051633494a40d60e21b815260040160405180910390fd5b835151821161010e57604051633494a40d60e21b815260040160405180910390fd5b835160200151821161013357604051633494a40d60e21b815260040160405180910390fd5b60208401515151821161015957604051633494a40d60e21b815260040160405180910390fd5b602084810151015151821161018157604051633494a40d60e21b815260040160405180910390fd5b60208481015151015182116101a957604051633494a40d60e21b815260040160405180910390fd5b602084810151810151015182116101d357604051633494a40d60e21b815260040160405180910390fd5b60408401515182116101f857604051633494a40d60e21b815260040160405180910390fd5b818460400151602001511061022057604051633494a40d60e21b815260040160405180910390fd5b835161022b906113b1565b610248576040516361586bdd60e01b815260040160405180910390fd5b6102558460200151611429565b610272576040516361586bdd60e01b815260040160405180910390fd5b61027f84604001516113b1565b61029c576040516361586bdd60e01b815260040160405180910390fd5b60006102dc604051806040016040528060008152602001600081525083608001516000815181106102cf576102cf61200a565b6020026020010151611513565b905060005b865181101561038c57838782815181106102fd576102fd61200a565b60200260200101511061032357604051633494a40d60e21b815260040160405180910390fd5b61037882610373856080015184600161033c9190611f72565b8151811061034c5761034c61200a565b60200260200101518a85815181106103665761036661200a565b6020026020010151611590565b611513565b91508061038481611fa1565b9150506102e1565b50610396816113b1565b6103b3576040516361586bdd60e01b815260040160405180910390fd5b6103f5856000015186602001516103c9846115df565b85604001516103db8a604001516115df565b606088015188516103eb906115df565b896020015161168d565b9695505050505050565b610407611c30565b6040805180820182527f177c7e26b87cecd302a0807cce2bead321c709768ef0a96f7f54bb88347875b681527f0a689ee442237701d6a2702e82d33630ba0bea0055b2952a08335f72c557956e6020808301919091529083528151608080820184527f07d027f1de6dc28f5ba86d88066d16a37be83bf630feddb3339e85e1a1a3084a8285019081527f16bf36bdfcff873edfecb2c1e450faea5f83c9b08babe3b84a332d8d19368de2606080850191909152908352845180860186527f0307c77c3078e80bab92233e4a3315602042c4b6144dda725d922232d9544df581527f1f93cd834724d20a42df2469303e6698d0e98bac5f36d9c1b5ad15527142b706818601528385015285840192909252835180820185527f0d58f8883b6962e4d1ab9554a7e942b5a0be25f050987050bfa47018ab0557ec8186019081527f06aa58b74a93b1c50d3adb72e8ebaffdd8f4420f0783bf432c6a9fe79eb0932d828501528152845180860186527f0c05efca226b0d0cce9d8d8bd73c1fda863459dae5c300a4a2f07cfa5a2fb0ff81527f0df003a0e18757969556db33db203151fd9d98af14392e56be3a8e6f41accb94818601528185015285850152835190810184527f13d25da7fbd243a0394a8a640b0b64670fc1af3810c39c8c50402832a43f3d898185019081527f06810d6a34f59fd7cb6b1363df3493e30fa6390165e144c0890288218bce05e5828401528152835180850185527f14ddd19876d9842663c842725ac78f1745a9b6045d71289beceaabad48c041f481527f118b58759cdc615563332f5c6af5f8d3285dcc4a34107c346c1782519d7e51718185015281840152908401528151601c8082526103a08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161068357505060808201908152604080518082019091527f17c72486956b7fc3e23837ccf8ed81c2142f077533ea44d32365e36459c9a36881527f0e911b878304f50887dd61293d4149734254dab147dd2293e9641c88dfa351ee6020820152905180516000906107165761071661200a565b602002602001018190525060405180604001604052807f02ae70e18c67e46f56ba94738b7aea1f2fcd9f207e9db6a176d20ea4411f494481526020017f2285b3db6c6edba3c4f0f45e8183e1bed71cf577bb4ef02e4899c152a621601e815250816080015160018151811061078d5761078d61200a565b602002602001018190525060405180604001604052807f16ca61256ead9c65c46a530c36f5dbc201da7e53a3f7c58ee20eda4b37fc1c2081526020017f275a6e3566503aee81a7f8c9296408532d9580fdf397b4a39a04c93fd693472981525081608001516002815181106108045761080461200a565b602002602001018190525060405180604001604052807f1822c5b26095f27e374fd031b04268f1085c357b22f45c0b71559bedb07acb6b81526020017f22e7ead7646b8315e2b49512ee0ff34c0e1f0617efead20d4feaaec9ecf88445815250816080015160038151811061087b5761087b61200a565b602002602001018190525060405180604001604052807f20990d04ca0dd723b843793c4cecec4a39204ae096fbe2e79bcbe952e3157cd881526020017f157062d6be0d303d3dcb56e2901454f2252bc23b823732ed0e618ddfa8aa289e81525081608001516004815181106108f2576108f261200a565b602002602001018190525060405180604001604052807f2e5500092686a11aeed15904d03e87d2ef5eaabff1bee42035b46124c736f62a81526020017f0201178e2744d9653a75617eecd8eb11e62840ae6680bf8f0e8362136216809f81525081608001516005815181106109695761096961200a565b602002602001018190525060405180604001604052807f03f31feac67c3c1412abf2567f87d7e30587d3b05f3a3b314a349fde944506d081526020017f03ccfc2ae53f649c5383f868c4c7dc01f405955d8b80380b8bb7b3e0edebbcc381525081608001516006815181106109e0576109e061200a565b602002602001018190525060405180604001604052807f291e91fbd51bea5eb22453ce7ca31c14d8eafc09d7dd2099029b26ee3962569481526020017f12f43ed4843af5735bdd5d8ac2daf387e93c14079062a769145fa2c5603a0c078152508160800151600781518110610a5757610a5761200a565b602002602001018190525060405180604001604052807f0d6478861929aade792ffdcf4e26142026673cae935419eeb154f6050e8c0dd881526020017f24e7185b668e200b536c289ad04261118b96a140b124738f9754ed55c0c249c28152508160800151600881518110610ace57610ace61200a565b602002602001018190525060405180604001604052807f1f683372e77abe646cb062ea9510e57b7edb74363c3f94666f6b9ad46a5cfa2b81526020017f098b8e9e53ea5db9f5bbf90e45510727d5b531314eaf045350eed21b0e0863cc8152508160800151600981518110610b4557610b4561200a565b602002602001018190525060405180604001604052807f0452259936f476a4fc1fc07ae3c9cef88fce81717cd6fc3dcb3cc46609add4ec81526020017f1811c34f25be3e96e131507aa01b7c689c08e3ca3e3dbad988d865cb9a8a84e48152508160800151600a81518110610bbc57610bbc61200a565b602002602001018190525060405180604001604052807f266b73b5cb8eb69917b5f74e5dc57978f1e8495f24be3ae9b955a45630a44dc881526020017f27035a0321459e28d48049fd84435ed3bbec66df869d31357a35c6f98582c4d98152508160800151600b81518110610c3357610c3361200a565b602002602001018190525060405180604001604052807f116b6ee427491a33843cc83063fc272bc2317975c4d55873d1910ed2bb170f1281526020017f276879e5c960941daaecf62a4a67bd4af243b16bd2ff2143c8dafbfaff03eb4b8152508160800151600c81518110610caa57610caa61200a565b602002602001018190525060405180604001604052807f302fc6266d9c0553ddb99b6cec77a6fff15806eee501a19928b6548a6e4ed03581526020017f11f0685a2f9266b2814ed88a0f7096ef1b9e31bb9a49ca34f3895d69139ff30e8152508160800151600d81518110610d2157610d2161200a565b602002602001018190525060405180604001604052807f1307bcaaabb15708f1f7bba9c9379878c336e6bdc06a8584660d2bb9e5e8e44381526020017f2b3d244e4c7d0f73147b89a89ee703e8cdf12f475779208da964446c74b8c4f48152508160800151600e81518110610d9857610d9861200a565b602002602001018190525060405180604001604052807f1838fa26ec83a05ba31bc89a512b0f56f3561f3b43f2a3ed05442387c8e9f3c581526020017f0dd5996945c4afd92ff4883ab088f642117eb0d7d8dbc14d51d904b2dc85d9d88152508160800151600f81518110610e0f57610e0f61200a565b602002602001018190525060405180604001604052807f24cabf265ac8336ba17b35a52f83e54d20c79fdf50fca656795bfb2ef2756a7d81526020017f1a2ae12310c320d976f4a7910255c39f803c40bcf38bb3b9c7082f57b7cdd5fd8152508160800151601081518110610e8657610e8661200a565b602002602001018190525060405180604001604052807f26a0a2d54624146f0ea177d4c20e951e02056ad5ead0257024a778e9dfda1bb081526020017f236349a0959289b049925914b7618ecbf6baae04cfb0fcbac1df4f38078143f38152508160800151601181518110610efd57610efd61200a565b602002602001018190525060405180604001604052807f039e698eeed990aa7f6e782c33c4695f576626136782044249064b3040751cd481526020017f1b9f942bc2da973419f398fa030affd328597df6f967a009a1750138f557431b8152508160800151601281518110610f7457610f7461200a565b602002602001018190525060405180604001604052807f02c4fb4ed92467709b520248694ddc1ec2e0d59a88d3614b6348e44bcd1bd6e281526020017f2a7a567d1b30933f81d4dffb02ada0811c6089bca95e5454363e6b31039d76c48152508160800151601381518110610feb57610feb61200a565b602002602001018190525060405180604001604052807f2515a0e5dec89d49d39d5f2093ebc50ea35f2ffd1eeb9046712d6fcb8f8a629781526020017f1bbb22bbd8349527860d022cee0095607331d72d9423fb6109fdbf99ae484da181525081608001516014815181106110625761106261200a565b602002602001018190525060405180604001604052807f113abd11873204cb85ad41f16df5a8ad3c5667ffba31ebeddb29e642dfcc0fee81526020017f08366b92112c46fb579843b30757a60980805170787389c198e411a665d0d2c581525081608001516015815181106110d9576110d961200a565b602002602001018190525060405180604001604052807f110a53bed1868937a8970c63ac79862a55ad3a22e7176d673c3c2434cee8556f81526020017f2c08dd458a4dc78324e073a532d09daf922eaa2e2a549750e79025974ca49d4181525081608001516016815181106111505761115061200a565b602002602001018190525060405180604001604052807f2466b21631aa8d809f3fa4e1d554fba652c41d1ca21273887f41f3f0e0116c1381526020017f0a06d5a8299640e50b48deb7065f1a4ffe8f96357935c85c5116e4ff272a057c81525081608001516017815181106111c7576111c761200a565b602002602001018190525060405180604001604052807f29df7de69b61497a608152bb93772bf6489ba5f2e03920321bf5224e86bcc62581526020017f1463360748e1c9fc806aa941cac0708a385d2354eeb23b11b1b4445078ec41cd815250816080015160188151811061123e5761123e61200a565b602002602001018190525060405180604001604052807f0f4889662529879eb738d45e175fe954071ae17be2a14a0f1ec485e5975ad05481526020017f21353dd6cddd66765b0a3de1d4233861e117c062112069642963b20b8df1d5fc81525081608001516019815181106112b5576112b561200a565b602002602001018190525060405180604001604052807f1f209623d62b288eedcd636722acc96bd718af9cb48e8e3bb0761174244ed9a481526020017f2c4d457dd091408e1d135688d4ca4b379bbab5a65d7ffd5f62cdd4258ae4959f8152508160800151601a8151811061132c5761132c61200a565b602002602001018190525060405180604001604052807f159489f12edbf1bed1341b55e2bc93fc4b5758447af1002556d9ee4c96a5d32581526020017f2a46f877c05737152d5a27afc47dc889e9d70bc449371af8c877534f8cb749fa8152508160800151601b815181106113a3576113a361200a565b602002602001018190525090565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd476113df816003611fbc565b81806113ed576113ed611ff4565b845183806113fd576113fd611ff4565b8651800909828061141057611410611ff4565b602086015180096114219190611f8a565b149392505050565b6020818101518051918101516000927f2b149d40ceb8aaae81be18991be06ac3b5b4c5e559dbefa33267e6dc24a138e5927e9713b03af0fed4cd2cafadeed8fdf4a74fa084e52d1852e4a2bd0685c315d292859283928392839261149992909190829060015b6020020151611aee565b8951805160208201519397509195506114be929060005b60200201518b51600161148f565b895191935091506114d4908390839060006114b0565b90925090506114e584848484611b6f565b90945092506114f684848888611b6f565b909450925083158015611507575082155b98975050505050505050565b604080518082019091526000808252602082015261152f611c81565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561002b575b508061158857604051633842fc7360e21b815260040160405180910390fd5b505092915050565b60408051808201909152600080825260208201526115ac611c9f565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561002b57611569565b604080518082019091526000808252602082015260208201517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479061164a5760405180604001604052808285600001516116399190611fbc565b815260006020909101529392505050565b60405180604001604052808285600001516116659190611fbc565b815260200182856020015161167a9190611fbc565b6116849084611f8a565b90529392505050565b60408051601880825261032082019092526000919082908260208201610300803683370190505090508a60000151816000815181106116ce576116ce61200a565b6020026020010181815250508a60200151816001815181106116f2576116f261200a565b6020908102919091010152895160016020020151816002815181106117195761171961200a565b602090810291909101015289515181518290600390811061173c5761173c61200a565b602002602001018181525050896020015160016002811061175f5761175f61200a565b6020020151816004815181106117775761177761200a565b602002602001018181525050896020015160006002811061179a5761179a61200a565b6020020151816005815181106117b2576117b261200a565b6020026020010181815250508860000151816006815181106117d6576117d661200a565b6020026020010181815250508860200151816007815181106117fa576117fa61200a565b6020908102919091010152875160016020020151816008815181106118215761182161200a565b60209081029190910101528751518151829060099081106118445761184461200a565b60200260200101818152505087602001516001600281106118675761186761200a565b602002015181600a8151811061187f5761187f61200a565b60200260200101818152505087602001516000600281106118a2576118a261200a565b602002015181600b815181106118ba576118ba61200a565b602002602001018181525050866000015181600c815181106118de576118de61200a565b602002602001018181525050866020015181600d815181106119025761190261200a565b602090810291909101015285516001602002015181600e815181106119295761192961200a565b602090810291909101015285515181518290600f90811061194c5761194c61200a565b602002602001018181525050856020015160016002811061196f5761196f61200a565b6020020151816010815181106119875761198761200a565b60200260200101818152505085602001516000600281106119aa576119aa61200a565b6020020151816011815181106119c2576119c261200a565b6020026020010181815250508460000151816012815181106119e6576119e661200a565b602002602001018181525050846020015181601381518110611a0a57611a0a61200a565b602090810291909101015283516001602002015181601481518110611a3157611a3161200a565b6020908102919091010152835151815182906015908110611a5457611a5461200a565b6020026020010181815250508360200151600160028110611a7757611a7761200a565b602002015181601681518110611a8f57611a8f61200a565b6020026020010181815250508360200151600060028110611ab257611ab261200a565b602002015181601781518110611aca57611aca61200a565b602002602001018181525050611adf81611bb7565b9b9a5050505050505050505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611b30818689098280611b2757611b27611ff4565b86890983611c0c565b8180611b3e57611b3e611ff4565b8280611b4c57611b4c611ff4565b8789098380611b5d57611b5d611ff4565b878b0908925092505094509492505050565b6000807f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611b9e878683611c0c565b611ba9878684611c0c565b925092505094509492505050565b8051600090611bc4611cbd565b6000602082602085026020880160086107d05a03fa905080801561002b575080611c0157604051633842fc7360e21b815260040160405180910390fd5b505115159392505050565b60008180611c1c57611c1c611ff4565b611c268484611f8a565b8508949350505050565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611c5a611cdb565b8152602001611c67611cdb565b8152602001611c74611cdb565b8152602001606081525090565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280611cee611d00565b8152602001611cfb611d00565b905290565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611d2f57600080fd5b611d37611f26565b808385604086011115611d4957600080fd5b60005b6002811015611d6b578135845260209384019390910190600101611d4c565b509095945050505050565b600082601f830112611d8757600080fd5b8135602067ffffffffffffffff80831115611da457611da4612020565b8260051b604051601f19603f83011681018181108482111715611dc957611dc9612020565b60405284815283810192508684018288018501891015611de857600080fd5b600092505b85831015611e0b578035845292840192600192909201918401611ded565b50979650505050505050565b600060408284031215611e2957600080fd5b6040516040810181811067ffffffffffffffff82111715611e4c57611e4c612020565b604052823581526020928301359281019290925250919050565b600080828403610120811215611e7b57600080fd5b61010080821215611e8b57600080fd5b611e93611f4f565b611e9d8787611e17565b81526080603f1984011215611eb157600080fd5b611eb9611f26565b9250611ec88760408801611d1e565b8352611ed78760808801611d1e565b6020840152826020820152611eef8760c08801611e17565b60408201529350840135905067ffffffffffffffff811115611f1057600080fd5b611f1c85828601611d76565b9150509250929050565b6040805190810167ffffffffffffffff81118282101715611f4957611f49612020565b60405290565b6040516060810167ffffffffffffffff81118282101715611f4957611f49612020565b60008219821115611f8557611f85611fde565b500190565b600082821015611f9c57611f9c611fde565b500390565b6000600019821415611fb557611fb5611fde565b5060010190565b600082611fd957634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220b1857080ca286e899bbd0bc178e16ac5ae1aab450c5d53af486965a06a19a0ee64736f6c63430008070033';

type Transaction1x2VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Transaction1x2VerifierConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transaction1x2Verifier__factory extends ContractFactory {
  constructor(...args: Transaction1x2VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = 'Transaction1x2Verifier';
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Transaction1x2Verifier> {
    return super.deploy(overrides || {}) as Promise<Transaction1x2Verifier>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Transaction1x2Verifier {
    return super.attach(address) as Transaction1x2Verifier;
  }
  connect(signer: Signer): Transaction1x2Verifier__factory {
    return super.connect(signer) as Transaction1x2Verifier__factory;
  }
  static readonly contractName: 'Transaction1x2Verifier';
  public readonly contractName: 'Transaction1x2Verifier';
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Transaction1x2VerifierInterface {
    return new utils.Interface(_abi) as Transaction1x2VerifierInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Transaction1x2Verifier {
    return new Contract(address, _abi, signerOrProvider) as Transaction1x2Verifier;
  }
}
