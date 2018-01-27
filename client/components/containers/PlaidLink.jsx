import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor } from 'grommet';
import React, { Component } from 'react';
import ReactPlaidLink from 'react-plaid-link'

class PlaidLink extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.refs.plaid)
    this.refs.plaid.handleOnClick()
  }
  handleOnSuccess(token, metadata) {
    console.log(token)
  }
  handleOnExit() {
    // handle the case when your user exits Link
  }
  render() {
    return (
      <ReactPlaidLink
        clientName="Your app name"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="10ae69c4cbf11d018cfde3ddba55e7"
        onExit={this.handleOnExit}
        onSuccess={this.handleOnSuccess}
        style={{border: '0px', width: '0px', height: '0px'}}
        ref='plaid'
      >
      </ReactPlaidLink>
    )
  }
}

export default PlaidLink;