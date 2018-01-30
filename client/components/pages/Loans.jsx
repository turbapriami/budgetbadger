import React, { Component } from 'react';
import LoansContainer from '../containers/LoansContainer.jsx';
import { Hero, Box, Heading, Image, Footer, Title, Paragraph, Anchor, Menu, Section, Headline, Legend, NumberInput } from 'grommet';
import Chart, {Axis, Grid, Area, Bar, Base, Layers, Line, Marker, MarkerLabel, HotSpots} from 'grommet/components/chart/Chart';
import { amortizationSchedule } from 'amortization';

console.log(amortizationSchedule(50000, 5, 10))

class Loans extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chartPrincipal: [],
      chartPayments: [],
      chartOutstanding: [],
      principal: 100000,
      payLevel: 1000,
      interestRate: 8.5,
      term: 20,
      inception: 2017
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAmort = this.handleAmort.bind(this);
  };

  handleAmort(){
    var amort = amortizationSchedule(this.state.principal, this.state.term, this.state.interestRate);
    var principal = [];
    var payments = [];
    var outstanding = [];

    amort.forEach((payment) => {
      principal.push(Math.floor(payment.principalBalance));
      payments.push(Math.floor(payment.payment));
      outstanding.push(this.state.principal - Math.floor(payment.principalBalance));
    })

    this.setState({
      chartPrincipal: principal,
      chartOutstanding: outstanding,
      chartPayments: payments
    })
  };

  handleChange(e){
    if(e.target.value > 0){
      this.setState({
        [e.target.name]: parseFloat(e.target.value)
      }, () => {
        this.handleAmort();
      })
    }
  };

  componentWillMount(){
    this.handleAmort()
  };

  render(){
    return(
      <div>
        <Hero background={<Image src={'https://www.collegemagazine.com/wp-content/uploads/2015/03/UW-Quad.jpg'}
          fit='cover'
          full={true} />}
          backgroundColorIndex='dark'>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'>
              <Heading margin='none' style={{fontSize: "55px"}} >
                Loan Balance
              </Heading>
            </Box>
          </Box>
        </Hero>
        <Section pad='large' justify='center' align='center' colorIndex='light-2' >
          <Headline margin='none'>
            <Chart style={{fontSize: "20px"}}>
              <Axis count={5}
                labels={[{"index": 2, "label": "$" + this.state.principal/2}, {"index": 4, "label": "$" + this.state.principal}]}
                vertical={true} />
              <Chart vertical={true}>
                <Base height='small'
                  width='large' />
                <Layers>
                  <Grid rows={10}
                    columns={3} />
                  <Area values={this.state.chartOutstanding}
                    colorIndex='graph-1'
                    points={true}
                    activeIndex={-1} 
                    max={this.state.principal} />
                  <Bar values={this.state.chartPayments}
                    colorIndex='graph-2'
                    points={true}
                    activeIndex={-1} 
                    max={this.state.principal} />
                  <Line values={this.state.chartPrincipal}
                    colorIndex='accent-1'
                    points={true}
                    activeIndex={-1} 
                    max={this.state.principal}/>
                </Layers>
                <Axis count={3}
                  labels={[{"index": 0, "label": this.state.inception}, {"index": 1, "label": Math.floor(this.state.inception + this.state.term/2)}, {"index": 2, "label": this.state.inception + this.state.term}]} />
                <Legend style={{fontSize: "20px"}} series={[{"label": "Total Paid", "colorIndex": "graph-1"}, {"label": "Payment", "colorIndex": "graph-2"}, {"label": "Balance Outstanding", "colorIndex": "accent-1"}]} />
              </Chart>
            </Chart>
          </Headline>
        </Section>
        <Section pad='large' justify='center' align='center'>
          <Headline margin='none' style={{fontSize: "20px"}}>
            Loan Amount ($)
            <p />
            <NumberInput name='principal' value={this.state.principal} onChange={this.handleChange} step={1000}/>
          </Headline>
          <p />
          <Headline margin='none' style={{fontSize: "20px"}}>
            Annual Interest Rate (%)
            <p />
            <NumberInput name='interestRate' value={this.state.interestRate} onChange={this.handleChange} step={0.5}/>
          </Headline>
          <p />
          <Headline margin='none' style={{fontSize: "20px"}}>
            Loan Term (Years)
            <p />
            <NumberInput name='term' value={this.state.term} onChange={this.handleChange} />
          </Headline>
          <p />
          <Headline margin='none' style={{fontSize: "20px"}}>
            Monthly Payment ($)
            <p />
            <NumberInput name='payLevel' value={this.state.payLevel} onChange={this.handleChange} />
          </Headline>
        </Section>
      </div>
    )
  }
};


module.exports = Loans;