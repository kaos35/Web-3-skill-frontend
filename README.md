# Web3 DApp Development Skill

> 🚀 Production-ready Web3 development skill for AI coding assistants

A comprehensive skill for building modern, type-safe Web3 decentralized applications with Next.js 14, RainbowKit, wagmi, and viem.

[![GitHub](https://img.shields.io/badge/GitHub-kaos35%2FWeb--3--skill--frontend-blue)](https://github.com/kaos35/Web-3-skill-frontend)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [IDE Integrations](#ide-integrations)
  - [Claude Code (Recommended)](#claude-code-recommended)
  - [GitHub Copilot](#github-copilot)
  - [Cursor IDE](#cursor-ide)
  - [Windsurf](#windsurf)
  - [Other IDEs](#other-ides)
- [Configuration Files](#configuration-files)
  - [package.json](#packagejson)
  - [SKILL.md](#skillmd)
  - [.cursorrules](#cursorrules)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Multi-Chain** | Ethereum, Polygon, Arbitrum, Base, BSC, Avalanche |
| **Wallet Connection** | RainbowKit with 50+ wallet support |
| **Type Safety** | wagmi + viem + TypeScript |
| **NFT Gallery** | Display and manage NFT collections |
| **DeFi Dashboard** | Token balances, swaps, staking |
| **Smart Contracts** | Read/write with ABI management |
| **Web3 Auth** | Token-gated content, NFT membership |
| **UI Components** | shadcn/ui + Tailwind CSS |

---

## 🚀 Quick Start

### Option 1: Claude Code (Recommended)

```bash
# Install the skill locally
git clone https://github.com/kaos35/Web-3-skill-frontend.git
cd Web-3-skill-frontend

# Add to Claude Code
npx skills add ./Web-3-skill-frontend

# Start using
# Just ask: "Create a Web3 NFT marketplace"
```

### Option 2: Direct GitHub Install

```bash
# Claude Code can directly use GitHub repos
npx skills add https://github.com/kaos35/Web-3-skill-frontend
```

---

## 🛠️ IDE Integrations

### Claude Code (Recommended)

**Claude Code** is the most powerful way to use this skill.

#### Installation

```bash
# Method 1: Local install
git clone https://github.com/kaos35/Web-3-skill-frontend.git
npx skills add ./Web-3-skill-frontend

# Method 2: Direct from GitHub
npx skills add https://github.com/kaos35/Web-3-skill-frontend
```

#### Usage

Once installed, simply ask Claude:

```
"Create a Web3 NFT marketplace with collection browser"
"Build a DeFi dashboard with token swapping"
"Create a multi-chain wallet interface"
```

Claude will automatically:
- Set up Next.js 14 with App Router
- Configure RainbowKit and wagmi
- Create all required components
- Set up multi-chain support
- Add NFT/DeFi features

#### Configuration

Create a `claude.json` in your project root:

```json
{
  "skills": [
    {
      "name": "web3-dapp",
      "source": "https://github.com/kaos35/Web-3-skill-frontend"
    }
  ]
}
```

---

### GitHub Copilot

For **VS Code** and **JetBrains** IDEs.

#### Setup

1. Copy the `SKILL.md` content to your project as `.github/copilot-instructions.md`

```bash
# Create directory
mkdir -p .github

# Copy skill content
cp SKILL.md .github/copilot-instructions.md
```

2. Or use `.copilotignore` to exclude certain patterns:

```bash
# .copilotignore
.env.local
node_modules/
.next/
```

3. Restart your IDE

#### Custom Instructions File

Create `.github/copilot-instructions.md`:

```markdown
# Web3 DApp Development Guidelines

## Stack
- Next.js 14 App Router
- RainbowKit + wagmi + viem
- TypeScript strict mode
- shadcn/ui components

## Rules
1. Always use 'use client' for Web3 components
2. Never expose private keys in frontend
3. Use viem for all blockchain interactions
4. Implement proper error boundaries
5. Add loading states for all async operations

## Project Structure
src/
  app/           # Next.js routes
  components/    # React components
  hooks/         # Custom hooks
  lib/           # Utilities
  types/         # TypeScript types
```

---

### Cursor IDE

Cursor uses `.cursorrules` files for custom instructions.

#### Setup

1. Copy the `SKILL.md` content to `.cursorrules`:

```bash
cp SKILL.md .cursorrules
```

2. Or create a minimal `.cursorrules`:

```markdown
# Web3 DApp Rules

## Tech Stack
Framework: Next.js 14 (App Router)
Web3: wagmi 2.x + viem 2.x + RainbowKit 2.x
Styling: Tailwind CSS + shadcn/ui

## Critical Rules
- Web3 components MUST have 'use client' directive
- Use useAccount, useBalance hooks at component top level only
- Never call wagmi hooks inside callbacks or conditionally
- Always validate user inputs before contract interactions
- Implement proper error handling with try-catch

## File Structure
- app/page.tsx - Landing page
- app/dashboard/page.tsx - Dashboard
- components/connect-button.tsx - Wallet connect
- hooks/use-contract.ts - Contract interactions
- lib/contracts.ts - Contract ABIs
```

3. Restart Cursor

---

### Windsurf

Windsurf uses `.windsurfrules` for custom prompts.

#### Setup

1. Create `.windsurfrules`:

```markdown
# Web3 DApp Skill

You are an expert Web3 developer specializing in:
- Next.js 14 with App Router
- RainbowKit for wallet connections
- wagmi and viem for blockchain interactions
- TypeScript with strict typing
- shadcn/ui for components

## Before Writing Code
1. Check if Web3 libraries are installed
2. Verify providers.tsx exists with wagmi config
3. Ensure .env.local has WalletConnect Project ID

## Code Standards
- All Web3 components must be client components
- Use proper TypeScript types for all ABIs
- Implement loading and error states
- Never expose sensitive data
```

2. Add to `settings.json`:

```json
{
  "windsurf.customInstructions": "./.windsurfrules"
}
```

---

### Other IDEs

#### General Instructions File

Most AI coding assistants support custom instruction files:

| IDE/Tool | Configuration File |
|----------|-------------------|
| Continue.dev | `.continue/config.json` |
| Cody (Sourcegraph) | `.cody/context.md` |
| Codeium | `.codeium/settings.json` |
| Tabnine | `.tabnine/instructions.md` |
| Aider | `.aider.conf.yml` |

#### Universal Setup

Create a `AI_INSTRUCTIONS.md` in your project:

```markdown
# AI Assistant Instructions

## Project Context
This is a Web3 DApp built with:
- Next.js 14 App Router
- RainbowKit + wagmi + viem
- TypeScript + Tailwind CSS + shadcn/ui

## When Generating Code
1. Check existing file structure first
2. Follow existing code patterns
3. Use TypeScript strict types
4. Add proper error handling
5. Include loading states

## Web3 Specific Rules
- Use 'use client' for components with wagmi hooks
- Import providers from app/providers.tsx
- Use @/ aliases for imports
- Follow the examples/ directory patterns
```

---

## ⚙️ Configuration Files

### package.json

Example dependencies for your Web3 project:

```json
{
  "name": "my-web3-dapp",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "next": "14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "wagmi": "^2.x",
    "viem": "^2.x",
    "@rainbow-me/rainbowkit": "^2.x",
    "@tanstack/react-query": "^5.x",
    "lucide-react": "^0.x",
    "class-variance-authority": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "tailwindcss": "^3.x",
    "typescript": "^5.x"
  }
}
```

### SKILL.md

This is the main skill file used by Claude Code. Key sections:

- **Mandatory Requirements** - Must-follow rules
- **Project Creation** - Step-by-step setup
- **Technology Stack** - Dependencies and versions
- **Project Structure** - File organization
- **Examples** - Code patterns

See full content in [SKILL.md](SKILL.md)

### .cursorrules

For Cursor IDE users, create this file with:

```markdown
# Web3 DApp Development Rules

## Technology Stack
- Next.js 14+ App Router
- RainbowKit 2.x + wagmi 2.x + viem 2.x
- TypeScript 5.x (strict mode)
- Tailwind CSS 3.4+
- shadcn/ui components
- TanStack Query (React Query)

## Code Style
- Use functional components only
- Always add 'use client' for Web3 components
- Use proper TypeScript types
- Follow existing patterns in examples/

## Web3 Rules
- Never expose private keys in frontend
- Validate all user inputs
- Use formatEther/parseEther for ETH amounts
- Implement error boundaries
- Add loading states
```

---

## 📁 Project Structure

```
my-web3-dapp/
├── .github/
│   └── copilot-instructions.md    # GitHub Copilot config
├── .cursorrules                    # Cursor IDE config
├── .windsurfrules                  # Windsurf config
├── .env.local                      # Environment variables
├── .env.example                    # Env template
├── next.config.js                  # Next.js config
├── tailwind.config.ts              # Tailwind config
├── tsconfig.json                   # TypeScript config
├── package.json                    # Dependencies
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Landing page
│   │   ├── providers.tsx           # Wagmi + RainbowKit
│   │   ├── globals.css             # Global styles
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Dashboard
│   │   ├── nfts/
│   │   │   └── page.tsx            # NFT gallery
│   │   └── swap/
│   │       └── page.tsx            # Token swap
│   ├── components/
│   │   ├── ui/                     # shadcn/ui
│   │   ├── connect-button.tsx      # Wallet connect
│   │   ├── nft-card.tsx            # NFT display
│   │   └── nft-grid.tsx            # NFT grid
│   ├── hooks/
│   │   ├── use-contract.ts         # Contract hook
│   │   ├── use-nfts.ts             # NFT fetching
│   │   └── use-token-balance.ts    # Token balance
│   ├── lib/
│   │   ├── utils.ts                # Utilities
│   │   └── contracts.ts            # ABIs
│   └── types/
│       ├── nft.ts                  # NFT types
│       └── token.ts                # Token types
└── public/
    └── images/
```

---

## 📚 Examples

### Creating a New Project

**With Claude Code:**

```bash
# Start Claude Code in your projects directory
claude

# Then ask:
"Create a Web3 NFT marketplace called nft-marketplace with collection browser, minting functionality, and wallet integration"
```

**Manual Setup:**

```bash
# 1. Create Next.js project with shadcn
npx shadcn@latest init --yes --template next --base-color zinc

# 2. Install Web3 dependencies
npm install wagmi viem @rainbow-me/rainbowkit @tanstack/react-query

# 3. Add components
npx shadcn add button card dialog input tabs badge

# 4. Copy example files from this skill
# See examples/ directory

# 5. Set environment variables
cp .env.example .env.local
# Edit .env.local

# 6. Start developing
npm run dev
```

### Available Examples

Check the `examples/` directory for:

- **app/** - Next.js app router setup
  - `providers.tsx` - Wagmi + RainbowKit configuration
  - `dashboard/page.tsx` - Dashboard implementation
  - `layout.tsx` - Root layout with providers

- **components/** - Reusable Web3 components
  - `connect-button.tsx` - Custom wallet connect button
  - `nft-card.tsx` - NFT display card
  - `nft-grid.tsx` - NFT grid layout
  - `hero.tsx` - Landing page hero section

- **hooks/** - Custom React hooks
  - `use-contract.ts` - Smart contract interactions
  - `use-nfts.ts` - NFT fetching with caching
  - `use-token-balance.ts` - Token balance tracking

- **lib/** - Utilities
  - `contracts.ts` - Contract ABIs and addresses

- **types/** - TypeScript definitions
  - `nft.ts` - NFT interface
  - `token.ts` - Token interfaces

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Web3 | wagmi 2.x + viem 2.x |
| Wallet | RainbowKit 2.x |
| Language | TypeScript 5.x |
| Styling | Tailwind CSS 3.4+ |
| UI | shadcn/ui |
| State | TanStack Query |
| Icons | Lucide React |

---

## 🔧 Environment Setup

Create `.env.local`:

```env
# REQUIRED
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# OPTIONAL (but recommended)
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_key
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key
```

Get your keys:
- **WalletConnect**: https://cloud.walletconnect.com (FREE)
- **Alchemy**: https://alchemy.com (FREE tier)
- **Infura**: https://infura.io (FREE tier)

---

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this skill for personal and commercial projects!

---

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/kaos35/Web-3-skill-frontend/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kaos35/Web-3-skill-frontend/discussions)

---

## 🙏 Credits

Created for the Web3 development community. Based on best practices from:
- [wagmi](https://wagmi.sh)
- [RainbowKit](https://rainbowkit.com)
- [viem](https://viem.sh)
- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)

---

Made with ❤️ for the decentralized web
