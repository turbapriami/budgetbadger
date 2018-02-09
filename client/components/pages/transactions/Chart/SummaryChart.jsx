import React, { Component } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Layer, Select, CheckBox } from 'grommet';
import 'chartjs-plugin-annotation'
class TransactionsChart extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    Chart.pluginService.register({
      id: 'threshold',
      afterDraw: (chart, easing) => {
          if (typeof chart.chart.config.data.datasets[0].install != 'undefined') {
              if (chart.chart.config.data.datasets[0].install != '-1') {
                  var meta = chart.getDatasetMeta(0);
                  var x = meta.data[chart.chart.config.data.datasets[0].install]._model.x;
                  chart.chart.ctx.restore();
                  chart.chart.ctx.beginPath();
                  chart.chart.ctx.setLineDash([500, 500]);
                  chart.chart.ctx.strokeStyle = '#000000';
                  chart.chart.ctx.moveTo(x, 0);
                  chart.chart.ctx.lineTo(x, 10000);
                  chart.chart.ctx.stroke();
              }
          }
      }
    })
}

  render() {
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
      },
      annotation: {
        // drawTime: "afterDraw",
        events: ['dblclick'],
        annotations: [{
                drawTime: 'afterDraw', // overrides annotation.drawTime if set
                id: 'a-line-1', // optional
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: '599',
                borderColor: 'red',
                borderWidth: 2,
        }]
      }
    }
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
        <CheckBox label='Show Total'
          toggle={true}
          disabled={false}
          reverse={true} 
          checked={this.props.displayTotal}
          onChange={() => this.props.toggleTotal()}/>
        <Select 
          placeHolder="Select a category"
          options={this.props.categories}
          value={this.props.filter.category}
          onChange={({value}) => {
            this.props.updateFilter('category', value, () => {
              this.props.renderChart();
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