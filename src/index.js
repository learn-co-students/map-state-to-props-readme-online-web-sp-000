//Use Redux to initialize our store and pass it down to our top-level container component   
 /* ./src/index.js */
 import React from 'react'; 
 import ReactDOM from 'react-dom';
 import {createStore} from 'redux';
 import {Provider} from 'react-redux'; 
 import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
 import App from './App';
 import './index.css';
 
 cconst store = createStore(
     shoppingListItemReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ); 
 //DevTools React extension that allows us to view the state of our store and each action that is dispatched 
 
 ReactDOM.render(
     /* to avoid passing store as a prop, we use the provider component imported from react-redux 
        by including the Provider, we will be able to access our Redux store and/or dispatch actions from any component we want, regardless of its location on the component tree 
     */
     <Provider store={store}>
         <App/>
     </Provider>, document.getElementById(root)
 );
 