import BN from 'bn.js';
import { toBN } from '@mystikonetwork/utils';

export const Uint8Size = 1 * 2;
export const Uint16Size = 2 * 2;
export const Uint32Size = 4 * 2;
export const Uint64Size = 8 * 2;
export const Uint256Size = 32 * 2;
export const AddressSize = 20 * 2;
export const HashSize = 32 * 2;

function nextBytes(
  input: string,
  inOffset: number,
  len: number,
): { output: string | undefined; outOffset: number | undefined } {
  const outOffset = inOffset + len;
  if (outOffset > input.length || outOffset < inOffset) {
    return { output: undefined, outOffset: undefined };
  }

  const output = input.substring(inOffset, outOffset);
  return { output, outOffset };
}

export function Skip(input: string, inOffset: number, len: number): number | undefined {
  const r = nextBytes(input, inOffset, len);
  if (r.output === undefined || r.outOffset === undefined) {
    return undefined;
  }
  return r.outOffset;
}

export function NextByte(
  input: string,
  inOffset: number,
): { output: number | undefined; outOffset: number | undefined } {
  const r = nextBytes(input, inOffset, Uint8Size);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  return { output: parseInt(r.output, 16), outOffset: r.outOffset };
}

export function NextUint8(
  input: string,
  inOffset: number,
): { output: number | undefined; outOffset: number | undefined } {
  return NextByte(input, inOffset);
}

export function NextBool(
  input: string,
  inOffset: number,
): { output: boolean | undefined; outOffset: number | undefined } {
  const r = NextByte(input, inOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }

  if (Number(r.output) === 0) {
    return { output: false, outOffset: r.outOffset };
  }

  return { output: true, outOffset: r.outOffset };
}

export function NextUint16(
  input: string,
  inOffset: number,
): { output: number | undefined; outOffset: number | undefined } {
  const r = nextBytes(input, inOffset, Uint16Size);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  return { output: toBN(r.output, 16, 'le').toNumber(), outOffset: r.outOffset };
}

export function NextUint32(
  input: string,
  inOffset: number,
): { output: number | undefined; outOffset: number | undefined } {
  const r = nextBytes(input, inOffset, Uint32Size);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  return { output: toBN(r.output, 16, 'le').toNumber(), outOffset: r.outOffset };
}

export function NextUint64(
  input: string,
  inOffset: number,
): { output: BN | undefined; outOffset: number | undefined } {
  const r = nextBytes(input, inOffset, Uint64Size);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  return { output: toBN(r.output, 16, 'le'), outOffset: r.outOffset };
}

function nextLen(
  input: string,
  inOffset: number,
): { output: number | BN | undefined; outOffset: number | undefined } {
  const r = NextByte(input, inOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }

  switch (r.output) {
    case 253: // 0xFD
      return NextUint16(input, r.outOffset);
    case 254: // 0xFE
      return NextUint32(input, r.outOffset);
    case 255: // 0xFF
      return NextUint64(input, r.outOffset);
    default:
      return { output: r.output, outOffset: r.outOffset };
  }
}

export function NextBytes(
  input: string,
  inOffset: number,
): { output: string | undefined; outOffset: number | undefined } {
  const r = nextLen(input, inOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  const len = Number(r.output) * 2;
  return nextBytes(input, r.outOffset, len);
}

export function NextUint256(
  input: string,
  inOffset: number,
): { output: BN | undefined; outOffset: number | undefined } {
  const r = nextBytes(input, inOffset, Uint256Size);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  return { output: toBN(r.output, 16, 'le'), outOffset: r.outOffset };
}

export function NextAddress(
  input: string,
  inOffset: number,
): { output: string | undefined; outOffset: number | undefined } {
  const r = nextBytes(input, inOffset, AddressSize);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  return { output: r.output, outOffset: r.outOffset };
}

export function NextHash(
  input: string,
  inOffset: number,
): { output: BN | undefined; outOffset: number | undefined } {
  const r = nextBytes(input, inOffset, HashSize);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }
  return { output: toBN(r.output, 16), outOffset: r.outOffset };
}

export function NextString(
  input: string,
  inOffset: number,
): { output: string | undefined; outOffset: number | undefined } {
  const r = NextBytes(input, inOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    return { output: undefined, outOffset: undefined };
  }

  return { output: r.output, outOffset: r.outOffset };
}

export interface CommitmentRequest {
  amount: BN;
  commitment: BN;
  executorFee: BN;
  rollupFee: BN;
  encryptedNote: Buffer;
}

export function deserializeCommitmentRequest(message: string): CommitmentRequest | undefined {
  let r = NextUint256(message, 0);
  if (r.output === undefined || r.outOffset === undefined) {
    return undefined;
  }
  const amount = r.output;

  r = NextUint256(message, r.outOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    return undefined;
  }
  const commitment = r.output;

  r = NextUint256(message, r.outOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    return undefined;
  }
  const executorFee = r.output;

  r = NextUint256(message, r.outOffset);
  if (r.output === undefined || r.outOffset === undefined) {
    return undefined;
  }
  const rollupFee = r.output;

  const r2 = NextBytes(message, r.outOffset);
  if (r2.output === undefined || r2.outOffset === undefined) {
    return undefined;
  }
  const encryptedNote = Buffer.from(r2.output);

  return { amount, commitment, executorFee, rollupFee, encryptedNote };
}
