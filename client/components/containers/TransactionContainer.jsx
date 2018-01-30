import React, { Component } from 'react';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import Navigation from '../pages/transactions/Navigation.jsx';
import Search from '../pages/transactions/Search.jsx'
import PieChart from '../pages/transactions/PieChart.jsx'
import SearchFilter from '../pages/transactions/SearchFilters.jsx'
import { Box } from 'grommet'
import { graphql, compose, withApollo } from 'react-apollo'
import { TRANS_ACC_QUERY } from '../../queries.js'
import gql from 'graphql-tag'

class TransactionContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      searchResult: [],
      categoryBreakdown: [],
      selected: 'All Debit & Credit'
    }
    this.filterTransactions = this.filterTransactions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.generateCategories = this.generateCategories.bind(this);
  }

  filterTransactions(e, type) {
    let transactions;
    type === 'all' ?
    transactions = this.props.data.getTransactions :
    transactions = this.props.data.getTransactions.filter(transaction => {
      return transaction.account[0][type] === e.target.text;
    })
    this.setState({
      transactions,
      selected: 'All ' + e.target.text
    }, () => this.generateCategories());
  }

  generateCategories() {
    let columns = [];
    const breakdown = this.state.transactions.reduce((a, b) => {
      a[b.category] ? a[b.category] += b.amount : a[b.category] = b.amount;
      return a;
    }, {});
    for (let pair in breakdown) {
      columns.push([pair, breakdown[pair]])
    }
    this.setState({categoryBreakdown: columns});
  }

  handleSearch(searchString) {
    const transactions = this.state.transactions;
    const searchResult = transactions.filter(transaction => {
      return transaction.name.includes(searchString);
    });

    this.setState({
      transactions: searchResult
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      transactions: nextProps.data.getTransactions,
    },() => this.generateCategories())
  }

  render() {
    return (
      <div style={{padding: '5px'}}>
        <Search style={{float: 'right'}} transactions={this.state.transactions} search={this.handleSearch}/>
        <PieChart breakdown={this.state.categoryBreakdown}/>
        <h2>{this.state.selected}</h2>
        <div style={{ display: "flex"}} >
          <Navigation accounts={this.props.data.getAccounts} filter={this.filterTransactions}/>
          <TransactionList transactions={this.state.transactions} />        
        </div>
      </div>
    )
  }
}

// const TRANS_ACC_QUERY = gql`
//   query TRANS_ACC_QUERY($user_id: Int!) {
//     getTransactions(user_id: $user_id) {
//         amount
//         name
//         category
//         account {
//           type
//           bank_name
//         }
//       }
//     getAccounts(user_id: $user_id) {
//       type
//       bank_name
//       id
//     }
//   }`

const withTransactionsAndAccounts = graphql(TRANS_ACC_QUERY, {
  options: (props) => ({
    variables: {
      user_id: 1
    },
    name: 'TransactionsAndAccounts'
  })
})

export default compose(withApollo, withTransactionsAndAccounts)(TransactionContainer);




