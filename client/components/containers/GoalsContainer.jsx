import React, { Component } from 'react';
import Spinner from '../pages/Spinner.jsx'
import MonthlyBudgetTable from '../pages/goals/MonthlyBudgetTable.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
// import {GOALS_QUERY} from '../../queries.js';

class GoalsContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if (this.props) {
      return(
        <div>
          <MonthlyBudgetTable />
        </div>
      )
    } else {
      return (
        <Spinner />
      );
    }
  }
};

export default GoalsContainer

// const withGoalsQuery = graphql(GOALS_QUERY, {
//   options: (props) => ({
//     variables: {
//       user_id: window.localStorage.getItem('user_id')
//     },
//     name: 'Goals Data'
//   })
// })

// module.exports = compose(withApollo, withAccountsQuery)(GoalsContainer);