import React from 'react'
import SideBar from 'grommet/components/SideBar';
import { Box, Anchor, Menu, Header, Title } from 'grommet';

const Navigation = ({ accounts, filter }) => (
    <SideBar>
      <Header><Title>Types</Title></Header>
      <Box flex='grow' justify='start'>
        <Menu primary={true}>
          <Anchor onClick={(e) => filter(e, 'all')}>
            Debit & Credit
          </Anchor>
          <Anchor onClick={(e) => filter(e)}>
            Debit Only
          </Anchor>
          <Anchor onClick={(e) => filter(e)}>
            Credit Only
          </Anchor>
        </Menu>
      <Header><Title>Accounts</Title></Header>
        <Menu primary={true}>
        {
          accounts ?
          accounts.map(account => (
            <Anchor onClick={(e) => filter(e, 'bank')}>
              {account.bank_name}
            </Anchor>
          )):
          null
        }
        </Menu>
      </Box>
    </SideBar>
)

export default Navigation;