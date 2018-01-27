import React, { Component } from 'react';
import Transactions from '../containers/Transactions.jsx';
import axios from 'axios'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import apolloClient from 'apollo-client';

class App extends Component {
  render() {
    return (
      <h1> hello world </h1>
    )
  }
} 
export default App