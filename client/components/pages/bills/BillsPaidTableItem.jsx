import React, { Component } from 'react';
import { Columns, Box, Button, Section, Heading, Paragraph, Table, TableHeader, TableRow, Timestamp} from 'grommet';
import styles from '../../../../public/main/jStyles';
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

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

const updateBillToUnpaid = gql`
  mutation updateBill($id: Int!, $user_id: Int!, $bill_category_id: Int, $description: String, $amount: Float, $due_date: Date, $paid: Boolean, $paid_date: Date, $alert: Boolean) {
    updateBill(id: $id, user_id: $user_id, bill_category_id: $bill_category_id, description: $description, amount: $amount, due_date: $due_date, paid: $paid, paid_date: $paid_date, alert: $alert) {
      id
      user_id
      paid
      paid_date
    }
  }`;

export default graphql(updateBillToUnpaid, {
  options: {
    refetchQueries: ['BILLS_QUERY'],
  },
})(BillsPaidTableItem);
