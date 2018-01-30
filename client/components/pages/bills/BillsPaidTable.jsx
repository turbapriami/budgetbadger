import React, { Component } from 'react';
import { Columns, Box, Button, Section, Heading, Paragraph, Table, TableHeader, TableRow, Timestamp} from 'grommet';
import styles from '../../../../public/main/jStyles';

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
                <TableHeader labels={['Bill Description', 'Category', 'Paid Date', 'Amount','']}
                  sortIndex={0}
                  sortAscending={true} />
                <tbody>
                  {this.props.bills ? this.props.bills.filter(bill => bill.paid).map((bill) => 
                  (<TableRow>
                    <td>
                      {bill.description}
                    </td>
                    <td>
                      {bill.bill_category[0].name}
                    </td>
                    <td>
                      <Timestamp value={`${bill.paid_date}`}/>
                    </td>
                    <td>
                      ${bill.amount}
                    </td>
                    <td>
                    <Button
                      label='Mark Unpaid'
                      onClick={()=>{console.log('Mark Unpaid')}}
                      primary={false} 
                      hoverIndicator={{background: 'neutral-4-a'}}
                      style={{backgroundColor:'grey',color:'white', border:'none', fontSize:'18px', padding:'6px'}}
                      />
                    </td>
                  </TableRow>)
                  ): null}
                </tbody>
              </Table>
            </Columns>
          </div>)
    }
  

}

export default BillsPaidTable;