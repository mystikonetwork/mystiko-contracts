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
  DefaultPoolAmount,
  DestinationChainID,
  SourceChainID,
  MinAmount,
  DefaultTokenAmount,
  ServiceAccountIndex,
  MaxAmount,
} from '../util/constants';

export function testCelerDeposit(
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
      const serviceFee = (await mystikoContract.getServiceFee()).toString();
      const serviceFeeDivider = (await mystikoContract.getServiceFeeDivider()).toString();
      const fee = toBN(depositAmount).mul(toBN(serviceFee)).div(toBN(serviceFeeDivider));
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

      await bridgeContract.setChainPair(
        SourceChainID,
        mystikoContract.address,
        DestinationChainID,
        peerMystikoContract.address,
      );
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
      ).to.be.revertedWith('DepositsDisabled()');
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
      ).to.be.revertedWith('SanctionedAddress()');
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
      ).to.be.revertedWith('AmountTooSmall()');
    });

    it('should revert when amount is too large', async () => {
      const amount = toBN(MaxAmount).sub(toBN(1)).toString();
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
      ).to.be.revertedWith('AmountTooSmall()');
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
      ).to.be.revertedWith('BridgeFeeTooFew()');
    });

    it('should revert when executor fee is too few', async () => {
      await expect(
        mystikoContract.deposit(
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
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('ExecutorFeeTooFew()');
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
      ).to.be.revertedWith('RollupFeeToFew()');
    });

    it('should revert when hashK greater than field size', async () => {
      const fieldSize = '21888242871839275222246405745257275088548364400416034343698204186575808495617';
      await expect(
        mystikoContract.deposit(
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
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('HashKGreaterThanFieldSize()');
    });

    it('should revert when commitmentHash is incorrect', async () => {
      await expect(
        mystikoContract.deposit(
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
          { from: accounts[0].address, value: minTotalValue },
        ),
      ).to.be.revertedWith('CommitmentHashIncorrect()');
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
        ? await waffle.provider.getBalance(accounts[ServiceAccountIndex].address)
        : await await testTokenContract.balanceOf(accounts[ServiceAccountIndex].address);

      for (let i = 0; i < numOfCommitments; i += 1) {
        const balanceBefore = isDstMainAsset
          ? await waffle.provider.getBalance(bridgeAccount.address)
          : await testTokenContract.balanceOf(bridgeAccount.address);

        const depositTx = await mystikoContract
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
          expect(await waffle.provider.getBalance(accounts[ServiceAccountIndex].address)).to.be.equal(
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
          expect(await testTokenContract.balanceOf(accounts[ServiceAccountIndex].address)).to.be.equal(
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
              .add(serviceFeeAmount)
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

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await testTokenContract.connect(accounts[0]).approve(mystikoContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should revert with duplicate commitment', async () => {
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
      ).to.be.revertedWith('CommitmentHasBeenSubmitted()');
    });
  });
}
