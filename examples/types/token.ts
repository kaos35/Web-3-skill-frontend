// examples/types/token.ts
export interface Token {
  address: `0x${string}`;
  symbol: string;
  name: string;
  decimals: number;
  logoUrl?: string;
  balance?: string;
  priceUsd?: string;
  valueUsd?: string;
}

export interface TokenPair {
  from: Token;
  to: Token;
  exchangeRate: string;
  slippage: number;
}

export interface SwapQuote {
  fromAmount: string;
  toAmount: string;
  exchangeRate: string;
  priceImpact: string;
  minimumReceived: string;
  fee: string;
  route: Token[];
}
