module.exports = {
  skipFiles: [
    'mocks/DummySanctions.sol',
    'mocks/dao/MockDaoRegistry.sol',
    'mocks/token/MockMystikoToken.sol',
    'mocks/token/MockMystikoVoteToken.sol',
    'mocks/proxy/MockCelerMessageBus.sol',
    'mocks/proxy/MockLZEndpoint.sol',
    'mocks/proxy/MockAxelarGateway.sol',
    'mocks/proxy/MockAxelarGasService.sol',
    'mocks/sanction/MockSanctionList.sol',
    'core/deposit/layerzero/relay/lzApp/LzApp.sol',
    'core/deposit/layerzero/relay/lzApp/NonblockingLzApp.sol',
    'core/deposit/axelar/relay/IAxelarExecutable.sol',
    'libs/utils/ZeroCopySink.sol',
    'libs/utils/ZeroCopySource.sol',
    'libs/utils/Utils.sol',
  ],
};
