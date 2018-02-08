import React, { Component } from 'react';
import {Columns, Box, Button, Section, Heading, Paragraph, Split, Table, TableHeader, TableRow, Timestamp, Toast} from 'grommet';
import AddBillForm from '../bills/AddBillForm.jsx';
import { gql, graphql } from 'react-apollo';
import BillsDueTableItem from '../bills/BillsDueTableItem.jsx';

class BillsDueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billFormToggle: false,
      sortIndex: 0,
      sortAscending: false,
      selectedBill: {},
    };
    this.handleFormToggle = this.handleFormToggle.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleBillSelect = this.handleBillSelect.bind(this);

  }
  
  handleBillSelect(bill) {
    console.log('bill selected', bill);
    this.setState({selectedBill: bill});
  }

  handleSortClick(e) {
    let sortIdx = e;
    if (e < 4) {
      if (sortIdx === this.state.sortIndex) {
        this.setState({ sortAscending: !this.state.sortAscending }, () => {
          this.props.sortBills(false, this.state.sortIndex, !this.state.sortAscending
          );
        });
      } else {
        this.setState({ sortIndex: sortIdx }, () => {
          this.props.sortBills(false, this.state.sortIndex, !this.state.sortAscending);
        }); 
      }
    }
  }

  handleFormToggle() {
    this.setState({ billFormToggle: !this.state.billFormToggle });
  }

  render() {
    return (
      <div>
        <Columns masonry={false}
          maxCount={2}
          size='small'
          justify="center"
          >
        <Box align="end" size="large" direction="row" pad="none" margin="none" style={{marginLeft: '70%'}}>
          <Box align="end" margin="small">
            <Button
              label="Add Bill"
              onClick={this.handleFormToggle}
              primary={false}
              hoverIndicator={{ background: 'neutral-4-a' }}
              style={{
                backgroundColor: '#49516f',
                color: 'white',
                width: '130px',
                fontSize: '20px',
                padding: '6px 12px',
                border: 'none',
              }}
              box="true"
            />
          </Box>
          <Box align="end" margin="small">
            <Button
              label="Add Category"
              onClick={this.handleFormToggle}
              primary={false}
              hoverIndicator={{ background: 'neutral-4-a' }}
              style={{
                backgroundColor: '#49516f',
                color: 'white',
                width: '180px',
                fontSize: '20px',
                padding: '6px 12px',
                border: 'none',
              }}
              box="true"
            />
          </Box>
          </Box>
        </Columns>
        <Columns size="large" masonry={true} justify="center">
          <Section style={{ width: '1030px' }}>
            <AddBillForm
              bills={this.props.bills}
              billCategories={this.props.billCategories}
              billFormToggle={this.state.billFormToggle}
              handleFormToggle={this.handleFormToggle}
            />
            <Heading
              align="left"
              margin="small"
              strong="true"
              style={{ fontSize: '30px' }}
            >
              Due
            </Heading>
          </Section>
          <Table responsive="true">
            <TableHeader
              labels={[
                'Bill Description',
                'Category',
                'Due Date',
                'Amount',
                'Actions',
              ]}
              sortIndex={this.state.sortIndex}
              sortAscending={this.state.sortAscending}
              onSort={this.handleSortClick}
              style={{ align: 'center' }}
            />
            <tbody>
              {this.props.bills
                ? this.props.bills
                    .filter(bill => bill.paid === false)
                    .map((bill, i) =>
                      <BillsDueTableItem
                        handleBillSelect = {this.handleBillSelect}
                        key={i}
                        bill={bill}
                        selectedBill = {this.state.selectedBill}
                        bills={this.props.bills}
                        billCategories={this.props.billCategories}
                      />
                    )
                : null}
            </tbody>
          </Table>
        </Columns>
      </div>
    );
  }
}

export default BillsDueTable;
