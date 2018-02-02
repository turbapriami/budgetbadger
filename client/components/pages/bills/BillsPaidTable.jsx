import React, { Component } from 'react';
import { Columns, Box, Button, Section, Heading, Paragraph, Table, TableHeader, TableRow, Timestamp} from 'grommet';
import styles from '../../../../public/main/jStyles';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import BillsPaidTableItem from './BillsPaidTableItem.jsx';

class BillsPaidTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billFormToggle: false,
      sortIndex: 0,
      sortAscending: false,
    };
    this.handleSortClick = this.handleSortClick.bind(this);
  }

  handleSortClick(e) {
    let sortIdx = e;
    if (sortIdx < 5) {
      if (sortIdx === this.state.sortIndex) {
        this.setState({ sortAscending: !this.state.sortAscending }, () => {
          this.props.sortBills(
            true,
            this.state.sortIndex,
            !this.state.sortAscending
          );
        });
      } else {
        this.setState({ sortIndex: sortIdx }, () => {
          this.props.sortBills(
            true,
            this.state.sortIndex,
            !this.state.sortAscending
          );
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Columns size="large" justify="center">
          <Section style={{ width: '1030px' }}>
            <Heading
              align="left"
              margin="small"
              strong="true"
              style={{ fontSize: '30px' }}
            >
              Paid{' '}
            </Heading>
          </Section>
          <Table responsive="true">
            <TableHeader
              labels={[
                'Bill Description',
                'Category',
                'Due Date',
                'Paid Date',
                'Amount',
                'Action',
              ]}
              sortIndex={this.state.sortIndex}
              sortAscending={this.state.sortAscending}
              onSort={this.handleSortClick}
            />
            <tbody>
              {this.props.bills
                ? this.props.bills
                    .filter(bill => bill.paid === true)
                    .map((bill, j) =>
                      <BillsPaidTableItem key={j} bill={bill} />
                    )
                : null}
            </tbody>
          </Table>
        </Columns>
      </div>
    );
  }
}

export default BillsPaidTable;