import React, { Component } from 'react';
import Spinner from '../pages/Spinner.jsx'
import AccountsTable from '../pages/AccountsTable.jsx'
import AccountsTotals from '../pages/AccountsTotals.jsx'
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

const accountsQuery = gql`
  query accountsQuery($user_id: Int!) {
    getAccounts(user_id: $user_id) {
      bank_name
      type
      current_balance
    }
  }`

const withAccountsQuery = graphql(accountsQuery, {
  options: (props) => ({
    variables: {
      user_id: 1
    },
    name: 'Accounts Data'
  })
})

module.exports = compose(withApollo, withAccountsQuery)(AccountsOverview);