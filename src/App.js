/* ./src/App.js */
    /* To gain access to the store in our app, we use a second function: connect (provided by react-redux)
       By modifying a component's export statement and including connect, we are able to take data from our Redux store and map them to a component's props. We can also take actions and wrap them in a dispatch and anonymous function to be able to pass them as props too 
    */
   import React, {Component} from 'react';
   import {connect} from 'react-redux';
   import './App.css';
   
   class App extends Component { 
       handleOnClick() {
           this.props.dispatch({
               type: 'INCREASE_COUNT',
           });
           //dispatch is automatically provided by connect if it is missing a second argument(i.e. mapDispatchToProps)
       }
   
       render() {
           return(
               <div className="App">
                   <button onClick={this.handleOnClick}>CLICK</button>
                   <p>{this.props.items.length}</p>
               </div>
           );
       }
   }
   
   const mapStateToProps = state => {
       return { 
           items: state.items
       };
   };
   
   export default connect(mapStateToProps)(App); 
   /* Now we only re-render our App component when specific changes to the state occur and only provide the slice of the state that we need to our App component. We need a function that listens to every change in the store and filters out the changes relevant to a particular component to provide to that component. 
   */