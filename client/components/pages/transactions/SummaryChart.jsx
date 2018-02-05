import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layer from 'grommet/components/Layer';
import { identity, map } from 'lodash';
import c3 from 'c3'
import 'c3/c3.css'

import moment from 'moment'

class SummaryChart extends React.Component {
  constructor() {
    super();
    this.state = {chart:{}}
    this.getTransactionsFromTo = this.getTransactionsFromTo.bind(this);
    this.assignToDate = this.assignToDate.bind(this);
    this.generateChartInput = this.generateChartInput.bind(this);
    this.lineChart = this.lineChart.bind(this);
  }

  getTransactionsFromTo(transactions, begDate, endDate) {
    let beg = moment(begDate);
    let end = moment(endDate);
    return transactions.filter(transaction => {
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

  lineChart (data, labels) {
    this.state.chart = c3.generate({
        bindto:  '#chart',
        data: {
          x: 'x',
          columns: [
            [...labels],
            [...data]
          ]
        },
        axis: {
          x: {
            type: 'timeseries'
          },
        },
      })
    console.log(chart)
  }

  componentDidMount() {
    let foodNDrink = this.generateChartInput(this.props.transactions)
    const food = ['food', ...foodNDrink[0].slice(1)]
    console.log(food)
    const dates = ['x', ...foodNDrink[1]]
    this.lineChart(food, dates)
  }

  render() {
    return (
      <div style={{width: '600px'}} id="chart">
        <p> hello</p>
      </div>
    ) 
  }

}

export default SummaryChart;