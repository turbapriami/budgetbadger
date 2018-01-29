import React, { Component } from 'react';
import {Tiles, Tile} from 'grommet';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import BillsSummary from '../pages/BillsSummary.jsx';
import Bills from './Bills.jsx';
import Loans from './LoansContainer.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const TRANS_ACC_QUERY = gql`
  query TRANS_ACC_QUERY($user_id: Int!) {
    getTransactions(user_id: $user_id) {
        amount
        name
        account {
          type
        }
        category {
          name
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


class DashBoard extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      UserBills:[
        {
          "id": 2,
          "user_id": 1,
          "description": "Washington Gas",
          "amount": 38.99,
          "due_date": "2017-12-21T05:00:00.000Z",
          "paid": true,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Utilities"
            }
          ]
        },
        {
          "id": 2,
          "user_id": 1,
          "description": "Washington Power",
          "amount": 23.1,
          "due_date": "2017-12-21T05:00:00.000Z",
          "paid": true,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Utilities"
            }
          ]
        },
        {
          "id": 1,
          "user_id": 1,
          "description": "Direct TV",
          "amount": 45.99,
          "due_date": "2017-12-21T05:00:00.000Z",
          "paid": true,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Entertainment"
            }
          ]
        },{
          "id": 2,
          "user_id": 1,
          "description": "Gas",
          "amount": 12,
          "due_date": "2018-12-24T05:00:00.000Z",
          "paid": false,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Utilities"
            }
          ]
        },
        {
          "id": 2,
          "user_id": 1,
          "description": "Water",
          "amount": 12,
          "due_date": "2018-12-24T05:00:00.000Z",
          "paid": false,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Utilities"
            }
          ]
        },
        {
          "id": 2,
          "user_id": 1,
          "description": "Electricity",
          "amount": 115,
          "due_date": "2018-12-24T05:00:00.000Z",
          "paid": false,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Utilities"
            }
          ]
        },
        {
          "id": 1,
          "user_id": 1,
          "description": "Spotify",
          "amount": 11.5,
          "due_date": "2018-12-24T05:00:00.000Z",
          "paid": false,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Entertainment"
            }
          ]
        },
        {
          "id": 1,
          "user_id": 1,
          "description": "Netflix",
          "amount": 16,
          "due_date": "2018-12-24T05:00:00.000Z",
          "paid": false,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Entertainment"
            }
          ]
        },
        {
          "id": 4,
          "user_id": 1,
          "description": "testing",
          "amount": 414,
          "due_date": "2018-12-27T05:00:00.000Z",
          "paid": false,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "test"
            }
          ]
        },
        {
          "id": 2,
          "user_id": 1,
          "description": "Washington Gas",
          "amount": 38.99,
          "due_date": "2017-12-21T05:00:00.000Z",
          "paid": true,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Utilities"
            }
          ]
        },
        {
          "id": 2,
          "user_id": 1,
          "description": "Washington Power",
          "amount": 23.1,
          "due_date": "2017-12-21T05:00:00.000Z",
          "paid": true,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Utilities"
            }
          ]
        },
        {
          "id": 1,
          "user_id": 1,
          "description": "Direct TV",
          "amount": 45.99,
          "due_date": "2017-12-21T05:00:00.000Z",
          "paid": true,
          "paid_date": null,
          "alert": false,
          "bill_category": [
            {
              "name": "Entertainment"
            }
          ]
        }
      ]
    }
  }
  
  componentWillReceiveProps() {
    console.log(this.props.data)
  }
  
  render(){
    return(
      <div>
        {/* <TransactionList transactions={this.props.data.getTransactions} /> */}
        <Tiles flush={false}
          fill={true}
          selectable={true}
        >
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            <BillsSummary allBills = {this.state.UserBills}/>
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            <BillsSummary allBills = {this.state.UserBills}/>
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            <BillsSummary allBills = {this.state.UserBills}/>
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            <BillsSummary allBills = {this.state.UserBills}/>
          </Tile>
        </Tiles>
      </div>
    )
  }
};

export default compose(withApollo, withTransactionsAndAccounts)(DashBoard);