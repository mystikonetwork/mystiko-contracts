#!/bin/bash

set -a # automatically export all variables
source .env
set +a

version=$POOLNAME
skipCounter=$1;
step=$2
network=$3

sed -i -e "s/step[0-9]/${step}/g" ./scripts/deploy.${network}.${version}.txt
sed -i -e "s/check/${step}/g" ./scripts/deploy.${network}.${version}.txt
sed -i -e "s/reset/${step}/g" ./scripts/deploy.${network}.${version}.txt

counter=1;
while read -r line
do
  if [ "$line" == '' ]; then
    continue;
  fi

  if [ $counter -le $skipCounter ]; then
     counter=$(( $counter + 1 ))
     continue;
  fi

   result=command ${line}
   if [ $? -ne 0 ]; then
      echo "failed"
      break;
   fi

   echo $counter
   counter=$(( $counter + 1 ))
done < ./scripts/deploy.${network}.${version}.txt
