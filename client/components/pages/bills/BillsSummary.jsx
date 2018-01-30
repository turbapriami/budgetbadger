import { Columns, Box, Section,Title, Header, Heading, Paragraph} from 'grommet';
import React, { Component } from 'react';
import styles from '../../../../public/main/jStyles';

class BillsSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
    render() {
        return (
          <div>
            <Header>
              <Heading
                  align = 'left'
                  margin = 'small'
                  strong = 'true'
                  style = {{fontSize:'30px', marginLeft: '19%'}}
                >
                Summary
              </Heading>
            </Header>
            <Columns size='medium'
              masonry={false}
              maxCount={3}
              justify = 'center'
              style={{paddingTop:'45px'}}
            >
              <Heading
                align = 'left'
                margin = 'none'
                strong = 'true'
                style = {{fontSize:'20px', textAlign:'center'}}
              >
                Bills Due
              </Heading>
              <Paragraph
                size='xlarge'
                style = {{textAlign:'center'}}
              >
                $1,421
              </Paragraph>
              <Heading
                align = 'left'
                margin = 'none'
                strong = 'true'
                style = {{fontSize:'20px', textAlign:'center'}}
              >
                Cash Available
              </Heading>
              <Paragraph 
              size = 'xlarge' 
              style = {{textAlign:'center'}}>
                $3,139
              </Paragraph>
              <Heading
                align='left'
                margin='none'
                strong='true'
                style={{fontSize:'20px',textAlign:'center'}}
              >
                Credit Available
              </Heading>
              <Paragraph size='xlarge'
               style = {{textAlign:'center'}}>
                $17,000
              </Paragraph>
              </Columns>
          </div>)
    }
  

}

export default BillsSummary;