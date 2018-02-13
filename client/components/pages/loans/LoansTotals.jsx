import React, { Component } from 'react';
import { Box, Headline, Value, CurrencyIcon } from 'grommet';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


class LoansOnDashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      TotalLoanDebt: 0,
      AvgIntRate: 0,
    }
    this.handleTotals = this.handleTotals.bind(this);
  }

  handleTotals(input){
    if(input.loans){
      let debtSum = 0;
      let intSum = 0;
      let counter = 0;
      input.loans.map((loan) => {
        debtSum += loan.amount;
        intSum += loan.interest_rate;
        counter++;
      })
      intSum = intSum/counter;
      this.setState({
        TotalLoanDebt: debtSum,
        AvgIntRate: intSum
      })
    }
  };

  componentWillReceiveProps(nextProps){
    this.handleTotals(nextProps);
  };

  render(){
    return(
      <div>
        <Box align='center'
          justify='center'
          pad='large'
          margin='large'
          colorIndex='light-2'>
          <Headline margin='none' align='center' style={{fontSize: "25px"}} >
            Loans
            <p />
          </Headline>
          <Value value={numberWithCommas(this.state.TotalLoanDebt)}
            icon={<CurrencyIcon />}
            label='Total Loan Debt'
            units='$' />
            <p />
          <Value value={this.state.AvgIntRate}
            icon={<CurrencyIcon />}
            label='Avg Interest Rate'
            units='%' />
        </Box>
      </div>
    )
  }
};

module.exports = LoansOnDashboard;