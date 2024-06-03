import { Wallet } from '@ethersproject/wallet';
import { MockSanctionList, MockToken } from '@mystikonetwork/contracts-abi';
import { CommitmentOutput, MystikoProtocolV2 } from '@mystikonetwork/protocol';
import { toBN, toHex } from '@mystikonetwork/utils';
import { expect } from 'chai';
import { waffle } from 'hardhat';
import { MystikoCertificate, MystikoBridgeSettings } from '@mystikonetwork/contracts-abi-settings';
import { MaxAmount, MinAmount, MockSignature, ZeroAddress } from '../util/constants';
import { CommitmentInfo } from './commitment';

export function testLoopDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  depositContract: any,
  commitmentPool: any,
  mockToken: MockToken,
  mockSanctionList: MockSanctionList,
  certificate: MystikoCertificate,
  settings: MystikoBridgeSettings,
  accounts: Wallet[],
  depositAmount: string,
  isMainAsset: boolean,
  cmInfo: CommitmentInfo<CommitmentOutput>,
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
      await settings.setDepositDisable(depositContract.address, true);
      await expect(
        depositContract.certDeposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? amount : '0' },
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
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? amount : '0' },
        ),
      ).to.be.revertedWith('AmountTooLarge()');
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
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
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

    it('should revert AssociatedPoolNotSet', async () => {
      await settings.setAssociatedPool(depositContract.address, ZeroAddress);
      await expect(
        depositContract.certDeposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? depositAmount : '0' },
        ),
      ).to.be.revertedWith('AssociatedPoolNotSet()');
      await settings.setAssociatedPool(depositContract.address, commitmentPool.address);
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
            '0',
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? depositAmount : '0' },
        ),
      ).to.be.revertedWith('RollupFeeToFew()');
    });

    it('should deposit successfully', async () => {
      await mockSanctionList.addToSanctionsList(accounts[0].address);
      await settings.disableSanctionsCheck();

      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          depositContract.certDeposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].encryptedNote),
              minRollupFee,
            ],
            0,
            MockSignature,
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

        expect((await commitmentPool.getCommitmentQueuedCount()).toNumber()).to.equal(i + 1);
        expect((await commitmentPool.getCommitmentCount()).toNumber()).to.equal(i + 1);
        const queued = await commitmentPool.getQueuedCommitments();
        expect(queued.length).to.be.equal(i + 1);
        expect(queued[i].toString()).to.be.equal(commitments[i].commitmentHash.toString());
      }
      await mockSanctionList.removeFromSanctionsList(accounts[0].address);
      await settings.enableSanctionsCheck();
    });

    it('should have correct balance', async () => {
      expectBalance = toBN(minTotalAmount).muln(numOfCommitments).toString();

      if (isMainAsset) {
        expect(await waffle.provider.getBalance(depositContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await mockToken.balanceOf(depositContract.address)).toString()).to.equal('0');
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
      await expect(
        depositContract.certDeposit(
          [
            depositAmount,
            commitments[0].commitmentHash.toString(),
            commitments[0].k.toString(),
            commitments[0].randomS.toString(),
            toHex(commitments[0].encryptedNote),
            minRollupFee,
          ],
          0,
          MockSignature,
          { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
        ),
      ).to.be.revertedWith('CommitmentHasBeenSubmitted()');
    });

    it('should have correct balance', async () => {
      if (isMainAsset) {
        expect(await waffle.provider.getBalance(depositContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await mockToken.balanceOf(depositContract.address)).toString()).to.equal('0');
        expect((await mockToken.balanceOf(commitmentPool.address)).toString()).to.equal(expectBalance);
      }
    });
  });
}

export function loopDepositRevert(
  contractName: string,
  protocol: MystikoProtocolV2,
  depositContract: any,
  commitmentPool: any,
  mockToken: MockToken,
  mockSanctionList: MockSanctionList,
  certificate: MystikoCertificate,
  settings: MystikoBridgeSettings,
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
        await mockToken.approve(depositContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('deposit should revert with tree full', async () => {
      await mockSanctionList.addToSanctionsList(accounts[0].address);
      await settings.disableSanctionsCheck();

      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          depositContract.certDeposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].encryptedNote),
              minRollupFee,
            ],
            0,
            MockSignature,
            { from: accounts[0].address, value: isMainAsset ? minTotalAmount : '0' },
          ),
        ).revertedWith('TreeIsFull()');

        expect(await commitmentPool.isHistoricCommitment(commitments[i].commitmentHash.toString())).to.equal(
          false,
        );
      }
      await mockSanctionList.removeFromSanctionsList(accounts[0].address);
      await settings.disableSanctionsCheck();
    });
  });
}

export function loopDeposit(
  contractName: string,
  protocol: MystikoProtocolV2,
  depositContract: any,
  commitmentPool: any,
  mockToken: MockToken,
  mockSanctionList: MockSanctionList,
  certificate: MystikoCertificate,
  settings: MystikoBridgeSettings,
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
        await mockToken.approve(depositContract.address, approveAmount, {
          from: accounts[0].address,
        });
      }
    });

    it('should deposit successfully with disable certificate check', async () => {
      await mockSanctionList.addToSanctionsList(accounts[0].address);
      await settings.disableSanctionsCheck();
      for (let i = 0; i < numOfCommitments; i += 1) {
        await expect(
          depositContract.certDeposit(
            [
              depositAmount,
              commitments[i].commitmentHash.toString(),
              commitments[i].k.toString(),
              commitments[i].randomS.toString(),
              toHex(commitments[i].encryptedNote),
              minRollupFee,
            ],
            0,
            MockSignature,
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
      await mockSanctionList.removeFromSanctionsList(accounts[0].address);
      await settings.enableSanctionsCheck();
    });

    it('should have correct balance', async () => {
      const expectBalance = toBN(minTotalAmount).muln(numOfCommitments).toString();

      if (isMainAsset) {
        expect(await waffle.provider.getBalance(depositContract.address)).to.equal('0');
        expect(await waffle.provider.getBalance(commitmentPool.address)).to.equal(expectBalance);
      } else {
        expect((await mockToken.balanceOf(depositContract.address)).toString()).to.equal('0');
        expect((await mockToken.balanceOf(commitmentPool.address)).toString()).to.equal(expectBalance);
      }
    });
  });
}
