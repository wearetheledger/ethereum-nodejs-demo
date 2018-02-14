pragma solidity ^0.4.18;
contract SimpleBallot {

    address chairperson;
    mapping(address => Voter) voters;
    Proposal[] proposals;

    struct Proposal {
        uint voteCount;
    }

    struct Voter {
        bool voted;
        uint8 vote;
    }

    modifier onlyChairperson() {
        require(msg.sender == chairperson);
        _;
    }

    event IncorrectProposal(
        address _from,
        uint8 proposal
    );

    event Voted(
        address _from,
        uint8 proposal
    );

    event AlreadyVoted(
        address _from,
        uint8 vote
    );

    /// Create a new ballot with $(_numProposals) different proposals.
    function SimpleBallot(uint8 _numProposals) public {
        chairperson = msg.sender;
        proposals.length = _numProposals;
    }
    
    /// Give a single vote to proposal $(proposal).
    function justVote(uint8 _proposal) public {
        if (_proposal >= proposals.length) {
            IncorrectProposal(msg.sender, _proposal);
            revert();
        }
        proposals[_proposal].voteCount += 1;
        voters[msg.sender].voted = true;
        Voted(msg.sender,_proposal);
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

    /// Give a single vote to proposal $(proposal).
    function vote(uint8 proposal) public {
        Voter storage sender = voters[msg.sender];
        if (sender.voted) {
            AlreadyVoted(msg.sender, sender.vote);
            revert();
        }
        if (proposal >= proposals.length) {
            IncorrectProposal(msg.sender, proposal);
            revert();
        }
        sender.voted = true;
        sender.vote = proposal;
        proposals[proposal].voteCount += 1;
    }


}