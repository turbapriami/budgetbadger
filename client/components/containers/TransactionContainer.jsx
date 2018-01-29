import React, { Component } from 'react';
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
        category
        account {
          type
          bank_name
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
  constructor() {
    super()
    this.state = {
      transactions: [],
      selection: null
    }
    this.filterTransactions = this.filterTransactions.bind(this)
  }

  filterTransactions(e, type) {
    let transactions;
    type === 'all' ?
    transactions = this.props.data.getTransactions :
    transactions = this.props.data.getTransactions.filter(transaction => {
      return transaction.account[0][type] === e.target.text;
    })

    this.setState({
      transactions
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('next', nextProps)
    this.setState({
      transactions: nextProps.data.getTransactions,
    })
  }

  render() {
    return (
      <div style={{ display: "flex", padding: '5px'}} >
        <Navigation accounts={this.props.data.getAccounts} filter={this.filterTransactions}/>
        <TransactionList transactions={this.state.transactions} />        
      </div>
    )
  }
}

export default compose(withApollo, withTransactionsAndAccounts)(TransactionContainer);




