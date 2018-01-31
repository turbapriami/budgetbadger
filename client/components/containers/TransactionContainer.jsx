import React, { Component } from 'react';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import Navigation from '../pages/transactions/Navigation.jsx';
import Search from '../pages/transactions/Search.jsx'
import PieChart from '../pages/transactions/PieChart.jsx'
import SearchFilter from '../pages/transactions/SearchFilters.jsx'
import { Box } from 'grommet'
import { graphql, compose, withApollo } from 'react-apollo'
import { TRANS_ACC_QUERY, NEW_TRANS_MUTATION, NEW_BANK_QUERY } from '../../queries.js';
import Modal from 'react-responsive-modal';
import gql from 'graphql-tag'

const withTransactionsAndAccounts = graphql(TRANS_ACC_QUERY, {
  options: (props) => ({
    variables: {
      user_id: 1
    },
    name: 'TransactionsAndAccounts'
  })
})

const newTransaction = graphql(NEW_TRANS_MUTATION, {

})

class TransactionContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      searchResult: [],
      categoryBreakdown: [],
      selected: 'All Debit & Credit',
      displayModal: false,
      sorting: [false, false, false, false, false],
      sortIdx: 0
    }
    this.filterTransactions = this.filterTransactions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.generateCategories = this.generateCategories.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.sortTransactions = this.sortTransactions.bind(this);
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
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.getTransactions) {
      const transactions = nextProps.data.getTransactions.sort((a,b) => {
        return new Date(b.date) - new Date(a.date)
      })
      this.setState({
        transactions
      },() => this.generateCategories())
    }
  }

  sortTransactions(index, direction) {
    const { transactions, sorting } = this.state;
    const labels = ['date', 'type', 'category','name', 'amount'];
    const label = labels[index];
    const directionS = sorting[index];
    sorting[index] = !directionS;
    const sorted = transactions.sort((a, b) => {
      if (Number(a[label])) {
        return directionS ?
          a[label] - b[label] :
          b[label] - a[label];
      } else if (label === 'date') {
        return directionS ?
          new Date(a[label]) - new Date(b[label]) :
          new Date(b[label]) - new Date(a[label]);
      } else if (label === 'type') { 
        return directionS ?
          
      } else {
        return directionS ?
          a[label].localeCompare(b[label]) :
          b[label].localeCompare(a[label]);
      }
    })
    this.setState({
      sortIdx: index,
      sorting,
      transactions:sorted
    })
    // this.setState({
    //   transactions: sorted,
    // })
  }

  // async newTransaction() {

  // }

  render() {
    const { displayModal } = this.state;
    // console.log(this.props)
    return (
      <div style={{padding: '5px'}}>
        <Search style={{float: 'right'}} transactions={this.state.transactions} search={this.handleSearch}/>
        { displayModal ? <PieChart breakdown={this.state.categoryBreakdown} handleClose={this.handleModal} display={displayModal} /> : null}
        <h2>{this.state.selected}</h2>
        <div style={{ display: "flex"}} >
          <Navigation accounts={this.props.data.getAccounts} filter={this.filterTransactions}/>
          <TransactionList sort={this.sortTransactions} sortIdx={this.state.sortIdx} dir={this.state.sorting[this.state.sortIdx]} transactions={this.state.transactions} />        
        </div>
      </div>
    )
  }
}

export default compose(withApollo, withTransactionsAndAccounts, graphql(NEW_TRANS_MUTATION))(TransactionContainer);