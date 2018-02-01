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
  }

  render() {
    return (
      <div>
        <BillsSummary bills={this.props.data.getBills}/>
        <BillsDueTable bills={this.props.data.getBills} billCategories={this.props.data.getBillCategories}/>
        <BillsPaidTable bills={this.props.data.getBills}/>
      </div>)
  }
}

export default compose(withApollo, withBills)(BillsContainer);