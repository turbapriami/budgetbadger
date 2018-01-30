import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
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

const httpLink = new HttpLink({ uri: 'http://localhost:1337/graphql' });

// const middlewareLink = setContext(() => ({
//   headers: { 
//     authorization: localStorage.getItem('token') || null,
//   }
// }));
// const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

document.addEventListener('DOMContentLoaded', () => {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <ApolloProvider client={ client }>
          <App/>
        </ApolloProvider>
      </BrowserRouter>,
      document.getElementById('app')
    )
  )
})