import { expect } from 'chai';
import { waffle } from 'hardhat';
import { Wallet } from '@ethersproject/wallet';
import { DummySanctionsList, TestToken } from '@mystikonetwork/contracts-abi';
import { CommitmentV2, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toHex, toBN } from '@mystikonetwork/utils';
import { CommitmentInfo } from './commitment';
import { MinAmount } from '../util/constants';

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
  cmInfo: CommitmentInfo<CommitmentV2>,
) {
  let minTotalAmount: string;
  let minRollupFee: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;
  let expectBalance: string;

  describe(`Test ${contractName} deposit operations`, () => {
    before(async () => {
      minRollupFee = (await commitmentPool.getMinRollupFee()).toString();
      minTotalAmount = toBN(depositAmount).add(toBN(minRollupFee)).toString();
    });

    it('should revert when deposit is disabled', async () => {
      await mystikoContract.toggleDeposits(true);
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].privateNote),
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
        ),
      ).to.be.revertedWith('deposits are disabled');
      await mystikoContract.toggleDeposits(false);
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
            toHex(commitments[0].privateNote),
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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
            toHex(commitments[0].privateNote),
            '0',
          ],
          { from: accounts[0].address, value: isMainAsset ? amount : '0' },
        ),
      ).to.be.revertedWith('amount too few');
    });

    it('should revert when commitmentHash is incorrect', async () => {
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            protocol.randomBigInt().toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].privateNote),
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
        ),
      ).to.be.revertedWith('commitment hash incorrect');
    });

    it('should approve asset successfully', async () => {
      if (!isMainAsset) {
        const approveAmount = toBN(minTotalAmount).muln(commitments.length).toString();
        await testTokenContract.approve(mystikoContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should revert when rollup fee is too few', async () => {
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].privateNote),
            '0',
          ],
          { from: accounts[0].address, value: isMainAsset ? depositAmount : '0' },
        ),
      ).to.be.revertedWith('rollup fee too few');
    });

    it('should deposit successfully', async () => {
      await sanctionList.addToSanctionsList(accounts[0].address);
      await mystikoContract.toggleSanctionCheck(true);

      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          mystikoContract.deposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].privateNote),
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
            toHex(commitments[i].privateNote),
          );

        expect(await commitmentPool.isHistoricCommitment(commitments[i].commitmentHash.toString())).to.equal(
          true,
        );
      }
    });

    it('should have correct balance', async () => {
      expectBalance = toBN(minTotalAmount).muln(numOfCommitments).toString();
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(mystikoContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await testTokenContract.balanceOf(mystikoContract.address)).toString()).to.equal('0');
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
      await expect(
        mystikoContract.deposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].privateNote),
            minRollupFee,
          ],
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
        ),
      ).to.be.revertedWith('the commitment has been submitted');
    });

    it('should have correct balance', async () => {
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(mystikoContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await testTokenContract.balanceOf(mystikoContract.address)).toString()).to.equal('0');
        expect((await testTokenContract.balanceOf(commitmentPool.address)).toString()).to.equal(
          expectBalance,
        );
      }
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
  cmInfo: CommitmentInfo<CommitmentV2>,
) {
  let minTotalAmount: string;
  let minRollupFee: string;
  const { commitments } = cmInfo;
  const numOfCommitments = commitments.length;
  let expectBalance: string;

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

    it('should deposit successfully', async () => {
      await sanctionList.addToSanctionsList(accounts[0].address);
      await mystikoContract.toggleSanctionCheck(true);

      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          mystikoContract.deposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].privateNote),
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
            toHex(commitments[i].privateNote),
          );

        expect(await commitmentPool.isHistoricCommitment(commitments[i].commitmentHash.toString())).to.equal(
          true,
        );
      }
    });

    it('should have correct balance', async () => {
      expectBalance = toBN(minTotalAmount).muln(numOfCommitments).toString();
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(mystikoContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await testTokenContract.balanceOf(mystikoContract.address)).toString()).to.equal('0');
        expect((await testTokenContract.balanceOf(commitmentPool.address)).toString()).to.equal(
          expectBalance,
        );
      }
    });
  });
}
