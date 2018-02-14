import { Columns, Box, Section, Heading, Paragraph } from 'grommet';
import React, { Component } from 'react';
import styles from '../../../public/main/jStyles';
import BillsSummary from '../pages/bills/BillsSummary.jsx';
import BillsDueTable from '../pages/bills/BillsDueTable.jsx';
import BillsPaidTable from '../pages/bills/BillsPaidTable.jsx';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import billSortingFunctions from '../pages/bills/billSortingFunctions.jsx';
import {BILL_PAYMENT_HISTORY_QUERY, ACCOUNTS_QUERY} from '../../queries.js';
import moment from 'moment';

class BillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billsDueThisMonth: [],
      overdueBills: [],
      paidBills: [],
      unpaidBills: [],
      UserBillPaymentHistory: [],
      billCategories: []
    };
    this.sortBills = this.sortBills.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    var currentDate = new Date();
    if (nextProps.data.getBillPaymentHistory) {
      var paidBills = nextProps.data.getBillPaymentHistory
        .filter(bill => bill.paid && bill.bills[0].bill_status);

      var unpaidBills = nextProps.data.getBillPaymentHistory
        .filter(bill => !bill.paid && bill.bills[0].bill_status);

      var billsDueThisMonth = nextProps.data.getBillPaymentHistory
        .filter(bill => !bill.paid && bill.bills[0].bill_status && (new Date(bill.due_date).getMonth() === currentDate.getMonth()));

      var overdueBills = nextProps.data.getBillPaymentHistory
        .filter(bill => !bill.paid && bill.bills[0].bill_status && (new Date(bill.due_date).setHours(0,0,0)+ 86400000 < currentDate.setHours(0,0,0)));

      var UserBillPaymentHistory = nextProps.data.getBillPaymentHistory;

      var billCategories = nextProps.data.getBillCategories.sort((a, b) => a.name.localeCompare(b.name))

      var creditAvailable = nextProps.data.getAccounts.reduce((creditAvailable, account) => {
        if (account.type === "credit") {
          return creditAvailable += (account.limit - account.current_balance);
        }
        return creditAvailable;
      }, 0);

      var cashAvailable = nextProps.data.getAccounts.reduce((totalCash, account) => {
        if(!account.bank_name.includes('CD') && account.type === "depository"){
          return totalCash+= account.current_balance;
        }
        return totalCash;
      },0);



      console.log('creditAvailable', creditAvailable);
      console.log('cashAvailable', cashAvailable);
      this.setState({
        billsDueThisMonth,
        overdueBills,
        unpaidBills,
        paidBills,
        UserBillPaymentHistory, 
        billCategories,
        creditAvailable,
        cashAvailable
      });
    }
  }

  sortBills(paid, index, ascending) {
    const paidBillsLabels = [
      'description',
      'bill_category',
      'due_date',
      'paid_date',
      'amount',
    ];
    const unpaidBillsLabels = [
      'description',
      'bill_category',
      'due_date',
      'amount',
    ];

    if (paid) {
      const label = paidBillsLabels[index];
      var sortedBills = this.state.paidBills.sort((a, b) => {
        return billSortingFunctions[label](a, b, ascending);
      });
      this.setState({ paidBills: sortedBills });
    } else {
      const label = unpaidBillsLabels[index];
      var sortedBills = this.state.unpaidBills.sort((a, b) => {
        return billSortingFunctions[label](a, b, ascending);
      });
      this.setState({ unpaidBills: sortedBills });
    }
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <BillsSummary
          overdueBills={this.state.overdueBills}
          billsDueThisMonth={this.state.billsDueThisMonth}
          creditAvailable = {this.state.creditAvailable}
          cashAvailable = {this.state.cashAvailable}
        />
        <BillsDueTable
          bills={this.state.unpaidBills}
          billCategories={this.state.billCategories}
          sortBills={this.sortBills}
          billRecurrenceTypes={this.props.data.getBillRecurrence}
          UserBillPaymentHistory = {this.state.UserBillPaymentHistory}
        />
        <BillsPaidTable
          bills={this.state.paidBills}
          sortBills={this.sortBills}
          UserBillPaymentHistory = {this.state.UserBillPaymentHistory}
        />
      </div>
    );
  }
}

// const withBills = graphql(BILL_PAYMENT_HISTORY_QUERY, {
//   options: props => ({
//     variables: {
//       user_id: window.localStorage.getItem('user_id'),
//     },
//     name: 'AllUserBills',
//   }),
// });
// const withAccountsQuery = graphql(ACCOUNTS_QUERY, {
//   options: (props) => ({
//     variables: {
//       user_id: window.localStorage.getItem('user_id')
//     },
//     name: 'Accounts Data'
//   })
// })

// export default compose(withApollo, withBills)(BillsContainer);


export default compose(
  graphql(BILL_PAYMENT_HISTORY_QUERY, {
    options: props => ({
      variables: {
        user_id: window.localStorage.getItem('user_id'),
      },
      name: 'BILL PAYMENT DATA'
    }),
  })
)(BillsContainer);