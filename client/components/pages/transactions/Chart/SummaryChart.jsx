import React, { Component } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Layer, Select, CheckBox } from 'grommet';

const TransactionsChart = (props) => {
  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Transaction Summary'
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

  Chart.pluginService.regiser({
    
  })
  
  return (
    <div>
      <div>
        <Line 
          data={props.chartData} 
          options={options} 
          width="600" 
          height="500" 
          getElementAtEvent={(element) => props.handleChartClick(element)}/>
      </div>
      <CheckBox label='Show Total'
        toggle={true}
        disabled={false}
        reverse={true} 
        checked={props.displayTotal}
        onChange={() => props.toggleTotal()}/>
      <Select 
        placeHolder="Select a category"
        options={props.categories}
        value={props.filter.category}
        onChange={({value}) => {
          props.updateFilter('category', value, () => {
            props.renderChart();
          })
        }}
      />
      <Select 
        placeHolder="Select an account"
        options={props.accounts}
        value={props.filter.account}
        onChange={({value}) => {
          props.updateFilter('account', value, () => {
            props.renderChart();
          })
        }}
      />
    </div>
  )
}

export default TransactionsChart