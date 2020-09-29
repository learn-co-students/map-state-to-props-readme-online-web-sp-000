import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //We have a prop named dispatch. But where did it come from if it's a prop? We will go into greater detail later, but dispatch is automatically provided by connect if it is missing a second argument. That second argument is reserved for mapDispatchToProps, which allows us to customize how we send actions to our reducer. Without the second argument we will still be able to use dispatch on any component wrapped with connect.
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

//start of code change
//connect the data in mapStateToProps() (the items portion of the state) to the App component. And the App component can access that state with this.props.items 
//a function that listens to every change in the store and then (2) filters out the changes relevant to a particular component to (3) provide to that component.
const mapStateToProps = (state) => {
  return { items: state.items };
};

 
//a function that listens to every change in the store and then (2) filters out the changes relevant to a particular component to (3) provide to that component.
export default connect(mapStateToProps)(App);
// end of code change