// examples/hooks/use-token-balance.ts
'use client';

import { useAccount, useBalance, useReadContract } from 'wagmi';
import { erc20Abi, formatUnits } from 'viem';

interface TokenInfo {
  address: `0x${string}`;
  symbol: string;
  decimals: number;
  name: string;
}

export function useTokenBalance(token?: TokenInfo) {
  const { address } = useAccount();

  // Native token (ETH, MATIC, etc.)
  const nativeBalance = useBalance({ 
    address,
    query: {
      enabled: !token && !!address,
    },
  });

  // ERC20 token
  const tokenBalance = useReadContract({
    address: token?.address,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!token && !!address,
    },
  });

  const formattedBalance = token
    ? tokenBalance.data 
      ? formatUnits(tokenBalance.data, token.decimals)
      : '0'
    : nativeBalance.data
      ? formatUnits(nativeBalance.data.value, nativeBalance.data.decimals)
      : '0';

  return {
    balance: token ? tokenBalance.data : nativeBalance.data?.value,
    formattedBalance,
    symbol: token?.symbol || nativeBalance.data?.symbol,
    isLoading: token ? tokenBalance.isLoading : nativeBalance.isLoading,
    error: token ? tokenBalance.error : nativeBalance.error,
    refetch: token ? tokenBalance.refetch : nativeBalance.refetch,
  };
}
