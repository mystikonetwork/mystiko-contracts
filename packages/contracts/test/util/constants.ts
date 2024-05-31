import { toDecimals } from '@mystikonetwork/utils';

export const CircuitsPath = 'circuits/dist/zokrates/dev/';

export const MerkleTreeHeight = 20;
export const MinAmount = toDecimals(0.1).toString();
export const MaxAmount = toDecimals(100).toString();
export const MinRollupFee = toDecimals(0.01).toString();
export const MinBridgeFee = toDecimals(1000, 0).toString();
export const PeerMinExecutorFee = toDecimals(0.01).toString();
export const PeerMinRollupFee = toDecimals(0.01).toString();

export const BridgeAccountIndex = 5;
export const BridgeExecutorIndex = 6;
export const RollupAccountIndex1 = 7;
export const RollupAccountIndex2 = 8;
export const SactionAccountIndex = 9;

export const LzChainID = 2001;
export const SourceChainID = 1001;
export const DestinationChainID = 1002;

export const DefaultTokenAmount = toDecimals(100000).toString();
export const DefaultPoolAmount = toDecimals(100).toString();

export const UserPrivateKeys = [
  '0x41b465ba584342fb56d216e21ed8df756e50b277056eb30001984c68aac1be38',
  '0xe97e169ed64e902991b0699fb124bd42d2392065eb5a3640f878c5c9aeda1d6f',
  '0x6db9f1f24f40faf2420bbdce64660050809e519496ca3a584783423bfa6e7073',
];

export const IssuerAddress = '0xC3BCDB9189f2822e663405feA0312BAf8d5CB3A5';
export const IssuerPrivateKey = '0x12d7de8621a77640c9241b2595ba78ce443d05e94090365ab3bb5e19df82c625';

export const ZeroAddress = '0x0000000000000000000000000000000000000000';
export const MockSignature = new Uint8Array(65).fill(0);
