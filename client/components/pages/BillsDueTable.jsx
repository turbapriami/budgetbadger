import React, { Component } from 'react';
import { Columns, Box, Button, Section, Heading, Paragraph, Table, TableHeader, TableRow, Timestamp, Toast} from 'grommet';
import styles from '../../../public/main/jStyles';

class BillsDueTable extends Component {
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
                <Button
                  label='Add Bill'
                  href='#'
                  primary={false}
                  hoverIndicator={{background: 'neutral-4-a'}}
                  style={{backgroundColor:'#49516f', color:'white', width: '130px', fontSize:'20px', padding:'6px 12px', border:'none', marginLeft:'850px'}}
                  box='true'
                />
                <Heading
                  align = 'left'
                  margin = 'small'
                  strong = 'true'
                  style = {{fontSize:'30px'}}
                >
                  Due 
                </Heading>
              </Section>
              <Table
                responsive = 'true'
              >
                <TableHeader labels={['Bill Description', 'Category', 'Due Date', 'Amount','']}
                  sortIndex={0}
                  sortAscending={true} />
                <tbody>
                  {this.props.billsDue.map((bill) => 
                  (<TableRow>
                    <td>
                      {console.log('bill',bill)}
                      {bill.description}
                    </td>
                    <td>
                      {bill.bill_category[0].name}
                    </td>
                    <td>
                      <Timestamp value={`${bill.due_date}`}/>
                    </td>
                    <td>
                      ${bill.amount}
                    </td>
                    <td>
                    <Button
                      label='Mark Paid'
                      href='#'
                      primary={false} 
                      hoverIndicator={{background: 'neutral-4-a'}}
                      style={{backgroundColor:'#49516f',color:'white', border:'none', fontSize:'18px', padding:'6px'}}
                      />
                    </td>
                  </TableRow>)
                  )}
                </tbody>
              </Table>
            </Columns>

          </div>)
    }
  

}

export default BillsDueTable;