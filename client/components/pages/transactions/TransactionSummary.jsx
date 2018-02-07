import { Split, Value, CurrencyIcon, Headline, Section, Box, Button, CheckBox, CloseIcon, Columns, DateTime, Form, FormField, Footer, Header, Heading, Label, Layer, NumberInput, SearchInput, Select, TextInput} from 'grommet'
import React from 'react';
import identity from 'lodash'
import moment from 'moment';
import SummaryChart from './SummaryChart.jsx';

const TransactionSummary = (props) => {

  // Below removes all whitespace and any special characters from a transactions description
  // This is because some transactions may belong to the same group, however the description
  // includes say a date, or some other numerical value.

  const convertName = (name) => {
    if (name) {
      return name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/0-9\s]/gi, '')
    }
  }

  // Below function generates total spend for some selected field, based on a filter
  // provided through a callback. This is what renders the table on the side.
  // Works for any selected field, namely, category, account, or date.

  const calculateSpend = (name, transactions, field, filter = identity) => {
    name = convertName(name);
    return transactions.reduce((a, b) => {
      let fieldValue = convertName(b[field])
      if (filter(b) && fieldValue.includes(name)) {
        a += Math.abs(b.amount);
      }
      return a;
    }, 0)
  }

  return (
    props.display ?
    <Layer
    closer={true}
    overlayClose={true}
    padding="small"
    flush={true}
    onClose={props.handleSummary}
    >
    <Split>
      <Box>
        <SummaryChart 
          transactions={props.transactions} 
          calculateSpend={calculateSpend} 
          summaryTransaction={props.summaryTransaction} 
          categories={props.categories} />
      </Box>
      <Box 
        align='center'
        justify='center'
        pad='large'
        margin='large'
        colorIndex='light-2'>
        <Headline margin='none' align='center' style={{fontSize: "25px"}} >
          Spending Summary: {props.summaryTransaction.name}
          <p />
        </Headline>
        <Value 
          value={calculateSpend(props.summaryTransaction.name, props.transactions, 'name', (a) => {
            const date = moment().subtract(30, 'days');
            return moment(a.date) > date;
          })}
          icon={<CurrencyIcon />}
          label='Last 30 days'
          units='$' />
          <p />
        <Value 
          value={
            calculateSpend(props.summaryTransaction.name, props.transactions, 'name', (a) => {
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
            calculateSpend(props.summaryTransaction.name, props.transactions, 'name', (a) => {
              const date = moment().subtract(360, 'days');
              return moment(a.date) > date;
            })
          }
          icon={<CurrencyIcon />}
          label='Last 12 Months'
          units='$' />
      </Box>
    </Split>
    </Layer>:
    null
  )

}

export default TransactionSummary;