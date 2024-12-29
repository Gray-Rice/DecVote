'use client';

import { WagmiConfig, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
    getDefaultConfig({
      appName: 'Voting DApp',
      chains: [sepolia],
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    })
  );
  
  export function Providers({ children }: { children: React.ReactNode }) {
    return (
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          {children}
        </ConnectKitProvider>
      </WagmiConfig>
    );
  }