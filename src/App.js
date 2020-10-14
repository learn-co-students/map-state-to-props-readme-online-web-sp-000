import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    // dispatch is automatically provided by connect
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

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps) (App);
// For a component to be connected to the store, i.e. to be able to get data from the store's internal state and to be told to re-render and get new data when that state changes, we will use the connect() function made available to us by React Redux.
// in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. Here, we want to provide state.items, and allow our component to have access to them through a prop called items.
//  Then we have to say which component in our application we are providing this data to: you can see that we write connect(mapStateToProps)(App) to specify that we are connecting this state to the App component. 
// this entire connect() method returns a new component, it looks like the App component we wrote, but now it also receives the correct data. This is the component we wish to export

// We learned of two new pieces of React Redux middleware: connect() and Provider. 
//  - Provider ensures that our entire React application can potentially access data from the store.
//  - Then connect(), allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data. 
// connect(mapStateToProps)(App) - That is saying connect the data in mapStateToProps() to the App component
// 