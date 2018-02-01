import React, { Component } from 'react';
import { Columns, Box, Button, Section, Heading, Paragraph, Table, TableHeader, TableRow, Timestamp} from 'grommet';
import styles from '../../../../public/main/jStyles';
import { graphql, compose, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import BillsPaidTableItem from './BillsPaidTableItem.jsx';

class BillsPaidTable extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
      return (
        <div>
          <Columns
              size = 'large'
              masonry = {true}
              justify = 'center'
          >
            <Section style={{width:'1030px'}}>
              <Heading
                align = 'left'
                margin = 'small'
                strong = 'true'
                style = {{fontSize:'30px'}}
              >
                Paid 
              </Heading>
            </Section>
            <Table
              responsive = 'true'
            >
              <TableHeader labels={['Bill Description', 'Category','Due Date', 'Paid Date', 'Amount','']}
                sortIndex={0}
                sortAscending={true} />
              <tbody>
                {this.props.bills ? this.props.bills.filter(bill => bill.paid === true).map((bill) => 
                (<BillsPaidTableItem bill={bill}/>)
                ): null}
              </tbody>
            </Table>
          </Columns>
        </div>)
  }
}

  export default BillsPaidTable
