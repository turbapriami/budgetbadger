import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../redux/actions';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import Navigation from '../pages/transactions/Navigation.jsx';
import { Box } from 'grommet'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


const TRANS_QUERY = gql`
  query TRANS_QUERY($user_id: Int!) {
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
    }`


const withTransactions = graphql(TRANS_QUERY, {
  options: (props) => ({
    variables: {
      user_id: 1
    }
  })
})

class TransactionContainer extends Component {
  render() {
    console.log(this.props)
    const transactions = [{amount: 100, category: 'taxi', description: 'taxi service', date: '10/10/17'}, {amount: 200, category: 'food', description: 'pizza', date: '10/10/17'}]
    const accounts = [{bank_name: 'Wells Fargo', type: 'Credit', id: '1231ac'}, {bank_name: 'Chase', type: 'Debit', id: '121131ac'}]
    return (
      <div style={{ display: "inlineBlock" }} >
        <Navigation accounts={accounts}/>
        <TransactionList transactions={this.props.data.getTransactions}/>        
      </div>
    )
  }
}

// export default withTransactions(TransactionContainer)


export default withTransactions(TransactionContainer)
// export default (mapStateToProps, getTransactions)(TransactionContainer);
// export default TransactionContainer