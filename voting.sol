// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }

    struct Voter {
        bool hasVoted;
        uint voteIndex; // Index of the candidate voted for
    }

    address public admin;
    Candidate[] public candidates;
    mapping(address => Voter) public voters;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender; // Set the deployer as the admin
    }

    // Function to add a candidate
    function addCandidate(string memory _name) public onlyAdmin {
        candidates.push(Candidate({
            name: _name,
            voteCount: 0
        }));
    }

    // Function to register a voter
    function registerVoter(address _voter) public onlyAdmin {
        require(!voters[_voter].hasVoted, "Voter already registered or has voted");
        voters[_voter] = Voter({hasVoted: false, voteIndex: 0});
    }

    // Function to vote for a candidate
    function vote(uint _candidateIndex) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.hasVoted, "You have already voted");
        require(_candidateIndex < candidates.length, "Invalid candidate index");

        sender.hasVoted = true;
        sender.voteIndex = _candidateIndex;

        // Increment the candidate's vote count
        candidates[_candidateIndex].voteCount += 1;
    }

    // Function to get the total votes for a candidate
    function getCandidateVotes(uint _candidateIndex) public view returns (uint) {
        require(_candidateIndex < candidates.length, "Invalid candidate index");
        return candidates[_candidateIndex].voteCount;
    }
}
