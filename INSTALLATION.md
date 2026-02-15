# Installation

## Quick Start

```bash
# Clone or use the skill
npx skills add ./web3-skills

# Then ask Claude Code:
# "Create a Web3 NFT marketplace"
# "Create a DeFi dashboard"
# "Create a Web3 wallet app"
```

## Manual Setup

If you prefer manual setup:

```bash
# 1. Create Next.js project with shadcn/ui
npx shadcn@latest init --yes --template next --base-color zinc

# 2. Install Web3 dependencies
npm install wagmi viem @rainbow-me/rainbowkit @tanstack/react-query

# 3. Add shadcn/ui components
npx shadcn add button card dialog dropdown-menu input select tabs badge

# 4. Copy example files
# - Copy examples/app/providers.tsx to your app/
# - Copy examples/components/ to your components/
# - Copy examples/hooks/ to your hooks/
# - Copy examples/lib/ to your lib/
# - Copy examples/types/ to your types/

# 5. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your WalletConnect Project ID

# 6. Start development
npm run dev
```

## Getting WalletConnect Project ID

1. Go to https://cloud.walletconnect.com
2. Sign up for a free account
3. Create a new project
4. Copy the Project ID
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_id_here
   ```

## Getting Alchemy API Key (Optional but recommended)

1. Go to https://alchemy.com
2. Sign up for a free account
3. Create a new app
4. Copy the API key
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_ALCHEMY_API_KEY=your_key_here
   ```
