// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "../../../libs/utils/Utils.sol";
import "../../../libs/utils/ZeroCopySink.sol";
import "../../../libs/utils/ZeroCopySource.sol";
import "../../../interfaces/ICommitmentPool.sol";

abstract contract CrossChainDataSerializable {
  function serializeTxData(
    ICommitmentPool.CommitmentRequest memory _data
  ) internal pure returns (bytes memory) {
    bytes memory buff;
    buff = abi.encodePacked(
      ZeroCopySink.WriteUint255(_data.amount),
      ZeroCopySink.WriteUint255(_data.commitment),
      ZeroCopySink.WriteUint255(_data.executorFee),
      ZeroCopySink.WriteUint255(_data.rollupFee),
      ZeroCopySink.WriteVarBytes(_data.encryptedNote)
    );
    return buff;
  }

  function deserializeTxData(
    bytes memory _rawData
  ) internal pure returns (ICommitmentPool.CommitmentRequest memory) {
    ICommitmentPool.CommitmentRequest memory data;
    uint256 off = 0;
    (data.amount, off) = ZeroCopySource.NextUint255(_rawData, off);
    (data.commitment, off) = ZeroCopySource.NextUint255(_rawData, off);
    (data.executorFee, off) = ZeroCopySource.NextUint255(_rawData, off);
    (data.rollupFee, off) = ZeroCopySource.NextUint255(_rawData, off);
    (data.encryptedNote, off) = ZeroCopySource.NextVarBytes(_rawData, off);
    return data;
  }
}
