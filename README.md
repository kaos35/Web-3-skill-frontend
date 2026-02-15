# Web3 DApp Development Skill

A Claude Code skill for building production-ready Web3 decentralized applications.

## Features

- **Multi-Chain Support** - Ethereum, Polygon, Arbitrum, Base, BSC, Avalanche
- **RainbowKit** - Modern wallet connection UI with 50+ wallet support
- **wagmi + viem** - Type-safe Ethereum interactions and React hooks
- **NFT Gallery** - Display and manage NFT collections
- **DeFi Dashboard** - Token balances, swaps, staking, yield farming
- **Smart Contract Integration** - Read/write operations with ABI management
- **Web3 Auth** - Token-gated content and NFT-based membership
- **Next.js 14** - App Router with server components and optimal performance
- **TypeScript** - Full type safety across the entire stack
- **Tailwind CSS** - Modern utility-first styling
- **shadcn/ui** - Beautiful and accessible UI components

## Installation

```bash
npx skills add ./web3-skills
```

## What it does

When you ask Claude Code to create a Web3 DApp, this skill ensures:

1. **Required Pages**: Connect Wallet, Dashboard, NFT Gallery, Swap, Staking
2. **Proper Flow**: Landing → Connect Wallet → Dashboard → Features
3. **Web3 Stack**: RainbowKit + wagmi + viem configuration
4. **Best Practices**: Type-safe ABIs, proper error handling, loading states

## Usage

After installing, simply ask Claude Code:

```
Create a Web3 NFT marketplace
```

Claude will automatically:

- Set up Next.js 14 project with App Router
- Configure RainbowKit and wagmi providers
- Create wallet connection flow
- Build NFT gallery with metadata display
- Add token swap interface
- Implement smart contract interactions
- Configure multi-chain support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Web3**: wagmi 2.x + viem 2.x + RainbowKit 2.x
- **Styling**: Tailwind CSS + shadcn/ui
- **State**: React Context + wagmi hooks
- **Types**: TypeScript (strict)
- **Icons**: Lucide React
- **Charts**: Recharts (for DeFi dashboards)
- **Data**: TanStack Query (React Query)

## Supported Chains

- Ethereum Mainnet
- Polygon (Matic)
- Arbitrum One
- Base
- BNB Smart Chain
- Avalanche C-Chain
- Local/Test networks (Hardhat, Anvil)

## Supported Wallets

Via RainbowKit:
- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow
- Trust Wallet
- Phantom (EVM)
- And 40+ more...

## License

MIT
