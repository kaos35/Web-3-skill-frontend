// examples/app/dashboard/page.tsx
'use client';

import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomConnectButton } from '@/components/connect-button';
import { NFTGrid } from '@/components/nft-grid';
import { useNFTs } from '@/hooks/use-nfts';
import { Wallet, TrendingUp, Image } from 'lucide-react';

export default function DashboardPage() {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: nfts, isLoading } = useNFTs();

  if (!isConnected) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Wallet className="w-16 h-16 text-muted-foreground" />
        <h1 className="text-2xl font-bold">Connect Your Wallet</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Connect your wallet to view your dashboard, NFTs, and token balances
        </p>
        <CustomConnectButton />
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {balance ? parseFloat(formatEther(balance.value)).toFixed(4) : '0'} {balance?.symbol}
            </div>
            <p className="text-xs text-muted-foreground">{chain?.name}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{chain?.name || 'Unknown'}</div>
            <p className="text-xs text-muted-foreground">Chain ID: {chain?.id}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NFTs</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nfts?.length || 0}</div>
            <p className="text-xs text-muted-foreground">Total owned</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Your NFTs</h2>
        <NFTGrid nfts={nfts || []} isLoading={isLoading} />
      </div>
    </div>
  );
}
