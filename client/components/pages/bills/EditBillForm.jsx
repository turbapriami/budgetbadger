import React from 'react';
import ReactModal from 'react-modal';
import styles from '../../../../public/main/jStyles.js';
import {Box, Button, CheckBox, CloseIcon, Columns, DateTime, Form, FormField, Footer, Header, Heading, Label, Layer, NumberInput, RadioButton, SearchInput, Select, TextInput} from 'grommet'
import { graphql, compose, withApollo } from 'react-apollo';
import {UPDATE_BILL, CREATE_BILL_CATEGORY} from '../../../queries.js';
import gql from 'graphql-tag';

var convertDateFormat = date => {
  let formattedDate = new Date(date);
  return (formattedDate.getMonth() + 1) + '/' + formattedDate.getDate() + '/' +  formattedDate.getFullYear();
};

var getInputCategoryID = (value, billCategoryObjs) => {
  let filteredCategories = billCategoryObjs.filter(billCategoryObj => billCategoryObj.name.toLowerCase() === value.toLowerCase());
  return filteredCategories.length > 0 ? filteredCategories[0].id : 0;
}

class EditBillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: window.localStorage.getItem('user_id'),
      bill_category_id: 0,
      bill_category_description: '',
      description: '',
      amount: '',
      bill_recurrence_id: 0,
      start_date: '',
      end_date: '',
      last_paid_date: null,
      alert: false,
      bill_status: true,
      bill_categories: [],
      bill_descriptions: []
    };

    this.handleBillCategoryChange = this.handleBillCategoryChange.bind(this);
    this.handleBillAmountChange = this.handleBillAmountChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleDescriptionType = this.handleDescriptionType.bind(this);
    this.handleDescriptionSelect = this.handleDescriptionSelect.bind(this);
    this.handleAlertChange = this.handleAlertChange.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleCancelUpdateClick = this.handleCancelUpdateClick.bind(this);
    this.handleRecurrenceChange = this.handleRecurrenceChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextPropsAAA', nextProps);
      this.setState({     
        alert:nextProps.selectedBill.bills[0].alert,
        amount:nextProps.selectedBill.bills[0].amount,
        bill_category_id: nextProps.selectedBill.bills[0].bill_category[0].id,
        bill_category_description: nextProps.selectedBill.bills[0].bill_category[0].name,
        description:nextProps.selectedBill.bills[0].description,
        due_date:nextProps.selectedBill.due_date,
        id: nextProps.selectedBill.id,
        paid: nextProps.selectedBill.paid,
        paid_date: nextProps.selectedBill.paid_date,
        user_id: nextProps.selectedBill.user_id,
        bill_recurrence_id: nextProps.selectedBill.bills[0].bill_recurrence_id,
        bill_recurrence_type: nextProps.selectedBill.bills[0].bill_recurrence[0].recurrence_type,
        start_date: nextProps.selectedBill.bills[0].start_date,
        end_date: nextProps.selectedBill.bills[0].end_date,
        bill_categories: this.props.billRecurrenceTypes
      }, ()=> {console.log('this.state after compwillrecprops', this.state)});
  }

  handleBillCategoryChange(e) {
    let selectedCategoryName = e.value;
    let categoryID = this.props.billCategories.filter(
      categoryObj =>
        categoryObj.name.toLowerCase() === selectedCategoryName.toLowerCase()
    )[0].id;
    this.setState({ bill_category_description: selectedCategoryName });
    this.setState({ bill_category_id: categoryID });
  }

  handleRecurrenceChange(e) {
    let selectedRecurrence = e.value;
    let recurrenceID = this.props.billRecurrenceTypes.filter(
      billRecurrenceType =>
        billRecurrenceType.recurrence_type.toLowerCase() ===
        selectedRecurrence.toLowerCase()
    )[0].id;
    this.setState({ bill_recurrence_type: selectedRecurrence });
    this.setState({ bill_recurrence_id: recurrenceID });
  }

  handleDescriptionType(e) {
    this.setState({ description: e.target.value });
  }

  handleDescriptionSelect(e) {
    this.setState({ description: e.suggestion });
  }

  handleBillAmountChange(e) {
    this.setState({ amount: e.target.value });
  }

  handleStartDateChange(e) {
    this.setState({ start_date: e });
  }

  handleEndDateChange(e) {
    this.setState({ end_date: e });
  }

  handleRecurrenceChange(e) {
    this.setState({ bill_recurrence_id: e.target.id });
  }

  handleAlertChange(e) {
    this.setState({ alert: !this.state.alert });
  }
  

  handleCancelUpdateClick(e) {
    this.setState({
      user_id: window.localStorage.getItem('user_id'),
      bill_category_id: 0,
      bill_category_description: '',
      description: '',
      amount: '',
      bill_recurrence_id: 0,
      start_date: '',
      end_date: '',
      last_paid_date: null,
      alert: false,
      bill_status: true,
      bill_categories: [],
      bill_descriptions: []
    });
    this.props.handleFormToggle();
  }

  handleUpdateClick(e) {
  //   e.preventDefault();
  //   if (this.state.bill_category_id !== 0) {
  //     var variables = {
  //       id: this.state.id,
  //       user_id: this.state.user_id,
  //       bill_category_id: this.state.bill_category_id,
  //       description: this.state.description,
  //       amount: this.state.amount,
  //       due_date: this.state.due_date,
  //       paid: this.state.paid,
  //       paid_date: this.state.paid_date,
  //       alert: this.state.alert,
  //     };
  //     this.props
  //       .UPDATE_BILL({
  //         variables: variables,
  //       })
  //       .then(({ data }) => {
  //         console.log('successfully edited Bill', data);
  //       })
  //       .catch(error => {
  //         console.log('there was an error sending the query', error);
  //       });
  //   } else {
  //     this.props.CREATE_BILL_CATEGORY({
  //       variables: { 
  //         name: this.state.bill_category_description,
  //         user_id: this.state.user_id
  //       }
  //     }).then(({ data }) => {
  //       var updatedBillVariables = {
  //         id: this.state.id,
  //         user_id: this.state.user_id,
  //         bill_category_id: data.createBillCategory.id,
  //         description: this.state.description,
  //         amount: this.state.amount,
  //         due_date: new Date(this.state.due_date),
  //         paid: this.state.paid,
  //         paid_date: new Date(this.state.paid_date),
  //         alert: this.state.alert,
  //       };
  //       this.props.UPDATE_BILL({
  //         variables: updatedBillVariables,
  //       }).then(({ data }) => {
  //         console.log('successfully edited Bill', data);
  //       }).catch(error => {
  //         console.log('there was an error editing Bill', error);
  //       });
  //   })
  // }
  this.props.handleFormToggle();
}

  render() {
    if (this.props.billEditFormToggle) {
      return (
        <Layer
          closer="true"
          onClose={this.props.handleFormToggle}
          flush="true"
          overlayClose="true"
        >
          <Form style={{ padding: '10%' }}>
            <Header>
              <Heading tag="h3" strong="true">Enter bill details:</Heading>
            </Header>
            <Heading tag="h4" margin="small">
              Bill Category:
              <div>
                <Select
                  placeHolder="None"
                  options={this.props.billCategories.map(
                    billObj => billObj.name
                  )}
                  value={this.state.bill_category_description}
                  onChange={this.handleBillCategoryChange}
                />
              </div>
            </Heading>
            <Heading tag="h4" margin="medium">
              Bill Description:
              <div>
                <SearchInput
                  value={this.state.description}
                  placeHolder="Enter Description"
                  suggestions={this.state.bill_descriptions}
                  onSelect={this.handleDescriptionSelect}
                  onDOMChange={this.handleDescriptionType}
                />
              </div>
            </Heading>
            <Heading tag="h4" margin="small">
              Bill Amount:
              <div>
                <NumberInput
                  placeHolder="Enter Amount"
                  value={this.state.amount}
                  onChange={this.handleBillAmountChange}
                  min={0.0}
                />
              </div>
            </Heading>
            <Heading tag="h4" margin="small">
              Bill Start Date(First Due Date):
              <div>
                <DateTime
                  id="id"
                  name="name"
                  format="M/D/YYYY"
                  step={5}
                  onChange={this.handleStartDateChange}
                  value={convertDateFormat(this.state.start_date)}
                />
              </div>
            </Heading>
            <Heading tag="h4" margin="small">
              Bill End Date(Last Due Date):
              <div>
                <DateTime
                  id="id"
                  name="name"
                  format="M/D/YYYY"
                  step={5}
                  onChange={this.handleEndDateChange}
                  value={convertDateFormat(this.state.end_date)}
                />
              </div>
            </Heading>
            <Heading tag="h4" margin="small">
              Recurrence:
              <div>
                <Select
                  placeHolder="Select Recurrence Pattern"
                  options={this.props.billRecurrenceTypes.map(
                    (billRecurrenceType, i) =>
                      billRecurrenceType.recurrence_type
                  )}
                  value={this.state.bill_recurrence_type}
                  onChange={this.handleRecurrenceChange}
                />
              </div>
            </Heading>
            <Heading tag="h4" margin="small">
              Alert
              <div>
                <CheckBox
                  toggle={true}
                  reverse={true}
                  onChange={this.handleAlertChange}
                />
              </div>
            </Heading>

            <Footer pad={{ vertical: 'medium' }}>
              <Columns justify="center" size="small" maxCount="2">
                <Box align="center" pad="small">
                  <Button
                    label="Cancel"
                    primary={true}
                    onClick={this.handleCancelUpdateClick}
                    style={{
                      backgroundColor: '#49516f',
                      color: 'white',
                      width: '130px',
                      fontSize: '20px',
                      padding: '6px 12px',
                      border: 'none',
                    }}
                  />
                </Box>
                <Box align="center" pad="small">
                  <Button
                    label="Add"
                    primary={true}
                    onClick={this.handleUpdateClick}
                    style={{
                      backgroundColor: '#49516f',
                      color: 'white',
                      width: '130px',
                      fontSize: '20px',
                      padding: '6px 12px',
                      border: 'none',
                    }}
                  />
                </Box>
              </Columns>
            </Footer>
          </Form>
        </Layer>
      );
    } else {
      return <div />;
    }
  }
}

export default compose(
  graphql(CREATE_BILL_CATEGORY, { name: 'CREATE_BILL_CATEGORY' }), 
  graphql(UPDATE_BILL, {name: 'UPDATE_BILL'})
)(EditBillForm);