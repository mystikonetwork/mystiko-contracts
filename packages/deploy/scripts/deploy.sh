#!/bin/bash

version=gamma
skipCounter=$1;
step=$2

sed -i -e "s/step[0-9]/step${step}/g" ./scripts/deploy.${version}.txt

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
done < ./scripts/deploy.${version}.txt
