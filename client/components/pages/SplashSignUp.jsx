import React from 'react';
import { Box, Button, Card, Columns, CheckBox, Form, FormFields, Footer, Header, Heading, Label, Paragraph, TextInput, Tiles } from 'grommet';

const SplashSignUp = () => {
  return (
<Box align="center" focusable={true} >
  <Card align="center" style={{ outline: "#000 solid thin" }}> 
    <h1 style={{ textAlign: "center" }} >Sign Up</h1>
    <div style={{ outline: "#E8E8E8 solid thin" }}></div>
    <Form pad="small" style={{ width: "100%" }} >
          <Box pad={{ vertical: "small", width: "100%" }} >
            <FormFields style={{ width: "100%" }} >
                <Label>Email</Label>
                <input style={{ width: "100%" }} name="userEmail" />
                <Label>Password</Label>
                <input style={{ width: "100%" }} type="password" />
            </FormFields>
          </Box>
          <Footer size="small" direction="column"
            align={'center' ? 'stretch' : 'start'}
            pad={{ vertical: "medium" }}>
            <Button primary={true} fill="center" label='Create account'
              type='submit'
              primary={true} />
          </Footer>
        </Form>
  </Card>
</Box>
  )
}

export default SplashSignUp;