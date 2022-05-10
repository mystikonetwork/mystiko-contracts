import { toHexNoPrefix } from '@mystikonetwork/utils';
import * as assert from 'assert';
import {
  deserializeCommitmentRequest,
  NextAddress,
  NextBool,
  NextByte,
  NextBytes,
  NextHash,
  NextString,
  NextUint16,
  NextUint256,
  NextUint32,
  NextUint64,
  NextUint8,
  Skip,
  Uint256Size,
  Uint8Size,
} from '../src/deserialize';

test('test deserialize crossChain message success ', () => {
  const msg = {
    amount: '10000000000000000000',
    commitment: '7cfe7cb0d6b4ce474da7d66a67c61c4b3a34dcd90e1b4e93271add2aca50723',
    executorFee: '5000000000000',
    rollupFee: '10000000000000',
    encryptedNote:
      'a5ee71f34c28f56ee66b57f24a0b31ae04d90ce0f9358b7753ad4fc374ddecf6438b30ea3d8be9c458ec9142d3581df9e4e731135b5172d049bb1fb6850dd45102ce1b8cc6ae1a3c94a93d762fdda8dd952d8b169bfd70054829a3b254dbc411e452abf6c1ec67a5f9d153c6237232127be78c3365f27a408397b161a1c594110221be41c770035a2ec1c3d6772aa01b5d46ceedcba2466335b44dc5d5a8ca697d2a6b2eb873a21c48cabeb1a9bc3a7558aaca81e5c8f54abc3fef6bd1d6de2813bfe03a6eea09af4e226b1f4dba59d20e',
    message:
      '0000e8890423c78a0000000000000000000000000000000000000000000000002307a5acd2ad7132e9b4e190cd4da3b3c4617ca6667dda74e44c6b0dcbe7cf07005039278c04000000000000000000000000000000000000000000000000000000a0724e18090000000000000000000000000000000000000000000000000000d1a5ee71f34c28f56ee66b57f24a0b31ae04d90ce0f9358b7753ad4fc374ddecf6438b30ea3d8be9c458ec9142d3581df9e4e731135b5172d049bb1fb6850dd45102ce1b8cc6ae1a3c94a93d762fdda8dd952d8b169bfd70054829a3b254dbc411e452abf6c1ec67a5f9d153c6237232127be78c3365f27a408397b161a1c594110221be41c770035a2ec1c3d6772aa01b5d46ceedcba2466335b44dc5d5a8ca697d2a6b2eb873a21c48cabeb1a9bc3a7558aaca81e5c8f54abc3fef6bd1d6de2813bfe03a6eea09af4e226b1f4dba59d20e',
  };

  const r = deserializeCommitmentRequest(msg.message);
  expect(r).not.toBe(undefined);
  expect(r?.amount.toString()).toBe(msg.amount);
  const commitmentHash = r?.commitment;
  if (commitmentHash === undefined) {
    assert.fail('commitment undefined');
  }
  expect(toHexNoPrefix(commitmentHash)).toBe(msg.commitment);
  expect(r?.executorFee.toString()).toBe(msg.executorFee);
  expect(r?.rollupFee.toString()).toBe(msg.rollupFee);
  expect(r?.encryptedNote.toString()).toBe(msg.encryptedNote);
});

