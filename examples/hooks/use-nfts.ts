// examples/hooks/use-nfts.ts
'use client';

import { useAccount } from 'wagmi';
import { useQuery } from '@tanstack/react-query';
import { NFT } from '@/types/nft';

interface AlchemyNFTResponse {
  ownedNfts: Array<{
    contract: {
      address: string;
      name?: string;
    };
    tokenId: string;
    title: string;
    description?: string;
    media: Array<{ gateway: string }>;
    metadata?: {
      image?: string;
      attributes?: Array<{
        trait_type: string;
        value: string | number;
      }>;
    };
  }>;
}

async function fetchNFTs(address: `0x${string}`, chainId: number): Promise<NFT[]> {
  const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  
  if (!apiKey) {
    console.warn('Alchemy API key not configured');
    return [];
  }

  // Map chainId to Alchemy network
  const networkMap: Record<number, string> = {
    1: 'eth-mainnet',
    137: 'polygon-mainnet',
    42161: 'arb-mainnet',
    43114: 'avax-mainnet',
  };

  const network = networkMap[chainId] || 'eth-mainnet';
  const baseUrl = `https://${network}.g.alchemy.com/v2/${apiKey}`;
  
  const response = await fetch(
    `${baseUrl}/getNFTs?owner=${address}&withMetadata=true`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch NFTs');
  }
  
  const data: AlchemyNFTResponse = await response.json();
  
  return data.ownedNfts.map((nft) => ({
    id: `${nft.contract.address}-${nft.tokenId}`,
    tokenId: nft.tokenId,
    contractAddress: nft.contract.address as `0x${string}`,
    name: nft.title || `NFT #${nft.tokenId}`,
    description: nft.description,
    image: nft.metadata?.image || nft.media[0]?.gateway || '/placeholder-nft.png',
    collection: {
      name: nft.contract.name || 'Unknown Collection',
      address: nft.contract.address as `0x${string}`,
    },
    attributes: nft.metadata?.attributes,
  }));
}

export function useNFTs() {
  const { address, chainId } = useAccount();

  return useQuery({
    queryKey: ['nfts', address, chainId],
    queryFn: () => {
      if (!address || !chainId) throw new Error('Wallet not connected');
      return fetchNFTs(address, chainId);
    },
    enabled: !!address && !!chainId,
    staleTime: 60000,
  });
}
