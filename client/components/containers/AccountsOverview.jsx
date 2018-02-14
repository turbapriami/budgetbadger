import React, { Component } from 'react';
import Spinner from '../pages/Spinner.jsx'
import AccountsTable from '../pages/accounts/AccountsTable.jsx'
import AccountsTotals from '../pages/accounts/AccountsTotals.jsx'
import {ACCOUNTS_QUERY} from '../../queries.js';
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

class AccountsOverview extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log('helloooooo')
    if (this.props.data.getAccounts) {
      return(
        <div>
          <AccountsTotals accounts={this.props.data.getAccounts} />
          <AccountsTable accounts={this.props.data.getAccounts} />
        </div>
      )
    } else {
      return (
        <Spinner />
      );
    }
  }
};

const withAccountsQuery = graphql(ACCOUNTS_QUERY, {
  options: (props) => ({
    variables: {
      user_id: window.localStorage.getItem('user_id')
    },
    name: 'Accounts Data'
  })
})

module.exports = compose(withApollo, withAccountsQuery)(AccountsOverview);