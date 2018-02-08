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
      dateField: ''
    }
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
                options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                value={undefined}
                // onChange={...} 
              />
            </FormField>
            <FormField>
              <Select 
                placeHolder='All'
                inline={false}
                multiple={false}
                onSearch={false}
                options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
                value={undefined}
                // onChange={...} 
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