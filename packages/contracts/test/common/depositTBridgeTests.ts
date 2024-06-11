import { Wallet } from '@ethersproject/wallet';
import { MockSanctionList, MockToken } from '@mystikonetwork/contracts-abi';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toBN, toHex } from '@mystikonetwork/utils';
import { expect } from 'chai';
import { ethers } from 'ethers';
import { waffle } from 'hardhat';
import { MystikoBridgeSettings } from '@mystikonetwork/contracts-abi-settings';
import {
  BridgeAccountIndex,
  BridgeExecutorIndex,
  DefaultPoolAmount,
  DefaultTokenAmount,
  DestinationChainID,
  MaxAmount,
  MinAmount,
  MockSignature,
  SourceChainID,
} from '../util/constants';
import { CommitmentInfo } from './commitment';

export function testTBridgeDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  depositContract: any,
  commitmentPool: any,
  peerMystikoContract: any,
  peerCommitmentPool: any,
  mockSanctionList: MockSanctionList,
  tbridgeProxy: any,
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
  const bridgeMessages: any[] = [];
  const events: ethers.utils.LogDescription[] = [];

  describe(`Test ${contractName} deposit operation`, () => {
    before(async () => {
      minBridgeFee = (await depositContract.getMinBridgeFee()).toString();
      minExecutorFee = (await depositContract.getMinExecutorFee()).toString();
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

      await tbridgeProxy.changeOperator(bridgeAccount.address);
    });

    it('should revert when deposit is disabled', async () => {
      await settings.setDepositDisable(depositContract.address, true);
      await expect(
        depositContract.certDeposit(
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
          0,
          MockSignature,
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('DepositsDisabled()');
      await settings.setDepositDisable(depositContract.address, false);
    });

    it('should revert when sender in sanction list', async () => {
      await mockSanctionList.addToSanctionsList(accounts[0].address);
      await expect(
        depositContract.certDeposit(
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
          0,
          MockSignature,
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('SanctionedAddress()');
      await mockSanctionList.removeFromSanctionsList(accounts[0].address);
    });

    it('should revert when amount is too few', async () => {
      const amount = toBN(MinAmount).sub(toBN(1)).toString();
      await expect(
        depositContract.certDeposit(
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
          0,
          MockSignature,
          { from: accounts[0].address, value: amount },
        ),
      ).to.be.revertedWith('AmountTooSmall()');
    });

    it('should revert when amount is too large', async () => {
      const amount = toBN(MaxAmount).add(toBN(1)).toString();
      await expect(
        depositContract.certDeposit(
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
          0,
          MockSignature,
          { from: accounts[0].address, value: amount },
        ),
      ).to.be.revertedWith('AmountTooLarge()');
    });

    it('should revert when bridge fee is too few', async () => {
      await expect(
        depositContract.certDeposit(
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
          0,
          MockSignature,
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('BridgeFeeTooFew()');
    });

    it('should revert when executor fee is too few', async () => {
      await expect(
        depositContract.certDeposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minBridgeFee,
            '0',
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('ExecutorFeeTooFew()');
    });

    it('should revert when rollup fee is too few', async () => {
      await expect(
        depositContract.certDeposit(
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
          0,
          MockSignature,
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('RollupFeeToFew()');
    });

    it('should revert when hashK greater than field size', async () => {
      const fieldSize = '21888242871839275222246405745257275088548364400416034343698204186575808495617';
      await expect(
        depositContract.certDeposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            fieldSize,
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minBridgeFee,
            minExecutorFee,
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('HashKGreaterThanFieldSize()');
    });

    it('should revert when commitmentHash is incorrect', async () => {
      await expect(
        depositContract.certDeposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            protocol.randomBigInt().toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minBridgeFee,
            minExecutorFee,
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('CommitmentHashIncorrect()');
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await mockToken.approve(depositContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should deposit successfully', async () => {
      await mockSanctionList.addToSanctionsList(accounts[0].address);
      await settings.disableSanctionsCheck();

      for (let i = 0; i < numOfCommitments; i += 1) {
        const depositTx = await depositContract.certDeposit(
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
          { from: accounts[0].address, value: minTotalValue },
        );
        expect(depositTx)
          .to.emit(depositContract, 'CommitmentCrossChain')
          .withArgs(commitments[i].commitmentHash);
        const txReceipt = await waffle.provider.getTransactionReceipt(depositTx.hash);
        const start = txReceipt.blockNumber;
        const bridgeEvents = await tbridgeProxy.queryFilter('TBridgeCrossChainMessage', start, start);
        expect(bridgeEvents).to.not.equal(undefined);
        expect(bridgeEvents.length).to.equal(1);
        expect(bridgeEvents[0].args.toContract).to.equal(peerMystikoContract.address);
        expect(bridgeEvents[0].args.toChainId.toNumber()).to.equal(DestinationChainID);
        expect(bridgeEvents[0].args.fromContract).to.equal(depositContract.address);
        bridgeMessages.push(bridgeEvents[0].args.message);

        expect(await waffle.provider.getBalance(tbridgeProxy.address)).to.be.equal(
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
          expect(await mockToken.balanceOf(commitmentPool.address)).to.be.equal(
            toBN(minTotalAmount)
              .muln(i + 1)
              .toString(),
          );
        }
      }
      await mockSanctionList.removeFromSanctionsList(accounts[0].address);
      await settings.enableSanctionsCheck();
    });

    it('should revert sendMessage not register white list', async () => {
      await expect(
        tbridgeProxy
          .connect(accounts[0])
          .sendMessage(peerMystikoContract.address, SourceChainID, bridgeMessages[0]),
      ).revertedWith('OnlyRegister()');
    });

    it('should revert on in executor white list', async () => {
      await expect(
        tbridgeProxy
          .connect(accounts[0])
          .crossChainSyncTx(
            SourceChainID,
            depositContract.address,
            peerMystikoContract.address,
            bridgeAccount.address,
            bridgeMessages[0],
          ),
      ).revertedWith('OnlyWhitelistedExecutor()');
    });

    it('should bridge deposit transaction success', async () => {
      for (let i = 0; i < numOfCommitments; i += 1) {
        if (!isDstMainAsset) {
          const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
          await mockToken.connect(bridgeAccount).approve(depositContract.address, approveAmount, {
            from: bridgeAccount.address,
          });
        }

        const balanceBefore = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await mockToken.balanceOf(bridgeAccount.address);

        const txProxy = await tbridgeProxy
          .connect(bridgeAccount)
          .crossChainSyncTx(
            SourceChainID,
            depositContract.address,
            peerMystikoContract.address,
            bridgeAccount.address,
            bridgeMessages[i],
          );

        const txReceipt = await waffle.provider.getTransactionReceipt(txProxy.hash);
        const totalGasFee = txReceipt.cumulativeGasUsed.mul(txReceipt.effectiveGasPrice);

        const balanceAfter = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await mockToken.balanceOf(bridgeAccount.address);

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
      expect(await waffle.provider.getBalance(tbridgeProxy.address)).to.be.equal(
        toBN(minBridgeFee).muln(numOfCommitments).toString(),
      );
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await mockToken.balanceOf(commitmentPool.address)).toString()).to.equal(expectBalance);
      }
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await mockToken.approve(depositContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should revert with duplicate commitment', async () => {
      const depositTx = await depositContract.certDeposit(
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
        0,
        MockSignature,
        { from: accounts[0].address, value: minTotalValue },
      );
      expect(depositTx)
        .to.emit(depositContract, 'CommitmentCrossChain')
        .withArgs(commitments[0].commitmentHash);

      const depositReceipt = await waffle.provider.getTransactionReceipt(depositTx.hash);
      const start = depositReceipt.blockNumber;
      const bridgeEvents = await tbridgeProxy.queryFilter('TBridgeCrossChainMessage', start, start);
      bridgeMessages.push(bridgeEvents[0].args.message);

      const executorAccount = accounts[BridgeExecutorIndex];
      const balanceBefore = isDstMainAsset
        ? await waffle.provider.getBalance(executorAccount.address)
        : await mockToken.balanceOf(executorAccount.address);

      await expect(
        tbridgeProxy
          .connect(bridgeAccount)
          .crossChainSyncTx(
            SourceChainID,
            depositContract.address,
            peerMystikoContract.address,
            executorAccount.address,
            bridgeEvents[0].args.message,
          ),
      ).to.be.revertedWith('CommitmentHasBeenSubmitted()');

      const balanceAfter = isDstMainAsset
        ? await waffle.provider.getBalance(executorAccount.address)
        : await mockToken.balanceOf(executorAccount.address);

      expect(balanceAfter.toString()).to.equal(balanceBefore.toString());
    });
  });
}
