import React from 'react';


export class Voting extends React.Component {
    state = {
        response: '',
        transactions: []
      };
    
      callApiVote0 = () => {
        fetch('/api/ballot/vote/0',{method:'POST'})
        .then(res => res.json())
        .then(response =>  this.setState({
          transactions: [
            ...this.state.transactions,
            response
          ]
        }))
        .then(() => {this.props.winningproposal()});
      }; 

      callApiVote1 = () => {

        fetch('/api/ballot/vote/1',{method:'POST'})
        .then(res => res.json())
        .then(response =>  this.setState({
          transactions: [
            ...this.state.transactions,
            response
          ]
        })).then(() => {this.props.winningproposal()});
      };

    render() {
      return (
      <div><h2>Let's start voting</h2>
      <button onClick={this.callApiVote0}>Vote on 0</button>
      <br></br>
            <button onClick={this.callApiVote1}>Vote on 1</button>
      <br></br>
        <div>
        <br></br>

          <h1>New transactions</h1>
          {this.state.transactions.map(trans => <div>{trans}</div>)}
        </div>
      </div>
      );
    }
  }