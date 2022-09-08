import { expect } from 'chai';
import { MystikoTBridgeProxy } from '@mystikonetwork/contracts-abi';
import { toBN } from '@mystikonetwork/utils';
import { ethers } from 'ethers';
import { MaxAmount, MinAmount } from '../util/constants';

export function testLoopAdminOperations(
  contractName: string,
  mystikoContract: any,
  accounts: any[],
  { minAmount = MinAmount, maxAmount = MaxAmount },
) {
  describe(`Test ${contractName} admin operations`, () => {
    before(async () => {});

    it('should revert when minAmount greater than maxAmount', async () => {
      await expect(mystikoContract.setMinAmount(toBN(maxAmount).add(toBN(1)).toString())).to.be.revertedWith(
        'MinAmountGreaterThanMaxAmount()',
      );
    });

    it('should revert when maxAmount less than minAmount', async () => {
      await expect(mystikoContract.setMaxAmount(toBN(minAmount).sub(toBN(1)).toString())).to.be.revertedWith(
        'MaxAmountLessThanMinAmount()',
      );
    });

    it('should toggle isDepositDisabled correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).setDepositsDisabled(true)).to.be.revertedWith(
        'OnlyOperator()',
      );

      await mystikoContract.setDepositsDisabled(true);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(true);
      await mystikoContract.setDepositsDisabled(false);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
    });

    it('should changeOperator correctly', async () => {
      await expect(
        mystikoContract.connect(accounts[1]).changeOperator(accounts[1].address),
      ).to.be.revertedWith('OnlyOperator()');

      await mystikoContract.changeOperator(accounts[1].address);
      // todo check operator
      // expect(await mystikoContract.operator()).to.equal(accounts[1].address);
      await mystikoContract.connect(accounts[1]).changeOperator(accounts[0].address);
      // expect(await mystikoContract.operator()).to.equal(accounts[0].address);
    });
  });
}

export function testBridgeAdminOperations(
  contractName: string,
  mystikoContract: any,
  accounts: any[],
  { minAmount = MinAmount, maxAmount = MaxAmount },
) {
  describe(`Test ${contractName} admin operations`, () => {
    before(async () => {});

    it('should revert when minAmount greater than maxAmount', async () => {
      await expect(mystikoContract.setMinAmount(toBN(maxAmount).add(toBN(1)).toString())).to.be.revertedWith(
        'MinAmountGreaterThanMaxAmount()',
      );
    });

    it('should revert when maxAmount less than minAmount', async () => {
      await expect(mystikoContract.setMaxAmount(toBN(minAmount).sub(toBN(1)).toString())).to.be.revertedWith(
        'MaxAmountLessThanMinAmount()',
      );
    });

    it('should toggle isDepositDisabled correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).setDepositsDisabled(true)).to.be.revertedWith(
        'OnlyOperator()',
      );

      await mystikoContract.setDepositsDisabled(true);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(true);
      await mystikoContract.setDepositsDisabled(false);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
    });

    it('should changeOperator correctly', async () => {
      await expect(
        mystikoContract.connect(accounts[1]).changeOperator(accounts[1].address),
      ).to.be.revertedWith('OnlyOperator()');

      await mystikoContract.changeOperator(accounts[1].address);
      // todo check operator
      // expect(await mystikoContract.operator()).to.equal(accounts[1].address);
      await mystikoContract.connect(accounts[1]).changeOperator(accounts[0].address);
      // expect(await mystikoContract.operator()).to.equal(accounts[0].address);
    });
  });
}

