import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Bank from './BankContainer.jsx';
import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor, Card, TextInput, FormField } from 'grommet';

class ProfileEdit extends Component {
  constructor({userInfo}) {
    super({userInfo})
    this.state = {
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      street: userInfo.street,
      city: userInfo.city,
      state: userInfo.state,
      zip_code: userInfo.zip_code,
      phone: userInfo.phone,
      email: userInfo.email,
      banks: userInfo.banks
    }
  }


  render() {
    return (
      <Box full={true} align="center" pad="large" flex={true}>
        <Card label="User Info" alignSelf="center" style={{ height: "100%", width: "100%", outline: "#000 solid thin" }} >
          <div style={{ outline: "#E8E8E8 solid thin" }}></div>
          <Box full={true} direction="row" align="center" pad={{ between: "small"}} margin="small" >
            <Box size={{ height: "medium", width: "large" }} style={{ display: "inline" }} direction="column" pad={{ between: "small" }} >
              <Card label="Name" size={{ height: "medium", width: "medium" }} style={{ display: "inline-block" }} colorIndex="light-2" margin={{ horizontal: "small" }}>
                
                <Box pad={{ between: "small" }}>
                  <FormField>
                      <input onDOMChange={e => this.setState({ first_name: e.target.value })} defaultValue={this.state.first_name}/>
                      <input onDOMChange={e => this.setState({ last_name: e.target.value })} defaultValue={this.state.last_name}/>
                  </FormField>
                </Box>
              </Card>
              <Card label="Address" size={{ height: "medium", width: "medium" }} style={{ display: "inline-block" }} colorIndex="light-2" margin={{ horizontal: "small" }}>
              
                <FormField>
                  <input onDOMChange={e => this.setState({ street: e.target.value })} defaultValue={this.state.street}/>
                  <input onDOMChange={e => this.setState({ city: e.target.value })} defaultValue={`${this.state.city},`}/>
                  <input onDOMChange={e => this.setState({ state: e.target.value })} defaultValue={this.state.state}/>
                  <input onDOMChange={e => this.setState({ zip_code: e.target.value })} defaultValue={this.state.zip_code}/>
                </FormField>
              </Card>
              <Card wrap={true} label="Email" size={{ height: "medium", width: "medium" }} style={{ display: "inline-block" }} colorIndex="light-2" margin={{ horizontal: "small" }}> 
                     
                <input onDOMChange={e => this.setState({ email: e.target.value })} defaultValue={this.state.email}/>
              </Card>
              <Card label="Phone" size={{ height: "medium", width: "medium" }} style={{ display: "inline-block" }} colorIndex="light-2" margin={{ horizontal: "small" }}>
              
                <input onDOMChange={e => this.setState({ phone: e.target.value })} defaultValue={this.state.phone}/>
              </Card>
            </Box>
            <Card label="Accounts" size={{ height: "medium", width: "medium" }} style={{ display: "inline" }} colorIndex="light-2" margin={{ vertical: "small", horizontal: "small" }}>
            
              <Paragraph margin="small">
                <Bank banks={this.state.banks} />
              </Paragraph>
            </Card>
          </Box>
        </Card>
        <button onClick={e => this.getChanges(this.state)} >Submit Changes</button>
      </Box>
    )
  }
}

export default ProfileEdit;