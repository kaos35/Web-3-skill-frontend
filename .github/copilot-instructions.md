# Web3 DApp Development Instructions

## Project Overview

This is a Web3 decentralized application built with Next.js 14, RainbowKit, wagmi, and viem.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Web3 Library**: wagmi 2.x + viem 2.x
- **Wallet Connection**: RainbowKit 2.x
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 3.4+
- **UI Components**: shadcn/ui (built on Radix UI)
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React

## Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Landing page
│   ├── providers.tsx      # Wagmi + RainbowKit configuration
│   ├── globals.css        # Global styles
│   ├── dashboard/         # Dashboard page
│   ├── nfts/             # NFT gallery page
│   └── swap/             # Token swap page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── connect-button.tsx
│   ├── nft-card.tsx
│   └── nft-grid.tsx
├── hooks/                # Custom React hooks
│   ├── use-contract.ts
│   ├── use-nfts.ts
│   └── use-token-balance.ts
├── lib/                  # Utilities and configurations
│   ├── utils.ts
│   └── contracts.ts
└── types/                # TypeScript type definitions
    ├── nft.ts
    └── token.ts
```

## Critical Guidelines

### 1. Web3 Components Must Be Client Components

All components using wagmi hooks MUST start with the `'use client'` directive:

```tsx
'use client';

import { useAccount } from 'wagmi';

export function WalletInfo() {
  const { address } = useAccount();
  return <div>{address}</div>;
}
```

### 2. Hook Rules

- Call hooks at the **top level** of components
- NEVER call hooks inside callbacks, loops, or conditions
- NEVER call hooks inside useEffect

✅ Correct:
```tsx
function MyComponent() {
  const { address } = useAccount(); // Top level
  
  useEffect(() => {
    // Use address here
  }, [address]);
}
```

❌ Wrong:
```tsx
function MyComponent() {
  const handleClick = () => {
    const { address } = useAccount(); // ERROR: Hook in callback
  };
}
```

### 3. Security Best Practices

- NEVER store private keys in frontend code
- NEVER expose API keys in client-side code
- NEVER store sensitive data in localStorage
- Always validate user inputs before contract interactions
- Use environment variables for sensitive configuration

### 4. Type Safety

- Use TypeScript strict mode
- Define interfaces for all data structures
- Use viem's built-in ABIs when available
- Avoid using `any` type

## Code Patterns

### Provider Configuration

```tsx
// app/providers.tsx
'use client';

import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, polygon, arbitrum, base, bsc, avalanche } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Web3 DApp',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [mainnet, polygon, arbitrum, base, bsc, avalanche],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
```

### Reading Smart Contract Data

```tsx
import { useReadContract } from 'wagmi';
import { erc20Abi } from 'viem';

function TokenBalance({ address }: { address: `0x${string}` }) {
  const { data, isLoading, error } = useReadContract({
    address: '0xA0b86a33E6441E6C7D3D4B4f6c7e8f9a0B1c2D3e',
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>Balance: {data?.toString()}</div>;
}
```

### Writing to Smart Contracts

```tsx
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

function TransferButton({ to }: { to: `0x${string}` }) {
  const { 
    writeContract, 
    data: hash,
    isPending,
    error 
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleTransfer = () => {
    writeContract({
      address: '0x...',
      abi: erc20Abi,
      functionName: 'transfer',
      args: [to, parseEther('1.0')],
    });
  };

  return (
    <div>
      <button 
        onClick={handleTransfer}
        disabled={isPending || isConfirming}
      >
        {isPending ? 'Confirm in wallet...' : 
         isConfirming ? 'Confirming...' : 
         'Transfer'}
      </button>
      {isSuccess && <div>Transaction confirmed!</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}
```

### Wallet Connection

```tsx
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        if (!connected) {
          return <button onClick={openConnectModal}>Connect Wallet</button>;
        }

        if (chain.unsupported) {
          return <button onClick={openChainModal}>Wrong Network</button>;
        }

        return (
          <div>
            <button onClick={openChainModal}>{chain.name}</button>
            <button onClick={openAccountModal}>{account.displayName}</button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
```

## Supported Blockchains

- Ethereum Mainnet (Chain ID: 1)
- Polygon (Chain ID: 137)
- Arbitrum One (Chain ID: 42161)
- Base (Chain ID: 8453)
- BNB Smart Chain (Chain ID: 56)
- Avalanche C-Chain (Chain ID: 43114)

## Dependencies

Core packages:
```json
{
  "wagmi": "^2.x",
  "viem": "^2.x",
  "@rainbow-me/rainbowkit": "^2.x",
  "@tanstack/react-query": "^5.x",
  "lucide-react": "^0.x"
}
```

## Environment Variables

Required:
```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

Get your Project ID from: https://cloud.walletconnect.com

Optional:
```env
NEXT_PUBLIC_ALCHEMY_API_KEY=your_key
NEXT_PUBLIC_INFURA_API_KEY=your_key
```

## UI/Styling Guidelines

- Use Tailwind CSS utility classes
- Base components on shadcn/ui patterns
- Support responsive design (mobile-first)
- Support dark mode with `dark:` prefix
- Use Lucide React for icons

## Error Handling

Always implement:
1. Loading states for async operations
2. Error states with user-friendly messages
3. Try-catch for async contract calls
4. Error boundaries for Web3 components

## Performance

- Use React.memo for expensive components
- Use useMemo for expensive calculations
- Use useCallback for event handlers passed to children
- Implement proper caching with TanStack Query

## Testing Checklist

- [ ] Wallet connects on all supported chains
- [ ] Network switching works correctly
- [ ] NFT metadata loads properly
- [ ] Token balances update after transactions
- [ ] Transaction states display correctly (pending/success/error)
- [ ] Mobile responsive design works
- [ ] Dark/light mode toggle functions
- [ ] Error boundaries catch errors gracefully
