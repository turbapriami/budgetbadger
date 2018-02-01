import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';

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
          <div>
            <FormField>
              <TextInput
                placeHolder="Description"
                name='name'
                value={this.props.form.name}
                onDOMChange={this.props.handleForm}
              />
              <TextInput
                placeHolder="Amount"
                name='amount'
                value={this.props.form.amount}
                onDOMChange={this.props.handleForm}
              />
              <TextInput
                placeHolder="Type"
                name='type'
                value={this.props.form.type}
                onDOMChange={this.props.handleForm}
              />
            </FormField>
          </div>
        </AccordionPanel>
      </Accordion>
    )
  }

}


export default NewTransaction