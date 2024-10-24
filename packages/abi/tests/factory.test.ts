import { ethers } from 'ethers';
import {
  CommitmentPool,
  ERC20,
  MystikoContractFactory,
  MystikoV2Bridge,
  MystikoV2Loop,
  MystikoV2Celer,
  MystikoV2TBridge,
  MystikoV2Axelar,
  MystikoV2LayerZero,
  MystikoSettings,
} from '../src';

let provider: ethers.providers.Provider;

beforeEach(() => {
  provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
});

test('test connect ERC20', () => {
  const contract = MystikoContractFactory.connect<ERC20>(
    'ERC20',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect CommitmentPool', () => {
  const contract = MystikoContractFactory.connect<CommitmentPool>(
    'CommitmentPool',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect MystikoV2Loop', () => {
  let contract = MystikoContractFactory.connect<MystikoV2Loop>(
    'MystikoV2Loop',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
  contract = MystikoContractFactory.connect<MystikoV2Loop>(
    'MystikoV2LoopERC20',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect MystikoV2Bridge', () => {
  const contract = MystikoContractFactory.connect<MystikoV2Bridge>(
    'MystikoV2Bridge',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect MystikoV2Axelar', () => {
  const contract = MystikoContractFactory.connect<MystikoV2Axelar>(
    'MystikoV2AxelarERC20',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect MystikoV2Celer', () => {
  const contract = MystikoContractFactory.connect<MystikoV2Celer>(
    'MystikoV2CelerERC20',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect MystikoV2LayerZero', () => {
  const contract = MystikoContractFactory.connect<MystikoV2LayerZero>(
    'MystikoV2LayerZeroERC20',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect MystikoV2TBridge', () => {
  const contract = MystikoContractFactory.connect<MystikoV2TBridge>(
    'MystikoV2TBridgeERC20',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test connect MystikoSettings', () => {
  const contract = MystikoContractFactory.connect<MystikoSettings>(
    'MystikoSettings',
    '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6',
    provider,
  );
  expect(contract.address).toBe('0x5c7c88e07e3899fff3cc0effe23494591dfe87b6');
});

test('test invalid contractName', () => {
  expect(() =>
    MystikoContractFactory.connect('wrong name', '0x5c7c88e07e3899fff3cc0effe23494591dfe87b6', provider),
  ).toThrow(new Error('unsupported contract name wrong name'));
});
