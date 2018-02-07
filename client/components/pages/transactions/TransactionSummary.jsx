import { Split, Value, CurrencyIcon, Headline, Section, Box, Button, CheckBox, CloseIcon, Columns, DateTime, Form, FormField, Footer, Header, Heading, Label, Layer, NumberInput, SearchInput, Select, TextInput} from 'grommet'
import React, { Component } from 'react';
import identity from 'lodash'
import moment from 'moment';
import SummaryChart from './SummaryChart.jsx';

class TransactionSummary extends Component {
  constructor(){
    super();
    this.state = {
      monthly: 0,
      biAnnual: 0,
      annual: 0,
    }
    this.convertName = this.convertName.bind(this);
    this.calculateSpend = this.calculateSpend.bind(this);
  }
  // Below removes all whitespace and any special characters from a transactions description
  // This is because some transactions may belong to the same group, however the description
  // includes say a date, or some other numerical value.

  convertName (name) {
    if (name) {
      return name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/0-9\s]/gi, '')
    }
  }

  // Below function generates total spend for some selected field, based on a filter
  // provided through a callback. This is what renders the table on the side.
  // Works for any selected field, namely, category, account, or date.

  calculateSpend (name, transactions, field, filter = identity) {
    name = this.convertName(name);
    return transactions.reduce((a, b) => {
      let fieldValue = this.convertName(b[field])
      if (filter(b) && fieldValue.includes(name)) {
        a += Math.abs(b.amount);
      }
      return a;
    }, 0)
  }

  // Initializes spending table with total spend for its corresponding period

  initializeTable (name, field, filter = identity) {
    const monthly = this.calculateSpend(name, this.props.transactions, field, (a) => {
      if (filter(a)) {
        const date = moment().subtract(30, 'days');
        return moment(a.date) > date;
      }
    })
    const biAnnual = this.calculateSpend(name, this.props.transactions, field, (a) => {
      if (filter(a)) {
        const date = moment().subtract(180, 'days');
        return moment(a.date) > date;
      }
    })
    const annual = this.calculateSpend(name, this.props.transactions, field, (a) => {
      if (filter(a)) {
        const date = moment().subtract(360, 'days');
        return moment(a.date) > date;
      }
    })

    this.setState({
      monthly,
      biAnnual,
      annual
    })
  } 

  componentWillReceiveProps(nextProps) {
    this.initializeTable(nextProps.summaryTransaction.name, 'name');
  }


  render() {
    return (
      this.props.display ?
      <Layer
      closer={true}
      overlayClose={true}
      padding="small"
      flush={true}
      onClose={this.props.handleSummary}
      >
      <Split>
        <Box>
          <SummaryChart 
            transactions={this.props.transactions} 
            calculateSpend={this.calculateSpend} 
            summaryTransaction={this.props.summaryTransaction} 
            categories={this.props.categories} />
        </Box>
        <Box 
          align='center'
          justify='center'
          pad='large'
          margin='large'
          colorIndex='light-2'>
          <Headline margin='none' align='center' style={{fontSize: "25px"}} >
            Spending Summary: {this.props.summaryTransaction.name}
            <p />
          </Headline>
          <Value 
            value={this.state.monthly}
            icon={<CurrencyIcon />}
            label='Last 30 days'
            units='$' />
            <p />
          <Value 
            value={this.state.biAnnual}
            icon={<CurrencyIcon />}
            label='Last 6 months'
            units='$' />
            <p />
          <Value 
            value={this.state.annual}
            icon={<CurrencyIcon />}
            label='Last 12 Months'
            units='$' />
        </Box>
      </Split>
      </Layer>:
      null
    )
  }

}

export default TransactionSummary;