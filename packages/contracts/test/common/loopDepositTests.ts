import { expect } from 'chai';
import { waffle } from 'hardhat';
import { Wallet } from '@ethersproject/wallet';
import { DummySanctionsList, TestToken } from '@mystikonetwork/contracts-abi';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toHex, toBN } from '@mystikonetwork/utils';
import { CommitmentInfo } from './commitment';
import { MaxAmount, MinAmount, ServiceAccountIndex } from '../util/constants';

export function testLoopDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  mystikoContract: any,
  commitmentPool: any,
  testTokenContract: TestToken,
  sanctionList: DummySanctionsList,
  accounts: Wallet[],
  depositAmount: string,
  isMainAsset: boolean,
  cmInfo: CommitmentInfo<CommitmentOutput>,
) {
  let minTotalAmount: string;
  let minRollupFee: string;
  let serviceFeeAmount: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;
  let expectBalance: string;
  let expectServiceFee: string;

  describe(`Test ${contractName} deposit operations`, () => {
    before(async () => {
      minRollupFee = (await commitmentPool.getMinRollupFee()).toString();
      const serviceFee = (await mystikoContract.getServiceFee()).toString();
      const serviceFeeDivider = (await mystikoContract.getServiceFeeDivider()).toString();
      const fee = toBN(depositAmount).mul(toBN(serviceFee)).div(toBN(serviceFeeDivider));
      minTotalAmount = toBN(depositAmount).add(toBN(minRollupFee)).add(fee).toString();
      serviceFeeAmount = fee.toString();
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
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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
          ],
          { from: accounts[0].address, value: isMainAsset ? amount : '0' },
        ),
      ).to.be.revertedWith('AmountTooSmall()');
    });

    it('should revert when amount is too few', async () => {
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
          ],
          { from: accounts[0].address, value: isMainAsset ? amount : '0' },
        ),
      ).to.be.revertedWith('AmountTooSmall()');
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
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
        ),
      ).to.be.revertedWith('CommitmentHashIncorrect()');
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await testTokenContract.approve(mystikoContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should revert onlyEnqueueWhitelisted', async () => {
      await commitmentPool.removeEnqueueWhitelist(mystikoContract.address);
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? depositAmount : '0' },
        ),
      ).to.be.revertedWith('OnlyWhitelistedSender()');
      await commitmentPool.addEnqueueWhitelist(mystikoContract.address);
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
            '0',
          ],
          { from: accounts[0].address, value: isMainAsset ? depositAmount : '0' },
        ),
      ).to.be.revertedWith('RollupFeeToFew()');
    });

    it('should deposit successfully', async () => {
      await sanctionList.addToSanctionsList(accounts[0].address);
      await mystikoContract.disableSanctionsCheck();

      expectServiceFee = (
        isMainAsset
          ? await waffle.provider.getBalance(accounts[ServiceAccountIndex].address)
          : await await testTokenContract.balanceOf(accounts[ServiceAccountIndex].address)
      ).toString();

      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          mystikoContract.deposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].encryptedNote),
              minRollupFee,
            ],
            { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
          ),
        )
          .to.emit(commitmentPool, 'CommitmentQueued')
          .withArgs(
            commitments[i].commitmentHash.toString(),
            minRollupFee,
            `${i}`,
            toHex(commitments[i].encryptedNote),
          );

        expect(await commitmentPool.isHistoricCommitment(commitments[i].commitmentHash.toString())).to.equal(
          true,
        );
      }
    });

    it('should have correct balance', async () => {
      expectBalance = toBN(minTotalAmount).sub(toBN(serviceFeeAmount)).muln(numOfCommitments).toString();
      expectServiceFee = toBN(serviceFeeAmount).muln(numOfCommitments).add(toBN(expectServiceFee)).toString();

      if (isMainAsset) {
        expect(await waffle.provider.getBalance(mystikoContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
        expect(await waffle.provider.getBalance(accounts[ServiceAccountIndex].address)).to.equal(
          expectServiceFee,
        );
      } else {
        expect((await testTokenContract.balanceOf(mystikoContract.address)).toString()).to.equal('0');
        expect((await testTokenContract.balanceOf(commitmentPool.address)).toString()).to.equal(
          expectBalance,
        );
        expect(
          (await testTokenContract.balanceOf(accounts[ServiceAccountIndex].address)).toString(),
        ).to.equal(expectServiceFee);
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
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
        ),
      ).to.be.revertedWith('CommitmentHasBeenSubmitted()');
    });

    it('should have correct balance', async () => {
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(mystikoContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
        expect(await waffle.provider.getBalance(accounts[ServiceAccountIndex].address)).to.equal(
          expectServiceFee,
        );
      } else {
        expect((await testTokenContract.balanceOf(mystikoContract.address)).toString()).to.equal('0');
        expect((await testTokenContract.balanceOf(commitmentPool.address)).toString()).to.equal(
          expectBalance,
        );
        expect(
          (await testTokenContract.balanceOf(accounts[ServiceAccountIndex].address)).toString(),
        ).to.equal(expectServiceFee);
      }
    });
  });
}

