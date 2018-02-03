import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Bank from './BankContainer.jsx';
import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor, Card, TextInput, FormField } from 'grommet';

let mutationQuery = null;

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

  componentDidMount() {
    console.log('mounted');
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
                      <TextInput onDOMChange={this.props.updateFirstName} defaultValue={this.state.first_name}/>
                      <TextInput onDOMChange={this.props.updateLastName} defaultValue={this.state.last_name}/>
                  </FormField>
                </Box>
              </Card>
              <Card label="Address" size={{ height: "medium", width: "medium" }} style={{ display: "inline-block" }} colorIndex="light-2" margin={{ horizontal: "small" }}>              
                <FormField>
                  <TextInput onDOMChange={this.props.updateStreet} defaultValue={this.state.street}/>
                  <TextInput onDOMChange={this.props.updateCity} defaultValue={`${this.state.city},`}/>
                  <TextInput onDOMChange={this.props.updateState} defaultValue={this.state.state}/>
                  <TextInput onDOMChange={this.props.updateZipCode} defaultValue={this.state.zip_code}/>
                </FormField>
              </Card>
              <Card wrap={true} label="Email" size={{ height: "medium", width: "medium" }} style={{ display: "inline-block" }} colorIndex="light-2" margin={{ horizontal: "small" }}>                     
                <TextInput onDOMChange={this.props.updateEmail} defaultValue={this.state.email}/>
              </Card>
              <Card label="Phone" size={{ height: "medium", width: "medium" }} style={{ display: "inline-block" }} colorIndex="light-2" margin={{ horizontal: "small" }}>
                <TextInput onDOMChange={this.props.updatePhone} defaultValue={this.state.phone}/>
              </Card>
            </Box>
            <Card label="Accounts" size={{ height: "medium", width: "medium" }} style={{ display: "inline" }} colorIndex="light-2" margin={{ vertical: "small", horizontal: "small" }}>
              <Paragraph margin="small">
                <Bank banks={this.state.banks} />
              </Paragraph>
            </Card>
          </Box>
        </Card>
      </Box>
    )
  }
}

const UPDATE_USER = gql`
  mutation UPDATE_USER($email: String!, $first_name: String!, $last_name: String!, $city: String!, $street: String!, $zip_code: String!, $state: String!, $phone: String!) {
    updateUser(
      email:"$email",
      first_name:"Joe",
      last_name:"Shmoe",
      city:"South Kakalaka",
      street:"45th",
      zip_code:"13521",
      state:"Wyoming"
    ) {
      first_name
      last_name
      city
      street
      zip_code
      state
      phone
      email
      banks
    }
  }
`

export default ProfileEdit;