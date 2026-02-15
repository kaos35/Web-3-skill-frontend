// examples/components/nft-grid.tsx
'use client';

import { NFT } from '@/types/nft';
import { NFTCard } from './nft-card';
import { Loader2 } from 'lucide-react';

interface NFTGridProps {
  nfts: NFT[];
  isLoading?: boolean;
  onNFTClick?: (nft: NFT) => void;
}

export function NFTGrid({ nfts, isLoading, onNFTClick }: NFTGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="aspect-square bg-muted animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (nfts.length === 0) {
    return (
      <div className="text-center py-12 border-2 border-dashed rounded-lg">
        <p className="text-muted-foreground mb-2">No NFTs found</p>
        <p className="text-sm text-muted-foreground">
          Your NFTs will appear here once you connect your wallet
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {nfts.map((nft) => (
        <NFTCard 
          key={`${nft.contractAddress}-${nft.tokenId}`} 
          nft={nft} 
          onClick={onNFTClick}
        />
      ))}
    </div>
  );
}
