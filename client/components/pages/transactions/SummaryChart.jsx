import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Select, CheckBox } from 'grommet';
import Layer from 'grommet/components/Layer';
import { identity, map, unionBy } from 'lodash';
import { Line, Bar } from 'react-chartjs-2'
import moment from 'moment'

class SummaryChart extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {}, 
      begDate: null, 
      endDate:null, 
      displayAnnual: true,
      displayTotal: false,
      month: '',
      filter: false,
    }
    this.getTransactionsFromTo = this.getTransactionsFromTo.bind(this);
    this.assignToDate = this.assignToDate.bind(this);
    this.assignToMonth = this.assignToMonth.bind(this);
    this.generateMonthlyChart = this.generateMonthlyChart.bind(this);
    this.renderChart = this.renderChart.bind(this);
    this.handleChartClick = this.handleChartClick.bind(this);
    this.displayChartTotal = this.displayChartTotal.bind(this);
    this.generateChartDataObject = this.generateChartDataObject.bind(this);
    this.filterTransactionsByValue = this.filterTransactionsByValue.bind(this);
  }

  filterTransactionsByValue(field, value) {
    let name = this.props.convertName(value);
    return this.props.transactions.filter(transaction => {
      if (field === 'account') {
        return transaction[field][0].bank_name === value;
      } else {
        return transaction[field] === value;
      }
    })
  }

  // Filters transactions by date range, if no parameters provides it returns an
  // arbitrary range including all transactions

  getTransactionsFromTo(begDate = '1990-10-10', endDate = new Date()) {
    let beg = moment(begDate);
    let end = moment(endDate);
    return this.props.transactions.filter(transaction => {
      let curr = moment(transaction.date);
      return (curr >= beg && curr <= end)
    });
  }

  // Groups annual transactions by date

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

  // Groups annual transactions by month

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

  // Takes daily transactions and calculates total spend for the day for each date
  // then sets state to rerender the chart

  generateDailyChart (transactions, month, filter = identity) {
    const monthlyTransactions = this.assignToMonth(transactions)[month];
    const dailyTransactions = this.assignToDate(monthlyTransactions)
    // for some reason map didn't like an object-like array...
    const days = [...Object.keys(dailyTransactions)];
    const amounts = days.map(day => {
      return dailyTransactions[day].reduce((a, b) => {
        return filter(b) ? a += Math.abs(b.amount):  a;
      }, 0)
    })
    return this.generateChartDataObject(days, amounts);
  }

  // Takes monthly transactions and calculates total spend for the month
  // then sets state to rerender the chart

  generateMonthlyChart (transactions, filter = identity) {
    const months = this.assignToMonth(transactions);
    const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const amounts = year.map(month => {
      months[month] = months[month] || [];
      return months[month].reduce((a, b) => {
        return filter(b) ? a += Math.abs(b.amount) : a;
      }, 0);
    });
    return this.generateChartDataObject(year, amounts);
  }

  // Formats data in preparation for chart

  generateChartDataObject (labels, data) {
    const chartData = {
      labels: labels, 
      datasets:[
      {
        label: 'Monthly Amounts',
        data: [...data],
        backgroundColor: "rgb(71, 255, 178)"
      }]
    }
    return chartData;   
  }

  renderChart(value, callback) {
    let transactions = this.getTransactionsFromTo();
    let chartData = this.generateMonthlyChart(transactions, callback)
    this.setState({
      chartData
    }, () => console.log(this.state))
  }

  // Checks whether or not a filter is applied and returns the 
  // correct set of transactions.

  getRelevantTransactions() {
    return this.state.filter.field ?
    this.state.filteredTransactions :
    this.props.transactions;
  }


  // displayAnnual checks whether or not a month has been selected
  // if true, the chart will render daily transactions for the selected month
  // else it will reset to all transactions for the year

  handleChartClick(element) {
    let chartData;
    let month = null;
    if (this.state.displayAnnual) {
      month = this.state.chartData.labels[element[0]._index];
      chartData = this.generateDailyChart(this.props.transactions, month);
    } else {
      chartData = this.generateMonthlyChart(this.props.transactions);
    }
    this.setState({
      month,
      chartData,
      displayAnnual: !this.state.displayAnnual
    })
  }

  displayChartTotal() {
    let chartData;
    // untoggles totals line
    // i.e splices it out of chart data
    if (this.state.displayTotal) {
      chartData = this.state.chartData;
      chartData.datasets.splice(1);

    } else {
      let totals;
      // checks whether or not chart is in annual view, and renders totals 
      // for either the month or for the year
      if (this.state.displayAnnual) {
        totals = this.generateMonthlyChart(this.props.transactions).datasets[0].data;
      } else {
        totals = this.generateDailyChart(this.props.transactions, this.state.month).datasets[0].data;
      }
      chartData = this.state.chartData
      chartData.datasets.push({
        label: 'Total Spend',
        data: totals,
        backgroundColor: "rgba(95, 0, 96, 0.8)",
      })
    }
    this.setState({
      chartData,
      displayTotal: !this.state.displayTotal
    });
  }


  // On load, chart renders with annual transaction data for the selected transaction type
  componentDidMount() {
    let { name } = this.props.summaryTransaction;
    let range = this.getTransactionsFromTo();
    let chartData = this.generateMonthlyChart(range, (transaction) => transaction.name === name);
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
        <Line data={this.state.chartData} options={options} width="600" height="500" getElementAtEvent={(element) => this.handleChartClick(element)}/>
        <CheckBox label='Show Total'
          toggle={true}
          disabled={false}
          reverse={true} 
          checked={this.state.displayTotal               }
          onChange={() => this.displayChartTotal()}
          />
        <Select 
          placeholder="Select a category"
          options={this.props.categories.map(a => a[0])}
          onChange={({value}) => {
            // this rerenders the chart based on the selected category
            const transactions = this.filterTransactionsByValue('category', value);
            this.setState({
              filteredTransactions: transactions,
              filter: true
            }, () => {
              this.props.initializeTable(value, 'category', (transaction) => {
                return transaction.category === value;
              }, () => {
                this.renderChart(value, (transaction) => {
                  return transaction.category === value
                })
                }
              )
            })
          }}
        />
      </div>
    ) 
  }

}

export default SummaryChart;