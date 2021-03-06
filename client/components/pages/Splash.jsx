import React, { Component } from 'react';
import {App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor, SkipLinkAnchor, Card, Hero, Label, Heading, Columns, Image } from 'grommet';

const Splash = ({ match, location, history }) => {
    return (
      
        <Article>


          <Box full="horizontal">
            <Hero background={<Image src='https://lh3.googleusercontent.com/tSEL7VbU51DxFg8xy1oKn3WjYkxprg2deMAUhrrMpUXDnhvngKPFN6HJBJP2ZQdSnyoRVxJnt-TLkMMXid_6MTTfiGx926GVyNqVjEJkZrA_52MPbSeFPU9DYYvCwq-AeTGo31_uGhiUF3h7zHl-OKcD5r9kMGSbB4to-DbNCCezPiMIYaGtx1qx5GpTCUziTKriyKihwhjbrxpTg-x8MHNTNJCf7-IxJ2Jk4UVOyMh22Td9ufbfi8d0wQ3hd_lgIuxv0BvJ-ATrcOmWByZrV7jWkunMxVI62hUx8Ej0ytWQNwVm3-R833eyYtYgiM6nVB6Ra85xtouhH9xT2peNwpK3Cwf6ZD_RbG7DAd4zWgc9p6C3nkB5B03BikqIOgxci5mCevw9Z4UHhgpyBR9KQ4W3xiDc_tTfoK2o_lmOK45G86zmHK1LVK-9qQ5T5v-pQNYkrSy16m5tx9rxpgkRGf8tq1JmZ01EavVbQhQAC3NOhQ5D6hZIW6ivYZBdpsUq0rHk17d4Lgf5B4PD_jQz-oHpSAJAg001vGxRjhu47-iu0afv6O2fDGxGGKPVHiKbiDtes5KiOtGCNu931OC0tutC4d-pC-vhQVIGS53uvX39-1uw94_ZYoVh0qYmHmnv0l8m1EeUlqF4kUsg6iHoY1QXZO10BTwr=w2400-h1160-no' fit="cover" full={true} />}>
              <Box direction="row" justify="center" align="center">
                <Box basis="1/2" align="end" pad="medium" />
                <Box basis="1/2" align="start" pad={{horizontal: "large", vertical: "large", between: "medium"}}>
                  <Label margin="none" size="medium" uppercase={true}>Learn to Life</Label>
                  <h1>Accelerate your wallet with Budget Badger, he got yo back</h1>
                  <Paragraph margin="medium" size="large">Budget Badger can help you benefit now, just sign up and stop spending so much $$$</Paragraph>
                </Box>
              </Box>
            </Hero>
          </Box>
          
          <Section>
            <Box align="center" pad="none">
              <Box align="center" pad="large" textAlign="center" align="center" size={{ width: {max: "xxlarge"}}}>
                <h1 class="grommetux-heading grommetux-heading--strong grommetux-heading--margin-none">Sumo accumsan mel ignota hendrerit.</h1>
                <p class="grommetux-paragraph grommetux-paragraph--xlarge grommetux-paragraph--width-large">Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.</p>
              </Box>
            </Box>
          </Section>

          <Box align="center"
            announce={false}
            colorIndex="light-2"
            direction="column"
            focusable={true}
            pad={{ vertical: "large" }}
            responsive={true}>
            <h1>Meet The Devs</h1>
              <div className="grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-vertical-large grommetux-background-color-index-light-2 grommetux-background-color-index--light">
                <Box align="center"
                  announce={false}
                  direction="column"
                  focusable={true}
                  pad={{ horizontal: "large" }}
                  responsive={true}
                  size={{ width: "xxlarge" }}>
                  <t>
                    <Box
                      announce={false}
                      className="columns-container"
                      colorIndex="light-2"
                      direction="light-2"
                      focusable={true}
                      full="horizontal"
                      pad={{ horizontal: "large" }}
                      responsive={true}>
                        <div className="grommetux-box grommetux-box--full-horizontal grommetux-box--full-responsive grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-horizontal-large grommetux-background-color-index-light-2 grommetux-background-color-index--light columns-container">
                          <Columns size="medium"
                            justify="center"
                            masonry={true}
                            responsive={true}
                            maxCount={3}>
                            <div className="grommetux-columns grommetux-columns--justify-center grommetux-columns--margin-medium grommetux-columns--responsive grommetux-columns--medium">
                              <div key="0" className="grommetux-columns__column">
                                <Card key=".0" colorIndex="light-1" margin="small"
                                  contentPad="medium"
                                  direction="column"
                                  headingStrong={true}
                                  margin="small"
                                  textSize="small"
                                  thumbnail="https://cdn.studentmoneysaver.co.uk/uploads/6868/surf.jpg">  
                                    <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-box--margin-small grommetux-box--wrap grommetux-box--width-medium grommetux-box--size grommetux-background-color-index-light-1 grommetux-background-color-index--light grommetux-box--clickable grommetux-card grommetux-card--selectable"
                                      ariaLabel="Card"
                                      role="group"
                                      tabIndex={0}>    
                                          <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-medium grommetux-card__content">
                                            <Label size="medium"
                                              margin="none"
                                              uppercase={true}>
                                              <label className="grommetux-label grommetux-label--uppercase grommetux-label--margin-none grommetux-label--medium">Product Owner</label>
                                            </Label>
                                            <Heading tag="h2">
                                              <h2 className="grommetux-heading">Gustaf Brostedt</h2>
                                            </Heading>
                                          </div>                                        
                                      </div>                                      
                                  </Card>
                                  <Card key=".3" colorIndex="light-1" margin="small"
                                  contentPad="medium"
                                  direction="column"
                                  headingStrong={true}
                                  margin="small"
                                  textSize="small"
                                  thumbnail="https://cdn.studentmoneysaver.co.uk/uploads/6868/surf.jpg">  
                                    <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-box--margin-small grommetux-box--wrap grommetux-box--width-medium grommetux-box--size grommetux-background-color-index-light-1 grommetux-background-color-index--light grommetux-box--clickable grommetux-card grommetux-card--selectable"
                                      ariaLabel="Card"
                                      role="group"
                                      tabIndex={0}>    
                                          <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-medium grommetux-card__content">
                                            <Label size="medium"
                                              margin="none"
                                              uppercase={true}>
                                              <label className="grommetux-label grommetux-label--uppercase grommetux-label--margin-none grommetux-label--medium">Developer</label>
                                            </Label>
                                            <Heading tag="h2">
                                              <h2 className="grommetux-heading">Alex Friedman</h2>
                                            </Heading>
                                          </div>                                        
                                      </div>                                      
                                  </Card>
                              </div>
                              <div key="1" className="grommetux-columns__column">
                              <Card key=".1" colorIndex="light-1" margin="small"
                                  contentPad="medium"
                                  direction="column"
                                  headingStrong={true}
                                  margin="small"
                                  textSize="small"
                                  thumbnail="https://cdn.studentmoneysaver.co.uk/uploads/6868/surf.jpg">  
                                    <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-box--margin-small grommetux-box--wrap grommetux-box--width-medium grommetux-box--size grommetux-background-color-index-light-1 grommetux-background-color-index--light grommetux-box--clickable grommetux-card grommetux-card--selectable"
                                      ariaLabel="Card"
                                      role="group"
                                      tabIndex={0}>    
                                          <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-medium grommetux-card__content">
                                            <Label size="medium"
                                              margin="none"
                                              uppercase={true}>
                                              <label className="grommetux-label grommetux-label--uppercase grommetux-label--margin-none grommetux-label--medium">Developer</label>
                                            </Label>
                                            <Heading tag="h2">
                                              <h2 className="grommetux-heading">Andrew Lichtenstein</h2>
                                            </Heading>
                                          </div>                                        
                                      </div>                                      
                                  </Card>
                              </div>
                              <div key="2" className="grommetux-columns__column">
                              <Card key=".5" colorIndex="light-1" margin="small"
                                  contentPad="medium"
                                  direction="column"
                                  headingStrong={true}
                                  margin="small"
                                  textSize="small"
                                  thumbnail="https://cdn.studentmoneysaver.co.uk/uploads/6868/surf.jpg">  
                                    <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-box--margin-small grommetux-box--wrap grommetux-box--width-medium grommetux-box--size grommetux-background-color-index-light-1 grommetux-background-color-index--light grommetux-box--clickable grommetux-card grommetux-card--selectable"
                                      ariaLabel="Card"
                                      role="group"
                                      tabIndex={0}>    
                                          <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-medium grommetux-card__content">
                                            <Label size="medium"
                                              margin="none"
                                              uppercase={true}>
                                              <label className="grommetux-label grommetux-label--uppercase grommetux-label--margin-none grommetux-label--medium">Developer</label>
                                            </Label>
                                            <Heading tag="h2">
                                              <h2 className="grommetux-heading">Jimmy Kang</h2>
                                            </Heading>
                                          </div>                                        
                                      </div>                                      
                                  </Card>
                                  <Card key=".5" colorIndex="light-1" margin="small"
                                  contentPad="medium"
                                  direction="column"
                                  headingStrong={true}
                                  margin="small"
                                  textSize="small"
                                  thumbnail="https://cdn.studentmoneysaver.co.uk/uploads/6868/surf.jpg">  
                                    <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-box--margin-small grommetux-box--wrap grommetux-box--width-medium grommetux-box--size grommetux-background-color-index-light-1 grommetux-background-color-index--light grommetux-box--clickable grommetux-card grommetux-card--selectable"
                                      ariaLabel="Card"
                                      role="group"
                                      tabIndex={0}>    
                                          <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-medium grommetux-card__content">
                                            <Label size="medium"
                                              margin="none"
                                              uppercase={true}>
                                              <label className="grommetux-label grommetux-label--uppercase grommetux-label--margin-none grommetux-label--medium">Developer</label>
                                            </Label>
                                            <Heading tag="h2">
                                              <h2 className="grommetux-heading">Logan McBride</h2>
                                            </Heading>
                                          </div>                                        
                                      </div>                                      
                                  </Card>
                              </div>
                            </div>
                          </Columns>
                        </div>
                      </Box>
                  </t>
                </Box>
              </div>
            </Box>
          <Footer style={{background: "#000"}}
            justify='between'
            size='medium'
            primary={true}
            pad={{
              horizontal: "medium"
            }} >
            <Title>
              <Paragraph style={{ color: "#FFF" }}>Budget Badger</Paragraph>
            </Title>
            <Box direction='row'
              align='center'
              pad={{"between": "medium"}}>
              <Paragraph margin='none' style={{ color: "#FFF" }}>
                © 2018 Turba Priami
              </Paragraph>
              <Menu direction='row'
                size='small'
                dropAlign={{"right": "right"}}>
                <Anchor href='#'>
                  Support
                </Anchor>
                <Anchor href='#'>
                  Contact
                </Anchor>
                <Anchor href='#'>
                  About
                </Anchor>
              </Menu>
            </Box>
          </Footer>
        </Article>
      
    )
}

export default Splash;