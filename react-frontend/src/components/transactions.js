import React from 'react';

export class Transactions extends React.Component {

    state = {
        pending: [],
        confirmed: []
    };

    componentDidMount() {
        // quick and dirty way
        this.connectionPending = new WebSocket('ws://localhost:40510/pending');
        this.connectionPending.onmessage = evt => { 
          this.setState({
            pending : this.state.pending.concat([ evt.data ])
          })
        }; 


        this.connection = new WebSocket('ws://localhost:40510/confirmed');
        this.connection.onmessage = evt => { 
          this.setState({
            confirmed : this.state.confirmed.concat([ evt.data ])
          })
          // delete from pending when confirmed
          let element = evt.data;
          let index = this.state.pending.indexOf(element);
          if (index > 0) {
              let deleted = this.state.pending.splice(index);
              this.setState({
                  pending: deleted
              });
          } else if (index === 0) {
              this.setState({
                  pending: []
              });
          }
          this.props.updateWinningProposal();
          this.props.updatecounts();

        }; 
    }
    
    render() {
        return (
            <div>
                <div>
                    <br></br>
                    <h1>Pending transactions</h1>
                    {this.state.pending.map((trans, i) => <div key={i}>{trans}</div>)}
                </div>
                <div>
                    <br></br>
                    <h1>Confirmed transactions</h1>
                    {this.state.confirmed.map((trans, i) => <div key={i}>{trans}</div>)}
                </div>
            </div>
        );
    }
}