# 🌌 Solana/Sui Vanity Address Generator

[![tea.xyz supported](https://img.shields.io/badge/tea.xyz-supported-blue)](https://tea.xyz)
[![npm version](https://img.shields.io/npm/v/solana-sui-address-generator)](https://www.npmjs.com/package/solana-sui-address-generator)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![CI Status](https://github.com/zugzwangbae/solana-sui-address-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/zugzwangbae/solana-sui-address-generator/actions)

Generate custom Solana and Sui addresses that end with your desired patterns (like vanity addresses). Perfect for creating memorable wallet addresses on both chains.

## ✨ Features

- **Dual-chain support** - Generate addresses for both Solana and Sui
- **Pattern matching** - Create addresses ending with specific character sequences
- **Key security** - Returns both public and private keys in standardized formats
- **Lightweight** - Only depends on official chain SDKs
- **CLI support** - Use via command line or as a library

## 🚀 Installation

```bash
# As a dependency
npm install solana-sui-address-generator

# For CLI usage
npm install -g solana-sui-address-generator
```

# 📦 Usage

As a Library

```javascript
import {
  generateSolanaAdrress,
  generateSuiAddress,
} from "solana-sui-address-generator";

// Generate Solana address ending with "moon"
const solanaWallet = generateSolanaAddress("moon");
console.log("Solana Address:", solanaWallet.publicKey);
console.log("Private Key:", solanaWallet.privateKey);

// Generate Sui address ending with "sui"
const suiWallet = generateSuiAddress("sui");
console.log("Sui Address:", suiWallet.publicKey);
```

### Command Line Interface

```bash
# Generate Solana Address
solana-sui-generator --chain solana --pattern moon

# Generate Sui Address
solana-sui-generator -c sui -p 123
```

Exampled output:
🔍 Generating Solana address ending with "moon"...
⏳ This may take a few moments...

✅ Address generated:
Public Key: B2M4wQmoonmoonmoonmoonmoonmoonmoonmoon
Private Key: 5a2b3c... (truncated for security)

# ⚙️ Configuration

For advanced usage:

```javascript
const options = {
  caseSensetive: false, // default: true
  timeout: 30000, // default: no timeout
  progressCallback: (attempts) => {
    console.log("Tried ${attempts} combinations...");
  },
};

const address = generateSolanaAddress("SOL", options);
```

# 🛠️ Development

```bash
# Clone repository
git clone https://github.com/zugzwangbae/solana-sui-address-generator.git
cd solana-sui-address-generator

# Install dependencies
npm install

# Run tests
npm test
```

# 🤝 Contributing

We welcome contibutions! Please see our Contribution Guidelines.

# ⚠️ Security Note

- Always verify generated private keys in a secure environment
- Never share private keys publicly
- Consider using this in offline environments for high-security use cases

# 📜 License

ISC License. See LICENSE for full text.

---

Made with ❤️ by zugzwangbae | Supported by tea.xyz
