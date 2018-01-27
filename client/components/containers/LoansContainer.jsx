import React, { Component } from 'react';
import {connect} from 'react-redux';
import Loans from '../pages/Loans.jsx';

class LoansContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }

  render(){
    return(
      <div>
        <Loans />
      </div>
    )
  }
};

module.exports = LoansContainer;