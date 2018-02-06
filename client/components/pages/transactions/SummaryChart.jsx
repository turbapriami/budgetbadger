import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'grommet';
import Layer from 'grommet/components/Layer';
import { identity, map } from 'lodash';
import c3 from 'c3'
import 'c3/c3.css'

import moment from 'moment'

class SummaryChart extends React.Component {
  constructor() {
    super();
    this.state = {chartData:[], chart: {}, begDate: null, endDate:null}
    this.getTransactionsFromTo = this.getTransactionsFromTo.bind(this);
    this.assignToDate = this.assignToDate.bind(this);
    this.generateChartInput = this.generateChartInput.bind(this);
    this.lineChart = this.lineChart.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }

  getTransactionsFromTo(begDate = '1990-10-10', endDate = new Date()) {
    let beg = moment(begDate);
    let end = moment(endDate);
    return this.props.transactions.filter(transaction => {
      let curr = moment(transaction.date);
      return (curr >= beg && curr <= end)
    });
  }

  assignToDate (transactions) {
    let dates = {};
    transactions.forEach(transaction => {
      dates[transaction.date] ?
      dates[transaction.date].push(transaction) :
      dates[transaction.date] = [transaction];
    })
    return dates;
  }

  generateChartInput (transactions, filter = identity) {
    let dates = this.assignToDate(transactions);
    let input = [];
    input[1] = Object.keys(dates);
    input[0] = map(dates, day => {
      return day.reduce((a, b) => {
        return filter(b) ? a += Math.abs(b.amount):  a;
      }, 0)
    })
    return input;
  }

  renderChart(value, callback) {
    let transactions = this.getTransactionsFromTo();
    let output = this.generateChartInput(transactions, callback)
    output[0].unshift(value);
    output[1].unshift('x')
    this.setState({
      chartData: output
    }, ()=> {
      console.log(this.state.chartData)
      this.forceUpdate()
      this.chart.unload();
      this.chart.load({
        data: {
          colums: [['x',...this.state.chartData[0]], [value,...this.state.chartData[1]]]
        }
      })
    })
  }

  lineChart () {
    this.chart = c3.generate({
        bindto:  '#chart',
        data: {
          x: 'x',
          columns: [...this.state.chartData], 
          type: 'spline'
        },
        axis: {
          x: {
            type: 'timeseries'
          },
        },
      })
  }

  componentDidMount() {
    let { name } = this.props.summaryTransaction;
    let range = this.getTransactionsFromTo();
    let transactions = this.generateChartInput(range, (transaction) => transaction.name === name);
    transactions[0].unshift(name);
    transactions[1].unshift('x')
    this.setState({
      chartData: transactions
    }, () => this.lineChart())
  }

  render() {
    return (
      <div>
      <div style={{width: '600px', height: '500px'}} id="chart">
      </div>
        <Select 
          placeholder="Select a category"
          options={this.props.categories.map(a => a[0])}
          onChange={({value}) => {
            this.renderChart(value, (transaction) => {
              return transaction.category === value
            })
            // let data = this.generateChartInput(this.props.transactions, (transaction) => {
            //   return transaction.category === value;
            // })
            // console.log(data)
            // this.chart
            // .unload();
            // this.chart
            // .load({
            //   columns: [
            //     [value,...data[0]],
            //     ['x', ...data[1]]
            //   ]
            // })
          }}
        />
      </div>
    ) 
  }

}

export default SummaryChart;