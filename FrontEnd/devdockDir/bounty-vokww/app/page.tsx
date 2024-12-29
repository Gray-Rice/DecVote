"use client";
import { useState, useEffect } from 'react';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import { ethers } from 'ethers';
import VotingSystem from '../contracts/VotingSystem.json';

export default function Home() {
  const [candidates, setCandidates] = useState([]);
  const { address } = useAccount();
  
  const } = useContractRead({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: VotingSystem.abi,
    functionName: 'getCandidates',
  });

  const { write: castVote } = useContractWrite({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: VotingSystem.abi,
    functionName: 'vote',
  });

  useEffect(() => {
    if (candidatesList) {
      setCandidates(candidatesList);
    }
  }, [candidatesList]);

  const handleVote = async (candidateId) => {
    try {
      await castVote({ args: [candidateId] });
    } catch (error) {
      console.error('Error casting vote:', error);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Decentralized Voting System</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map((candidate, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{candidate.name}</h2>
            <p>Votes: {candidate.voteCount.toString()}</p>
            <button
              onClick={() => handleVote(candidate.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              disabled={!address}
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}