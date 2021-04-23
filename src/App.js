import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import './App.css';

class App extends Component {

  handleOnClick() {
    //dispatch is provided by connect 
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

// start of code change
//specifies what part of the state we are providing to our component - state.items accessed through prop items 
const mapStateToProps = (state) => {
  return { items: state.items };
};

//syncs to store and listens to state changes from mapStateToProps to App
//connect then returns a new component 
export default connect(mapStateToProps)(App);
