import React from 'react';
import ReactModal from 'react-modal';
import styles from '../../../../public/main/jStyles.js';
import { gql, graphql } from 'react-apollo';
import {Button, CheckBox, CloseIcon, DateTime, Form, FormField, Footer, Header, Heading, Label, NumberInput, SearchInput, Select, TextInput} from 'grommet'

class AddBillModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id:1,
      bill_category_id:'',
      description:'',
      amount:'',
      due_date:'',
      paid:'',
      paid_date:'',
      alert:'false'
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
    this.setState({bill_category_id:e.value},() => {console.log(this.state.bill_category_id)})
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
    this.setState({alert: !this.state.alert}, () => {console.log('alert change', this.state.alert)});
  }
  
  handleAddClick() {
    this.props.handleFormToggle();
    console.log('state on form submit', this.state);
    this.setState({
      user_id:1,
      bill_category_id:'',
      description:'',
      amount:'$0.00',
      due_date:'',
      paid:'',
      paid_date:'',
      alert:'false'
  });


  }

  render() {
    return (<ReactModal 
    isOpen={this.props.billFormToggle}
    contentLabel="Minimal Modal Example"
    onRequestClose={this.props.handleFormToggle}
    style={styles.addBillModal}
  >
    <Form>
      <div style = {{float:'right'}}>
        <Button 
          icon={<CloseIcon/>}
          onClick={this.props.handleFormToggle} 
        />
      </div>
      <Header>
        <Heading tag='h3' strong='true'>Enter bill details:</Heading>
      </Header>

      <Heading tag='h4' margin='small'>Bill Category:
        <Select placeHolder='Select Category'
          inline={false}
          multiple={false}
          // onSearch={this.handleBillCategoryChange}
          options={this.props.billCategories ?  this.props.billCategories.map(category => category.name): null}
          value={this.state.bill_category_id}
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
  </ReactModal>)
  }
}

export default AddBillModal;
