import React, { Component } from 'react';
import Spinner from '../Spinner.jsx';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Meter from 'grommet/components/Meter'

const Goals = (props) => {
  if (props.goals) {
    return (
      <Tiles
        fill={true}
        flush={false}
      >
        {props.goals.map((goal => {
          return (
            <Tile>
              <Card
                heading={goal.description}
                label={goal.is_budget? 'Budget Goal': 'Savings Goal'}
              >
                <Meter 
                  type='bar'
                  size='medium'
                  value={goal.goal_progress[goal.goal_progress.length - 1].amount}
                  max={goal.amount}
                />
                Accounts: {goal.goal_accounts[0] || 'All'}
                <br/>
                Categories: {goal.goal_categories[0].name}
              </Card>
            </Tile>
          )
        }))}
      </Tiles>
    )
  } else {
    return <Spinner/>
  }
}

export default Goals