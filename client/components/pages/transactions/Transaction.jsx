import React from 'react';
import TableRow from 'grommet/components/TableRow';

const Transaction = (props) => (
  <TableRow 
    justify='between'
    separator='horizontal'>
    <td>10/10/17</td>
    <td>{props.account[0].type}</td>
    <td>{props.category[0].name}</td>
    <td>{props.name}</td>
    <td>${props.amount}</td>
  </TableRow>
)

export default Transaction;