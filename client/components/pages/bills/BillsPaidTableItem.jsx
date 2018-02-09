import React, { Component } from 'react';
import { Columns, Box, Button, Section, Heading, Paragraph, Table, TableHeader, TableRow, Timestamp} from 'grommet';
import styles from '../../../../public/main/jStyles';
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import {UPDATE_BILL, UPDATE_BILL_PAYMENT_HISTORY} from '../../../queries.js';

class BillsPaidTableItem extends Component {
  constructor(props) {
    super(props);
    this.onMarkUnpaidClick = this.onMarkUnpaidClick.bind(this);
  }

  onMarkUnpaidClick(bill) {
    let variables = {
      id: bill.id,
      user_id: bill.user_id,
      paid: false,
      paid_date: null,
    };

    console.log()
    this.props
      .mutate({
        variables: variables,
      })
      .then(({ data }) => {
        console.log('successfully updated bill to unpaid', data);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  }

  onMarkUnpaidClick(bill) {
    this.props.UPDATE_BILL_PAYMENT_HISTORY({
        variables: {
          id: bill.id,
          amount_paid: null,
          paid_date: null,
          paid: false,
        },
      })
      .then(({ data }) => {
        console.log('successfully updated bill payment History', data);
        //NEED TO FIND A WAY TO QUERY AND UPDATE THE last_paid_date on the bill to the PREVIOUS PAYMENT DATE or NULL
        this.props
          .UPDATE_BILL({
            variables: {
              id: bill.bills[0].id,
              last_paid_date: null,
            },
          })
          .then(({ data }) => {
            console.log('successfully updated the bills last_paid_date', data);
          })
          .catch(error => {
            console.log('error updating the bills last_paid_date', error);
          });
      })
      .catch(error => {
        console.log('error updating bill payment history', error);
      });
  }


  render() {
    return (
      <TableRow>
        <td>
          {this.props.bill.bills[0].description}
        </td>
        <td>
          {this.props.bill.bills[0].bill_category[0].name}
        </td>
        <td>
          <Timestamp value={`${this.props.bill.due_date}`} fields="date" />
        </td>
        <td>
          <Timestamp value={`${this.props.bill.paid_date}`} fields="date" />
        </td>
        <td>
          ${this.props.bill.bills[0].amount}
        </td>
        <td>
          <Button
            label="Mark Unpaid"
            onClick={() => {
              this.onMarkUnpaidClick(this.props.bill);
            }}
            primary={false}
            hoverIndicator={{ background: 'neutral-4-a' }}
            style={{
              backgroundColor: 'grey',
              color: 'white',
              border: 'none',
              fontSize: '18px',
              padding: '6px',
            }}
          />
        </td>
      </TableRow>
    );
  }
}

export default compose(
  graphql(UPDATE_BILL, { name: 'UPDATE_BILL' }),
  graphql(UPDATE_BILL_PAYMENT_HISTORY, { name: 'UPDATE_BILL_PAYMENT_HISTORY' })
)(BillsPaidTableItem);
