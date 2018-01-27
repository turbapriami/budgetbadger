import React, { Component } from 'react';
import LoginBar from '../pages/LoginBar.jsx';
import Main from '../pages/Main.jsx';
import Profile from '../containers/Profile.jsx';
import PlaidLink from '../containers/PlaidLink.jsx';
import {App, Tab, Tabs, Paragraph} from 'grommet';
import { Route } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <div>
        <App centered={false}>
          <LoginBar/>
          <Route path='/' component={Main} />
          <Route path='/profile' component={Profile} />
          <Route path='/add' component={PlaidLink} />
        </App>
      </div>
    )
  }
} 