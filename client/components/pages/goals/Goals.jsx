import React, { Component } from 'react';
import GoalMeter from './GoalMeter.jsx';

const Goals = () => {
  return (
    <div>
      {this.props.goals.map((goal => {
        return (
          <GoalMeter value={goal} />
        )
      }))}
    </div>
  )
}

export default Goals