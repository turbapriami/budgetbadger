import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import DateTime from 'grommet/components/DateTime';

class GoalForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formActive: false,
      dateField: '',
      accountField: [],
      categoryField: []
    }
    this.handleAccountField = this.handleAccountField.bind(this)
    this.handleCategoryField = this.handleCategoryField.bind(this)
  }

  handleAccountField(e) {
    this.setState({
      accountField: [...this.state.accountField, e.value]
    })
  }

  handleCategoryField(e) {
    this.setState({
      categoryField: [...this.state.categoryField, e.value]
    })
  }

  render() {
    if (this.state.formActive) {
      return (
        <Layer 
          overlayClose={true}
          flush={false}
          closer={true}
          onClose={()=> {this.setState({formActive: false})}}
        >
          <Form>
            <FormField>
              <TextInput 
                placeHolder='Description'
              />
            </FormField>
            <FormField>
              <NumberInput
                placeHolder='Amount'
                min={0}
              />
            </FormField>
            <FormField>
              <DateTime
                format='YYYY-MM-DD'
                onChange={(e)=> {this.setState({dateField: e})}}
                value={this.state.dateField}
              />
            </FormField>
            <FormField>
              <Select 
                placeHolder='All'
                inline={false}
                multiple={false}
                onSearch={false}
                options={['Plaid Checking', 'PlaidSavings', 'Plaid CD', 'Plaid Credit Card']}
                value={this.state.accountField}
                onChange={(e)=> {this.handleAccountField(e)}}
              />
            </FormField>
            <FormField>
              <Select 
                placeHolder='All'
                inline={false}
                multiple={false}
                onSearch={false}
                options={['Food and Drink', 'Payment', 'Transfer', 'Travel']}
                value={this.state.categoryField}
                onChange={(e)=> {this.handleCategoryField(e)}}
              />
            </FormField>
          </Form>
        </Layer>
      )
    } else {
      return (
        <Button 
          label='Add Goal'
          primary={true}
          onClick={()=> {this.setState({formActive: true})}}
          style={{
            backgroundColor: '#49516f',
            color: 'white',
            width: '130px',
            fontSize: '20px',
            padding: '6px 12px',
            border: 'none',
          }}
        />
      )
    }
  }
}

export default GoalForm