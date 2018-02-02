import React, { Component } from 'react';
import {Tiles, Tile} from 'grommet';
import TransactionList from '../pages/transactions/TransactionList.jsx';
import BillsDueTable from '../pages/bills/BillsDueTable.jsx';
import BillsSummary from '../pages/bills/BillsSummary.jsx';
import Loans from './LoansContainer.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
import { DASH_QUERY, UPDATE_TRANSACTIONS } from '../../queries.js';
import gql from 'graphql-tag'

const withDashQuery = graphql(DASH_QUERY, {
  options: (props) => ({
    variables: {
      user_id: 1
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

  componentDidUpdate() {
    this.props.mutate({
      variables: {user_id: 1}
    })
  }

  render(){
    // make sure bills exist before rendering
    let billsDue = null
    if (this.props.data.getBills) {
      billsDue = <BillsDueTable billsDue = {this.props.data.getBills.filter((bill)=> {return bill.paid === false})}/>
    } else {
      const billsDue = <div>Loading...</div>
    }
    return(
      <div>
        <Tiles flush={false}
          fill={true}
          selectable={true}
        >
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
          <Tile
            separator='top'
            align='start'
            basis='1/3'
          >
            {billsDue}
          </Tile>
        </Tiles>
      </div>
    )
  }
};

export default compose(withApollo, withDashQuery, withUpdateTransactions)(DashBoard);
