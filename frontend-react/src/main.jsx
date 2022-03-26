import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/storeConfig';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(reducers, devTools);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
