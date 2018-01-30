import React, { Compoennt } from 'react';
import forEach from 'lodash';
import c3 from 'c3'

const PieChart = ({ breakdown }) => {
  if (breakdown.length) {
    let chart = c3.generate({
      bindto: '.chart',
      data: {
        columns: breakdown,
        type: 'donut'
      }
    });
  }
  return (
    <div className='chart'/>
  )
}

export default PieChart;