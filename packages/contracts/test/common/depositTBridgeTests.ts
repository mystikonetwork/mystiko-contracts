import { expect } from 'chai';
import { waffle } from 'hardhat';
import { ethers } from 'ethers';
import { DummySanctionsList, TestToken } from '@mystikonetwork/contracts-abi';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toHex, toBN } from '@mystikonetwork/utils';
import { Wallet } from '@ethersproject/wallet';
import { CommitmentInfo } from './commitment';
import {
  BridgeAccountIndex,
  BridgeExecutorIndex,
  DefaultPoolAmount,
  DestinationChainID,
  SourceChainID,
  MinAmount,
  DefaultTokenAmount,
} from '../util/constants';

export function testTBridgeDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  mystikoContract: any,
  commitmentPool: any,
  peerMystikoContract: any,
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
  let minTotalValue: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;
  const bridgeAccount = accounts[BridgeAccountIndex];
  const bridgeMessages: any[] = [];
  const events: ethers.utils.LogDescription[] = [];

  describe(`Test ${contractName} deposit operation`, () => {
    before(async () => {
      minBridgeFee = (await mystikoContract.getMinBridgeFee()).toString();
      minExecutorFee = (await mystikoContract.getMinExecutorFee()).toString();
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
        await testTokenContract.transfer(peerCommitmentPool.address, DefaultTokenAmount);
      }

      await bridgeContract.changeOperator(bridgeAccount.address);
      await mystikoContract.setPeerContract(DestinationChainID, '', peerMystikoContract.address);
      await peerMystikoContract.setPeerContract(SourceChainID, '', mystikoContract.address);
    });

    it('should revert when deposit is disabled', async () => {
      await mystikoContract.setDepositsDisabled(true);
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minBridgeFee,
            minExecutorFee,
            minRollupFee,
          ],
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('deposits are disabled');
      await mystikoContract.setDepositsDisabled(false);
    });

    it('should revert when sender in sanction list', async () => {
      await sanctionList.addToSanctionsList(accounts[0].address);
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minBridgeFee,
            minExecutorFee,
            minRollupFee,
          ],
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('sanctioned address');
      await sanctionList.removeToSanctionsList(accounts[0].address);
    });

    it('should revert when amount is too few', async () => {
      const amount = toBN(MinAmount).sub(toBN(1)).toString();
      await expect(
        mystikoContract.deposit(
          [
            amount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            '0',
            minExecutorFee,
            minRollupFee,
          ],
          { from: accounts[0].address, value: amount },
        ),
      ).to.be.revertedWith('amount too small');
    });

    it('should revert when bridge fee is too few', async () => {
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            '0',
            minExecutorFee,
            minRollupFee,
          ],
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('bridge fee too few');
    });

    it('should revert when rollup fee is too few', async () => {
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minBridgeFee,
            minExecutorFee,
            '0',
          ],
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('rollup fee too few');
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await testTokenContract.approve(mystikoContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should deposit successfully', async () => {
      await sanctionList.addToSanctionsList(accounts[0].address);
      await mystikoContract.setSanctionCheckDisabled(true);

      for (let i = 0; i < numOfCommitments; i += 1) {
        const depositTx = await mystikoContract.deposit(
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
          { from: accounts[0].address, value: minTotalValue },
        );
        expect(depositTx)
          .to.emit(mystikoContract, 'CommitmentCrossChain')
          .withArgs(commitments[i].commitmentHash);

        const txReceipt = await waffle.provider.getTransactionReceipt(depositTx.hash);
        const start = txReceipt.blockNumber;
        const bridgeEvents = await bridgeContract.queryFilter('TBridgeCrossChainMessage', start, start);
        expect(bridgeEvents).to.not.equal(undefined);
        expect(bridgeEvents.length).to.equal(1);
        expect(bridgeEvents[0].args.toContract).to.equal(peerMystikoContract.address);
        expect(bridgeEvents[0].args.toChainId.toNumber()).to.equal(DestinationChainID);
        expect(bridgeEvents[0].args.fromContract).to.equal(mystikoContract.address);
        bridgeMessages.push(bridgeEvents[0].args.message);

        expect(await waffle.provider.getBalance(bridgeContract.address)).to.be.equal(
          toBN(minBridgeFee)
            .muln(i + 1)
            .toString(),
        );
        if (isMainAsset) {
          expect(await waffle.provider.getBalance(commitmentPool.address)).to.be.equal(
            toBN(minTotalAmount)
              .muln(i + 1)
              .toString(),
          );
        } else {
          expect(await testTokenContract.balanceOf(commitmentPool.address)).to.be.equal(
            toBN(minTotalAmount)
              .muln(i + 1)
              .toString(),
          );
        }
      }
    });

    it('should revert on in executor white list', async () => {
      await expect(
        bridgeContract
          .connect(accounts[0])
          .crossChainSyncTx(
            SourceChainID,
            mystikoContract.address,
            peerMystikoContract.address,
            bridgeAccount.address,
            bridgeMessages[0],
          ),
      ).revertedWith('only whitelisted executor.');
    });

    it('should bridge deposit transaction success', async () => {
      for (let i = 0; i < numOfCommitments; i += 1) {
        if (!isDstMainAsset) {
          const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
          await testTokenContract.connect(bridgeAccount).approve(mystikoContract.address, approveAmount, {
            from: bridgeAccount.address,
          });
        }

        const balanceBefore = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await testTokenContract.balanceOf(bridgeAccount.address);

        const txProxy = await bridgeContract
          .connect(bridgeAccount)
          .crossChainSyncTx(
            SourceChainID,
            mystikoContract.address,
            peerMystikoContract.address,
            bridgeAccount.address,
            bridgeMessages[i],
          );

        const txReceipt = await waffle.provider.getTransactionReceipt(txProxy.hash);
        const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);

        const balanceAfter = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await testTokenContract.balanceOf(bridgeAccount.address);

        if (isDstMainAsset) {
          expect(minExecutorFee.toString()).to.equal(
            balanceAfter.add(totalGasFee).sub(balanceBefore).toString(),
          );
        } else {
          expect(minExecutorFee.toString()).to.equal(balanceAfter.sub(balanceBefore).toString());
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

        // todo check dst contract balance
        // todo proxy parameter check
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
      const expectBalance = toBN(minTotalAmount).muln(numOfCommitments).toString();
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

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await testTokenContract.approve(mystikoContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should revert with duplicate commitment', async () => {
      const depositTx = await mystikoContract.deposit(
        [
          depositAmount,
          commitments[0].commitmentHash.toString(),
          commitments[0].k.toString(),
          commitments[0].randomS.toString(),
          toHex(commitments[0].encryptedNote),
          minBridgeFee,
          minExecutorFee,
          minRollupFee,
        ],
        { from: accounts[0].address, value: minTotalValue },
      );
      expect(depositTx)
        .to.emit(mystikoContract, 'CommitmentCrossChain')
        .withArgs(commitments[0].commitmentHash);

      const depositReceipt = await waffle.provider.getTransactionReceipt(depositTx.hash);
      const start = depositReceipt.blockNumber;
      const bridgeEvents = await bridgeContract.queryFilter('TBridgeCrossChainMessage', start, start);
      bridgeMessages.push(bridgeEvents[0].args.message);

      const executorAccount = accounts[BridgeExecutorIndex];
      const balanceBefore = isDstMainAsset
        ? await waffle.provider.getBalance(executorAccount.address)
        : await testTokenContract.balanceOf(executorAccount.address);

      await expect(
        bridgeContract
          .connect(bridgeAccount)
          .crossChainSyncTx(
            SourceChainID,
            mystikoContract.address,
            peerMystikoContract.address,
            executorAccount.address,
            bridgeEvents[0].args.message,
          ),
      ).to.be.revertedWith('the commitment has been submitted');

      const balanceAfter = isDstMainAsset
        ? await waffle.provider.getBalance(executorAccount.address)
        : await testTokenContract.balanceOf(executorAccount.address);

      expect(balanceAfter.toString()).to.equal(balanceBefore.toString());
    });
  });
}
