import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Anchor, Box, Button, Card, Columns, CheckBox, Form, FormFields, Footer, Header, Heading, Label, Paragraph, TextInput, Tiles, Layer, PasswordInput } from 'grommet';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Cookies from 'universal-cookie'
import axios from 'axios'

class SplashSignIn extends Component {
  constructor() {
    super()
    this.state = {
      user_email: '',
      password: '',
      layerActive: false
    }
    this._confirm = this._confirm.bind(this)
    this.activateLayer = this.activateLayer.bind(this);
  }

  async _confirm() {
    const { user_email, password } = this.state;
    try {
      const result = await this.props.mutate({
        variables: {
          user_email,
          password,
        }
      })
      const user = {
        user_id: result.data.loginUser[1],
        token: result.data.loginUser[0]
      }
      const cookie = new Cookies();
      cookie.set('user', user, {path:'/'});
      window.location.reload()
    } catch(error) {
        console.log(error)
    }
  }

  activateLayer() {
    this.setState({
      layerActive: true
    })
  }

  render() {
    const layer = this.state.layerActive ? <Layer closer={true} flush={true} onClose={() => {
      this.setState({ layerActive: false })}}>
      <Box full={false} pad="small" size={{ height: "medium", width: "medium" }} pad="medium">
        <Paragraph align="center">Please enter your email in the form below, and we'll send you a special link to reset your password.</Paragraph>
        <Paragraph align="center">Please be mindful that the link will only be active for the next 20 minutes</Paragraph>
        <TextInput name="userEmail" onDOMChange={e => this.setState({user_email: e.target.value})} />
        <Box size={{ height: "10%", width: "15%" }} alignSelf="center" margin={{ top: "medium" }} >
          <Button label='Submit'
            href='#'
            primary={false}
            secondary={false}
            accent={false}
            critical={false}
            plain={false}
            onClick={() => {
              axios.post('/passwordRecovery', {
                email: this.state.email
              }
            )
              .then(res => console.log("RESPONSE!!!!", res))
              .catch(err => console.error(err))
            }} />
        </Box>
      </Box>
      </Layer> : null;
    return (
      <Box align="center" focusable={true}>
      {layer}
        <Card align="center" style={{ outline: "#000 solid thin" }}> 
              <h3 style={{ textAlign: "center" }} >Everything you could ever want in an accountant, and more</h3>
            <div style={{ outline: "#E8E8E8 solid thin" }}></div>
          <Form pad="small" style={{ width: "100%" }} >
            <Box pad={{ vertical: "small", width: "100%" }} >
              <FormFields style={{ width: "100%" }} >
                  <Label>Email</Label>
                  <TextInput onDOMChange={e => this.setState({ user_email: e.target.value })} style={{ width: "100%" }} name="userEmail" />
                  <Label>Password</Label>
                  <PasswordInput onDOMChange={e => this.setState({ password: e.target.value })} style={{ width: "100%" }} />
              </FormFields>
            </Box>
            <CheckBox label="Remember me" pad="medium" />
            <Footer size="small" direction="column"
              align={'center' ? 'stretch' : 'start'}
              pad={{ vertical: "medium" }}>
              <Button onClick={() => this._confirm()} primary={true} fill="center" label='Sign In'/>
            </Footer>
          </Form>
          <div style={{ outline: "#E8E8E8 solid thin" }}></div>
          <Paragraph align="center" size="small" margin="small" >
            <Anchor href="#" onClick={this.activateLayer}>I forgot my password</Anchor>
          </Paragraph>
          <Router>
            <Paragraph align="center" size="small" margin="small" >
              New to Budget Badger?
              <Link to={'/SplashSignUp'}>
                <a style={{ color: " #0000EE" }} > Create an account.</a>
              </Link>
            </Paragraph>
          </Router>
        </Card>
      </Box>
    )
  }
}

const LOGIN_USER = gql`
  mutation LOGIN($user_email: String!, $password: String!) {
      loginUser(email: $user_email, password: $password)
  }
`

export default compose(graphql(LOGIN_USER))(SplashSignIn);