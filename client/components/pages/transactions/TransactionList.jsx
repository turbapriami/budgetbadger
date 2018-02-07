import React from 'react'
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import Transaction from './Transaction.jsx';



const TransactionList = ({ transactions, sort, dir, sortIdx, displaySummary }) => (
      <Table
        selectable={true}
        onSelect={(value) => displaySummary(transactions[value - 1])}
        reponsive={true}>
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
            return <Transaction displaySummary={displaySummary} {...transaction} key={idx}/>
        }): 
          null
        }
      </Table>
)




export default TransactionList;