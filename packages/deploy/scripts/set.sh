#!/bin/bash

# example
#  1. ./scripts/set.sh 0 testnet sanctionCheck false
#  2. ./scripts/set.sh 0 testnet changeOperator
#  3. ./scripts/set.sh 0 testnet disablePoolContract

### disable deposit contract
###    yarn set --network Polygon --bridge loop --dst Polygon --token BUSD --func disableDepositContract
###    yarn set --network Polygon --bridge loop --dst Polygon --token BUSD --func disablePoolContract
###    yarn deploy:chain --step step3 --network Ethereum --bridge loop --dst Ethereum --token ETH

set -a # automatically export all variables
source .env
set +a

version=$POOLNAME
skipCounter=$1
network=$2
func=$3

if [ "$4" == '' ]; then
  param=""
else
  param="--param $4"
fi

max_retries=5

counter=1
while read -r line
do
  if [ "$line" == '' ]; then
    continue
  fi

  if [ $counter -le $skipCounter ]; then
     counter=$(( $counter + 1 ))
     continue
  fi

  retries=0
  while true; do
    eval "yarn set --func ${func} ${param} $line"
    result=$?

    if [ $result -eq 0 ]; then
      break
    else
      echo "Command failed. Retrying ($retries)..."
      retries=$((retries+1))
      if [ $retries -ge $max_retries ]; then
        echo "Max retries reached for command: $counter $line"
        break
      fi
      sleep 5 # Add a delay before retrying
    fi
  done

  echo $counter
  counter=$(( counter + 1 ))

done < ./scripts/deploy.${network}.${version}.txt
