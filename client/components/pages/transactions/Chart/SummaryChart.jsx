import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2'

const TransactionsChart = ({chartData, handleChartClick}) => {
  const options = {
      responsive: true,
      title: {
        display: true,
        text: 'Chart'
      },
      tooltips: {
        mode: 'label'
      },
      hover: {
        mode: 'dataset'
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              show: true,
              labelString: 'Month'
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              show: true,
              labelString: 'Value'
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 5000
            }
          }
        ]
      }
    }
    console.log(chartData)
  return (
    <div>
      <Line 
        data={chartData} 
        options={options} 
        width="600" 
        height="500" 
        getElementAtEvent={(element) => handleChartClick(element)}/>
    </div>
  )
}

export default TransactionsChart