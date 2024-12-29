'use client';

import { useAccount } from 'wagmi';
import ConnectButton from '../components/ConnectButton';
import VotingForm from '../components/VotingForm';
import VotingResults from '../components/VotingResults';

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Decentralized Voting System</h1>
          <ConnectButton />
        </div>
        
        {isConnected ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VotingForm />
            <VotingResults />
          </div>
        ) : (
          <div className="text-center mt-20">
            <p className="text-xl">Please connect your wallet to vote</p>
          </div>
        )}
      </div>
    </main>
  );
}