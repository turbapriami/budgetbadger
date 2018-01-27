import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor } from 'grommet';
import React, { Component } from 'react';

class Bills extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userBills: [
            {
              "id": 2,
              "user_id": 1,
              "bill_category_id": 2,
              "description": "Gas",
              "amount": 12,
              "due_date": "2018-12-24T05:00:00.000Z",
              "paid": false,
              "paid_date": null,
              "alert": false
            },
            {
              "id": 2,
              "user_id": 1,
              "bill_category_id": 2,
              "description": "Water",
              "amount": 12,
              "due_date": "2018-12-24T05:00:00.000Z",
              "paid": false,
              "paid_date": null,
              "alert": false
            },
            {
              "id": 2,
              "user_id": 1,
              "bill_category_id": 2,
              "description": "Electricity",
              "amount": 115,
              "due_date": "2018-12-24T05:00:00.000Z",
              "paid": false,
              "paid_date": null,
              "alert": false
            },
            {
              "id": 1,
              "user_id": 1,
              "bill_category_id": 1,
              "description": "Spotify",
              "amount": 11.5,
              "due_date": "2018-12-24T05:00:00.000Z",
              "paid": false,
              "paid_date": null,
              "alert": false
            },
            {
              "id": 1,
              "user_id": 1,
              "bill_category_id": 1,
              "description": "Netflix",
              "amount": 16,
              "due_date": "2018-12-24T05:00:00.000Z",
              "paid": false,
              "paid_date": null,
              "alert": false
            },
            {
              "id": 4,
              "user_id": 1,
              "bill_category_id": 4,
              "description": "testing",
              "amount": 414,
              "due_date": "2018-12-27T05:00:00.000Z",
              "paid": false,
              "paid_date": null,
              "alert": false
            }
          ]
    }
  }
    render() {
        return (<div>BILLS</div>)
    }
  

}

export default Bills;