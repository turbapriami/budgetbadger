import React, { Component } from 'react';
import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor } from 'grommet';

export default class extends Component {
  render() {
    return (
      <App>
        <Article>
          <Header fixed={false}
            float={false}
            size='medium'
            splash={false}>
          <Title>
            Budget Badger
          </Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
          </Box>
          </Header>

          <Section></Section>

          <Footer justify='between'
            size='medium'>
            <Title>
              Budget Badger
            </Title>
            <Box direction='row'
              align='center'
              pad={{"between": "medium"}}>
              <Paragraph margin='none'>
                © 2018 Turba Priami
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
        </Article>
      </App>
    )
  }
}