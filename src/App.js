import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// two goals here:
// (a) to only re-render our App component when specific changes to the state occur, and
// (b) to only provide the slice of the state that we need to our App component

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
