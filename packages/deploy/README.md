## @mystikonetwork/contracts
This package contains the Smart Contract written in Solidity

### Deploy
#### Deploy Step 1
deploy verifier contract and rollup contract, parameter:

```
 step                : step1
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step1 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy Step 2
deploy mystiko core contract, parameter
```
 step                : step2
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step2 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy Step 3
do contract configure, parameter
```
 step                : step2
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step2 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy Step 4
configure peer contract address, parameter:
```
 step                : step3
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step3 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy check
check core json file, parameter:
```
 step                : check
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step check --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy dump json
dump token pair configure to json file, parameter:
```
 step                : dump
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step dump --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy dump rollup/tbridge json
dump rollup/tbridge configure to json file with all network, parameter:
```
 step                : dumpAllChain
```
example:

```yarn deploy:chain --network bsctestnet --step dumpAllChain```

### Set
#### transfer token to commitment pool
transfer token to commitment pool by special token pair:
```
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
 func               : tokenTransfer...
```
example:

```yarn set --network ropsten --func tokenTransfer --bridge tbridge --dst bsctestnet --token ETH```



### query
#### query

```
 bridge              : tbridge、celer、poly、loop
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
 func               : tokenTransfer...
```
example:

```yarn query --network bsctestnet --bridge loop --dst bsctestnet --token BNB --func sanction  --param ''```


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
