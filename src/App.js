import React, { Component } from 'react';
import utils from './utils/utils.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    utils.getMarketPrice()
      .then(response => {
        this.setState({
          data: response.values
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bitcoin Charts</h2>
        </div>
        { this.state.data.map(values => 
              <div>
                <div>{values.x}</div>
              </div>
            ) }
      </div>
    );
  }
}

export default App;
