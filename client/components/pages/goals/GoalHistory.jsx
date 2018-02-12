import React, { Component } from 'react';
import Chart, {Axis, Grid, Bar, HotSpots, Marker, MarkerLabel, Base, Layers} from 'grommet/components/chart/Chart';

const GoalHistory = (props) => {
  if (props.goalProgress) {
    return (
      <Chart>
        <Axis  
          count={5}
          labels={[{"index": 2, "label": props.goal.amount / 2}, {"index": 4, "label": props.goal.amount}]}
          vertical={true} 
        />
        <Chart vertical={true}>
          <Base 
            height='medium'
            width='medium' 
          />
          <Layers>
            <Grid 
              rows={5}
              columns={3} 
            />
            <Bar 
              values={props.goalProgress.map(progress => progress.amount)}
              colorIndex='graph-2'
              max={props.goal.amount}
            />
          </Layers>
          <Axis 
            count={2}
            labels={[{"index": 0, "label": props.goal.start_date}, {"index": 1, "label": props.goal.end_date}]} 
          />
        </Chart>
      </Chart>
    )
  } else {
    return null
  }
}

export default GoalHistory