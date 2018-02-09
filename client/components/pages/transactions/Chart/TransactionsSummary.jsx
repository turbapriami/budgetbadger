import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import TransactionChart from './SummaryChart.jsx'
import {
  filterTransactionsByValue,
  generateDailyData,
  generateMonthlyData
} from './chartHelpers.jsx'

class SummaryChartContainer extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}, 
      displayAnnual: true,
      displayTotal: false,
      month: '',
      filter: {},
      filteredTransactions: [],
      accounts: [],
      categories: [],
      annotations: {min: 0, max: 0},
      displayGoal: false
    }
    this.handleChartClick = this.handleChartClick.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.renderChart = this.renderChart.bind(this);
    this.toggleTotal = this.toggleTotal.bind(this);
    this.toggleGoal = this.toggleGoal.bind(this)
  }

  // Below checks whether or not a month has been selected
  // if true, the chart will render daily transactions for the selected month
  // else it will reset to all transactions for the year

  handleChartClick(element) {
    let chartData, month;
    if (this.state.displayAnnual) {
      month = this.state.chartData.labels[element[0]._index];
      chartData = generateDailyData(this.state.filteredTransactions, month);
    } else {
      chartData = generateMonthlyData(this.state.filteredTransactions);
    }    
    this.setState({
      month,
      chartData,
      displayAnnual: !this.state.displayAnnual
    }, () => this.state.displayTotal ? this.toggleTotal() : null)
  }

  // Enables users to add a total spending dataset to the chart
  // in order to compare filtered data to total spend.

  toggleTotal () {
    let { chartData } = this.state, total;
    // checks state of the chart
    if (!this.state.displayTotal) {
      if (this.state.displayAnnual) {
        total = generateMonthlyData(this.props.transactions);
        total.datasets[0].label = 'Monthly Totals'
      } else {
        total = generateDailyData(this.props.transactions, this.state.month);
        total.datasets[0].label = 'Daily Totals'
      }
      total.datasets[0].backgroundColor = "rgb(148, 0, 211)"
      chartData.datasets.push(total.datasets[0]);
      // if total is already displayed, remove it
    } else {
      chartData.datasets.splice(1)
    }
    this.setState({
      chartData,
      displayTotal: !this.state.displayTotal
    })
  }

  // Draw line to show goal progress for specific account (this is for goals related
  // to reducing spending on some category or in some account)
  drawTargetLine(account, goalTarget) {
    let min = Math.floor(goalTarget * 0.9);
    let max = Math.floor(goalTarget * 1.1);
    
  }

  // adds or removes key-value pairs from filter object
  updateFilter(key, value, callback) {
    let { filter } = this.state;
    value === 'none' ?
    delete filter[key] :
    filter[key] = value;
    this.setState({
      filter
    }, () => callback());
  }

  renderChart() {
    const filteredTransactions = filterTransactionsByValue(this.props.transactions, this.state.filter);
    // check current state of the chart
    const chartData = this.state.displayAnnual ?
    generateMonthlyData(filteredTransactions) :
    generateDailyData(filteredTransactions, this.state.month);
    this.setState({
      filteredTransactions,
      chartData
    }, () => this.state.displayTotal ? this.toggleTotal() : null)
  }


  // Allows users to toggle a treshold line to track they spending goals
  // as compared to their actual spending
  toggleGoal() {
    const { filteredTransactions } = this.state;
    const id = filteredTransactions[0].account[0].id;
    let min = 0, max = 0, center = null;
    const goal = {
      account_id: 'mq1a8D3X19HbmJgVxLLyF1bwn9854NtRX6GG5',
      description: 'spending',
      amount: 3500
    }
    if (!this.state.displayGoal) {
      min = goal.amount * 0.9;
      max = goal.amount * 1.1;
      center = goal.amount;
    }
    this.setState({
      annotations: {
        min, max, center
      },
      displayGoal: !this.state.displayGoal
    })
  }

  componentDidMount(){
    this.renderChart();
  }

  componentWillReceiveProps({ categories, accounts }){
    categories = categories.map(a => a[0]);
    accounts = accounts.map(a => a.bank_name);
    accounts.unshift('none');
    categories.unshift('none');
    this.setState({
      categories,
      accounts,
    })
  }

  render() {
    return (
      this.props.displaySummary ?
      <Layer
        closer={true}
        overlayClose={true}
        padding="small"
        flush={true}
        onClose={this.props.handleSummary}>
        <TransactionChart 
          annotations={this.state.annotations}
          toggleGoal={this.toggleGoal}
          displayGoal={this.state.displayGoal}
          categories={this.state.categories}
          accounts={this.state.accounts}
          renderChart={this.renderChart}
          toggleTotal={this.toggleTotal}
          chartData={this.state.chartData}
          updateFilter={this.updateFilter}
          displayTotal={this.state.displayTotal}
          filter={this.state.filter}
          handleChartClick={this.handleChartClick}/>
      </Layer> :
      null
    )
  }

}

export default SummaryChartContainer;