import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../redux/actions';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import Navigation from '../pages/transactions/Navigation.jsx';
import { Box } from 'grommet'
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'


const TRANS_ACC_QUERY = gql`
  query TRANS_ACC_QUERY($user_id: Int!) {
    getTransactions(user_id: $user_id) {
        amount
        name
        account {
          type
        }
        category {
          name
        }
      }
    getAccounts(user_id: $user_id) {
      type
      bank_name
      id
    }
  }`

const withTransactionsAndAccounts = graphql(TRANS_ACC_QUERY, {
  options: (props) => ({
    variables: {
      user_id: 1
    },
    name: 'TransactionsAndAccounts'
  })
})

class TransactionContainer extends Component {
  render() {
    console.log('accounts', this.props.data.getAccounts)
    console.log('transactions', this.props.data.getTransactions)
    console.log('props', this.props)
    const transactions = [{amount: 100, category: 'taxi', description: 'taxi service', date: '10/10/17'}, {amount: 200, category: 'food', description: 'pizza', date: '10/10/17'}]
    const accounts = [{bank_name: 'Wells Fargo', type: 'Credit', id: '1231ac'}, {bank_name: 'Chase', type: 'Debit', id: '121131ac'}]
    return (
      <div style={{ display: "inlineBlock" }} >
        <Navigation accounts={this.props.data.getAccounts} />
        <TransactionList transactions={this.props.data.getTransactions} />        
      </div>
    )
  }
}

export default compose(withApollo, withTransactionsAndAccounts)(TransactionContainer);