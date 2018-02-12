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
        selectable={true}
        onSelect={props.handleClick}
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
                  label={'$' + goal.goal_progress[goal.goal_progress.length - 1].amount + ' out of ' + '$' +  goal.amount}
                  value={goal.goal_progress[goal.goal_progress.length - 1].amount}
                  max={goal.amount}
                />
                <br/>
                Accounts: {goal.goal_accounts.map(account => account.account[0].bank_name)}
                <br/>
                Categories: {goal.goal_categories.map(category => category.name)}
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