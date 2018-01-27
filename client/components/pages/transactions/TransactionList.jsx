import React from 'react'
import SideBar from 'grommet/components/SideBar';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import Transaction from './Transaction.jsx';



const TransactionList = (props) => (
  <div>
      <Table>
        <TableHeader
          labels={['Date', 'Category', 'Description', 'Amount']}
        />
        {props.transactions ? props.transactions.map((transaction, idx) => {
          return <Transaction {...transaction} kew={idx}/>
        }): null}
      </Table>
  </div>
)




export default TransactionList;