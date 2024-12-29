// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VotingSystem {
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }
    
    mapping(address => bool) public voters;
    Candidate[] public candidates;
    uint256 public votingEnd;
    
    event VoteCast(address indexed voter, uint256 indexed candidateId);
    
    constructor(string[] memory _candidateNames, uint256 _durationInMinutes) {
        for(uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                id: i,
                name: _candidateNames[i],
                voteCount: 0
            }));
        }
        votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
    }
    
    function vote(uint256 _candidateId) external {
        require(!voters[msg.sender], "Already voted");
        require(_candidateId < candidates.length, "Invalid candidate");
        require(block.timestamp < votingEnd, "Voting has ended");
        
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        
        emit VoteCast(msg.sender, _candidateId);
    }
    
    function getCandidates() external view returns (Candidate[] memory) {
        return candidates;
    }
    
    function getVotingStatus() external view returns (bool) {
        return block.timestamp < votingEnd;
    }
}