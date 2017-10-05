import React, { Component } from 'react';
import { connect } from 'react-redux';
import utils from './utils/utils.js';
import './App.css';
import { test } from './action/test.js';

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    test: (input) => dispatch(
      test(input)
    ),
  };
};


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

  componentWillMount() {
    this.props.test({
      test1: "haha",
      test2: "hihi"
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bitcoin Charts</h2>
          <div>helloo</div>
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



export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;