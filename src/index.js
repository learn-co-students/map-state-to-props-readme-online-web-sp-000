import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' /* code change */
import { createStore } from 'redux'
import App from './App'
import './index.css'
import shoppingListItemReducer from './reducers/shoppingListItemReducer'

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById('root')
)
