import React, { Component } from 'react';
import Bills from '../containers/Bills.jsx';
import {Tab, Tabs, Paragraph} from 'grommet';
import TransactionContainer from '../containers/TransactionContainer.jsx';

const Main = (props) => {
    return (
        <Tabs justify='center'>
          <Tab title='Dashboard'>
            <div>
            </div>
          </Tab>
          <Tab title='Balance'>
            <div>
            </div>
          </Tab>
          <Tab title='Transaction'>
            <TransactionContainer />
          </Tab>
          <Tab title='Bills'>
          <div>
            <Bills/>
          </div>
          </Tab>
          <Tab title='Loans'>
          <div>
          </div>
          </Tab>
        </Tabs>
    )
}

export default Main;