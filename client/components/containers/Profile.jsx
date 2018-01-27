import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor } from 'grommet';
import React, { Component } from 'react';
// import PlaidLink from 'react-plaid-link'

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  handleOnSuccess(token, metadata) {
    // send token to client server
  }
  handleOnExit() {
    // handle the case when your user exits Link
  }
  render() {
    return (
      // <PlaidLink
      //   clientName="Your app name"
      //   env="sandbox"
      //   product='["auth", "transactions"]'
      //   publicKey="10ae69c4cbf11d018cfde3ddba55e7"
      //   onExit={this.handleOnExit}
      //   onSuccess={this.handleOnSuccess}
      // >
      //   Open Link and connect your bank!
      // </PlaidLink>
      <div>
        asdlakj
      </div>
    )
  }
}

export default Profile;