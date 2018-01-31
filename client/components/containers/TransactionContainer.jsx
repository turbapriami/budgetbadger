import React, { Component } from 'react';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import Navigation from '../pages/transactions/Navigation.jsx';
import { Box } from 'grommet'
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const NEW_TRANS_MUTATION = gql`
  mutation NEW_TRANS_MUTATION($user_id: Int!){
    getUpdatedTransactions(user_id: $user_id) {
      id
    }
  }
`
const withUpdatedTransactions = graphql(NEW_TRANS_MUTATION)

const TRANS_ACC_QUERY = gql`
  query TRANS_ACC_QUERY($user_id: Int!) {
    getTransactions(user_id: $user_id) {
      amount
      name
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

  componentWillMount() {
    this.props.mutate({
      variables: {user_id: 1}
    })
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
    this.setState({
      transactions: nextProps.data.getTransactions,
    })
  }

  render() {
    return (
      <div style={{ display: "inlineBlock" }} >
        <Navigation accounts={this.props.data.getAccounts} filter={this.filterTransactions}/>
        <TransactionList transactions={this.state.transactions} />        
      </div>
    )
  }
}

export default compose(withApollo, withUpdatedTransactions, withTransactionsAndAccounts)(TransactionContainer);




