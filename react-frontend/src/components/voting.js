import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import { Transactions } from './transactions';

export class Voting extends React.Component {

  state = {
    transactions: [],
    votecount0: '0',
    votecount1: '0'
  };

  componentDidMount() {
    this.getVoteCounts0();
    this.getVoteCounts1();
  }

  callApiVote0 = () => {
    fetch('/api/ballot/vote/0', { method: 'POST' })
      .then(res => res.json())
      .then(response => this.setState({
        transactions: [
          ...this.state.transactions,
          response
        ]
      })).catch(err => {
        console.log("API not available");
      })
  };

  callApiVote1 = () => {
    fetch('/api/ballot/vote/1', { method: 'POST' })
      .then(res => res.json())
      .then(response => this.setState({
        transactions: [
          ...this.state.transactions,
          response
        ]
      })).catch(err => {
        console.log("API not available");
      })
      ;
  };

  updatevotecounts = () => {
    this.getVoteCounts0();
    this.getVoteCounts1();
  }

  getVoteCounts0 = () => {
    fetch('/api/ballot/count/0')
      .then(res => res.json())
      .then(response => this.setState({
        votecount0: response
      })).catch(err => {
        console.log("API not available");
      });
  };

  getVoteCounts1 = () => {
    fetch('/api/ballot/count/1')
      .then(res => res.json())
      .then(response => this.setState({
        votecount1: response
      })).catch(err => {
        console.log("API not available");
      });
  };

  render() {
    return (
      <div><h1>Let's start voting</h1>
        <p> The values will be updated when the transaction is confirmed.
       <br />It can take a while untill a submitted transaction is pending and then confirmed.
      </p>

        <div>
          <Button as='div' labelPosition='right'>
            <Button className='ledgerGreen' onClick={this.callApiVote0}>
              Ethereum
      </Button>
            <Label as='a' basic pointing='left'>{this.state.votecount0}</Label>
          </Button>
          <Button as='div' labelPosition='left' onClick={this.callApiVote1} >
            <Label as='a' basic pointing='right'>{this.state.votecount1}</Label>
            <Button className='ledgerGreen'>
              Hyperledger Fabric
      </Button>
          </Button>
        </div>
        <div>
          <br></br>
          <h1>Submitted transactions</h1>
          {this.state.transactions.map((trans, i) => <div key={i}>{trans}</div>)}
        </div>
        <Transactions updateWinningProposal={this.props.winningproposal} updatecounts={this.updatevotecounts} />
      </div>
    );
  }
}