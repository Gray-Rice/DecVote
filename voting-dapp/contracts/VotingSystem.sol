// contracts/VotingSystem.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract VotingSystem is Ownable, ReentrancyGuard {
    struct Candidate {
        string name;
        uint256 voteCount;
        bool exists;
    }

    mapping(uint256 => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    uint256 public candidateCount;
    bool public votingOpen;

    event CandidateAdded(uint256 indexed candidateId, string name);
    event Voted(address indexed voter, uint256 indexed candidateId);
    event VotingStatusChanged(bool isOpen);

    constructor() {
        votingOpen = false;
        candidateCount = 0;
    }

    function addCandidate(string memory _name) external onlyOwner {
        require(bytes(_name).length > 0, "Name cannot be empty");
        uint256 candidateId = candidateCount;
        candidates[candidateId] = Candidate(_name, 0, true);
        candidateCount++;
        emit CandidateAdded(candidateId, _name);
    }

    function startVoting() external onlyOwner {
        require(!votingOpen, "Voting is already open");
        require(candidateCount > 1, "Need at least 2 candidates");
        votingOpen = true;
        emit VotingStatusChanged(true);
    }

    function stopVoting() external onlyOwner {
        require(votingOpen, "Voting is already closed");
        votingOpen = false;
        emit VotingStatusChanged(false);
    }

    function vote(uint256 _candidateId) external nonReentrant {
        require(votingOpen, "Voting is not open");
        require(!hasVoted[msg.sender], "Already voted");
        require(candidates[_candidateId].exists, "Candidate does not exist");

        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        emit Voted(msg.sender, _candidateId);
    }

    function getCandidate(uint256 _candidateId) external view returns (string memory name, uint256 voteCount) {
        require(candidates[_candidateId].exists, "Candidate does not exist");
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.name, candidate.voteCount);
    }

    function getCandidateCount() external view returns (uint256) {
        return candidateCount;
    }
}