test('test deserialize crossChain message wrong private note length ', () => {
  const msg = {
    amount: '10000000000000000000',
    commitment: '7cfe7cb0d6b4ce474da7d66a67c61c4b3a34dcd90e1b4e93271add2aca50723',
    executorFee: '5000000000000',
    rollupFee: '10000000000000',
    encryptedNote:
      'a5ee71f34c28f56ee66b57f24a0b31ae04d90ce0f9358b7753ad4fc374ddecf6438b30ea3d8be9c458ec9142d3581df9e4e731135b5172d049bb1fb6850dd45102ce1b8cc6ae1a3c94a93d762fdda8dd952d8b169bfd70054829a3b254dbc411e452abf6c1ec67a5f9d153c6237232127be78c3365f27a408397b161a1c594110221be41c770035a2ec1c3d6772aa01b5d46ceedcba2466335b44dc5d5a8ca697d2a6b2eb873a21c48cabeb1a9bc3a7558aaca81e5c8f54abc3fef6bd1d6de2813bfe03a6eea09af4e226b1f4dba59d20e',
    message:
      '0000e8890423c78a0000000000000000000000000000000000000000000000002307a5acd2ad7132e9b4e190cd4da3b3c4617ca6667dda74e44c6b0dcbe7cf07005039278c04000000000000000000000000000000000000000000000000000000a0724e18090000000000000000000000000000000000000000000000000000ffa5ee71f34c28f56ee66b57f24a0b31ae04d90ce0f9358b7753ad4fc374ddecf6438b30ea3d8be9c458ec9142d3581df9e4e731135b5172d049bb1fb6850dd45102ce1b8cc6ae1a3c94a93d762fdda8dd952d8b169bfd70054829a3b254dbc411e452abf6c1ec67a5f9d153c6237232127be78c3365f27a408397b161a1c594110221be41c770035a2ec1c3d6772aa01b5d46ceedcba2466335b44dc5d5a8ca697d2a6b2eb873a21c48cabeb1a9bc3a7558aaca81e5c8f54abc3fef6bd1d6de2813bfe03a6eea09af4e226b1f4dba59d20e',
  };

  let offset = Skip(msg.message, 0, Uint256Size);
  if (offset === undefined) {
    assert.fail('offset undefined');
  }

  offset = Skip(msg.message, offset, Uint256Size);
  if (offset === undefined) {
    assert.fail('offset undefined');
  }

  offset = Skip(msg.message, offset, Uint256Size);
  if (offset === undefined) {
    assert.fail('offset undefined');
  }

  offset = Skip(msg.message, offset, Uint256Size);
  if (offset === undefined) {
    assert.fail('offset undefined');
  }

  const r2 = NextBytes(msg.message, offset);
  expect(r2.output).toBe(undefined);
  expect(r2.outOffset).toBe(undefined);
});

test('test next function uint', () => {
  const msg = {
    bTrue: true,
    bFalse: false,
    byte: 1,
    uint8: 254,
    uint16: 43981,
    uint32: 2882400239,
    uint64: '12302652060662213307',
    message: '010001fecdabefefcdabbbaaffeeddccbbaa',
  };

  let r = NextBool(msg.message, 0);
  if (r.output === undefined || r.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r.output).toBe(msg.bTrue);

  r = NextBool(msg.message, r.outOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r.output).toBe(msg.bFalse);

  let r2 = NextByte(msg.message, r.outOffset);
  if (r2.output === undefined || r2.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r2.output).toBe(msg.byte);

  r2 = NextUint8(msg.message, r2.outOffset);
  if (r2.output === undefined || r2.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r2.output).toBe(msg.uint8);

  r2 = NextUint16(msg.message, r2.outOffset);
  if (r2.output === undefined || r2.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r2.output).toBe(msg.uint16);

  r2 = NextUint32(msg.message, r2.outOffset);
  if (r2.output === undefined || r2.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r2.output).toBe(msg.uint32);

  const r3 = NextUint64(msg.message, r2.outOffset);
  if (r3.output === undefined || r3.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r3.output.toString()).toBe(msg.uint64);
});