export function testCommitmentPoolAdminOperations(
  contractName: string,
  mystikoContract: any,
  accounts: any[],
) {
  describe(`Test ${contractName} admin operations`, () => {
    before(async () => {});

    it('should toggle isRollupWhitelistDisabled correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).setRollupWhitelistDisabled(true)).to.be.revertedWith(
        'OnlyOperator()',
      );

      await mystikoContract.setRollupWhitelistDisabled(true);
      expect(await mystikoContract.isRollupWhitelistDisabled()).to.equal(true);
      await mystikoContract.setRollupWhitelistDisabled(false);
      expect(await mystikoContract.isRollupWhitelistDisabled()).to.equal(false);
    });

    it('should toggle isVerifierUpdateDisabled correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).setVerifierUpdateDisabled(true)).to.be.revertedWith(
        'OnlyOperator()',
      );

      await mystikoContract.setVerifierUpdateDisabled(true);
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.equal(true);
      await mystikoContract.setVerifierUpdateDisabled(false);
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.equal(false);
    });

    it('should enableTransactVerifier correctly', async () => {
      await expect(
        mystikoContract
          .connect(accounts[1])
          .enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('OnlyOperator()');

      await expect(
        mystikoContract.enableTransactVerifier(0, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('NumInputsGreaterThanZero()');

      await mystikoContract.enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      // todo eric check transact Verifiers address
      // const verifier = await mystikoContract.transactVerifiers(1, 0);
      // expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      // expect(verifier.enabled).to.equal(true);

      await mystikoContract.setVerifierUpdateDisabled(true);
      await expect(
        mystikoContract.enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('VerifierUpdatesHasBeenDisabled()');
      await mystikoContract.setVerifierUpdateDisabled(false);
    });

    it('should disableTransactVerifier correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).disableTransactVerifier(1, 0)).to.be.revertedWith(
        'OnlyOperator()',
      );

      await expect(mystikoContract.disableTransactVerifier(0, 0)).to.be.revertedWith(
        'NumInputsGreaterThanZero()',
      );

      await mystikoContract.enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      await mystikoContract.disableTransactVerifier(1, 0);

      // todo eric check transact Verifiers address
      // const verifier = await mystikoContract.transactVerifiers(1, 0);
      // expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      // expect(verifier.enabled).to.equal(false);

      await mystikoContract.setVerifierUpdateDisabled(true);
      await expect(mystikoContract.disableTransactVerifier(1, 0)).to.be.revertedWith(
        'VerifierUpdatesHasBeenDisabled()',
      );
      await mystikoContract.setVerifierUpdateDisabled(false);
    });

    it('should enableRollupVerifier correctly', async () => {
      await expect(
        mystikoContract
          .connect(accounts[1])
          .enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('OnlyOperator()');

      await expect(
        mystikoContract.enableRollupVerifier(0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('Invalid("rollupSize")');

      await mystikoContract.enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      // todo eric check rollup Verifiers  address
      // const verifier = await mystikoContract.rollupVerifiers(4);
      // expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      // expect(verifier.enabled).to.equal(true);

      await mystikoContract.setVerifierUpdateDisabled(true);
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.be.equal(true);
      await expect(
        mystikoContract.enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('VerifierUpdatesHasBeenDisabled()');
      await mystikoContract.setVerifierUpdateDisabled(false);
    });

    it('should disableRollupVerifier correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).disableRollupVerifier(4)).to.be.revertedWith(
        'OnlyOperator()',
      );

      await expect(mystikoContract.disableRollupVerifier(0)).to.be.revertedWith('Invalid("rollupSize")');

      await mystikoContract.enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      await mystikoContract.disableRollupVerifier(4);

      // todo eric check rollup Verifiers  address
      // const verifier = await mystikoContract.rollupVerifiers(4);
      // expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      // expect(verifier.enabled).to.equal(false);

      await mystikoContract.setVerifierUpdateDisabled(true);
      await expect(mystikoContract.disableRollupVerifier(4)).to.be.revertedWith(
        'VerifierUpdatesHasBeenDisabled()',
      );
      await mystikoContract.setVerifierUpdateDisabled(false);
    });

    it('should addRollupWhitelist correctly', async () => {
      await expect(
        mystikoContract.connect(accounts[1]).addRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('OnlyOperator()');

      // todo check white list
      // expect(await mystikoContract.rollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f')).to.equal(
      //   false,
      // );

      await mystikoContract.addRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      // expect(await mystikoContract.rollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f')).to.equal(
      //   true,
      // );
    });

    it('should removeRollupWhitelist correctly', async () => {
      await expect(
        mystikoContract
          .connect(accounts[1])
          .removeRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('OnlyOperator()');
      await mystikoContract.addRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      await mystikoContract.removeRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');

      // todo check white list
      // expect(await mystikoContract.rollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f')).to.equal(
      //   false,
      // );
    });

    it('should removeEnqueueWhitelist correctly', async () => {
      await expect(
        mystikoContract
          .connect(accounts[1])
          .removeEnqueueWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('OnlyOperator()');
      await mystikoContract.addEnqueueWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      await mystikoContract.removeEnqueueWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');

      // todo check white list
      // expect(await mystikoContract.rollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f')).to.equal(
      //   false,
      // );
    });

    it('should changeOperator correctly', async () => {
      await expect(
        mystikoContract.connect(accounts[1]).changeOperator(accounts[1].address),
      ).to.be.revertedWith('OnlyOperator()');

      await mystikoContract.changeOperator(accounts[1].address);
      // todo check operator
      // expect(await mystikoContract.operator()).to.equal(accounts[1].address);
      await mystikoContract.connect(accounts[1]).changeOperator(accounts[0].address);
      // expect(await mystikoContract.operator()).to.equal(accounts[0].address);
    });

    it('should set auditor key correctly', async () => {
      const key = ethers.utils.formatBytes32String('0x74657374');
      const count = await mystikoContract.auditorCount();

      for (let i = 0; i < count; i += 1) {
        await expect(mystikoContract.updateAuditorKey(i, key))
          .to.emit(mystikoContract, 'AuditorKeyChanged')
          .withArgs(i, key);
      }

      for (let i = 0; i < count; i += 1) {
        expect(await mystikoContract.getAuditorKey(i)).to.equal(key);
      }

      const keys = await mystikoContract.getAllAuditorKeys();
      expect(keys.length).to.equal(count);
      for (let i = 0; i < count; i += 1) {
        expect(keys[i]).to.equal(key);
      }

      await expect(mystikoContract.updateAuditorKey(0, key)).to.be.revertedWith('AuditorKeyNotChanged');
      await expect(mystikoContract.updateAuditorKey(count, key)).to.be.revertedWith('AuditorIndexError');

      expect(await mystikoContract.getAuditorKey(count)).to.equal(
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      );
    });
  });
}

export function testTBridgeProxyAdminOperations(
  contractName: string,
  tbridgeProxy: MystikoTBridgeProxy,
  accounts: any[],
) {
  describe(`Test ${contractName} admin operations`, () => {
    before(async () => {});

    it('should changeOperator correctly', async () => {
      await expect(tbridgeProxy.connect(accounts[1]).changeOperator(accounts[1].address)).to.be.revertedWith(
        'OnlyOperator()',
      );
    });

    // todo check executor/register/withdraw
    it('should remove executor whitelist correctly', async () => {
      await tbridgeProxy.removeExecutorWhitelist(accounts[1].address);
    });

    it('should remove register whitelist correctly', async () => {
      await tbridgeProxy.removeRegisterWhitelist(accounts[1].address);
    });

    it('should remove executor whitelist correctly', async () => {
      await tbridgeProxy.withdraw(accounts[1].address);
    });
  });
}
