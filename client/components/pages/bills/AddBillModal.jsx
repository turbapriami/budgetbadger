import React from 'react';
import ReactModal from 'react-modal';
import styles from '../../../../public/main/jStyles.js';
import {Button, CheckBox,DateTime, Form, FormField, Footer, Header, Heading, Label, NumberInput, SearchInput, Select, TextInput} from 'grommet'

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
          alert:''
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
    this.setState({bill_category_id:e.value},()=>{console.log(this.state.bill_category_id);})
  }

  handleDescriptionType(e) {
    console.log('DescriptionTYpe', e.target.value)
    this.setState({description:e.target.value})
  }

  handleDescriptionSelect(e) {
    console.log('Description select',e.suggestion)
    this.setState({description:e.suggestion})
  }

  handleBillAmountChange(e) {
    this.setState({amount:e.target.value})
  }

  handleDueDateChange(e) {
    this.setState({due_date:e})
  }
  
  handleAlertChange(e) {
    console.log(e);
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
    onRequestClose={this.handleFormToggle}
    style={styles.addBillModal}
  >
    <Form>
      <Header>
        <Heading tag='h2' strong='true'>Enter bill details:</Heading>
      </Header>

      <Heading tag='h3'>Select Bill Category:</Heading>
        <Select placeHolder='Bill Category'
          inline={false}
          multiple={false}
          // onSearch={this.handleBillCategoryChange}
          options={['1', '2', '3', '4', '5', '6', '7', '8']}
          value={this.state.bill_category_id}
          onChange={this.handleBillCategoryChange}
        />


      <Heading tag='h3'>Bill Description:</Heading>
        <SearchInput
          value = {this.state.description}
          placeHolder='Enter Bill Description'
          suggestions={['Utilities', 'Entertainment', 'Other']}
          onSelect = {this.handleDescriptionSelect}
          onDOMChange = {this.handleDescriptionType}
        />

      <Heading tag='h3' margin='small'>Bill Amount:
        <NumberInput 
          value={this.state.amount} 
          onChange={this.handleBillAmountChange}
          style={{width:'25%', display:'block'}}
          min={0}
          />
      </Heading>


      <Heading tag='h3'  margin='small'>Bill Due Date:
        <DateTime id='id'
            name='name'
            format='M/D/YYYY'
            step={5}
            onChange={this.handleDueDateChange}
            value={this.state.due_date} 
        />
      </Heading>

      <Heading tag='h3'>Recieve Alerts:
        <CheckBox label='Recieve Alerts:'
          toggle={true}
          reverse={false}
          onChange={this.handleAlertChange}
        />
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