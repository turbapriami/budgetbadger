import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers/index.js'
import App from './components/pages/App.jsx';
import Splash from './components/pages/Splash.jsx';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

document.addEventListener('DOMContentLoaded', () => {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <Provider store={ store }>
          <App/>
        </Provider>
      </BrowserRouter>,
      document.getElementById('app')
    )
  )
})