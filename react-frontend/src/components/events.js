import React from 'react';


export class Events extends React.Component {
  state = {
    events: []
  };
  componentDidMount(){
    this.connection = new WebSocket('ws://localhost:40510');
    this.connection.onmessage = evt => { 
      this.setState({
        events : this.state.events.concat([ evt.data ])
      })
    };      
  }    

    render() {
        return (<div><h1>Fired events</h1> 
          {this.state.events.map((ev,i) => <div key={i}>{ev}</div>)}
              </div>);
    }

  }