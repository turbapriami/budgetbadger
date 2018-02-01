import React, { Component } from 'react';
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Spinning from 'grommet/components/icons/Spinning';
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
        <div>
          <Columns justify='center' size='large'>
            <Box align='center' pad='large'>
              <Spinning size='huge' />
            </Box>
          </Columns>
        </div>
      ) 
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