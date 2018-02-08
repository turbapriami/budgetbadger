import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Select, CheckBox } from 'grommet';
import Layer from 'grommet/components/Layer';
import { identity, map, unionBy } from 'lodash';
import moment from 'moment'
import TransactionChart from './SummaryChart.jsx'
import {
  generateChartDataObject,
  assignToDate,
  assignToMonth,
  filterTransactionsByValue,
  generateDailyData,
  generateMonthlyData
} from './chartHelpers.jsx'
// const sampleGoals = {
//   goal1: {car: 5000, date: '2018-02-24' }
//   goal2: 3000
// }

class SummaryChartContainer extends React.Component {
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
    }
    // this.handleChartClick = this.handleChartClick.bind(this)
    // this.generateMonthlyData = this.generateMonthlyData.bind(this);
    // this.generateDailyData = this.generateDailyData.bind(this);
    // this.renderChart = this.renderChart.bind(this);
    // this.toggleTotal = this.toggleTotal.bind(this);
  }

  // // Formats data in preparation for chart

  // generateChartDataObject (labels, data) {
  //   const chartData = {
  //     labels: labels, 
  //     datasets:[
  //     {
  //       label: 'Monthly Amounts',
  //       data: [...data],
  //       backgroundColor: "rgb(71, 255, 178)"
  //     }]
  //   }
  //   return chartData;   
  // }

  // // Filters transactions according to filter object in state
  // // if transaction matches all properties of filter, it is returned

  // filterTransactionsByValue() {
  //   if (this.props.transactions) {
  //     let transactions = this.props.transactions.filter(transaction => {
  //       return Object.keys(this.state.filter).every((key) => {
  //         if (key === 'account') {
  //           return transaction[key][0].bank_name === this.state.filter[key];
  //         }
  //         return transaction[key] === this.state.filter[key]
  //       })
  //     })
  //     console.log(transactions)
  //     return transactions
  //   }
  // }

  // // Groups annual transactions by date

  // assignToDate (transactions) {
  //   let dates = {};
  //   transactions.forEach(transaction => {
  //     let date = transaction.date;
  //     dates[date] ?
  //     dates[date].push(transaction) :
  //     dates[date] = [transaction];
  //   })
  //   return dates;
  // }

  //   // Groups annual transactions by month

  // assignToMonth (transactions) {
  //   let months = {};
  //   transactions.forEach(transaction => {
  //     let month = moment(transaction.date).format('MMMM')
  //     months[month] ?
  //     months[month].push(transaction) :
  //     months[month] = [transaction];
  //   })
  //   return months;
  // }

  // // Takes daily transactions and calculates total spend for the day for each date
  // // then sets state to rerender the chart

  // generateDailyData (transactions, month) {
  //   const monthlyTransactions = this.assignToMonth(transactions)[month];
  //   if (monthlyTransactions) {
  //     const dailyTransactions = this.assignToDate(monthlyTransactions)
  //     // for some reason map didn't like an object-like array...
  //     const days = [...Object.keys(dailyTransactions)];
  //     const amounts = days.map(day => {
  //       return dailyTransactions[day].reduce((a, b) => {
  //         return  a += Math.abs(b.amount);
  //       }, 0)
  //     })
  //     return this.generateChartDataObject(days, amounts);
  //   }
  //   return this.generateChartDataObject([], [])
  // }

  // // Takes monthly transactions and calculates total spend for the month
  // // then sets state to rerender the chart

  // generateMonthlyData (transactions) {
  //   const months = this.assignToMonth(transactions);
  //   const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  //   const amounts = year.map(month => {
  //     months[month] = months[month] || [];
  //     return months[month].reduce((a, b) => {
  //       return a += Math.abs(b.amount)
  //     }, 0);
  //   });
  //   return this.generateChartDataObject(year, amounts);
  // }

  // Below checks whether or not a month has been selected
  // if true, the chart will render daily transactions for the selected month
  // else it will reset to all transactions for the year

  handleChartClick(element) {
    let chartData, month;
    if (this.state.displayAnnual) {
      month = this.state.chartData.labels[element[0]._index];
      chartData = this.generateDailyData(this.state.filteredTransactions, month);
    } else {
      chartData = this.generateMonthlyData(this.state.filteredTransactions);
    }    
    this.setState({
      month,
      chartData,
      displayAnnual: !this.state.displayAnnual
    })
  }

  // Enables users to add a total spending dataset to the chart
  // in order to compare filtered data to total spend.

  toggleTotal () {
    let { chartData } = this.state, total;

    // checks state of the chart
    if (!this.state.displayTotal) {

      if (this.state.displayAnnual) {
        total = this.generateMonthlyData(this.props.transactions);
        total.datasets[0].label = 'Monthly Totals'
      } else {
        total = this.generateDailyData(this.props.transactions, this.state.month);
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

  renderChart() {
    const filteredTransactions = this.filterTransactionsByValue();
    // check current state of the chart
    const chartData = this.state.displayAnnual ?
    this.generateMonthlyData(filteredTransactions) :
    this.generateDailyData(filteredTransactions, this.state.month);

    this.setState({
      filteredTransactions,
      chartData
    })
  }

  componentDidMount(){
    this.renderChart();
  }

  componentWillReceiveProps({categories, accounts}){
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
          chartData={this.state.chartData} 
          handleChartClick={this.handleChartClick}/>
        <CheckBox label='Show Total'
          toggle={true}
          disabled={false}
          reverse={true} 
          checked={this.state.displayTotal}
          onChange={() => this.toggleTotal()}/>
        <Select 
          placeHolder="Select a category"
          options={this.state.categories}
          value={this.state.filter.category}
          onChange={({value}) => {
            let { filter } = this.state;
            value === 'none' ?
            delete filter.category :
            filter.category = value;
            this.setState({filter}, () => this.renderChart())
          }}
        />
        <Select 
          placeHolder="Select an account"
          options={this.state.accounts}
          value={this.state.filter.account}
          onChange={({value}) => {
            let { filter } = this.state;
            value === 'none' ?
            delete filter.category :
            filter.category = value;
            this.setState({filter}, () => this.renderChart())
          }}
        />
      </Layer> :
      null
    )
  }

}

export default SummaryChartContainer;