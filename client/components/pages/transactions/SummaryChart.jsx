import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'grommet';
import Layer from 'grommet/components/Layer';
import { identity, map } from 'lodash';
import { Line, Bar } from 'react-chartjs-2'


import moment from 'moment'

class SummaryChart extends React.Component {
  constructor() {
    super();
    this.state = {chartData:{}, begDate: null, endDate:null}
    this.getTransactionsFromTo = this.getTransactionsFromTo.bind(this);
    this.assignToDate = this.assignToDate.bind(this);
    this.assignToMonth = this.assignToMonth.bind(this);
    this.generateMonthlyChart = this.generateMonthlyChart.bind(this);
    this.renderChart = this.renderChart.bind(this);
    this.handleMonthlyClick = this.handleMonthlyClick.bind(this);
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
      let date = transaction.date;
      dates[date] ?
      dates[date].push(transaction) :
      dates[date] = [transaction];
    })
    return dates;
  }

  assignToMonth (transactions) {
    let months = {};
    transactions.forEach(transaction => {
      let month = moment(transaction.date).format('MMMM')
      months[month] ?
      months[month].push(transaction) :
      months[month] = [transaction];
    })
    return months;
  }

  generateDailyChart (transactions, month, filter = identity) {
    let dates = this.assignToDate(transactions);
    let chartData = {};
    chartData.labels = Object.keys(dates);
    chartData.data = map(dates, day => {
      return day.reduce((a, b) => {
        return filter(b) ? a += Math.abs(b.amount):  a;
      }, 0)
    })
    return chartData;
  }

  generateMonthlyChart (transactions, filter = identity) {
    const months = this.assignToMonth(transactions);
    const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const amounts = year.map(month => {
      months[month] = months[month] || [];
      return months[month].reduce((a, b) => {
        return filter(b) ? a += Math.abs(b.amount) : a;
      }, 0);
    });
    const chartData = {
      labels: year, 
      datasets:[
      {
        label: 'Monthly Amounts',
        data: [...amounts]
      }]
    }
    return chartData;
  }

  renderChart(value, callback) {
    let transactions = this.getTransactionsFromTo();
    let chartData = this.generateMonthlyChart(transactions, callback)
    this.setState({
      chartData
    })
  }

  handleMonthlyClick(element) {

  }

  componentDidMount() {
    let { name } = this.props.summaryTransaction;
    let range = this.getTransactionsFromTo();
    let chartData = this.generateMonthlyChart(range, (transaction) => transaction.name === name);
    console.log(chartData)
    this.setState({chartData})
  }

  render() {
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
    return (
      <div>
        <Line data={this.state.chartData} options={options} width="600" height="500" getElementAtEvent={(element) => this.handleMonthlyClick(element)}/>
        <Select 
          placeholder="Select a category"
          options={this.props.categories.map(a => a[0])}
          onChange={({value}) => {
            console.log(value)
            this.renderChart(value, (transaction) => {
              return transaction.category === value
            })
          }}
        />
      </div>
    ) 
  }

}

export default SummaryChart;