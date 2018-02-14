import React from 'react';

export class Transactions extends React.Component {

    state = {
        pending: [],
        confirmed: []
    };

    componentDidMount() {
        // quick and dirty way
        // could push when confirmed through websocket and then update instead of checking each second
        // for demo purpose this is sufficient
        // setInterval(this.callApiPending.bind(this), 1000);
        this.connectionPending = new WebSocket('ws://localhost:40510/pending');
        this.connectionPending.onmessage = evt => { 
          this.setState({
            pending : this.state.pending.concat([ evt.data ])
          })
          // do more stuff
        }; 


        this.connection = new WebSocket('ws://localhost:40510/confirmed');
        this.connection.onmessage = evt => { 
          this.setState({
            confirmed : this.state.confirmed.concat([ evt.data ])
          })
          // do more stuff
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

    /*callApiPending = () => {
        fetch('/api/transactions/pending')
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {

                    response.forEach(element => {
                        // extra check for testrpc
                        if (this.state.confirmed.indexOf(element) >= 0) {
                            // do nothing
                        } else if (this.state.pending.indexOf(element) < 0) {
                            this.setState({
                                pending: [
                                    ...this.state.pending,
                                    element
                                ]
                            });
                        }
                    });
                }
            }).catch(err => {
                console.log("API not available");
            })
    };*/
/*
    callApiConfirmed = () => {
        fetch('/api/transactions/confirmed')
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    response.forEach(element => {
                        if (this.state.confirmed.indexOf(element) < 0) {
                            this.setState({
                                confirmed: [
                                    ...this.state.confirmed,
                                    element
                                ]
                            });
                            this.props.updateWinningProposal();
                            this.props.updatecounts();
                        }
                        // delete from pending when confirmed
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
                    });
                }
            }).catch(err => {
                console.log("API not available");
            })

    };
    */
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