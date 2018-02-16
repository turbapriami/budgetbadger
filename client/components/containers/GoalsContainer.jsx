import React, { Component } from 'react';
import Spinner from '../pages/Spinner.jsx'
import MonthlyBudgetTable from '../pages/goals/MonthlyBudgetTable.jsx'
import Goals from '../pages/goals/Goals.jsx'
import GoalHistory from '../pages/goals/GoalHistory.jsx'
import GoalForm from '../pages/goals/GoalForm.jsx'
import { graphql, compose, withApollo } from 'react-apollo'
import {GOALS_QUERY} from '../../queries.js';
import { Hero, Box, Image, Heading } from 'grommet';

class GoalsContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      goalIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      goalIndex: e
    })
  }

  render(){
    let goalProgress = null
    let goal = null
    if (this.props.data.getGoals) {
      goalProgress = this.props.data.getGoals[this.state.goalIndex].goal_progress
      goal = this.props.data.getGoals[this.state.goalIndex]
    }
    return(
      <div>
        <Hero background={<Image src={'https://www.goalcast.com/wp-content/uploads/2017/08/racing-through-life.jpg'}
          fit='cover'
          full={true}
          height='50%'
          />}
          backgroundColorIndex='dark'
          size='small'>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'>
              <Heading margin='none' style={{fontSize: "55px"}} >
                Goals
              </Heading>
            </Box>
          </Box>
        </Hero>
        <GoalForm />
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