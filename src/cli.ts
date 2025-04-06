#!/usr/bin/env node

import { Command } from 'commander';
import { generateSolanaAddress, generateSuiAddress } from './index';

const program = new Command();

program
  .name('solana-sui-generator')
  .description('Generate vanity addresses for Solana and Sui blockchains')
  .version('1.0.0');

program
  .option('-c, --chain <chain>', 'blockchain to generate address for (solana/sui)', 'solana')
  .option('-p, --pattern <pattern>', 'pattern to match at the end of the address', 'test')
  .option('--case-sensitive', 'enable case-sensitive matching', false)
  .option('--timeout <ms>', 'timeout in milliseconds', '30000');

program.parse();

const options = program.opts();

try {
  const generator = options.chain.toLowerCase() === 'sui' ? generateSuiAddress : generateSolanaAddress;

  console.log(`🔍 Generating ${options.chain} address ending with "${options.pattern}"...`);
  console.log('⏳ This may take a few moments...');

  const result = generator(options.pattern, {
    caseSensitive: options.caseSensitive,
    timeout: parseInt(options.timeout),
    progressCallback: (attempts) => {
      if (attempts % 1000 === 0) {
        process.stdout.write(`\rAttempts: ${attempts}`);
      }
    }
  });

  console.log('\n\n✅ Address generated:');
  console.log('Public Key:', result.publicKey);
  console.log('Private Key:', result.privateKey);
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
