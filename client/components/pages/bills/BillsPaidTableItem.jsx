import React, { Component } from 'react';
import { Columns, Box, Button, Section, Heading, Paragraph, Table, TableHeader, TableRow, Timestamp} from 'grommet';
import styles from '../../../../public/main/jStyles';
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import {UPDATE_BILL} from '../../../queries.js';

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

  render() {
    return (
      <TableRow>
        <td>
          {this.props.bill.description}
        </td>
        <td>
          {this.props.bill.bill_category[0].name}
        </td>
        <td>
          <Timestamp value={`${this.props.bill.due_date}`} fields="date" />
        </td>
        <td>
          <Timestamp value={`${this.props.bill.paid_date}`} fields="date" />
        </td>
        <td>
          ${this.props.bill.amount}
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

export default graphql(UPDATE_BILL, {
  options: {
    refetchQueries: ['BILLS_QUERY'],
  },
})(BillsPaidTableItem);
