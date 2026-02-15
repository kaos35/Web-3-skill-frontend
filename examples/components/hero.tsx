// examples/components/hero.tsx
'use client';

import { CustomConnectButton } from './connect-button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Web3
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect your wallet and explore the decentralized web. 
              Manage your NFTs, swap tokens, and interact with smart contracts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomConnectButton />
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="gap-2">
                Explore Dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 max-w-3xl w-full">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Secure</h3>
              <p className="text-sm text-muted-foreground text-center">
                Non-custodial wallet connection
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Fast</h3>
              <p className="text-sm text-muted-foreground text-center">
                Multi-chain support with low fees
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Universal</h3>
              <p className="text-sm text-muted-foreground text-center">
                Works with 50+ wallets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
