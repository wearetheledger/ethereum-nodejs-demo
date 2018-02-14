pragma solidity ^0.4.18;
contract Ballot {
    
    event AlreadyVoted(
        address indexed _from,
        uint8 vote
    );
    event IncorrectProposal(
        address indexed _from,
        uint8 proposal
    );

    event Voted(
        address indexed _from,
        uint8 proposal
    );

    struct Voter {
        uint weight;
        bool voted;
        uint8 vote;
        address delegate;
    }
    struct Proposal {
        uint voteCount;
    }

    address chairperson;
    mapping(address => Voter) voters;
    Proposal[] proposals;

    /// Create a new ballot with $(_numProposals) different proposals.
    function Ballot(uint8 _numProposals) public {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        proposals.length = _numProposals;
    }

    /// Give $(voter) the right to vote on this ballot.
    /// May only be called by $(chairperson).
    function giveRightToVote(address voter) public {
        if (msg.sender != chairperson || voters[voter].voted) { return;}
        voters[voter].weight = 1;
    }

    /// Delegate your vote to the voter $(to).
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender]; // assigns reference
        if (sender.voted) { return;}
        while (voters[to].delegate != address(0) && voters[to].delegate != msg.sender) {
            to = voters[to].delegate;
            }
        if (to == msg.sender) { return;}
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegateTo = voters[to];
        if (delegateTo.voted)
            proposals[delegateTo.vote].voteCount += sender.weight;
        else
            delegateTo.weight += sender.weight;
    }

    /// Give a single vote to proposal $(proposal).
    function vote(uint8 proposal) public {
        Voter storage sender = voters[msg.sender];
        if (sender.voted) {
            AlreadyVoted(msg.sender, sender.vote);
            return;
        }
        if (proposal >= proposals.length) {
            IncorrectProposal(msg.sender, proposal);
            return;
        }
        sender.voted = true;
        sender.vote = proposal;
        proposals[proposal].voteCount += sender.weight;
    }
    
    /// Give a single vote to proposal $(proposal).
    function justVote(uint8 proposal) public {
        if (proposal >= proposals.length) {
            IncorrectProposal(msg.sender, proposal);
            return;
        }
        proposals[proposal].voteCount += 1;
        Voted(msg.sender,proposal);
    }

    function winningProposal() public constant returns (uint8 _winningProposal) {
        uint256 winningVoteCount = 0;
        for (uint8 proposal = 0; proposal < proposals.length; proposal++) {
            if (proposals[proposal].voteCount > winningVoteCount) {
                winningVoteCount = proposals[proposal].voteCount;
                _winningProposal = proposal;
            }
        }
    }

    function getVoteCount(uint8 proposal) public view returns (uint256 _votecount) {
        return proposals[proposal].voteCount;
    }


}