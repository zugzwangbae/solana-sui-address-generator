import { Keypair } from '@solana/web3.js';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
import { fromB64 } from '@mysten/sui.js/utils';

export interface WalletResult {
  publicKey: string;
  privateKey: string;
}

export interface GeneratorOptions {
  caseSensitive?: boolean;
  timeout?: number;
  progressCallback?: (attempts: number) => void;
}

export function generateSolanaAddress(pattern: string, options: GeneratorOptions = {}): WalletResult {
  const {
    caseSensitive = true,
    timeout,
    progressCallback
  } = options;

  const startTime = Date.now();
  let attempts = 0;

  while (true) {
    if (timeout && Date.now() - startTime > timeout) {
      throw new Error('Timeout reached while generating address');
    }

    const keypair = Keypair.generate();
    const address = keypair.publicKey.toString();

    const matchPattern = caseSensitive ? pattern : pattern.toLowerCase();
    const matchAddress = caseSensitive ? address : address.toLowerCase();

    attempts++;
    if (progressCallback) {
      progressCallback(attempts);
    }

    if (matchAddress.endsWith(matchPattern)) {
      return {
        publicKey: address,
        privateKey: Buffer.from(keypair.secretKey).toString('hex')
      };
    }
  }
}

export function generateSuiAddress(pattern: string, options: GeneratorOptions = {}): WalletResult {
  const {
    caseSensitive = true,
    timeout,
    progressCallback
  } = options;

  const startTime = Date.now();
  let attempts = 0;

  while (true) {
    if (timeout && Date.now() - startTime > timeout) {
      throw new Error('Timeout reached while generating address');
    }

    const keypair = Ed25519Keypair.generate();
    const address = keypair.getPublicKey().toSuiAddress();

    const matchPattern = caseSensitive ? pattern : pattern.toLowerCase();
    const matchAddress = caseSensitive ? address : address.toLowerCase();

    attempts++;
    if (progressCallback) {
      progressCallback(attempts);
    }

    if (matchAddress.endsWith(matchPattern)) {
      return {
        publicKey: address,
        privateKey: fromB64(keypair.export().privateKey).toString('hex')
      };
    }
  }
}
