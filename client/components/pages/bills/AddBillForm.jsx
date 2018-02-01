import React from 'react';
import ReactModal from 'react-modal';
import styles from '../../../../public/main/jStyles.js';
import {Button, CheckBox, CloseIcon, DateTime, Form, FormField, Footer, Header, Heading, Label, Layer, NumberInput, SearchInput, Select, TextInput} from 'grommet'
import billsQuery from '../../containers/BillsContainer.jsx';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

class AddBillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:1,
      bill_category_id:0,
      bill_category_description:'',
      description:'',
      amount:'',
      due_date:'',
      paid:false,
      paid_date:'',
      alert:false
    }
    this.handleBillCategoryChange = this.handleBillCategoryChange.bind(this);
    this.handleBillAmountChange = this.handleBillAmountChange.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleDescriptionType = this.handleDescriptionType.bind(this);
    this.handleDescriptionSelect = this.handleDescriptionSelect.bind(this);
    this.handleAlertChange = this.handleAlertChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  
  handleBillCategoryChange(e) {
    let categoryID = this.props.billCategories.filter(categoryObj => categoryObj.name === e.value)[0].id;
    this.setState({bill_category_description:e.value});
    this.setState({bill_category_id:categoryID});
  }

  handleDescriptionType(e) {
    this.setState({description:e.target.value})
  }

  handleDescriptionSelect(e) {
    this.setState({description:e.suggestion})
  }

  handleBillAmountChange(e) {
    this.setState({amount:e.target.value})
  }

  handleDueDateChange(e) {
    this.setState({due_date:e})
  }
  
  handleAlertChange(e) {
    this.setState({alert: !this.state.alert});
  }
  
  handleAddClick() {
    this.props.handleFormToggle();
    let variables = {
      user_id:this.state.user_id,
      bill_category_id:this.state.bill_category_id,
      description:this.state.description,
      amount:this.state.amount,
      due_date:this.state.due_date,
      paid:this.state.paid,
      paid_date:this.state.paid_date,
      alert:this.state.alert
    }
    this.props.mutate({
      variables: variables
    }).then(({ data }) => {
        this.setState({
          user_id:1,
          bill_category_id:'',
          bill_category_description:'',
          description:'',
          paind: false,
          amount:'$0.00',
          due_date:'',
        });
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }

  render() {
    if (this.props.billFormToggle) {
      return (
        <Layer 
          closer='true'
          onClose={this.props.handleFormToggle}
          flush="true"
          overlayClose="true"
        >
        <Form style={{padding:'10%'}}>
          <Header>
            <Heading tag='h3' strong='true'>Enter bill details:</Heading>
          </Header>
          <Heading tag='h4' margin='small'>Bill Category:
            <Select 
              placeHolder='Select Category'
              inline={false}
              multiple={false}
              options={this.props.billCategories ?  this.props.billCategories.map(category => category.name): null}
              value={this.state.bill_category_description}
              onChange={this.handleBillCategoryChange}
            />
          </Heading>
          <Heading tag='h4' margin='medium'>Bill Description:
            <div>
              <SearchInput
                value = {this.state.description}
                placeHolder='Enter Description'
                suggestions={this.props.bills ? this.props.bills.map(bill => bill.description) : null}
                onSelect = {this.handleDescriptionSelect}
                onDOMChange = {this.handleDescriptionType}
              />
              </div>
          </Heading>
          <Heading tag='h4' margin='small'>Bill Amount:
            <div>
            <NumberInput 
              placeHolder='Enter Amount'
              value = {this.state.amount} 
              onChange = {this.handleBillAmountChange}
              min = {0.00}
            />
              </div>
          </Heading>
          <Heading tag='h4'  margin='small'>Bill Due Date:
          <div>
            <DateTime id='id'
                name='name'
                format='M/D/YYYY'
                step={5}
                onChange={this.handleDueDateChange}
                value={this.state.due_date} 
            />
            </div>
          </Heading>
          <Footer pad={{"vertical": "medium"}}>
            <Button label='Add'
              type='submit'
              primary={true}
              onClick={this.handleAddClick} 
              style={{backgroundColor:'#49516f', color:'white', width: '130px', fontSize:'20px', padding:'6px 12px', border:'none'}}
            />
          </Footer>
        </Form>
      </Layer>)
  } else { 
    return (<div></div>)
  }
  }
}

const createBill = gql`
  mutation createBill($user_id: Int!, $bill_category_id: Int!, $description: String!, $amount: Float!, $due_date: Date!, $paid: Boolean) {
    createBill(user_id: $user_id, bill_category_id: $bill_category_id, description: $description, amount: $amount, due_date: $due_date, paid:$paid) {
      id
    }
  }`;


export default graphql(createBill, {
  options: {
    refetchQueries: [
      'BILLS_QUERY'
    ],
  }
})(AddBillForm);