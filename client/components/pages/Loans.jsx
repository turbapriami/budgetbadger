import React, { Component } from 'react';
import LoansContainer from '../containers/LoansContainer.jsx';
import { Hero, Box, Heading, Image, Footer, Title, Paragraph, Anchor, Menu, Section, Headline, Legend, NumberInput } from 'grommet';
import Chart, {Axis, Grid, Area, Bar, Base, Layers, Line, Marker, MarkerLabel, HotSpots} from 'grommet/components/chart/Chart';

// Alternate Hero background image:
// https://geriatricnursing.org/wp-content/uploads/2016/03/University-of-Washington.jpg

class Loans extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      payLevel: '5',
      interestRate: '10',
      term: '20'
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render(){
    return(
      <div>
        <Hero background={<Image src='http://bobkim.net/wp-content/uploads/2014/01/UW-Cherry-BlossomWA-1.jpg'
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
              <Heading margin='none' style={{fontSize: "85px", fontWeight: "400"}} >
                Loan Balance
              </Heading>
            </Box>
          </Box>
        </Hero>
        <Section pad='large' justify='center' align='center' colorIndex='light-2' >
          <Headline margin='none'>
            <Chart style={{fontSize: "20px"}}>
              <Axis count={5}
                labels={[{"index": 2, "label": "50"}, {"index": 4, "label": "100"}]}
                vertical={true} />
              <Chart vertical={true}>
                <Base height='small'
                  width='large' />
                <Layers>
                  <Grid rows={10}
                    columns={3} />
                  <Area values={[0, 3, 5, 7, 9, 12, 14, 16, 18, 20, 29, 50, 100]}
                    colorIndex='graph-1'
                    points={true}
                    activeIndex={-1} />
                  <Bar values={[2, 3, 5, 3, 4, 4, 3, 2, 4, 7, 23, 14, 10]}
                    colorIndex='graph-2'
                    points={true}
                    activeIndex={-1} />
                  <Line values={[100, 97, 95, 93, 91, 88, 86, 84, 82, 80, 71, 50, 0]}
                    colorIndex='accent-1'
                    points={true}
                    activeIndex={-1} />
                </Layers>
                <Axis count={3}
                  labels={[{"index": 0, "label": "2017"}, {"index": 1, "label": "2027"}, {"index": 2, "label": "2037"}]} />
                <Legend style={{fontSize: "20px"}} series={[{"label": "Total Paid", "colorIndex": "graph-1"}, {"label": "Payment", "colorIndex": "graph-2"}, {"label": "Balance Outstanding", "colorIndex": "accent-1"}]} />
              </Chart>
            </Chart>
          </Headline>
        </Section>
        <Section pad='large' justify='center' align='center'>
          <Headline margin='none' style={{fontSize: "20px"}}>
            Adjust Monthly Payments:
            <p />
            <NumberInput name='payLevel' value={this.state.payLevel} onChange={this.handleChange} />
          </Headline>
          <p />
          <Headline margin='none' style={{fontSize: "20px"}}>
            Adjust Loan Term:
            <p />
            <NumberInput name='term' value={this.state.term} onChange={this.handleChange} />
          </Headline>
          <p />
          <Headline margin='none' style={{fontSize: "20px"}}>
            Adjust Interest Rate:
            <p />
            <NumberInput name='interestRate' value={this.state.interestRate} onChange={this.handleChange} />
          </Headline>
        </Section>
      </div>
    )
  }
};


module.exports = Loans;