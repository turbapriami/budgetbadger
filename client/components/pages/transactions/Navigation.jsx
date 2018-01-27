import React from 'react'
import SideBar from 'grommet/components/SideBar';
import { Box, Anchor, Menu, Header, Title } from 'grommet';

const Navigation = (props) => (
    <SideBar>
      <Header><Title>Types</Title></Header>
      <Box flex='grow' justify='start'>
        <Menu primary={true}>
          <Anchor>
            Cash & Credit
          </Anchor>
          <Anchor>
            Cash Only
          </Anchor>
          <Anchor>
            Credit Only
          </Anchor>
        </Menu>
      <Header><Title>Accounts</Title></Header>
        <Menu primary={true}>
        {
          props.accounts.map(account => (
            <Anchor>
              {account.bank_name}
            </Anchor>
          ))
        }
        </Menu>
      </Box>
    </SideBar>
)

export default Navigation;