test('test next function address/hash', () => {
  const msg = {
    address: 'Ec1c50a3EF4ED959934Ec482aA70cD7453F96F95',
    hash: 'eacd8b468cd3d2a81a733a4d7cbd11bb119655b6829dff2a4add1a1c84b8ae4a',
    message:
      'Ec1c50a3EF4ED959934Ec482aA70cD7453F96F95eacd8b468cd3d2a81a733a4d7cbd11bb119655b6829dff2a4add1a1c84b8ae4a',
  };

  const r = NextAddress(msg.message, 0);
  if (r.output === undefined || r.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r.output).toBe(msg.address);

  const r2 = NextHash(msg.message, r.outOffset);
  if (r2.output === undefined || r2.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(toHexNoPrefix(r2.output)).toBe(msg.hash);
});

test('test next function string', () => {
  const msg = {
    str1: '1234',
    str2: '5678',
    str3: '90ab',
    str4: 'cdef',
    message: '021234FD02005678FE0200000090abFF0200000000000000cdef',
  };

  let r = NextString(msg.message, 0);
  if (r.output === undefined || r.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r.output).toBe(msg.str1);

  r = NextString(msg.message, r.outOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r.output).toBe(msg.str2);

  r = NextString(msg.message, r.outOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r.output).toBe(msg.str3);

  r = NextString(msg.message, r.outOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    assert.fail('output undefined');
  }
  expect(r.output).toBe(msg.str4);
});

test('test wrong message length', () => {
  let message = '0';
  const r = NextBool(message, 0);
  expect(r.output).toBe(undefined);
  expect(r.outOffset).toBe(undefined);

  message = '0';
  let r2 = NextByte(message, 0);
  expect(r2.output).toBe(undefined);
  expect(r2.outOffset).toBe(undefined);

  message = '0';
  r2 = NextUint8(message, 0);
  expect(r2.output).toBe(undefined);
  expect(r2.outOffset).toBe(undefined);

  message = '000';
  r2 = NextUint16(message, 0);
  expect(r2.output).toBe(undefined);
  expect(r2.outOffset).toBe(undefined);

  message = '0000000';
  r2 = NextUint32(message, 0);
  expect(r2.output).toBe(undefined);
  expect(r2.outOffset).toBe(undefined);

  message = '000000000000000';
  const r3 = NextUint64(message, 0);
  expect(r3.output).toBe(undefined);
  expect(r3.outOffset).toBe(undefined);

  message = '000000000000000';
  let r4 = NextUint256(message, 0);
  expect(r4.output).toBe(undefined);
  expect(r4.outOffset).toBe(undefined);

  message = 'eacd8b468cd3d2a81a733a4d7cbd11bb119655b6829dff2a4add1a1c84b8ae4';
  r4 = NextHash(message, 0);
  expect(r4.output).toBe(undefined);
  expect(r4.outOffset).toBe(undefined);

  message = 'Ec1c50a3EF4ED959934Ec482aA70cD7453F96F9';
  const r5 = NextAddress(message, 0);
  expect(r5.output).toBe(undefined);
  expect(r5.outOffset).toBe(undefined);

  message = 'FEFFFFFFFF1c50a3EF4ED959934Ec482aA70cD7453F96F9';
  const r6 = NextBytes(message, 0);
  expect(r6.output).toBe(undefined);
  expect(r6.outOffset).toBe(undefined);

  message = 'feff00';
  const r7 = NextString(message, 0);
  expect(r7.output).toBe(undefined);
  expect(r7.outOffset).toBe(undefined);

  message = '0';
  const r8 = Skip(message, 0, Uint8Size);
  expect(r8).toBe(undefined);

  message = '0';
  const r9 = NextBytes(message, 0);
  expect(r9.output).toBe(undefined);
  expect(r9.outOffset).toBe(undefined);

  message = '0';
  let r10 = deserializeCommitmentRequest(message);
  expect(r10).toBe(undefined);

  message = '0000e8890423c78a0000000000000000000000000000000000000000000000000';
  r10 = deserializeCommitmentRequest(message);
  expect(r10).toBe(undefined);

  message =
    '0000e8890423c78a0000000000000000000000000000000000000000000000000000e8890423c78a0000000000000000000000000000000000000000000000000';
  r10 = deserializeCommitmentRequest(message);
  expect(r10).toBe(undefined);

  message =
    '0000e8890423c78a0000000000000000000000000000000000000000000000000000e8890423c78a0000000000000000000000000000000000000000000000000000e8890423c78a0000000000000000000000000000000000000000000000000';
  r10 = deserializeCommitmentRequest(message);
  expect(r10).toBe(undefined);

  message =
    '0000e8890423c78a0000000000000000000000000000000000000000000000000000e8890423c78a0000000000000000000000000000000000000000000000000000e8890423c78a0000000000000000000000000000000000000000000000000000e8890423c78a0000000000000000000000000000000000000000000000000';
  r10 = deserializeCommitmentRequest(message);
  expect(r10).toBe(undefined);
});
