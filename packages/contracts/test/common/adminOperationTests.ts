import { MystikoTBridgeProxy } from '@mystikonetwork/contracts-abi';
import { ECIES, KEY_LEN } from '@mystikonetwork/ecies';
import { toBN, toFixedLenHex } from '@mystikonetwork/utils';
import BN from 'bn.js';
import { expect } from 'chai';
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
      await expect(
        mystikoContract.updateDepositAmountLimits(
          maxAmount.toString(),
          toBN(maxAmount).add(toBN(1)).toString(),
        ),
      ).to.be.revertedWith('MinAmountGreaterThanMaxAmount()');
    });

    it('should update deposit amount limits success', async () => {
      await expect(mystikoContract.updateDepositAmountLimits(maxAmount.toString(), minAmount.toString()))
        .to.emit(mystikoContract, 'DepositAmountLimits')
        .withArgs(maxAmount.toString(), minAmount.toString());
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
      await expect(
        mystikoContract.updateDepositAmountLimits(
          maxAmount.toString(),
          toBN(maxAmount).add(toBN(1)).toString(),
        ),
      ).to.be.revertedWith('MinAmountGreaterThanMaxAmount()');
    });

    it('should update deposit amount limits success', async () => {
      await expect(mystikoContract.updateDepositAmountLimits(maxAmount.toString(), minAmount.toString()))
        .to.emit(mystikoContract, 'DepositAmountLimits')
        .withArgs(maxAmount.toString(), minAmount.toString());
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
      const count = await mystikoContract.auditorCount();
      const auditorPublicKeys: BN[] = [];

      for (let i = 0; i < count; i += 1) {
        const auditorSecretKey = ECIES.generateSecretKey();
        const auditorPublicKey = ECIES.publicKey(auditorSecretKey);
        auditorPublicKeys.push(auditorPublicKey);
        await expect(mystikoContract.updateAuditorPublicKey(i, auditorPublicKey.toString()))
          .to.emit(mystikoContract, 'AuditorPublicKey')
          .withArgs(i, auditorPublicKey.toString());
      }

      for (let i = 0; i < count; i += 1) {
        expect(await mystikoContract.getAuditorPublicKey(i)).to.equal(
          toFixedLenHex(auditorPublicKeys[i], KEY_LEN),
        );
      }

      const returnedPublicKeys = await mystikoContract.getAllAuditorPublicKeys();
      expect(returnedPublicKeys.length).to.equal(count);
      for (let i = 0; i < count; i += 1) {
        expect(returnedPublicKeys[i]).to.equal(auditorPublicKeys[i].toString());
      }

      await expect(
        mystikoContract.updateAuditorPublicKey(0, auditorPublicKeys[0].toString()),
      ).to.be.revertedWith('AuditorPublicKeyNotChanged');
      await expect(
        mystikoContract.updateAuditorPublicKey(count, auditorPublicKeys[0].toString()),
      ).to.be.revertedWith('AuditorIndexError');

      await expect(mystikoContract.getAuditorPublicKey(count)).to.be.revertedWith('AuditorIndexError');
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
