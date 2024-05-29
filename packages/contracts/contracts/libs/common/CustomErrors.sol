// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

library CustomErrors {
  error RejectRollup();
  error RejectRelay();
  error RollupDisabled(uint256 rollupSize);
  error TransactDisabled(uint32 inputNumber, uint32 outputNumber);
  error OnlyWhitelistedExecutor();
  error TreeHeightLessThanZero();
  error RollupFeeToFew();
  error TreeIsFull();
  error CommitmentHasBeenSubmitted();
  error NewRootIsDuplicated();
  error Invalid(string param);
  error IndexOutOfBound();
  error SanctionedAddress();
  error NoteHasBeenSpent();
  error Duplicated(string param);
  error TreeHeightOutOfBounds();
  error OutputNotesLessThanThree();
  error SenderIsNotBridgeProxy();
  error HashKGreaterThanFieldSize();
  error RandomSGreaterThanFieldSize();
  error DepositsDisabled();
  error AmountTooSmall();
  error AmountTooLarge();
  error BridgeFeeTooFew();
  error ExecutorFeeTooFew();
  error CommitmentHashIncorrect();
  error FromProxyAddressNotMatched();
  error FromChainIdNotMatched();
  error AmountLessThanZero();
  error DestinationChainIsNotTrusted();
  error CallIsNotLzApp();
  error NoStoredMessage();
  error OnlyRegister();
  error CallCrossChainSyncTxError();
  error WithdrawFailed();
  error AuditorIndexError();
  error AuditorNotesLengthError();
  error AssociatedPoolNotMatched();
  error AssociatedPoolNotSet();
  error NotSupport();
  error CertificateInvalid();
  error PeerContractAlreadySet();
}
