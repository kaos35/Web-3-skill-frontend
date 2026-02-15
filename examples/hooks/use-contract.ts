// examples/hooks/use-contract.ts
'use client';

import { 
  useReadContract as useWagmiReadContract, 
  useWriteContract as useWagmiWriteContract,
  useWaitForTransactionReceipt 
} from 'wagmi';
import { Abi, Address } from 'viem';

interface UseContractReadProps<TAbi extends Abi> {
  address: Address;
  abi: TAbi;
  functionName: string;
  args?: unknown[];
  enabled?: boolean;
}

export function useContractRead<TAbi extends Abi>({
  address,
  abi,
  functionName,
  args,
  enabled = true,
}: UseContractReadProps<TAbi>) {
  return useWagmiReadContract({
    address,
    abi,
    functionName,
    args,
    query: {
      enabled,
    },
  });
}

interface UseContractWriteProps<TAbi extends Abi> {
  address: Address;
  abi: TAbi;
  functionName: string;
}

export function useContractWrite<TAbi extends Abi>({
  address,
  abi,
  functionName,
}: UseContractWriteProps<TAbi>) {
  const { 
    writeContract, 
    data: hash,
    isPending,
    error,
    reset 
  } = useWagmiWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  return {
    write: (args: unknown[], overrides?: { value?: bigint }) =>
      writeContract({
        address,
        abi,
        functionName,
        args,
        ...overrides,
      }),
    hash,
    isPending,
    isConfirming,
    isSuccess,
    error,
    reset,
  };
}
