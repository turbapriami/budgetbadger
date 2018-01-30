import React from 'react'
import SideBar from 'grommet/components/SideBar';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import Transaction from './Transaction.jsx';
import { Box } from 'grommet'



const TransactionList = (props) => (
      <Table>
        <TableHeader
          labels={['Date', 'Type', 'Category','Description', 'Amount']}
        />
        {props.transactions ? props.transactions.map((transaction, idx) => {
          return <Transaction {...transaction} key={idx}/>
        }): null}
      </Table>
)




export default TransactionList;