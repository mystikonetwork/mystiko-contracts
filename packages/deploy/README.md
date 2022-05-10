## @mystikonetwork/contracts
This package contains the Smart Contract written in Solidity

### Deploy Smart Contracts
#### Deploy Step 1
deploy verifier contract and rollup contract, parameter:

```
 step                : step1
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network bsctestnet --step step1 --bridge tbridge --dst goerli --token MTT```

#### Deploy Step 2
deploy mystiko core contract, parameter
```
 step                : step2
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network bsctestnet --step step2 --bridge tbridge --dst goerli --token MTT```

#### Deploy Step 3
configure peer contract address, parameter:
```
 step                : step3
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network bsctestnet --step step3 --bridge tbridge --dst goerli --token MTT```

#### update contract bridge proxy
update contract bridge proxy address, parameter:
```
 step                : updateProxy
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network bsctestnet --step updateProxy --bridge tbridge --dst goerli --token MTT```

### Test the deployed contract
We need to update the config file first and execute the following command
```bash
cd packages/mystiko-config
yarn build
```
Then we switch to the contract module and execute the integration test command
```bash
cd packages/mystiko-contracts
yarn integration --network="Ethereum Ropsten" --contracts="MTT,mUSD" --bridge="Loop"
```
The script will automatically deposit and withdraw the specified loop-bridge network and contract
```bash
Parameter Description:
--network: specify network name(radio).
--contracts: the contracts under the specified network chainid(multiple choice).
--bridge: specify crosschain bridge type(radio), currently only supports Loop.
```
`Note: If you do not fill in the two parameters, all network contracts under the configuration file will be tested`
