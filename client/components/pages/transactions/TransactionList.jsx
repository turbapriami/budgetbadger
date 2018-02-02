import React from 'react'
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import Transaction from './Transaction.jsx';



const TransactionList = ({ transactions, sort, dir, sortIdx }) => (
      <Table>
        <TableHeader
          labels={['Date', 'Type', 'Category','Description', 'Amount']}
          sortIndex={sortIdx}
          sortAscending={dir}
          onSort={(index, direction) => {
            sort(index, direction)
          }
          }
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