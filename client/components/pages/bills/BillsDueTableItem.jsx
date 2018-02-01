import React, { Component } from 'react';
import { Actions, Anchor, Box, Button, CheckmarkIcon, Columns, EditIcon, Section, TrashIcon, Heading, Menu, MoreIcon, Paragraph, Table, TableHeader, TableRow, Timestamp, Toast} from 'grommet';
import EditBillForm from '../bills/EditBillForm.jsx';
import DeleteBillForm from './DeleteBillForm.jsx';
import { gql, graphql } from 'react-apollo';

class BillsDueTableItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billEditFormToggle: false,
      deleteBillFormToggle: false,
      selectedBill: {
        "id":12,
        "user_id":1,
        "bill_category_id":3,
        "description":"NetflicASCASCxV8",
        "amount":34.55,
        "due_date":"2018-02-09T05:00:00.000Z",
        "paid":false,
        "paid_date":null,
        "alert":null,
        "bill_category":[
          {"name":"Miscellaneous",
          "__typename":"Category"}
          ],
        "__typename":"Bill"
      }
    }
    this.onMarkPaidClick = this.onMarkPaidClick.bind(this);
    this.handleEditFormToggle = this.handleEditFormToggle.bind(this);
    this.handleDeleteBillFormToggle = this.handleDeleteBillFormToggle.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  
  onMarkPaidClick(bill) {
    let date = new Date();
    var formattedDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
    let variables = {
      id:bill.id,
      user_id:bill.user_id,
      paid:true,
      paid_date:formattedDate,
    }

    this.props.mutate({
      variables: variables
    }).then(({ data }) => {
        console.log('successfully updated bill to unpaid', data)
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }


  handleEditFormToggle() {
    this.setState({billEditFormToggle: !this.state.billEditFormToggle});
  }
  
  handleDeleteBillFormToggle() {
    this.setState({deleteBillFormToggle: !this.state.deleteBillFormToggle});
  }

  handleMenuClick() {
    this.setState({selectedBill: this.props.bill}, ()=>{console.log('selectedBill Set to ', JSON.stringify(this.state.selectedBill))});
  
  }

  render() {
    return (<TableRow>
        <td>
          {this.props.bill.description}
        </td>
        <td>
          {this.props.bill.bill_category[0].name}
        </td>
        <td>
          <Timestamp
            value={`${this.props.bill.due_date}`}
            fields='date'
          />
        </td>
        <td>
          ${this.props.bill.amount}
        </td>
        <td>
          <Menu 
            responsive={true}
            onClick={this.handleMenuClick}
            icon={<MoreIcon/>}>
            <Anchor 
              icon={<CheckmarkIcon/>}
              className='active'
              onClick={()=>{this.onMarkPaidClick(this.props.bill)}}>
                Mark as Paid
            </Anchor>
            <Anchor 
              icon={<EditIcon/>}
              onClick={this.handleEditFormToggle}>
                Edit Bill
            </Anchor>
            <Anchor 
              icon={<TrashIcon />}
              onClick={this.handleDeleteBillFormToggle}>
                Delete Bill
            </Anchor>
          </Menu>
          <DeleteBillForm
            bill = {this.props.bill} 
            deleteBillFormToggle={this.state.deleteBillFormToggle} 
            handleDeleteBillFormToggle={this.handleDeleteBillFormToggle}
          />
          <EditBillForm 
            bill = {this.props.bill} 
            bills = {this.props.bills} 
            billCategories = {this.props.billCategories} 
            billEditFormToggle={this.state.billEditFormToggle} 
            handleFormToggle={this.handleEditFormToggle}
          />
        </td>
      </TableRow>
      )
    }
}

const updateBillToPaid = gql`
  mutation updateBill($id: Int!, $user_id: Int!, $bill_category_id: Int, $description: String, $amount: Float, $due_date: Date, $paid: Boolean, $paid_date: Date, $alert: Boolean) {
    updateBill(id: $id, user_id: $user_id, bill_category_id: $bill_category_id, description: $description, amount: $amount, due_date: $due_date, paid: $paid, paid_date: $paid_date, alert: $alert) {
      id
      user_id
      paid
      paid_date
    }
  }`;

export default graphql(updateBillToPaid, {
  options: {
    refetchQueries: [
      'BILLS_QUERY'
    ],
  }
})(BillsDueTableItem);