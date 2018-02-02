import { Columns, Box, Section, Heading, Paragraph} from 'grommet';
import React, { Component } from 'react';
import styles from '../../../public/main/jStyles';
import BillsSummary from '../pages/bills/BillsSummary.jsx';
import BillsDueTable from '../pages/bills/BillsDueTable.jsx';
import BillsPaidTable from '../pages/bills/BillsPaidTable.jsx';
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'


const BILLS_QUERY = gql`
  query BILLS_QUERY($user_id: Int!) {    
    getBills(user_id: $user_id) {
      id
      user_id
      bill_category_id
      description
      amount
      due_date
      paid
      paid_date
      alert
      bill_category {
        name
      }
    }
    getBillCategories(user_id: $user_id) {
      id
      name
    }
  }`

const withBills = graphql(BILLS_QUERY, {
  options: (props) => ({
    variables: {
      user_id: 1
    },
    name: 'AllUserBills'
  })
})

class BillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billsDueThisMonth:[],
      overdueBills: [],
      paidBills:[],
      unpaidBills: []
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.data.getBills) {
      const paidBills = nextProps.data.getBills.sort((a, b) => {
        return (new Date(b.paid_date) - new Date(a.paid_date))
      }).filter(bill => bill.paid)

      const unpaidBills = nextProps.data.getBills.sort((a, b) => {
        return (new Date(a.due_date) - new Date(b.due_date))
      })

      const billsDueThisMonth = nextProps.data.getBills.filter(bill => {
        const dueDate = new Date(bill.due_date);
        const currentDate = new Date();
        return ((currentDate.getMonth() === dueDate.getMonth()) && !bill.paid);
        return bill;
      })

      const overdueBills = nextProps.data.getBills.filter(bill => {
        const dueDate = new Date(bill.due_date);
        const currentDate = new Date();
        return ((currentDate > dueDate) && !bill.paid);
      })

      this.setState({
        billsDueThisMonth, overdueBills, unpaidBills, paidBills
      })
    }
  }

  render() {
    return (
      <div>
        <BillsSummary overdueBills={this.state.overdueBills} billsDueThisMonth={this.state.billsDueThisMonth}/>
        <BillsDueTable bills={this.state.unpaidBills} billCategories={this.props.data.getBillCategories}/>
        <BillsPaidTable bills={this.state.paidBills}/>
      </div>)
  }
}

export default compose(withApollo, withBills)(BillsContainer);