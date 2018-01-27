import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers/index.js'
import App from './components/pages/App.jsx';
import Splash from './components/pages/Splash.jsx';
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

  const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3000' }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  });

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

document.addEventListener('DOMContentLoaded', () => {
  return (
    ReactDOM.render(
      <ApolloProvider client={ client }>
        <App/>
      </ApolloProvider>,
      document.getElementById('app')
    )
  )
})