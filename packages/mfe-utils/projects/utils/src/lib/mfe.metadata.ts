export const MFE_METADATA = ['todo'] as const;

export type MfeName = (typeof MFE_METADATA)[number];
