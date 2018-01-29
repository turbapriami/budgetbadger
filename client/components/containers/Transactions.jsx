import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../redux/actions';
import Transactions from '../pages/Transactions.jsx';
class TransactionContainer extends Component {
  render() {
    return (
      <div/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    transactions: state.transactions
  }
}


// export default (mapStateToProps, getTransactions)(TransactionContainer);
export default TransactionContainer