module.exports = {
  skipFiles: [
    'mocks/DummySanctions.sol',
    'mocks/token/TestToken.sol',
    'libs/common/ZeroCopySink.sol',
    'libs/common/ZeroCopySource.sol',
    'libs/utils/Utils.sol',
    'libs/verifiers/Rollup1Verifier.sol',
    'libs/verifiers/Rollup4Verifier.sol',
    'libs/verifiers/Rollup16Verifier.sol',
    'libs/verifiers/Transaction1x0Verifier.sol',
    'libs/verifiers/Transaction1x1Verifier.sol',
    'libs/verifiers/Transaction1x2Verifier.sol',
    'libs/verifiers/Transaction2x0Verifier.sol',
    'libs/verifiers/Transaction2x1Verifier.sol',
    'libs/verifiers/Transaction2x2Verifier.sol',
  ],
};