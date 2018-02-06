import { Columns, Box, Section, Heading, Paragraph } from 'grommet';
import React, { Component } from 'react';
import styles from '../../../public/main/jStyles';
import BillsSummary from '../pages/bills/BillsSummary.jsx';
import BillsDueTable from '../pages/bills/BillsDueTable.jsx';
import BillsPaidTable from '../pages/bills/BillsPaidTable.jsx';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import billSortingFunctions from '../pages/bills/billSortingFunctions.jsx';
import {BILLS_QUERY} from '../../queries.js';

const withBills = graphql(BILLS_QUERY, {
  options: props => ({
    variables: {
      user_id: 1,
    },
    name: 'AllUserBills',
  }),
});

class BillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billsDueThisMonth: [],
      overdueBills: [1, 2, 3, 4],
      paidBills: [],
      unpaidBills: [],
    };
    this.sortBills = this.sortBills.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.getBills) {
      var paidBills = nextProps.data.getBills
        .sort((a, b) => {
          return new Date(b.paid_date) - new Date(a.paid_date);
        })
        .filter(bill => bill.paid);

      const unpaidBills = nextProps.data.getBills.sort((a, b) => {
        return new Date(a.due_date) - new Date(b.due_date);
      });

      var billsDueThisMonth = nextProps.data.getBills.filter(bill => {
        const dueDate = new Date(bill.due_date);
        const currentDate = new Date();
        return (currentDate.getMonth() === dueDate.getMonth()) && !bill.paid;
      });

      const overdueBills = nextProps.data.getBills.filter(bill => { 
        let currentDate = new Date();
        let dueDate = new Date(bill.due_date);
        return !bill.paid && (currentDate.setHours(0,0,0) > dueDate.setHours(0,0,0)+ 86400000);
      });

      this.setState({
        billsDueThisMonth,
        overdueBills,
        unpaidBills,
        paidBills,
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
        return billSortingFunctions[label](
          a[label] || a,
          b[label] || a,
          ascending
        );
      });
      this.setState({ paidBills: sortedBills });
    } else {
      const label = unpaidBillsLabels[index];
      var sortedBills = this.state.unpaidBills.sort((a, b) => {
        return billSortingFunctions[label](
          a[label] || a,
          b[label] || a,
          ascending
        );
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
          billCategories={this.props.data.getBillCategories}
          sortBills={this.sortBills}
        />
        <BillsPaidTable
          bills={this.state.paidBills}
          sortBills={this.sortBills}
        />
      </div>
    );
  }
}

export default compose(withApollo, withBills)(BillsContainer);
