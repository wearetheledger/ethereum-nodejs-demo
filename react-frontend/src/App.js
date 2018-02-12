import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Accounts} from "../src/components/accounts";
import {Voting} from "../src/components/voting";

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      response: ''
    };
    this.handleNewVote = this.handleNewVote.bind(this);
  }


   componentDidMount() {
    this.getWinningProposal()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  getWinningProposal = async () => {
    const response = await fetch('/api/ballot');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleNewVote(){
    this.getWinningProposal()
    .then(res => this.setState({ response: res }))
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Voting application</h1>
        </header>
        <div className="App-intro">
        <h1>Winning proposal is {this.state.response}</h1>
        </div>
        <Accounts />
        <div><br /></div>
        <Voting winningproposal={this.handleNewVote}/>
      </div>
    );
  }
}

export default App;
