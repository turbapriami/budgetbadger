import { Columns, Box, Section,Title, Header, Heading, Paragraph} from 'grommet';
import React, { Component } from 'react';
import styles from '../../../../public/main/jStyles';

class BillsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header>
          <Heading
            align="center"
            margin="small"
            strong="true"
            style={{ fontSize: '30px', marginLeft: '22%' }}
          >
            Monthly Summary
          </Heading>
        </Header>
        <Columns masonry={false} justify="center" size="small">
          <Box
            align="stretch"
            pad="none"
            direction="column"
            margin="small"
            style={{ width: '180px' }}
          >
            <Heading
              align="center"
              margin="none"
              strong="true"
              style={{ fontSize: '20px', textAlign: 'center' }}
            >
              Bills Due
            </Heading>
            <Paragraph size="xlarge" style={{ textAlign: 'center' }}>
              ${this.props.billsDueThisMonth
                ? this.props.billsDueThisMonth
                    .reduce((total, bill) => (total += bill.amount), 0)
                    .toFixed(2)
                : 0}
            </Paragraph>
          </Box>
          <Box
            align="stretch"
            pad="none"
            direction="column"
            margin="small"
            style={{ width: '180px' }}
          >
            <Heading
              align="left"
              margin="none"
              strong="true"
              style={{ fontSize: '20px', textAlign: 'center' }}
            >
              Bills Overdue
            </Heading>
            <Paragraph size="xlarge" style={{ textAlign: 'center' }}>
              ${this.props.overdueBills
                ? this.props.overdueBills
                    .reduce((total, bill) => (total += bill.amount), 0)
                    .toFixed(2)
                : 0}
            </Paragraph>
          </Box>
          <Box
            align="center"
            pad="none"
            direction="column"
            margin="small"
            style={{ width: '180px' }}
          >
            <Heading
              align="left"
              margin="none"
              strong="true"
              style={{ fontSize: '20px', textAlign: 'center' }}
            >
              Cash Available
            </Heading>
            <Paragraph size="xlarge" style={{ textAlign: 'center' }}>
              Need Data
            </Paragraph>
          </Box>
          <Box
            align="center"
            pad="none"
            direction="column"
            margin="small"
            style={{ width: '180px' }}
          >
            <Heading
              align="left"
              margin="none"
              strong="true"
              style={{ fontSize: '20px', textAlign: 'center' }}
            >
              Credit Available
            </Heading>
            <Paragraph size="xlarge" style={{ textAlign: 'center' }}>
              Need Data
            </Paragraph>
          </Box>
        </Columns>
      </div>
    );
  }
}

export default BillsSummary;
