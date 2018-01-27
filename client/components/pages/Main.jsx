import React, { Component } from 'react';
import Bills from '../containers/Bills.jsx';
import {Tab, Tabs, Paragraph} from 'grommet';

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
            <div>
            </div>
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