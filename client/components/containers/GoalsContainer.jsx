import React, { Component } from 'react';
import Spinner from '../pages/Spinner.jsx'
import MonthlyBudgetTable from '../pages/goals/MonthlyBudgetTable.jsx'
import Goals from '../pages/goals/Goals.jsx'
import GoalHistory from '../pages/goals/GoalHistory.jsx'
import GoalForm from '../pages/goals/GoalForm.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
import {GOALS_QUERY} from '../../queries.js';

class GoalsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      goalIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(e) {
    this.setState({
      goalIndex: e
    })
  }

  handleSubmit(goalProperties, categories, accounts) {
    console.log(goalProperties, categories, accounts)
  }

  render(){
    let goalProgress = null
    let goal = null
    if (this.props.data.getGoals) {
      goalProgress = this.props.data.getGoals[this.state.goalIndex].goal_progress
      goal = this.props.data.getGoals[this.state.goalIndex]
    }
    let accounts = []
    let categories = []
    if (this.props.data.getAccounts) {
      accounts = this.props.data.getAccounts.map(account => {
        return account.bank_name
      })
      categories = [...new Set(this.props.data.getTransactions.map(transaction => {
        return transaction.category
      }))]
    }
    return(
      <div>
        <GoalForm 
          handleSubmit = {this.handleSubmit}
          accounts = {accounts}
          categories = {categories}
        />
        <Goals goals={this.props.data.getGoals} handleClick={this.handleClick} />
        <GoalHistory goal={goal} goalProgress={goalProgress} />
      </div>
    )
  }
};

const withGoalsQuery = graphql(GOALS_QUERY, {
  options: (props) => ({
    variables: {
      user_id: window.localStorage.getItem('user_id')
    },
    name: 'Goals Data'
  })
})

module.exports = compose(withApollo, withGoalsQuery)(GoalsContainer);