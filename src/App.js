import React, { Component } from 'react';
import { connect}  from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    console.log("props",this.props.dispatch)
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

// export default App;


const mapStateToProps = (state) => {
  return { items: state.items };
};
//  console.log(connect)
export default connect(mapStateToProps)(App);
