import React, { Component } from 'react';
import Bills from '../containers/Bills.jsx';
import Loans from '../containers/LoansContainer.jsx';
import {Tab, Tabs, Paragraph} from 'grommet';
import { Redirect, Route, Switch } from 'react-router-dom';

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
          <div>
          </div>
        </Tab>
        <Tab title='Balance' onClick={()=>{this.setState({activeIndex: 1})}} >
          <Redirect to='/balance'/>
          <div>
          </div>
        </Tab>
        <Tab title='Transactions' onClick={()=>{this.setState({activeIndex: 2})}}>
          <Redirect to='/transactions'/>
          <div>
          </div>
        </Tab>
        <Tab title='Bills' onClick={()=>{this.setState({activeIndex: 3})}}>
          <Redirect to='/bills'/>
          <div>
            <Route path='/bills' component={Bills} />
          </div>
        </Tab>
        <Tab title='Loans' onClick={()=>{this.setState({activeIndex: 4})}}>
          <Redirect to='/loans'/>
          <div>
            <Route path='/loans' component={Loans} />
          </div>
        </Tab>
      </Tabs>
    )
  }
}

export default Main;