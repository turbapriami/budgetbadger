import React, { Component } from 'react';
import { Accordion,AccordionPanel, Actions, Anchor, Box, Button, CheckmarkIcon, Columns, EditIcon, Form, Label, Section, TrashIcon, Header, Heading , Layer, Menu, MoreIcon, Paragraph, Table, TableHeader, TableRow, Toast} from 'grommet';
import { graphql, compose, withApollo } from 'react-apollo';
import moment from 'moment';

class BillPaymentHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.billPaymentHistoryToggle) {
      return (
        <div>
          <Layer
            closer="true"
            onClose={this.props.handleBillHistoryToggle}
            flush="true"
            overlayClose="true"
          >
            <Form style={{width: '875px', padding: '5%', overflowY:'auto', margin:'auto'}}>
              <Header>
                <Heading tag="h3" strong="true">Bill Details:</Heading>
              </Header>
              <Columns size="medium" maxCount={2} justify="center">
                <Box
                  align="stretch"
                  pad="none"
                  direction="column"
                  margin="small"
                  style={{ width: '180px' }}
                >
                  <Heading align="center" margin="none" strong="true" tag="h4">
                    BILL DESCRIPTION
                  </Heading>
                  <Paragraph size="small" align="center">
                    {this.props.selectedBill
                      ? this.props.selectedBill.bills[0].description
                      : ''}
                  </Paragraph>
                </Box>
                <Box
                  align="stretch"
                  pad="none"
                  direction="column"
                  margin="small"
                  style={{ width: '180px' }}
                >
                  <Heading align="center" margin="none" strong="true" tag="h4">
                    BILL CATEGORY
                  </Heading>
                  <Paragraph size="medium"  align="center">
                    {this.props.selectedBill.bills[0].bill_category[0].name}
                  </Paragraph>
                </Box>
                <Box
                  align="stretch"
                  pad="none"
                  direction="column"
                  margin="small"
                  style={{ width: '180px' }}
                >
                  <Heading align="center" margin="none" strong="true" tag="h4">
                    BILL START DATE
                  </Heading>
                  <Paragraph size="medium"  align="center">
                    {moment(this.props.selectedBill.bills[0].start_date).format(
                      'MMMM D, YYYY'
                    )}
                  </Paragraph>
                </Box>
                <Box
                  align="stretch"
                  pad="none"
                  direction="column"
                  margin="small"
                  style={{ width: '180px' }}
                >
                  <Heading align="center" margin="none" strong="true" tag="h4">
                    BILL END DATE
                  </Heading>
                  <Paragraph size="medium"  align="center">
                    {moment(this.props.selectedBill.bills[0].end_date).format(
                      'MMMM D, YYYY'
                    )}
                  </Paragraph>
                </Box>
                <Box
                  align="stretch"
                  pad="none"
                  direction="column"
                  margin="small"
                  style={{ width: '180px' }}
                >
                  <Heading align="center" margin="none" strong="true" tag="h4">
                    BILL LAST PAID DATE
                  </Heading>
                  <Paragraph size="medium">
                    {this.props.selectedBill.bills[0].last_paid_date
                      ? moment(
                          this.props.selectedBill.bills[0].last_paid_date
                        ).format('MMMM D, YYYY')
                      : 'No Payments made'}
                  </Paragraph>
                </Box>
                <Box
                  align="stretch"
                  pad="none"
                  direction="column"
                  margin="small"
                  style={{ width: '180px' }}
                >
                  <Heading align="center" margin="none" strong="true" tag="h4">
                    BILL RECURRENCE TYPE
                  </Heading>
                  <Paragraph size="medium" align="center">
                    {
                      this.props.selectedBill.bills[0].bill_recurrence[0]
                        .recurrence_type
                    }
                  </Paragraph>
                </Box>
                <Box
                  align="stretch"
                  pad="none"
                  direction="column"
                  margin="small"
                  style={{ width: '180px' }}
                >
                  <Heading align="center" margin="none" strong="true" tag="h4">
                    BILL ALERTS
                  </Heading>
                  <Paragraph size="medium"  align="center">
                    {this.props.selectedBill.bills[0].alert
                      ? 'Active'
                      : 'Inactive'}
                  </Paragraph>
                </Box>
              </Columns>
              {/* <Table>
                <thead>
                  <tr>
                    <th>
                      BILL DESCRIPTION
                    </th>
                    <th>
                      BILL CATEGORY
                    </th>
                    <th>
                      BILL START DATE
                    </th>
                    <th>
                      BILL END DATE
                    </th>
                    <th>
                      BILL LAST PAID DATE
                    </th>
                    <th>
                      BILL RECURRENCE TYPE
                    </th>
                    <th>
                      BILL ALERTS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow>
                    <td>
                      {this.props.selectedBill
                        ? this.props.selectedBill.bills[0].description
                        : ''}
                    </td>
                    <td>
                      {this.props.selectedBill.bills[0].bill_category[0].name}
                    </td>
                    <td>
                      {moment(
                        this.props.selectedBill.bills[0].start_date
                      ).format('MMMM D, YYYY')}
                    </td>
                    <td>
                      {moment(this.props.selectedBill.bills[0].end_date).format(
                        'MMMM D, YYYY'
                      )}
                    </td>
                    <td>
                      {this.props.selectedBill.bills[0].last_paid_date
                        ? moment(
                            this.props.selectedBill.bills[0].last_paid_date
                          ).format('MMMM D, YYYY')
                        : 'No Payments made'}
                    </td>
                    <td>
                      {
                        this.props.selectedBill.bills[0].bill_recurrence[0]
                          .recurrence_type
                      }
                    </td>
                    <td>
                      {this.props.selectedBill.bills[0].alert
                        ? 'Active'
                        : 'Inactive'}
                    </td>
                  </TableRow>
                </tbody>
              </Table> */}
              <Accordion>
                <AccordionPanel heading="Payment History">
                  <Table>
                    <thead>
                      <tr>
                        <th>
                          BILL DESCRIPTION
                        </th>
                        <th>
                          DATE PAID
                        </th>
                        <th>
                          AMOUNT PAID
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.UserBillPaymentHistory
                        ? this.props.UserBillPaymentHistory
                            .filter(billPayment => {
                              return (
                                billPayment.bills[0].id ===
                                  this.props.selectedBill.id && billPayment.paid
                              );
                            })
                            .map(bill =>
                              <TableRow>
                                <td>
                                  {bill.bills[0].description}
                                </td>
                                <td>
                                  {moment(bill.paid_date).format(
                                    'MMMM D, YYYY'
                                  )}
                                </td>
                                <td>
                                  ${bill.amount_paid}
                                </td>
                              </TableRow>
                            )
                        : 0}
                    </tbody>
                  </Table>
                </AccordionPanel>
              </Accordion>
            </Form>
          </Layer>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default BillPaymentHistory;
