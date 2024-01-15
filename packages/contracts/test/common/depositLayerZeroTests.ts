import { Wallet } from '@ethersproject/wallet';
import { DummySanctionsList, TestToken } from '@mystikonetwork/contracts-abi';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toBN, toHex } from '@mystikonetwork/utils';
import { expect } from 'chai';
import { ethers } from 'ethers';
import { waffle } from 'hardhat';
import {
  BridgeAccountIndex,
  DefaultPoolAmount,
  DefaultTokenAmount,
  ServiceFeeAccountIndex,
} from '../util/constants';
import { CommitmentInfo } from './commitment';

export function testLayerZeroDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  mystikoContract: any,
  commitmentPool: any,
  peerCommitmentPool: any,
  sanctionList: DummySanctionsList,
  bridgeContract: any,
  testTokenContract: TestToken,
  accounts: Wallet[],
  depositAmount: string,
  isMainAsset: boolean,
  isDstMainAsset: boolean,
  cmInfo: CommitmentInfo<CommitmentOutput>,
) {
  let minBridgeFee: string;
  let minRollupFee: string;
  let minExecutorFee: string;
  let minTotalAmount: string;
  let serviceFeeAmount: string;
  let minTotalValue: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;
  const bridgeAccount = accounts[BridgeAccountIndex];
  const events: ethers.utils.LogDescription[] = [];

  describe(`Test ${contractName} deposit operation`, () => {
    before(async () => {
      minBridgeFee = (await mystikoContract.getMinBridgeFee()).toString();
      minExecutorFee = (await mystikoContract.getMinExecutorFee()).toString();
      minRollupFee = (await commitmentPool.getMinRollupFee()).toString();
      const serviceFeeRate = (await mystikoContract.getServiceFeeRate()).toString();
      const serviceFeeBase = (await mystikoContract.getServiceFeeBase()).toString();
      const fee = toBN(depositAmount).mul(toBN(serviceFeeRate)).div(toBN(serviceFeeBase));
      const amount = toBN(depositAmount).add(toBN(minExecutorFee)).add(toBN(minRollupFee)).add(fee);
      minTotalAmount = amount.toString();
      serviceFeeAmount = fee.toString();
      if (isMainAsset) {
        minTotalValue = amount.add(toBN(minBridgeFee)).toString();
      } else {
        minTotalValue = toBN(minBridgeFee).toString();
      }

      if (isDstMainAsset) {
        await accounts[0].sendTransaction({
          to: peerCommitmentPool.address,
          value: DefaultPoolAmount,
        });
      } else {
        await testTokenContract.transfer(peerCommitmentPool.address, DefaultTokenAmount);
      }
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await testTokenContract.connect(bridgeAccount).approve(mystikoContract.address, approveAmount, {
          from: bridgeAccount.address,
        });
      }
    });

    it('should deposit successfully', async () => {
      await sanctionList.addToSanctionsList(bridgeAccount.address);
      await mystikoContract.disableSanctionsCheck();

      const serviceFeeBefore = isDstMainAsset
        ? await waffle.provider.getBalance(accounts[ServiceFeeAccountIndex].address)
        : await await testTokenContract.balanceOf(accounts[ServiceFeeAccountIndex].address);

      for (let i = 0; i < numOfCommitments; i += 1) {
        const balanceBefore = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await testTokenContract.balanceOf(bridgeAccount.address);

        let depositTx: any;
        try {
          depositTx = await mystikoContract
            .connect(bridgeAccount)
            .deposit(
              [
                depositAmount,
                commitments[i].commitmentHash.toString(),
                commitments[i].k.toString(),
                commitments[i].randomS.toString(),
                toHex(commitments[i].encryptedNote),
                minBridgeFee,
                minExecutorFee,
                minRollupFee,
              ],
              { from: bridgeAccount.address, value: minTotalValue },
            );
        } catch (e) {
          console.log(e);
        }

        expect(depositTx)
          .to.emit(mystikoContract, 'CommitmentCrossChain')
          .withArgs(commitments[i].commitmentHash);

        if (isMainAsset) {
          expect(await waffle.provider.getBalance(commitmentPool.address)).to.be.equal(
            toBN(minTotalAmount)
              .sub(toBN(serviceFeeAmount))
              .muln(i + 1)
              .toString(),
          );
          expect(await waffle.provider.getBalance(accounts[ServiceFeeAccountIndex].address)).to.be.equal(
            toBN(serviceFeeAmount)
              .muln(i + 1)
              .add(toBN(serviceFeeBefore.toString()))
              .toString(),
          );
        } else {
          expect(await testTokenContract.balanceOf(commitmentPool.address)).to.be.equal(
            toBN(minTotalAmount)
              .sub(toBN(serviceFeeAmount))
              .muln(i + 1)
              .toString(),
          );
          expect(await testTokenContract.balanceOf(accounts[ServiceFeeAccountIndex].address)).to.be.equal(
            toBN(serviceFeeAmount)
              .muln(i + 1)
              .add(toBN(serviceFeeBefore.toString()))
              .toString(),
          );
        }

        const txReceipt = await waffle.provider.getTransactionReceipt(depositTx.hash);
        const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);
        const balanceAfter = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await testTokenContract.balanceOf(bridgeAccount.address);

        if (isDstMainAsset) {
          expect(minExecutorFee.toString()).to.equal(
            balanceAfter.add(totalGasFee).add(minTotalValue).sub(balanceBefore).toString(),
          );
        } else {
          expect(minExecutorFee.toString()).to.equal(
            balanceAfter
              .add(depositAmount)
              .add(minRollupFee)
              .add(minExecutorFee)
              .sub(balanceBefore)
              .toString(),
          );
        }

        expect(
          await peerCommitmentPool.isHistoricCommitment(commitments[i].commitmentHash.toString()),
        ).to.equal(true);

        for (let j = 0; j < txReceipt.logs.length; j += 1) {
          try {
            const parsedLog: ethers.utils.LogDescription = peerCommitmentPool.interface.parseLog(
              txReceipt.logs[j],
            );
            events.push(parsedLog);
          } catch (e) {
            // do nothing
          }
        }
      }
    });

    it('should emit correct events', () => {
      expect(events.length).to.gt(0);
      const rollupFee = minRollupFee;
      for (let i = 0; i < numOfCommitments; i += 1) {
        const commitmentIndex = events.findIndex(
          (event) =>
            event.name === 'CommitmentQueued' &&
            event.args.commitment.toString() === commitments[i].commitmentHash.toString() &&
            event.args.rollupFee.toString() === rollupFee.toString() &&
            event.args.leafIndex.toString() === `${i}` &&
            event.args.encryptedNote === toHex(commitments[i].encryptedNote),
        );
        expect(commitmentIndex).to.gte(0);
      }
    });

    it('should source contract have correct balance', async () => {
      const expectBalance = toBN(minTotalAmount)
        .sub(toBN(serviceFeeAmount))
        .muln(numOfCommitments)
        .toString();
      expect(await waffle.provider.getBalance(bridgeContract.address)).to.be.equal(
        toBN(minBridgeFee).muln(numOfCommitments).toString(),
      );
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await testTokenContract.balanceOf(commitmentPool.address)).toString()).to.equal(
          expectBalance,
        );
      }
    });
  });
}
