import { Value, CurrencyIcon, Headline, Section, Box, Button, CheckBox, CloseIcon, Columns, DateTime, Form, FormField, Footer, Header, Heading, Label, Layer, NumberInput, SearchInput, Select, TextInput} from 'grommet'
import React from 'react';
import identity from 'lodash'
import moment from 'moment';

const TransactionSummary = (props) => {

  const convertName = (name) => {
    return name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/0-9\s]/gi, '')
  }

  const calculateSpend = (name, transactions, filter = identity) => {
    name = convertName(name);
    return transactions.reduce((a, b) => {
      let currName = convertName(b.name)
      if (filter(b) && currName.includes(name)) {
        a += b.amount;
      }
      return a;
    }, 0)
  }

  return (
    <Layer
    closer="true"
    padding="small"
    flush="true"
    overlayClose="true"
    >
    <Section>
      <Box align='center'
        justify='center'
        pad='large'
        margin='large'
        colorIndex='light-2'>
        <Headline margin='none' align='center' style={{fontSize: "25px"}} >
          Spending Summary
          <p />
        </Headline>
        <Value 
          value={calculateSpend('UberSFPOOL', props.transactions, (a) => {
            const date = moment().subtract(30, 'days');
            return moment(a.date) > date;
          })}
          icon={<CurrencyIcon />}
          label='Last 30 days'
          units='$' />
          <p />
        <Value 
          value={
            calculateSpend('UberSFPOOL', props.transactions, (a) => {
              const date = moment().subtract(180, 'days');
              return moment(a.date) > date;
            })
          }
          icon={<CurrencyIcon />}
          label='Last 6 months'
          units='$' />
          <p />
        <Value 
          value={
            calculateSpend('UberSFPOOL', props.transactions, (a) => {
              const date = moment().subtract(360, 'days');
              return moment(a.date) > date;
            })
          }
          icon={<CurrencyIcon />}
          label='Last 12 Months'
          units='$' />
      </Box>
    </Section>

    </Layer>
  )

}

export default TransactionSummary;