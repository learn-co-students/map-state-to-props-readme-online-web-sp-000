import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'; /* code change */
//just imported Provide form React Redux


const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}/>, //we passed our store instance into Provider as a prop which makes it available to all of the other components
    <App />
 </Provider>, /* code change */
 //we used Provider to wrap our React app
  document.getElementById('root')

);
