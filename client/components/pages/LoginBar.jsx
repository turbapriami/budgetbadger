import React from 'react';
import {Header, Title, Box, Image, Menu, Anchor, MenuIcon, UserIcon, LogoutIcon, MoneyIcon} from 'grommet';
import styles from '../../../public/main/jStyles'

const LoginBar = (props) => {
  return (
  <Header pad={{horizontal: 'none', vertical: "none", between:"small"}} colorIndex="neutral-4">
  <Image src="https://visualpharm.com/assets/2/Badger-595b40b75ba036ed117d8786.svg" style={styles.loginBarImage}/>
    <Box flex={true}
      full="horizontal"
      justify='end'
      direction='row'
      colorIndex='brand'
    >
    </Box>
    <Menu responsive={true}
      label='Menu'
      inline={false}
      direction='row'
      dropAlign={{top: 'bottom', top: 'bottom'}}
      style={{paddingRight: '30px'}}>
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
          path='/add'
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

export default LoginBar;