import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  //dispatch is automatically provided by connect if it is missing a second argument
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

//In mapStateToProps() we specify exactly which slice of the state we want to provide to our component
const mapStateToProps = (state) => {
  return { items: state.items };
};

//When a change occurs, connect() calls a function that we write called mapStateToProps()
export default connect(mapStateToProps) (App);
//Then we have to say which component in our application we are providing this data to: you can see that we write connect(mapStateToProps)(App) to specify that we are connecting this state to the App component