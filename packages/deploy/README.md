## @mystikonetwork/contracts-deploy
This package contains depoly the Smart Contract

### Deploy
#### Deploy Step 1
deploy verifier contracts (rollup verifier and transaction verifier), parameter:

```
 step                : step1
 bridge              : tbridge、celer、loop ...
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step1 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy Step 2
deploy mystiko core contract (deposit and commitment pool), parameter
```
 step                : step2
 bridge              : tbridge、celer、loop ...
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step2 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy Step 3
do mystiko core contract configure, parameter
```
 step                : step3
 bridge              : tbridge、celer、loop ...
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step3 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy Step 4
do peer configure such as peer contract address, parameter:
```
 step                : step4
 bridge              : tbridge、celer、loop ...
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step step4 --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy check
check special trade pair configure, parameter:
```
 step                : check
 bridge              : tbridge、celer、loop ...
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
```
example:

```yarn deploy:chain --network ropsten --step check --bridge tbridge --dst bsctestnet --token MTT```

#### Deploy dump json
dump special trade pair configure to json file, parameter:
```
 step                : dump
 bridge              : tbridge、celer、loop ...
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
 bridge              : tbridge、celer、loop ...
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
 func               : tokenTransfer...
```
example:

```yarn set --network ropsten --func tokenTransfer --bridge tbridge --dst bsctestnet --token ETH```



### query
#### query

```
 bridge              : tbridge、celer、loop ...
 dst                 : ropsten、bsctestnet ...
 token               : ETH、MTT、mUSD、BNB...
 func               : tokenTransfer...
```
example:

```yarn query --network bsctestnet --bridge loop --dst bsctestnet --token BNB --func sanction  --param ''```

### update contract verifier
example of update testnet gamma verifier same with delta version in deploy folder
```
1. modify ./src/json/deploy/testnet-gamma.json
   change all
       rollup1Address/rollup2Address/rollup4Address/...
       transaction1x0VerifierAddress/transaction1x1VerifierAddress/....
   same with delta version
2. configure .env
   set POOLNAME=gamma
3. run deploy script
   ./scripts/deploy.sh 0 step3 testnet
```


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
