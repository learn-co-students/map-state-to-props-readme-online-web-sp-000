import React, { Component } from 'react';
import './App.css';

class App extends Component {

  handleOnClick = () => {
    this.props.increaseCount()
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

const mapStateToProps = state => {
  return { items: state.items }
}

const mapDispatchToProps = dispatch => {
  return { increaseCount: () => dispatch({type: 'INCREASE_COUNT'})}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
