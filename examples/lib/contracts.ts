// examples/lib/contracts.ts
import { erc20Abi, erc721Abi } from 'viem';

// Common contract ABIs from viem
export { erc20Abi, erc721Abi };

// Example custom contract configurations
export const CONTRACTS = {
  // Example staking contract
  staking: {
    address: '0x0000000000000000000000000000000000000000' as `0x${string}`,
    abi: [
      {
        inputs: [{ name: 'amount', type: 'uint256' }],
        name: 'stake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'unstake',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [{ name: 'account', type: 'address' }],
        name: 'earned',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
    ] as const,
  },
} as const;

// Token addresses by chain
export const TOKENS: Record<number, Array<{
  address: `0x${string}`;
  symbol: string;
  name: string;
  decimals: number;
  logoUrl?: string;
}>> = {
  // Ethereum Mainnet
  1: [
    {
      address: '0xA0b86a33E6441E6C7D3D4B4f6c7e8f9a0B1c2D3e',
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 6,
    },
    {
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      symbol: 'USDT',
      name: 'Tether USD',
      decimals: 6,
    },
  ],
  // Polygon
  137: [
    {
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      symbol: 'USDC',
      name: 'USD Coin (PoS)',
      decimals: 6,
    },
  ],
  // BSC
  56: [
    {
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      symbol: 'USDC',
      name: 'USD Coin',
      decimals: 18,
    },
  ],
};
