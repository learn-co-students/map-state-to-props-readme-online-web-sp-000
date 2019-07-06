import React, { Component } from 'react';
import { connect } from 'react-redux' /* Using the <Provider> component provided by the React Redux library, we gave our components the ability to be connected to the store. However, we don't want every component re-rendering in response to every change in the state. So the React Redux library requires us to specify which changes to the store's state should prompt a re-render of the application. We will specify this with the connect() function. */
import './App.css';

class App extends Component {

  // dispatch is automatically provided as props by the connect method when connect is missing a 2nd argument
  handleOnClick() {
    this.props.store.dispatch({
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

//when the state changes, our connect method in the export calls this function. We write this method ourselves. Here, we are providing a new prop called items, so in our App component, that is the prop we want to reference. At this time, we are not writing a mapDispatchToProps after this.
const mapStateToProps = (state) => {
  return { items: state.items };
};

// BELOW COMPONENT MISSING mapDispatchToProps //
// this export changed to incorporate the connect method we imported. it listens to every change in the store. When a change occurs, it calls a function that we write called mapStateToProps(), and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. We need to specify which component we are providing data to, in this case App. Finally this entire connect() method returns a new component, it looks like the App component we wrote, but now it also receives the correct data. This is the component we wish to export.
// export default App;
export default connect(
  mapStateToProps
  )(App)
