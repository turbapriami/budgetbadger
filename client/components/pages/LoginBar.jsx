import React, {Component} from 'react';
import {Header, Title, Box, Image, Menu, Anchor, MenuIcon, UserIcon, LogoutIcon, MoneyIcon} from 'grommet';
import styles from '../../../public/main/jStyles'
import ReactPlaidLink from 'react-plaid-link'

class LoginBar extends Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
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
      <Header pad={{horizontal: 'none', vertical: "none", between:"small"}} colorIndex="neutral-4">
        <ReactPlaidLink
          clientName="Your app name"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="10ae69c4cbf11d018cfde3ddba55e7"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
          style={{border: '0px', width: '0px', height: '0px'}}
          ref='plaid'
        />
        <Image src="https://visualpharm.com/assets/2/Badger-595b40b75ba036ed117d8786.svg" style={styles.loginBarImage}/>
        <Box flex={true}
          full="horizontal"
          justify='end'
          direction='row'
          colorIndex='brand'
        >
        </Box>
        <Menu
          responsive={true}
          label='Menu'
          inline={false}
          direction='row'
          dropAlign={{top: 'bottom', top: 'bottom'}}
          style={{paddingRight: '30px'}}
        >
          <Anchor
            href='#'
            icon={<UserIcon size='small'/>}
            path='/profile'
          >
            Your Profile
          </Anchor>
          <Anchor
            href='#'
            icon={<MoneyIcon size='small'/>}
            onClick={()=> {this.handleClick()}}
          >
            Add Acount
          </Anchor>
          <Anchor
            href='#'
            icon={<LogoutIcon size='small'/>}
          >
            Sign out
          </Anchor>
        </Menu>
      </Header>)
  }
}

export default LoginBar;