module.exports = {
  skipFiles: [
    'mocks/DummySanctions.sol',
    'mocks/token/TestToken.sol',
    'mocks/proxy/DummyCelerMessageBus.sol',
    'mocks/proxy/DummyLZEndpoint.sol',
    'mocks/proxy/DummyAxelarGateway.sol',
    'mocks/proxy/DummyAxelarGasService.sol',
    'core/deposit/layerzero/relay/lzApp/LzApp.sol',
    'core/deposit/layerzero/relay/lzApp/NonblockingLzApp.sol',
    'core/deposit/axelar/relay/IAxelarExecutable.sol',
    'libs/utils/ZeroCopySink.sol',
    'libs/utils/ZeroCopySource.sol',
    'libs/utils/Utils.sol',
  ],
};
