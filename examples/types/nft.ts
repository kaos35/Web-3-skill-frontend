// examples/types/nft.ts
export interface NFT {
  id: string;
  tokenId: string;
  contractAddress: `0x${string}`;
  name: string;
  description?: string;
  image: string;
  collection?: {
    name: string;
    address: `0x${string}`;
  };
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
  // Optional fields for marketplace data
  floorPrice?: string;
  lastSale?: string;
  listed?: boolean;
  price?: string;
}

export interface NFTCollection {
  address: `0x${string}`;
  name: string;
  symbol: string;
  totalSupply: bigint;
  floorPrice?: string;
  volumeTraded?: string;
  image?: string;
  description?: string;
}
