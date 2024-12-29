'use client';

import { useContractRead } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants';

export default function VotingResults() {dateCount } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getCandidateCount',
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Voting Results</h2>
      <div className="space-y-4">
        {Array.from({ length: Number(candidateCount || 0) }, (_, i) => (
          <CandidateResult key={i} candidateId={i} />
        ))}
      </div>
    </div>
  );
}

function CandidateResult({ candidateId }: { candidateId: number }) {
  const {
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getCandidate',
    args: [candidateId],
  });

  if (!candidate) return null;

  const [name, votes] = candidate;

  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
      <span className="font-medium">{name}</span>
      <span className="bg-blue-100 px-3 py-1 rounded">
        {votes.toString()} votes
      </span>
    </div>
  );
}
