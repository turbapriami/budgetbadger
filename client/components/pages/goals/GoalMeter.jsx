import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';

const GoalMeter = () => {
  return (
    <div>
      <Meter 
        label='Lofty Goal'
        type='circle'
        size='small'
        value={this.props.value}
      />
    </div>
  )
}

export default GoalMeter