import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import styles from '../../../../public/main/jStyles.js';
import {Split, Box, Button, CheckBox, CloseIcon, DateTime, Form, FormField, Footer, Header, Heading, Label, Layer, NumberInput, SearchInput, Select, TextInput} from 'grommet'

class NewTransaction extends Component {
  constructor() {
    super()
    this.state = {
      forms: {

      }
    }
  }
  render() {
    return (
      <Accordion>
        <AccordionPanel heading="Add a transaction">
          <Split
            fixed={false}
            separator={false}
            showOnResponsive='both'
            flex="both"
            >
          <Form style={{paddingLeft:'5%', paddingRight:'5%'}}>
          <Header>
            <Heading tag='h3' strong='true'>Enter Transaction Details:</Heading>
          </Header>
          <Box align="left">
            <Heading tag='h4' margin='small'>Transaction Category:
              <TextInput
                placeHolder="Category"
                name='category'
                value={this.props.form.category}
                onDOMChange={this.props.handleForm}
              />
            </Heading>
            <Heading tag='h4' margin='medium'>Transaction Description:
              <div>
                  <TextInput
                    placeHolder="Description"
                    name='name'
                    value={this.props.form.name}
                    onDOMChange={this.props.handleForm}
                  />
                </div>
            </Heading>
          </Box>
          <Box align="right">
            <Heading tag='h4' margin='small'>Bill Amount:
              <div>
              <NumberInput 
                placeHolder='Enter Amount'
                name='amount'
                value = {this.props.form.amount} 
                onChange = {this.props.handleForm}
                min = {0.00}
              />
                </div>
            </Heading>
            <Heading tag='h4'  margin='small'>Transaction Date:
            <div>
              <DateTime id='id'
                  name='date'
                  format='YYYY-MM-DD'
                  step={5}
                  onChange={(value) => this.props.handleForm('date', value)}
                  value={this.props.form.date} 
              />
              </div>
            </Heading>
            <Heading tag='h4'  margin='small'>Transaction Category:
            <div>
              <Select placeHolder='Account'
                name='account'
                options={this.props.accounts.map((a, i) => i + '. ' + a.bank_name)}
                value={this.props.form.account}
                onChange={({value}) => this.props.handleForm('account', value)} />
              </div>
            </Heading>
          </Box>
          <Footer pad={{"vertical": "medium"}}>
            <Button label='Submit'
              type='submit'
              primary={true}
              onClick={this.props.submitForm} 
              style={{backgroundColor:'#49516f', color:'white', width: '130px', fontSize:'20px', padding:'6px 12px', border:'none'}}
            />
          </Footer>
        </Form>
        </Split>
        </AccordionPanel>
      </Accordion>
    )
  }

}


export default NewTransaction