export function loopDepositRevert(
  contractName: string,
  protocol: MystikoProtocolV2,
  mystikoContract: any,
  commitmentPool: any,
  testTokenContract: TestToken,
  sanctionList: DummySanctionsList,
  accounts: Wallet[],
  depositAmount: string,
  isMainAsset: boolean,
  cmInfo: CommitmentInfo<CommitmentOutput>,
) {
  let minTotalAmount: string;
  let minRollupFee: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;

  describe(`${contractName} deposit operations`, () => {
    before(async () => {
      minRollupFee = (await commitmentPool.getMinRollupFee()).toString();
      minTotalAmount = toBN(depositAmount).add(toBN(minRollupFee)).toString();
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await testTokenContract.approve(mystikoContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('deposit should revert with tree full', async () => {
      await sanctionList.addToSanctionsList(accounts[0].address);
      await mystikoContract.disableSanctionsCheck();

      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          mystikoContract.deposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].encryptedNote),
              minRollupFee,
            ],
            { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
          ),
        ).revertedWith('TreeIsFull()');

        expect(await commitmentPool.isHistoricCommitment(commitments[i].commitmentHash.toString())).to.equal(
          false,
        );
      }
    });

    it('should revert wrong service fee divider', async () => {
      await expect(mystikoContract.changeServiceFeeDivider(0)).revertedWith('ServiceFeeDividerTooSmall()');
    });
  });
}

export function loopDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  mystikoContract: any,
  commitmentPool: any,
  testTokenContract: TestToken,
  sanctionList: DummySanctionsList,
  accounts: Wallet[],
  depositAmount: string,
  isMainAsset: boolean,
  cmInfo: CommitmentInfo<CommitmentOutput>,
) {
  let minTotalAmount: string;
  let minRollupFee: string;
  let serviceFeeAmount: string;
  let expectServiceFee: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;

  describe(`${contractName} deposit operations`, () => {
    before(async () => {
      minRollupFee = (await commitmentPool.getMinRollupFee()).toString();
      await mystikoContract.changeServiceFee(0);
      const fee = toBN('0');
      minTotalAmount = toBN(depositAmount).add(toBN(minRollupFee)).add(fee).toString();
      serviceFeeAmount = fee.toString();
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
      await mystikoContract.disableSanctionsCheck();
      expectServiceFee = (
        isMainAsset
          ? await waffle.provider.getBalance(accounts[ServiceAccountIndex].address)
          : await await testTokenContract.balanceOf(accounts[ServiceAccountIndex].address)
      ).toString();

      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          mystikoContract.deposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].encryptedNote),
              minRollupFee,
            ],
            { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
          ),
        )
          .to.emit(commitmentPool, 'CommitmentQueued')
          .withArgs(
            commitments[i].commitmentHash.toString(),
            minRollupFee,
            `${i}`,
            toHex(commitments[i].encryptedNote),
          );

        expect(await commitmentPool.isHistoricCommitment(commitments[i].commitmentHash.toString())).to.equal(
          true,
        );
      }
    });

    it('should have correct balance', async () => {
      const expectBalance = toBN(minTotalAmount)
        .sub(toBN(serviceFeeAmount))
        .muln(numOfCommitments)
        .toString();
      expectServiceFee = toBN(serviceFeeAmount).muln(numOfCommitments).add(toBN(expectServiceFee)).toString();

      if (isMainAsset) {
        expect(await waffle.provider.getBalance(mystikoContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
        expect(await waffle.provider.getBalance(accounts[ServiceAccountIndex].address)).to.equal(
          expectServiceFee,
        );
      } else {
        expect((await testTokenContract.balanceOf(mystikoContract.address)).toString()).to.equal('0');
        expect((await testTokenContract.balanceOf(commitmentPool.address)).toString()).to.equal(
          expectBalance,
        );
        expect(
          (await testTokenContract.balanceOf(accounts[ServiceAccountIndex].address)).toString(),
        ).to.equal(expectServiceFee);
      }
    });
  });
}
