import React, { Component } from 'react';
import { Actions, Anchor, Box, Button, CheckmarkIcon, Columns, EditIcon, Section, TrashIcon, Heading, Menu, MoreIcon, Paragraph, Table, TableHeader, TableRow, Timestamp, Toast} from 'grommet';
import EditBillForm from '../bills/EditBillForm.jsx';
import DeleteBillForm from './DeleteBillForm.jsx';
import { graphql, compose, withApollo } from 'react-apollo';
import {UPDATE_BILL, UPDATE_BILL_PAYMENT_HISTORY} from '../../../queries.js';

class BillsDueTableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billEditFormToggle: false,
      deleteBillFormToggle: false,
    };
    this.onMarkPaidClick = this.onMarkPaidClick.bind(this);
    this.handleEditFormToggle = this.handleEditFormToggle.bind(this);
    this.handleDeleteBillFormToggle = this.handleDeleteBillFormToggle.bind(
      this
    );
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  onMarkPaidClick(bill) {
    this.props
      .UPDATE_BILL_PAYMENT_HISTORY({
        variables: {
          id: bill.id,
          amount_paid: bill.bills[0].amount,
          paid_date: new Date(),
          paid: true,
        },
      })
      .then(({ data }) => {
        console.log('successfully updated bill payment History', data);
        this.props
          .UPDATE_BILL({
            variables: {
              id: bill.bills[0].id,
              last_paid_date: new Date(),
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

  handleMenuClick(e) {
    this.props.handleBillSelect(this.props.bill);
  }

  handleEditFormToggle() {
    this.setState({ billEditFormToggle: !this.state.billEditFormToggle });
  }

  handleDeleteBillFormToggle() {
    this.setState({ deleteBillFormToggle: !this.state.deleteBillFormToggle });
  }

  render() {
    console.log('this.props', this.props);
    return (
      <TableRow>
        <td>
          {this.props.bill.bills[0].description}
        </td>
        <td>
          {this.props.bill.bills[0].bill_category[0].name}
        </td>
        <td>
          <Timestamp value={this.props.bill.due_date} fields="date" />
        </td>
        <td>
          ${this.props.bill.bills[0].amount}
        </td>
        <td>
          <Menu
            responsive={true}
            onClick={this.handleMenuClick}
            icon={<MoreIcon />}
          >
            <Anchor
              icon={<CheckmarkIcon />}
              className="active"
              onClick={() => {
                this.onMarkPaidClick(this.props.bill);
              }}
            >
              Mark as Paid
            </Anchor>
            <Anchor icon={<EditIcon />} onClick={this.handleEditFormToggle}>
              Edit Bill
            </Anchor>
            <Anchor
              icon={<TrashIcon />}
              onClick={this.handleDeleteBillFormToggle}
            >
              Delete Bill
            </Anchor>
          </Menu>
          <DeleteBillForm
            bill={this.props.bill}
            deleteBillFormToggle={this.state.deleteBillFormToggle}
            handleDeleteBillFormToggle={this.handleDeleteBillFormToggle}
          />
        </td>
        <EditBillForm
          billRecurrenceTypes={this.props.billRecurrenceTypes}
          selectedBill={this.props.selectedBill}
          bills={this.props.bills}
          billCategories={this.props.billCategories}
          billEditFormToggle={this.state.billEditFormToggle}
          handleFormToggle={this.handleEditFormToggle}
        />
      </TableRow>
    );
  }
}

export default compose(
  graphql(UPDATE_BILL, { name: 'UPDATE_BILL' }),
  graphql(UPDATE_BILL_PAYMENT_HISTORY, { name: 'UPDATE_BILL_PAYMENT_HISTORY' })
)(BillsDueTableItem);
