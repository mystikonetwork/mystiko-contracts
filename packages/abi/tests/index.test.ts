import { ERC20__factory } from '../src';

test('test basic', () => {
  const erc20Interface = ERC20__factory.createInterface();
  expect(erc20Interface).not.toBe(undefined);
});
