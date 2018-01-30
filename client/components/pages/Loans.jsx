import React, { Component } from 'react';
import LoansContainer from '../containers/LoansContainer.jsx';
import { Hero, Box, Heading, Image, Footer, Title, Paragraph, Anchor, Menu, Section, Headline, Legend, NumberInput } from 'grommet';
import Chart, {Axis, Grid, Area, Bar, Base, Layers, Line, Marker, MarkerLabel, HotSpots} from 'grommet/components/chart/Chart';

class Loans extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      PayLevel: '5'
    }
    this.handlePayLevel = this.handlePayLevel.bind(this);
  }

  handlePayLevel(e){
    this.setState({
      PayLevel: e.target.value
    })
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <Hero background={<Image src='https://geriatricnursing.org/wp-content/uploads/2016/03/University-of-Washington.jpg'
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
              <Heading margin='none'>
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
            <NumberInput value={this.state.PayLevel} onChange={this.handlePayLevel} />
          </Headline>
        </Section>
        <Footer justify='between'>
          <Title>
            <s />
            Budget Badger
          </Title>
          <Box direction='row'
            align='center'
            pad={{"between": "medium"}}>
            <Paragraph margin='none'>
              © 2018 Priam Labs
            </Paragraph>
            <Menu direction='row'
              size='small'
              dropAlign={{"right": "right"}}>
              <Anchor href='#'>
                Support
              </Anchor>
              <Anchor href='#'>
                Contact
              </Anchor>
              <Anchor href='#'>
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      </div>
    )
  }
}


module.exports = Loans;