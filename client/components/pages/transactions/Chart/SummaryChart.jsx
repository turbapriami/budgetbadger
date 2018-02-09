import React, { Component } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Layer, Select, CheckBox } from 'grommet';
import 'chartjs-plugin-annotation'
class TransactionsChart extends Component {
  constructor() {
    super()
  }

  componentWillReceiveProps() {

  }

  render() {
    const { min, max, center } = this.props.annotations
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
            id: 'y-axis-0',
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
      },
      annotation: {
        // drawTime: "afterDraw",
        events: ['dblclick'],
        annotations: [{
          type: 'box',
          yScaleID: 'y-axis-0',
          yMin: min,
          yMax: max,
          // borderColor: 'blue',
          backgroundColor: "rgba(238, 119, 119, 0.54)"
        },
        {
          type: 'line',
          mode: 'horizontal',
          value: center,
          borderDash: [2,2],
          borderColor: 'red',
          scaleID: 'y-axis-0',
        }
        ]
      }
    }
    console.log(options)
    return (
      <div>
        <div>
          <Line 
            data={this.props.chartData} 
            options={options} 
            width="600" 
            height="500" 
            getElementAtEvent={(element) => this.props.handleChartClick(element)}/>
        </div>
        <CheckBox label='Toggle Total'
          toggle={true}
          disabled={false}
          reverse={true} 
          checked={this.props.displayTotal}
          onChange={() => this.props.toggleTotal()}/>
        <CheckBox label='Toggle Goals'
          toggle={true}
          disabled={false}
          reverse={true} 
          checked={this.props.displayGoal}
          onChange={() => this.props.toggleGoal()}/>
        <Select 
          placeHolder="Select a category"
          options={this.props.categories}
          value={this.props.filter.category}
          onChange={({value}) => {
            this.props.updateFilter('category', value, () => {
              this.props.renderChart();
              this.props.displayTotal ? this.props.toggleTotal : console.log('hello')
            })
          }}
        />
        <Select 
          placeHolder="Select an account"
          options={this.props.accounts}
          value={this.props.filter.account}
          onChange={({value}) => {
            this.props.updateFilter('account', value, () => {
              this.props.renderChart();
            })
          }}
        />
      </div>
    )
  }
}

export default TransactionsChart