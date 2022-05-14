import { CommitmentInput, MystikoProtocol } from '@mystikonetwork/protocol';
import { toBN } from '@mystikonetwork/utils';

export interface CommitmentInfo<C> {
  mystikoAddress: string;
  rawSkVerify: Buffer;
  rawSkEnc: Buffer;
  pkVerify: Buffer;
  pkEnc: Buffer;
  commitments: C[];
}

export async function constructCommitment<C>(
  protocol: MystikoProtocol<any, any, CommitmentInput, C>,
  size: number,
  depositAmount: string,
): Promise<CommitmentInfo<C>> {
  const rawSkVerify = protocol.randomBytes(protocol.verifySkSize);
  const rawSkEnc = protocol.randomBytes(protocol.encSkSize);
  const pkVerify = protocol.publicKeyForVerification(rawSkVerify);
  const pkEnc = protocol.publicKeyForEncryption(rawSkEnc);
  const mystikoAddress = protocol.shieldedAddress(pkVerify, pkEnc);
  const commitments: any[] = [];
  for (let i = 0; i < size; i += 1) {
    const commitment = await protocol.commitment({
      publicKeys: mystikoAddress,
      amount: toBN(depositAmount),
    });
    commitments.push(commitment);
  }

  return { mystikoAddress, rawSkVerify, rawSkEnc, pkVerify, pkEnc, commitments };
}
