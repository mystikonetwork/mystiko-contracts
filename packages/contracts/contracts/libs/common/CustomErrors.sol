pragma solidity ^0.8.7;

library CustomErrors {
  error OnlyOperator();
  error NotChanged();
  error OnlyWhitelistedRoller();
  error OnlyWhitelistedSender();
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
  error VerifierUpdatesHasBeenDisabled();
  error NumInputsGreaterThanZero();
  error RollupSizeNotPowerOfTwo();
  error TreeHeightOutOfBounds();
  error OutputNotesLessThanThree();
  error SenderIsNotBridgeProxy();
  error HashKGreaterThanFieldSize();
  error RandomSGreaterThanFieldSize();
  error DepositsDisabled();
  error AmountTooSmall();
  error AmountTooLarge();
  error MaxAmountLessThanMinAmount();
  error MinAmountGreaterThanMaxAmount();
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
  error AuditorPublicKeyNotChanged();
  error AuditorNotesLengthError();
}
