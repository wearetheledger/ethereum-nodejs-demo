import React, { Component } from 'react';
// import logo from './logo.svg';
import logo from './white.svg';
import './App.css';
import { Accounts } from "../src/components/accounts";
import { Segment, Grid, Container } from 'semantic-ui-react'

class App extends Component {


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
                <Accounts />
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
