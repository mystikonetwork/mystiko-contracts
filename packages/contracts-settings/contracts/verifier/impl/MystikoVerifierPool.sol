// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {WrappedVerifier, IMystikoVerifierPool} from "../interfaces/IMystikoVerifierPool.sol";
import {MystikoSettingsErrors} from "../../MystikoSettingsErrors.sol";
import {MystikoDAOAccessControl} from "@mystikonetwork/governance/contracts/MystikoDAOAccessControl.sol";

abstract contract MystikoVerifierPool is IMystikoVerifierPool, MystikoDAOAccessControl {
  mapping(uint32 => mapping(uint32 => WrappedVerifier)) private transactVerifiers;
  mapping(uint32 => WrappedVerifier) private rollupVerifiers;

  event RollupVerifierEnabled(uint32 rollupSize);
  event RollupVerifierDisabled(uint32 rollupSize);
  event TransactVerifierEnabled(uint32 inputNumber, uint32 outputNumber);
  event TransactVerifierDisabled(uint32 inputNumber, uint32 outputNumber);

  constructor(address[11] memory _rollupVerifiers, address[6] memory _transactVerifiers) {
    rollupVerifiers[1] = WrappedVerifier(_rollupVerifiers[0], true);
    rollupVerifiers[2] = WrappedVerifier(_rollupVerifiers[1], true);
    rollupVerifiers[4] = WrappedVerifier(_rollupVerifiers[2], true);
    rollupVerifiers[8] = WrappedVerifier(_rollupVerifiers[3], true);
    rollupVerifiers[16] = WrappedVerifier(_rollupVerifiers[4], true);
    rollupVerifiers[32] = WrappedVerifier(_rollupVerifiers[5], true);
    rollupVerifiers[64] = WrappedVerifier(_rollupVerifiers[6], true);
    rollupVerifiers[128] = WrappedVerifier(_rollupVerifiers[7], true);
    rollupVerifiers[256] = WrappedVerifier(_rollupVerifiers[8], true);
    rollupVerifiers[512] = WrappedVerifier(_rollupVerifiers[9], true);
    rollupVerifiers[1024] = WrappedVerifier(_rollupVerifiers[10], true);
    transactVerifiers[1][0] = WrappedVerifier(_transactVerifiers[0], true);
    transactVerifiers[1][1] = WrappedVerifier(_transactVerifiers[1], true);
    transactVerifiers[1][2] = WrappedVerifier(_transactVerifiers[2], true);
    transactVerifiers[2][0] = WrappedVerifier(_transactVerifiers[3], true);
    transactVerifiers[2][1] = WrappedVerifier(_transactVerifiers[4], true);
    transactVerifiers[2][2] = WrappedVerifier(_transactVerifiers[5], true);
  }

  function queryRollupVerifier(uint32 _rollupSize) external view returns (WrappedVerifier memory) {
    return rollupVerifiers[_rollupSize];
  }

  function queryTransactVerifier(
    uint32 _numInputs,
    uint32 _numOutputs
  ) external view returns (WrappedVerifier memory) {
    return transactVerifiers[_numInputs][_numOutputs];
  }

  function enableRollupVerifier(uint32 _rollupSize) external onlyMystikoDAO {
    if (_rollupSize == 0 || _rollupSize > 1024) revert MystikoSettingsErrors.InvalidRollupSize();
    if (_rollupSize & (_rollupSize - 1) != 0) revert MystikoSettingsErrors.RollupSizeNotPowerOfTwo();
    rollupVerifiers[_rollupSize].enabled = true;
    emit RollupVerifierEnabled(_rollupSize);
  }

  function disableRollupVerifier(uint32 _rollupSize) external onlyMystikoDAO {
    if (_rollupSize == 0 || _rollupSize > 1024) revert MystikoSettingsErrors.InvalidRollupSize();
    if (_rollupSize & (_rollupSize - 1) != 0) revert MystikoSettingsErrors.RollupSizeNotPowerOfTwo();
    rollupVerifiers[_rollupSize].enabled = false;
    emit RollupVerifierDisabled(_rollupSize);
  }

  function enableTransactVerifier(uint32 _numInputs, uint32 _numOutputs) external onlyMystikoDAO {
    if (_numInputs == 0) revert MystikoSettingsErrors.InvalidInputsNumber();
    transactVerifiers[_numInputs][_numOutputs].enabled = true;
    emit TransactVerifierEnabled(_numInputs, _numOutputs);
  }

  function disableTransactVerifier(uint32 _numInputs, uint32 _numOutputs) external onlyMystikoDAO {
    if (_numInputs == 0) revert MystikoSettingsErrors.InvalidInputsNumber();
    transactVerifiers[_numInputs][_numOutputs].enabled = false;
    emit TransactVerifierDisabled(_numInputs, _numOutputs);
  }
}
