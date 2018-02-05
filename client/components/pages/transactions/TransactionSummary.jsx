import {Section, Box, Button, CheckBox, CloseIcon, Columns, DateTime, Form, FormField, Footer, Header, Heading, Label, Layer, NumberInput, SearchInput, Select, TextInput} from 'grommet'
import React from 'react';
import identity from 'lodash'

const TransactionSummary = (props) => {

  const convertName = (name) => {
    return name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/0-9\s]/gi, '')
  }

  const calculateSpend = (transactions, name,  filter = identity) => {
    name = convertName(name);
    return transactions.reduce((a, b) => {
      let currName = convertName(b.name)
      if (filter(b) && currName.includes(name)) {
        a += b.amount;
      }
      return a;
    }, 0)
  }

  console.log(calculateSpend(props.transactions, 'Uber 063015 SF**POOL*&*', (a) => a.amount > 5.4))
  return (
    <Layer
    closer="true"
    
    flush="true"
    overlayClose="true"
    >
    <Section>
      <Header>
        <Heading tag="h3" strong="true">Summary: Test</Heading>
      </Header>
    </Section>
    <Section>

    BERERAISNDIAJSD
    </Section>

    </Layer>
  )

}

export default TransactionSummary;