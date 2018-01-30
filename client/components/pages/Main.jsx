import React, { Component } from 'react';
import Bills from '../containers/Bills.jsx';
import Loans from '../containers/LoansContainer.jsx';
import {Tab, Tabs, Paragraph} from 'grommet';
import { Redirect, Route, Switch } from 'react-router-dom';
import TransactionContainer from '../containers/TransactionContainer.jsx';
import DashBoard from '../containers/Dashboard.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false,
      activeIndex: null
    }
    this.indexChooser = {
      '/dashboard': 0,
      '/balance': 1,
      '/transactions': 2,
      '/bills': 3,
      '/loans': 4,
      '/profile': 5
    }
  }
  componentWillMount() {
    this.setState({
      activeIndex: this.indexChooser[this.props.location.pathname]
    })
  }
  componentWillReceiveProps() {
    setTimeout(()=> {
      if (this.props.location.pathname === '/profile') {
        this.setState({
          activeIndex: 5
        })
      }
    }, 1)
  }
  render() {
    return (
      <Tabs justify='center' activeIndex={this.state.activeIndex}>
        <Tab title='Dashboard' onClick={()=>{this.setState({activeIndex: 0})}} >
          <Redirect to='/' />
          <Route path='/' component={DashBoard} />
        </Tab>
        <Tab title='Balance' onClick={()=>{this.setState({activeIndex: 1})}} >
          <Redirect to='/balance'/>
        </Tab>
        <Tab title='Transactions' onClick={()=>{this.setState({activeIndex: 2})}}>
          <Redirect to='/transactions'/>
          <Route path='/transactions' component={TransactionContainer} />
        </Tab>
        <Tab title='Bills' onClick={()=>{this.setState({activeIndex: 3})}}>
          <Redirect to='/bills'/>
          <Route path='/bills' component={Bills} />
        </Tab>
        <Tab title='Loans' onClick={()=>{this.setState({activeIndex: 4})}}>
          <Redirect to='/loans'/>
          <Route path='/loans' component={Loans} />
        </Tab>
      </Tabs>
    )
  }
}

export default Main;