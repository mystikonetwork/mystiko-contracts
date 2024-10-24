#!/bin/bash
#cmd  step1/step2/step3/step4/check/checkJson

set -a # automatically export all variables
source .env
set +a

version=$POOLNAME
skipCounter=$1
network=$2
step=$3
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
    eval "yarn deploy:chain --step ${step} $line"
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
