'use client';

import { useState } from 'react';
import { useContractWrite, usePrepareContractWrite, useContractRead } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants';

export default function VotingForm() {
  const [selectedCandidate, setSelectedCandidate] = useState<string>('');dateCount } = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getCandidateCount',
  });

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'vote',
    args: [selectedCandidate],
  });

  const { write: vote, isLoading, isSuccess } = useContractWrite(config);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vote) {
      vote();
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Cast Your Vote</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Candidate</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedCandidate}
            onChange={(e) => setSelectedCandidate(e.target.value)}
          >
            <option value="">Select a candidate</option>
            {Array.from({ length: Number(candidateCount || 0) }, (_, i) => (
              <option key={i} value={i}>
                Candidate {i + 1}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={!vote || isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? 'Voting...' : 'Vote'}
        </button>
        {isSuccess && (
          <div className="mt-4 text-green-600">Vote cast successfully!</div>
        )}
      </form>
    </div>
  );
}
