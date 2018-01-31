import React, { Component } from 'react';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import Navigation from '../pages/transactions/Navigation.jsx';
import Search from '../pages/transactions/Search.jsx'
import PieChart from '../pages/transactions/PieChart.jsx'
import SearchFilter from '../pages/transactions/SearchFilters.jsx'
import { Box } from 'grommet'
import { graphql, compose, withApollo } from 'react-apollo'
// import { TRANS_ACC_QUERY } from '../../queries.js';
import Modal from 'react-responsive-modal';
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
      searchResult: [],
      categoryBreakdown: [],
      selected: 'All Debit & Credit',
      displayModal: false
    }
    this.filterTransactions = this.filterTransactions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.generateCategories = this.generateCategories.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.sortTransactions = this.sortTransactions.bind(this);
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
    const { transactions } = this.state;
    const searchResult = transactions.filter(transaction => {
      return transaction.name.includes(searchString);
    });

    this.setState({
      transactions: searchResult
    });
  }

  handleModal(e) {
    e.preventDefault();
    this.setState({
      displayModal: !this.state.displayModal
    });
  }

  handleSearch(searchString) {
    const transactions = this.state.transactions;
    const searchResult = transactions.filter(transaction => {
      return transaction.name.includes(searchString);
    });

    this.setState({
      transactions: searchResult
    }, () => console.log('hi'))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.transactions) {
      this.setState({
        transactions: nextProps.data.getTransactions,
      },() => this.generateCategories())
    }
  }

  sortTransactions(index, direction) {
    const { transactions } = this.state;
    console.log()
    const labels = ['date', 'type', 'category','name', 'amount'];
    const label = index === 2 ? labels[index]: labels[index];
    const sorted = transactions.sort((a, b) => {
      return direction ?
             a[label].toString().localeCompare(b[label].toString(), undefined, {numeric: true, sensitivity: 'base'}):
             b[label].toString().localeCompare(a[label].toString(), undefined, {numeric: true, sensitivity: 'base'})
    })
    this.setState({
      transactions: sorted,
    })
  }

  render() {
    const { displayModal } = this.state;
    return (
      <div style={{padding: '5px'}}>
        <Search style={{float: 'right'}} transactions={this.state.transactions} search={this.handleSearch}/>
        { displayModal ? <PieChart breakdown={this.state.categoryBreakdown} handleClose={this.handleModal} display={displayModal} /> : null}
        <h2>{this.state.selected}</h2>
        <div style={{ display: "flex"}} >
          <Navigation accounts={this.props.data.getAccounts} filter={this.filterTransactions}/>
          <TransactionList sort={this.sortTransactions} transactions={this.state.transactions} />        
        </div>
      </div>
    )
  }
}

export default compose(withApollo, withUpdatedTransactions, withTransactionsAndAccounts)(TransactionContainer);