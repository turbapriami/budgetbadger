import React, { Component } from 'react';
import {Tiles, Tile} from 'grommet';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import BillsDueTable from '../pages/BillsDueTable.jsx';
import Bills from './Bills.jsx';
import Loans from './LoansContainer.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const DashQuery = gql`
  query DashQuery($user_id: Int!) {
    getTransactions(user_id: $user_id) {
      amount
      name
      account {
        type
      }
    }
    getAccounts(user_id: $user_id) {
      type
      bank_name
    }
    getBills(user_id: $user_id) {
      description
      bill_category {
        name
      }
      amount
      due_date
      paid
    }
  }`

const WithDashQuery = graphql(DashQuery, {
  options: (props) => ({
    variables: {
      user_id: 1
    },
    name: 'Dashboard Data'
  })
})

class DashBoard extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidUpdate() {
    console.log(this.props.data)
  }

  render(){
    // make sure bills exist before rendering
    let billsDue = null
    if (this.props.data.getBills) {
      billsDue = <BillsDueTable billsDue = {this.props.data.getBills.filter((bill)=> {return bill.paid === false})}/>
    } else {
      const billsDue = <div>Loading...</div>
    }
    return(
      <div>
        <Tiles flush={false}
          fill={true}
          selectable={true}
        >
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
        </Tiles>
      </div>
    )
  }
};

export default compose(withApollo, WithDashQuery)(DashBoard);