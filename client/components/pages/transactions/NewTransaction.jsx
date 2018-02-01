import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import DateTime from 'grommet/components/DateTime';
import Button from 'grommet/components/Button';

class NewTransaction extends Component {
  constructor() {
    super()
    this.state = {
      forms: {

      }
    }
    // this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <Accordion>
        <AccordionPanel heading="Add a transaction">
          <div style={{width: "350px"}}>
            <FormField>
              <DateTime id='id'
                name='date'
                format='YYYY-M-D'
                value={this.props.form.date}
                onChange={(value) => this.props.handleForm('date', value)} />
              <TextInput
                placeHolder="Type"
                name='type'
                value={this.props.form.type}
                onDOMChange={this.props.handleForm}
              />
              <TextInput
                placeHolder="Category"
                name='category'
                value={this.props.form.category}
                onDOMChange={this.props.handleForm}
              />
              <TextInput
                placeHolder="Description"
                name='name'
                value={this.props.form.name}
                onDOMChange={this.props.handleForm}
              />
              <div/>
              <TextInput
                placeHolder="Amount"
                name='amount'
                value={this.props.form.amount}
                onDOMChange={this.props.handleForm}
              />
              <Button label='Label'
                onClick={this.props.submitForm}
                type='submit' />
              <div/>
            </FormField>
          </div>
        </AccordionPanel>
      </Accordion>
    )
  }

}


export default NewTransaction