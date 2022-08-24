import React, { Component } from 'react';
import './App.css';
import Table from './components/table'; //our custom component

class App extends Component {
state = {
    data: []
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }
  
  // hitting our api end point to get the data
  callBackendAPI = async () => {
    const response = await fetch('/reports');
    const result = await response.json();
    if (response.status !== 200) {
      throw Error(result.message) 
    }
    return result;
  };

  render() {
    return (
      <div className="App">
        <div className='Container'>
        <div className='Container-Header'>
          RISE: Grade 9
        </div>
        <div className='Center'>
          <Table data = {this.state.data}/>
        </div>
        <div className='Center'>
        
        </div>
        </div>
      </div>
    );
  }  
}

export default App;