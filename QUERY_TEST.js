import React, { Component } from 'react';
import Transactions from '../containers/Transactions.jsx';
import axios from 'axios'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import apolloClient from 'apollo-client';
// import query from './query.js'

const { createApolloFetch } = require('apollo-fetch');
const fetch = createApolloFetch({
  uri: 'http://localhost:1337/graphql',
});


const TRANS_QUERY = gql`
    query TRANS_QUERY($user_id: Int!) {
        getTransactions(user_id: $user_id){
          id
          amount
        }
      }`


class App extends Component {

  componentDidMount() {
    fetch({
      query: TRANS_QUERY,
      variables: {
        user_id: 1
      }
    }).then(res => console.log(res))
  }

  
  render() {
    return (
      <h1> hello world </h1>
    )
  }
} 
// const AppWithQuery = graphql(TRANS_QUERY, {
//       options: {
//         variables: {
//           user_id: 1
//         }
//       }
//     })(App)

export default App