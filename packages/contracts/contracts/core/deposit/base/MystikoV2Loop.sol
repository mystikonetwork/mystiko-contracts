// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "../../../libs/asset/AssetPool.sol";
import "../../../libs/common/CustomErrors.sol";
import "../../../libs/common/DataTypes.sol";
import "../../../interfaces/IMystikoLoop.sol";
import "../../../interfaces/IHasher3.sol";
import "../../../interfaces/ICommitmentPool.sol";
import {ReentrancyGuard} from "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol";
import {ECDSA} from "lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol";
import {SafeCast} from "lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol";
import {MystikoSettings} from "contracts-settings/contracts/MystikoSettings.sol";
import {CertificateParams} from "contracts-certificate/contracts/interfaces/IMystikoCertificate.sol";

abstract contract MystikoV2Loop is IMystikoLoop, AssetPool {
  using SafeCast for uint256;

  // Hasher related.
  IHasher3 private hasher3;

  uint256 private defaultMinAmount;
  uint256 private defaultMaxAmount;

  // configure related.
  MystikoSettings public settings;

  constructor(IHasher3 _hasher3, address _settingsCenter, LocalConfig memory _localConfig) {
    hasher3 = _hasher3;
    defaultMinAmount = _localConfig.minAmount;
    defaultMaxAmount = _localConfig.maxAmount;
    settings = MystikoSettings(_settingsCenter);
  }

  function _commitmentHash(
    uint256 _hashK,
    uint256 _amount,
    uint128 _randomS
  ) internal view returns (uint256) {
    uint256 fieldSize = DataTypes.FIELD_SIZE;
    if (_hashK >= fieldSize) revert CustomErrors.HashKGreaterThanFieldSize();
    if (_randomS >= fieldSize) revert CustomErrors.RandomSGreaterThanFieldSize();
    return hasher3.poseidon([_hashK, _amount, _randomS]);
  }

  /* @notice              Check deposit request parameter and process deposit
   *  @param _request     The transact request parameter
   */
  function deposit(DepositRequest memory _request) external payable override {
    revert CustomErrors.NotSupport();
  }

  function certDeposit(
    DepositRequest memory _request,
    uint256 _certificateDeadline,
    bytes memory _certificateSignature
  ) external payable override {
    if (settings.isDepositDisable(address(this))) revert CustomErrors.DepositsDisabled();
    if (settings.isCertificateCheckEnabled()) {
      CertificateParams memory params = CertificateParams({
        account: tx.origin,
        asset: assetAddress(),
        deadline: _certificateDeadline,
        signature: _certificateSignature
      });
      if (!settings.verifyCertificate(params)) revert CustomErrors.CertificateInvalid();
    }
    if (_request.amount < getMinAmount()) revert CustomErrors.AmountTooSmall();
    if (_request.amount > getMaxAmount()) revert CustomErrors.AmountTooLarge();
    uint256 calculatedCommitment = _commitmentHash(_request.hashK, _request.amount, _request.randomS);
    if (_request.commitment != calculatedCommitment) revert CustomErrors.CommitmentHashIncorrect();
    if (settings.isSanctioned(tx.origin)) revert CustomErrors.SanctionedAddress();

    _processDeposit(_request.amount, _request.commitment, _request.rollupFee, _request.encryptedNote);
  }

  function _processDeposit(
    uint256 _amount,
    uint256 _commitment,
    uint256 _rollupFee,
    bytes memory _encryptedNote
  ) internal {
    ICommitmentPool.CommitmentRequest memory cmRequest = ICommitmentPool.CommitmentRequest({
      amount: _amount,
      commitment: _commitment,
      executorFee: 0,
      rollupFee: _rollupFee,
      encryptedNote: _encryptedNote
    });
    address pool = getAssociatedCommitmentPool();
    ICommitmentPool(pool).enqueue(cmRequest, address(0));
    _processDepositTransfer(pool, _amount + _rollupFee, 0);
  }

  function bridgeType() public pure returns (string memory) {
    return "loop";
  }

  function getMinAmount() public view returns (uint256) {
    uint256 minAmount = settings.queryMinDepositAmount(address(this));
    return minAmount == 0 ? defaultMinAmount : minAmount;
  }

  function getMaxAmount() public view returns (uint256) {
    uint256 maxAmount = settings.queryMaxDepositAmount(address(this));
    return maxAmount == 0 ? defaultMaxAmount : maxAmount;
  }

  function getAssociatedCommitmentPool() public view returns (address) {
    address pool = settings.queryAssociatedPool(address(this));
    if (pool == address(0)) revert CustomErrors.AssociatedPoolNotSet();
    return pool;
  }

  function isDepositsDisabled() public view returns (bool) {
    return settings.isDepositDisable(address(this));
  }
}
