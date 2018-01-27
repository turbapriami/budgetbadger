import React, { Component } from 'react';
import Bills from '../containers/Bills.jsx';
import LoginBar from '../pages/LoginBar.jsx';
import Main from '../pages/Main.jsx';
import {App, Tab, Tabs, Paragraph} from 'grommet';

export default class extends Component {
  render() {
    return (
      <div>
        <App centered={false}>
          <LoginBar/>
          <Main/>
        </App>
      </div>
    )
  }
} 