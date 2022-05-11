import { expect } from 'chai';
import { MystikoTBridgeProxy } from '@mystikonetwork/contracts-abi';

export function testLoopAdminOperations(contractName: string, mystikoContract: any, accounts: any[]) {
  describe(`Test ${contractName} admin operations`, () => {
    before(async () => {});

    it('should toggle isDepositDisabled correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).toggleDeposits(true)).to.be.revertedWith(
        'only operator.',
      );

      await mystikoContract.toggleDeposits(true);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(true);
      await mystikoContract.toggleDeposits(false);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
    });
  });
}

export function testBridgeAdminOperations(contractName: string, mystikoContract: any, accounts: any[]) {
  describe(`Test ${contractName} admin operations`, () => {
    before(async () => {});

    it('should toggle isDepositDisabled correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).toggleDeposits(true)).to.be.revertedWith(
        'only operator.',
      );

      await mystikoContract.toggleDeposits(true);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(true);
      await mystikoContract.toggleDeposits(false);
      expect(await mystikoContract.isDepositsDisabled()).to.equal(false);
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
      await expect(mystikoContract.connect(accounts[1]).toggleRollupWhitelist(true)).to.be.revertedWith(
        'only operator.',
      );

      await mystikoContract.toggleRollupWhitelist(true);
      expect(await mystikoContract.isRollupWhitelistDisabled()).to.equal(true);
      await mystikoContract.toggleRollupWhitelist(false);
      expect(await mystikoContract.isRollupWhitelistDisabled()).to.equal(false);
    });

    it('should toggle isVerifierUpdateDisabled correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).toggleVerifierUpdate(true)).to.be.revertedWith(
        'only operator.',
      );

      await mystikoContract.toggleVerifierUpdate(true);
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.equal(true);
      await mystikoContract.toggleVerifierUpdate(false);
      expect(await mystikoContract.isVerifierUpdateDisabled()).to.equal(false);
    });

    it('should enableTransactVerifier correctly', async () => {
      await expect(
        mystikoContract
          .connect(accounts[1])
          .enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('only operator.');

      await expect(
        mystikoContract.enableTransactVerifier(0, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('numInputs should > 0');

      await mystikoContract.enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      const verifier = await mystikoContract.transactVerifiers(1, 0);
      expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      expect(verifier.enabled).to.equal(true);

      await mystikoContract.toggleVerifierUpdate(true);
      await expect(
        mystikoContract.enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('verifier updates have been disabled.');
      await mystikoContract.toggleVerifierUpdate(false);
    });

    it('should disableTransactVerifier correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).disableTransactVerifier(1, 0)).to.be.revertedWith(
        'only operator.',
      );

      await expect(mystikoContract.disableTransactVerifier(0, 0)).to.be.revertedWith('numInputs should > 0');

      await mystikoContract.enableTransactVerifier(1, 0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      await mystikoContract.disableTransactVerifier(1, 0);

      const verifier = await mystikoContract.transactVerifiers(1, 0);
      expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      expect(verifier.enabled).to.equal(false);

      await mystikoContract.toggleVerifierUpdate(true);
      await expect(mystikoContract.disableTransactVerifier(1, 0)).to.be.revertedWith(
        'verifier updates have been disabled.',
      );
      await mystikoContract.toggleVerifierUpdate(false);
    });

    it('should enableRollupVerifier correctly', async () => {
      await expect(
        mystikoContract
          .connect(accounts[1])
          .enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('only operator.');

      await expect(
        mystikoContract.enableRollupVerifier(0, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('invalid rollupSize');

      await mystikoContract.enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      const verifier = await mystikoContract.rollupVerifiers(4);
      expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      expect(verifier.enabled).to.equal(true);

      await mystikoContract.toggleVerifierUpdate(true);
      await expect(
        mystikoContract.enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('verifier updates have been disabled.');
      await mystikoContract.toggleVerifierUpdate(false);
    });

    it('should disableRollupVerifier correctly', async () => {
      await expect(mystikoContract.connect(accounts[1]).disableRollupVerifier(4)).to.be.revertedWith(
        'only operator.',
      );

      await expect(mystikoContract.disableRollupVerifier(0)).to.be.revertedWith('invalid rollupSize');

      await mystikoContract.enableRollupVerifier(4, '0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      await mystikoContract.disableRollupVerifier(4);

      const verifier = await mystikoContract.rollupVerifiers(4);
      expect(verifier.verifier).to.equal('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      expect(verifier.enabled).to.equal(false);

      await mystikoContract.toggleVerifierUpdate(true);
      await expect(mystikoContract.disableRollupVerifier(4)).to.be.revertedWith(
        'verifier updates have been disabled.',
      );
      await mystikoContract.toggleVerifierUpdate(false);
    });

    it('should addRollupWhitelist correctly', async () => {
      await expect(
        mystikoContract.connect(accounts[1]).addRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('only operator.');

      expect(await mystikoContract.rollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f')).to.equal(
        false,
      );

      await mystikoContract.addRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      expect(await mystikoContract.rollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f')).to.equal(
        true,
      );
    });

    it('should removeRollupWhitelist correctly', async () => {
      await expect(
        mystikoContract
          .connect(accounts[1])
          .removeRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f'),
      ).to.be.revertedWith('only operator.');
      await mystikoContract.addRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      await mystikoContract.removeRollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f');
      expect(await mystikoContract.rollupWhitelist('0xfbb61B8b98a59FbC4bD79C23212AddbEFaEB289f')).to.equal(
        false,
      );
    });

    it('should changeOperator correctly', async () => {
      await expect(
        mystikoContract.connect(accounts[1]).changeOperator(accounts[1].address),
      ).to.be.revertedWith('only operator.');

      await mystikoContract.changeOperator(accounts[1].address);
      expect(await mystikoContract.operator()).to.equal(accounts[1].address);
      await mystikoContract.connect(accounts[1]).changeOperator(accounts[0].address);
      expect(await mystikoContract.operator()).to.equal(accounts[0].address);
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

    it('should remove executor whitelist  correctly', async () => {
      await tbridgeProxy.removeExecutorWhitelist(accounts[1].address);
    });

    it('should remove register whitelist  correctly', async () => {
      await tbridgeProxy.removeRegisterWhitelist(accounts[1].address);
    });

    it('should remove executor whitelist  correctly', async () => {
      await tbridgeProxy.withdraw(accounts[1].address);
    });
  });
}
