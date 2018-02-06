import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Bank from './BankContainer.jsx';
import ProfileCard from './ProfileCard.jsx';
import ProfileEdit from './ProfileEdit.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor, Card, TextInput } from 'grommet';
<<<<<<< ec31cdb55239928646800270fc98aa420cfc3ca1

const Get_User = gql`
  query GETUSER($id: Int!) {
    getUser(id: $id) {
      first_name
      last_name
      email
      street
      state
      city
      zip_code
      phone
    }
  }
`

const currentUser = graphql(Get_User, {
  options: props => ({
    variables: {
      id: 27
    },
    name: 'currentUser',
  })
})
=======
>>>>>>> Working on edit profile

const Get_User = gql`
  query GETUSER($id: Int!) {
    getUser(id: $id) {
      first_name
      last_name
      email
      street
      state
      city
      zip_code
      phone
    }
  }
`

const currentUser = graphql(Get_User, {
  options: props => ({
    variables: {
      id: 27
    },
    name: 'currentUser',
  })
})


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      street: '',
      state: '',
      zip_code: '',
      phone: '',
      email: '',
      banks: ["J.P. Morgan and Chase", "TD Bank", "Citi Bank", "Bank of America", "Wells Fargo"],
      edit: false
    }
    this.editing = this.editing.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateStreet = this.updateStreet.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateZipCode = this.updateZipCode.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.getUser) {
      this.setState({
        first_name: nextProps.data.getUser[0].first_name,
        last_name: nextProps.data.getUser[0].last_name,
        street: nextProps.data.getUser[0].street,
        city: nextProps.data.getUser[0].city,
        state: nextProps.data.getUser[0].state,
        zip_code: nextProps.data.getUser[0].zip_code,
        phone: nextProps.data.getUser[0].phone,
        email: nextProps.data.getUser[0].email
      })
    }
  }

  editing() {
    this.setState({
<<<<<<< ec31cdb55239928646800270fc98aa420cfc3ca1
=======
      edit: !this.state.edit
    })
  }

  updateFirstName(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  updateLastName(e) {
    this.setState({
      last_name: e.target.value
    })
  }

  updateStreet(e) {
    this.setState({
      street: e.target.value
    })
  }

  updateState(e) {
    this.setState({
      state: e.target.value
    })
  }

  updateZipCode(e) {
    this.setState({
      zip_code: e.target.value
    })
  }

  updatePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  updateEmail(e) {
    this.setState({
>>>>>>> Working on edit profile
      email: e.target.value
    })
  }

  render() {
    return (
      <div>
        {this.state.edit ? <button onClick={this.handleChanges}>Submit</button> : <button onClick={this.editing} >Edit your profile</button>}
        {this.state.edit ? <ProfileEdit userInfo={this.state} /> : <ProfileCard userInfo={this.state} />}
      </div>
    )
  }
}

export default compose(withApollo, currentUser)(Profile);