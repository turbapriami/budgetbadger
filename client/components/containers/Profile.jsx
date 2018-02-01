import { App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor, Card } from 'grommet';
import React from 'react';
import PlaidLink from 'react-plaid-link'

const Profile = (props) => {
  return (
    <Box full={true} align="center" pad="large" flex={true}>
      <Card alignSelf="center" style={{ height: "75%", width: "75%", outline: "#000 solid thin" }} >
        <h3>User Info</h3>
        <div style={{ outline: "#E8E8E8 solid thin" }}></div>
        <Box full={true} direction="row" align="center" pad={{ between: "small"}} margin="small" >
          <Box size={{ height: "medium", width: "large" }} style={{ display: "inline" }}>
            <Box size={{ height: "small", width: "small" }} colorIndex="light-2"></Box>
            <Box size={{ height: "small", width: "small" }} colorIndex="light-2"></Box>
          </Box>
          <Box size={{ height: "medium", width: "medium" }} style={{ display: "inline" }} colorIndex="light-2"></Box>
        </Box>
      </Card>
    </Box>
  )
}

export default Profile;