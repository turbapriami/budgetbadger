import React, { Component } from 'react';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import Navigation from '../pages/transactions/Navigation.jsx';
import Search from '../pages/transactions/Search.jsx'
import PieChart from '../pages/transactions/PieChart.jsx'
import SearchFilter from '../pages/transactions/SearchFilters.jsx'
import { Box, Split } from 'grommet'
import Spinner from '../pages/Spinner.jsx';
import sortingFuncs from '../pages/transactions/sortingFunctions.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
import { TRANS_ACC_QUERY, CREATE_TRANSACTION, NEW_BANK_QUERY, UPDATE_TRANSACTIONS } from '../../queries.js';
import NewTransaction from '../pages/transactions/NewTransaction.jsx'
import TransactionSummary from '../pages/transactions/TransactionSummary.jsx'
import Modal from 'react-responsive-modal';
import gql from 'graphql-tag'

const withTransactionsAndAccounts = graphql(TRANS_ACC_QUERY, {
  options: (props) => ({
    variables: {
      user_id: window.localStorage.getItem('user_id')
    },
    name: 'TransactionsAndAccounts'
  })
})

const createNewTransaction = graphql(UPDATE_TRANSACTIONS, {
  options: (props) => ({
    variables: {
     user_id: window.localStorage.getItem('user_id')
    },
    name: 'createNewTransaction'
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
      displayModal: false,
      sorting: [false, false, false, false, false],
      sortIdx: 0,
      showForm: false,
      displaySummary: false,
      summaryTransaction: {},
      summaryName: '',
      transactionForm: {
        name: '',
        category:'',
        amount: '',
        type: '',
        date:'YYYY-MM-DD',
        account: ''
      }
    }
    this.handleSummary = this.handleSummary.bind(this);
    this.filterTransactions = this.filterTransactions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.generateCategories = this.generateCategories.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.sortTransactions = this.sortTransactions.bind(this);
    this.newTransaction = this.newTransaction.bind(this);
    this.handleForm = this.handleForm.bind(this);
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

  handleSummary(transaction = {}) {
    this.setState({
      displaySummary: !this.state.displaySummary,
      summaryTransaction: transaction
    })
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

  handleForm(e, value) {
    let field = e.target ? e.target.name : e;
    let form = this.state.transactionForm;
    form[field] = e.target ? e.target.value : value;
    this.setState({
      transactionForm: form,
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
      return sortingFuncs[label](a[label] || a, b[label] || a, directionS)
    })
    this.setState({
      sortIdx: index,
      sorting,
      transactions:sorted
    })

  }

  async newTransaction(e) {
    e.preventDefault()
    const variables = this.state.transactionForm;
    variables.user_id = 1;
    variables.account_id = this.props.data.getAccounts[variables.account.slice(0, variables.account.indexOf('.'))].id
    variables.amount = Number(variables.amount);
    variables.type = 'd'
    const transaction = await this.props.createNewTransaction({variables});
    const { transactions } = this.state
    transactions.unshift(variables);
    this.setState({
      transactionForm: {
        name: '',
        category:'',
        amount: '',
        type: '',
        date:'YYYY-MM-DD',
        account: ''
      }
    })
  }



  render() {
    const { displayModal } = this.state;
    if (this.props.data.getAccounts) {
      return (
        <div style={{padding: '5px'}}>
          <TransactionSummary 
            transactions={this.state.transactions} 
            summaryTransaction={this.state.summaryTransaction} 
            categories={this.state.categoryBreakdown} 
            handleSummary={this.handleSummary}display={this.state.displaySummary} 
            summaryName={this.state.summaryName}/>
          <PieChart 
            breakdown={this.state.categoryBreakdown} 
            handleClose={this.handleModal} 
            displayModal={displayModal} />
          <Split 
            fixed={false}
            separator={false}
            showOnResponsive='both'
            flex="right"
            priority="right">
            <Box>
              <h2>{this.state.selected}</h2>
              <Navigation accounts={this.props.data.getAccounts} filter={this.filterTransactions}/>
            </Box>  
            <Box align="left">
              <Box align='end' alignContent='end'>
                <Search transactions={this.state.transactions} search={this.handleSearch}/>
              </Box>
              <NewTransaction 
                handleForm={this.handleForm} 
                accounts={this.props.data.getAccounts} 
                submitForm={this.newTransaction} 
                form={this.state.transactionForm}/>
              <TransactionList
                displaySummary={this.handleSummary} 
                sort={this.sortTransactions} 
                sortIdx={this.state.sortIdx} 
                dir={this.state.sorting[this.state.sortIdx]} 
                transactions={this.state.transactions} 
              />        
            </Box>
          </Split>
        </div>
      )
    } else {
      return (
        <Spinner />
      )
    }
  }
}

export default compose(withApollo, graphql(CREATE_TRANSACTION, {name: 'createNewTransaction'}), withTransactionsAndAccounts)(TransactionContainer);