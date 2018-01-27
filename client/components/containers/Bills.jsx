import { Columns, Box, Section, Heading, Paragraph} from 'grommet';
import React, { Component } from 'react';
import styles from '../../../public/main/jStyles';
import BillsSummary from '../pages/BillsSummary.jsx';
import BillsDueTable from '../pages/BillsDueTable.jsx';
import BillsPaidTable from '../pages/BillsPaidTable.jsx';

class Bills extends Component {
  constructor(props) {
    super(props);
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
    render() {
        return (
          <div>
            <BillsSummary allBills = {this.state.UserBills}/>
            <BillsDueTable billsDue = {this.state.UserBills.filter((bill)=> {return bill.paid === true})}/>
            <BillsPaidTable billsPaid = {this.state.UserBills.filter((bill)=> {return bill.paid === false})}/>
          </div>)
    }
  

}

export default Bills;