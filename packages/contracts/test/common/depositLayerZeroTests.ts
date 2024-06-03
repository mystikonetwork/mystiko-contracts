import { Wallet } from '@ethersproject/wallet';
import { MockSanctionList, MockToken } from '@mystikonetwork/contracts-abi';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toBN, toHex } from '@mystikonetwork/utils';
import { expect } from 'chai';
import { ethers } from 'ethers';
import { waffle } from 'hardhat';
import { MystikoBridgeSettings } from '@mystikonetwork/contracts-abi-settings';
import { BridgeAccountIndex, DefaultPoolAmount, DefaultTokenAmount, MockSignature } from '../util/constants';
import { CommitmentInfo } from './commitment';

export function testLayerZeroDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  depositContract: any,
  commitmentPool: any,
  peerCommitmentPool: any,
  mockSanctionList: MockSanctionList,
  bridgeContract: any,
  mockToken: MockToken,
  settings: MystikoBridgeSettings,
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
  let minTotalValue: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;
  const bridgeAccount = accounts[BridgeAccountIndex];
  const events: ethers.utils.LogDescription[] = [];

  describe(`Test ${contractName} deposit operation`, () => {
    before(async () => {
      minBridgeFee = (await depositContract.getMinBridgeFee()).toString();
      minExecutorFee = (await depositContract.getPeerMinExecutorFee()).toString();
      minRollupFee = (await commitmentPool.getMinRollupFee()).toString();
      const amount = toBN(depositAmount).add(toBN(minExecutorFee)).add(toBN(minRollupFee));
      minTotalAmount = amount.toString();
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
        await mockToken.transfer(peerCommitmentPool.address, DefaultTokenAmount);
      }
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await mockToken.connect(bridgeAccount).approve(depositContract.address, approveAmount, {
          from: bridgeAccount.address,
        });
      }
    });

    it('should deposit successfully', async () => {
      await mockSanctionList.addToSanctionsList(bridgeAccount.address);
      await settings.disableSanctionsCheck();

      for (let i = 0; i < numOfCommitments; i += 1) {
        const balanceBefore = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await mockToken.balanceOf(bridgeAccount.address);

        let depositTx: any;
        try {
          depositTx = await depositContract
            .connect(bridgeAccount)
            .certDeposit(
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
              0,
              MockSignature,
              { from: bridgeAccount.address, value: minTotalValue },
            );
        } catch (e) {
          console.log(e);
        }

        expect(depositTx)
          .to.emit(depositContract, 'CommitmentCrossChain')
          .withArgs(commitments[i].commitmentHash);

        if (isMainAsset) {
          expect(await waffle.provider.getBalance(commitmentPool.address)).to.be.equal(
            toBN(minTotalAmount)
              .muln(i + 1)
              .toString(),
          );
        } else {
          expect(await mockToken.balanceOf(commitmentPool.address)).to.be.equal(
            toBN(minTotalAmount)
              .muln(i + 1)
              .toString(),
          );
        }

        const txReceipt = await waffle.provider.getTransactionReceipt(depositTx.hash);
        const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);
        const balanceAfter = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await mockToken.balanceOf(bridgeAccount.address);

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
      await mockSanctionList.removeFromSanctionsList(bridgeAccount.address);
      await settings.enableSanctionsCheck();
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
      const expectBalance = toBN(minTotalAmount).muln(numOfCommitments).toString();
      expect(await waffle.provider.getBalance(bridgeContract.address)).to.be.equal(
        toBN(minBridgeFee).muln(numOfCommitments).toString(),
      );
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await mockToken.balanceOf(commitmentPool.address)).toString()).to.equal(expectBalance);
      }
    });
  });
}
