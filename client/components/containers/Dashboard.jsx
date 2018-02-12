import React, { Component } from 'react';
import {Tiles, Tile} from 'grommet';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import BillsDueTable from '../pages/bills/BillsDueTable.jsx';
import BillsSummary from '../pages/bills/BillsSummary.jsx';
import AccountsTotals from '../pages/accounts/AccountsTotals.jsx'
import Spinner from '../pages/Spinner.jsx'
import Loans from './LoansContainer.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
import { DASH_QUERY, UPDATE_TRANSACTIONS } from '../../queries.js';
import gql from 'graphql-tag'

const withDashQuery = graphql(DASH_QUERY, {
  options: (props) => ({
    variables: {
      user_id: window.localStorage.getItem('user_id')
    },
    name: 'Dashboard Data'
  })
})

const withUpdateTransactions = graphql(UPDATE_TRANSACTIONS, {
  options: {
    refetchQueries: [{
      query: DASH_QUERY
    }]
  }
})

class DashBoard extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
    this.props.mutate({
      variables: {user_id: window.localStorage.getItem('user_id')}
    })
  }

  render(){
    // make sure bills exist before rendering
    let billsDue = null
    if (this.props.data.getBills) {
      billsDue = <BillsSummary 
        overdueBills={this.props.data.getBills.filter(bill => {
          const dueDate = new Date(bill.due_date);
          const currentDate = new Date();
          return ((currentDate > dueDate) && !bill.paid);
        })} 
        billsDueThisMonth={this.props.data.getBills.filter(bill => {
          const dueDate = new Date(bill.due_date);
          const currentDate = new Date();
          return ((currentDate.getMonth() === dueDate.getMonth()) && !bill.paid);
        })}
      />
    } else {
      const billsDue = <Spinner/>
    }
    let totalBalance = null
    if (this.props.data.getAccounts) {
      totalBalance = <AccountsTotals accounts={this.props.data.getAccounts} />
    } else {
      totalBalance = <Spinner />
    }
    return(
      <div>
        <Tiles 
          flush={false}
          fill={true}
        >
          <Tile>
            {totalBalance}
          </Tile>
          <Tile>
            {billsDue}
          </Tile>
        </Tiles>
      </div>
    )
  }
};

export default compose(withApollo, withDashQuery, withUpdateTransactions)(DashBoard);
