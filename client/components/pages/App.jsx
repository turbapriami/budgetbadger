import React, { Component } from 'react';
import Bills from '../containers/Bills.jsx';
import LoginBar from '../pages/LoginBar.jsx';
import Main from '../pages/Main.jsx';
import {App, Tab, Tabs, Paragraph} from 'grommet';

class App extends Component {
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
export default App