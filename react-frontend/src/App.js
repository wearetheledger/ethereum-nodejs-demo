import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './white.svg';
import './App.css';
import { Accounts } from "../src/components/accounts";
import { Voting } from "../src/components/voting";
import { Events } from "../src/components/events";
import { Segment, Grid, Container } from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
    this.handleNewVote = this.handleNewVote.bind(this);
  }


  componentDidMount() {
    this.getWinningProposal()
      .then(res => {
        if(res === '0') {
          this.setState({response: 'Ethereum'});
      } else if (res === '1') {
        this.setState({response: 'Hyperledger Fabric'});
      }
      })
      .catch(err => console.log(err));
  }

  getWinningProposal = async () => {
    const response = await fetch('/api/ballot');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  handleNewVote() {  

    this.getWinningProposal()
    .then(res => {
      if(res === '0') {
        this.setState({response: 'Ethereum'});
    } else if (res === '1') {
      this.setState({response: 'Hyperledger Fabric'});
    }
    })
    .catch(err => console.log(err));

}

  render() {

    return (
      <div className="App">
        <header className="App-header">
         <a href="https://www.theledger.be" target="_blank" rel="noopener noreferrer"> <img src={logo} className="App-logo" alt="logo" /></a>
          <h1 className="App-title">Voting application in favour of ethereum when it's a draw</h1>
          <br></br>
        </header>
        <br></br>
        <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <div >
                  <h1>Winning proposal is {this.state.response}</h1>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>

              <Segment>
                <Accounts />
              </Segment>
              <Segment>
                <Events />
              </Segment>
            </Grid.Column>

            <Grid.Column>

              <Segment>
                <Voting winningproposal={this.handleNewVote} />
              </Segment>
            </Grid.Column>

          </Grid.Row>
        </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
