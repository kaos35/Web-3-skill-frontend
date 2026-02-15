// examples/components/nft-card.tsx
'use client';

import Image from 'next/image';
import { NFT } from '@/types/nft';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NFTCardProps {
  nft: NFT;
  onClick?: (nft: NFT) => void;
}

export function NFTCard({ nft, onClick }: NFTCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => onClick?.(nft)}
    >
      <div className="aspect-square relative bg-muted">
        <Image
          src={nft.image}
          alt={nft.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold truncate flex-1" title={nft.name}>
            {nft.name}
          </h3>
          {nft.collection && (
            <Badge variant="secondary" className="shrink-0">
              #{nft.tokenId}
            </Badge>
          )}
        </div>
        {nft.collection && (
          <p className="text-sm text-muted-foreground truncate">
            {nft.collection.name}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {nft.attributes && nft.attributes.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {nft.attributes.slice(0, 3).map((attr, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {attr.trait_type}: {attr.value}
              </Badge>
            ))}
            {nft.attributes.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{nft.attributes.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
