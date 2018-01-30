import React from 'react'
import SideBar from 'grommet/components/SideBar';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import Transaction from './Transaction.jsx';
import { Box } from 'grommet'



const TransactionList = ({ transactions }) => (
      <Table>
        <TableHeader
          labels={['Date', 'Type', 'Category','Description', 'Amount']}
        />
        {
          transactions ? 
          transactions.map((transaction, idx) => {
            return <Transaction {...transaction} key={idx}/>
        }): 
          null
        }
      </Table>
)




export default TransactionList;