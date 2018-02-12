import React from 'react';


export class Accounts extends React.Component {
    state = {
        response: []
      };

    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res }))
          .catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch('/api/accounts');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

    render() {

      if(!this.state.response){
        return null;
      }

      return (<div><b>All accounts on this network</b> 
      {this.state.response.map((acc,i) => <div key={i}>Account {i+1} :{acc}</div>)}
      </div>);
    }
  }