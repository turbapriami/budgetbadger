import { Columns, Box, Section, Heading, Paragraph } from 'grommet';
import React, { Component } from 'react';
import styles from '../../../public/main/jStyles';
import BillsSummary from '../pages/bills/BillsSummary.jsx';
import BillsDueTable from '../pages/bills/BillsDueTable.jsx';
import BillsPaidTable from '../pages/bills/BillsPaidTable.jsx';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import billSortingFunctions from '../pages/bills/billSortingFunctions.jsx';
import {BILL_PAYMENT_HISTORY_QUERY} from '../../queries.js';

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

      this.setState({
        billsDueThisMonth,
        overdueBills,
        unpaidBills,
        paidBills,
        UserBillPaymentHistory, 
        billCategories
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
    return (
      <div>
        <BillsSummary
          overdueBills={this.state.overdueBills}
          billsDueThisMonth={this.state.billsDueThisMonth}
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


const withBills = graphql(BILL_PAYMENT_HISTORY_QUERY, {
  options: props => ({
    variables: {
      user_id: window.localStorage.getItem('user_id'),
    },
    name: 'AllUserBills',
  }),
});

export default compose(withApollo, withBills)(BillsContainer);
