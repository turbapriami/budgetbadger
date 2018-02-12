import React, { Component } from 'React';
import { Anchor, Box, Button, Card, Columns, CheckBox, Form, FormFields, Footer, Header, Heading, Label, Paragraph, TextInput, Tiles, Layer, PasswordInput } from 'grommet';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

class PasswordRecoveryModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user_email: ''
    }
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail() {
    console.log("RIGHT BEFORE MUTATION");
    this.props.mutate({
      variables: { email: this.state.user_email }
    })
    .then(({ data }) => {
      console.log('GOT THE DATA!! WOOHoOoOoOoOoOoOoOoOoOo', data);
    }).catch((error) => {
      console.error("I feel so sad now :( no... NOoOoOoOoOoOoOoOo!!!!!", error);
    })
    console.log("AFTER MUTATION, MAYBE STILL WAITING FOR PROMISES TO RESOLVE");
  }

  render() {
    return (
      <Box full={false} alignSelf="center" pad="small" size={{ height: "medium", width: "medium" }} pad="medium">
        <Paragraph align="center">Please enter your email in the form below, and we'll send you a special link to reset your password.</Paragraph>
        <Paragraph align="center">Please be mindful that the link will only be active for the next 20 minutes</Paragraph>
        <TextInput name="userEmail" onDOMChange={e => {
              this.setState({user_email: e.target.value})
            }
          } />
        <Box size={{ height: "10%", width: "15%" }} alignSelf="center" margin={{ top: "medium" }} >
          <Button label='Submit'
            href='#'
            primary={false}
            secondary={false}
            accent={false}
            critical={false}
            plain={false}
            onClick={this.sendEmail} />
        </Box>
      </Box>
    )
  }
}

const Recover_Password = gql`
  mutation RECOVERPASSWORD($email: String!) {
    getPasswordRecoveryEmail(email: $email) {
      first_name
      email
    }
  }
`

export default compose(graphql(Recover_Password))(PasswordRecoveryModal);