import React, { Component } from 'react';
import {App, Header, Section, Footer, Article, Title, Box, Paragraph, Menu, Anchor, SkipLinkAnchor, Card, Hero, Label, Heading, Columns } from 'grommet';

export default class extends Component {
  render() {
    return (
      <App centered={false}>
        <Article>
          <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-box--flex-off">
            <Header className="grommetux-box grommetux-box--direction-row grommetux-box--justify-center grommetux-box--align-center grommetux-box--pad-horizontal-none grommetux-box--pad-vertical-none grommetux-box--pad-between-small grommetux-background-color-index-neutral-4 grommetux-background-color-index--dark grommetux-header" fixed={false}
              float={false}
              size='medium'
              splash={false}
              style={{ background: "#FFF" }} >
              <div className="grommetux-box grommetux-box--direction-row grommetux-box--justify-start grommetux-box--align-center grommetux-box--flex-grow grommetux-box--pad-horizontal-medium grommetux-box--width-max-xxlarge grommetux-box--width-max">
                <img width="80" height="80" src="https://lh3.googleusercontent.com/4e2brTXTKqTVQ4GN5uFdBrPWfyxeP6_d-5wP2gXLhBHuyQyDjyT2qQC7qCUpTgjhnnjHb3D6G8EVRbgcBfrCOxUhe9GFqni-jfgJhsWCLW0AGAJKcb1F04ZvpwiPNkBRMDS_8ymcjbSLMlZMZgD3l14r616OKDQKkp7qf3aD9rvEY_wMN6OkFPawwP8DuFwKZA5THYVDkRtVcSYXdwcxkMMJD9J6J5jx5wFM-FRr0EJrxW5r3DJqpXCVmbre1TWlQg7NXklgs6aKipIkmXRJZ7BwKzJWwS91TWEYhmXDgieKULMgzik0xV7yY070GNCquebFPUcfgidIPdJhSeRXclwTsoRKjM0hhd0874BJ7dLHUnexti8Vc4ce1SJL1q1EX-KsGKtkKRCX2GvHTTphfPT29F4UxCGMcnPHIRLXSdwbmJMn0XXuDeLf81UtR2_KGaqmO-ow0WDsYA4gAbxIY3BFbJg-2_eJV8YtG3RVFrWCAE_sPUQ3eEnUIYww7049TRrsYAt7uqjsrXIO7bd_y8c4wheXoXvPm6_DnG3GXk7Se7MVXohO_g8A1sbiftZmpyQXdxHjqKn2_huxBxkdLbV4S4kFRU651mfw5e4=s600-no"/>
                <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-small"></div>
                <nav className="grommetux-box grommetux-box--direction-row grommetux-box--responsive grommetux-box--flex-grow grommetux-box--pad-none grommetux-menu grommetux-menu--row grommetux-menu--inline">
                  <a href="#" style={{ color: "#000" }} class="grommetux-anchor">About</a>
                  <a href="#" style={{ color: "#000" }} class="grommetux-anchor">Sign In</a>
                  <a href="#" style={{ color: "#000" }} class="grommetux-anchor">Sign Up</a>
                </nav>
                <Box flex={true}
                  justify='end'
                  direction='row'
                  responsive={false}>
                </Box>
              </div>
            </Header>
          </div>

          <Box full="horizontal">
            <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-background-color-index-light-1 grommetux-background-color-index--light grommetux-hero grommetux-hero--large grommetux-hero--bg-center">
              <div className="grommetux-box__container grommetux-box__container--full-horizontal grommetux-hero__background" style={{background: `url(${"https://lh3.googleusercontent.com/RVtiDsAKiGTWlZM24vHwBb7cDaMX-EV7O_3budGa2DtrUKGMmItxnjZeFi0Ucsi6RhAmXXl2dJ9MYpVJKq-IpzZEebiiHP9Gi2R6Nq36vBIGRgmsRCOHWUaRup1Nff2473YyDoDabkN77sNpzQw32gGvY9sfuM1sOFsIps1KRGW9Y3Xx6gyPBGoFWv83OtXOI7P9dzXzL3FhSMuJ8I_TbDwSkueYOAEMqGP6ctj-Qp7HdsZboyKIkCD33CfeSIb953TUY4y1ECtA61VYSPyDg9EPPogbO3piURMHBnBz9Xb07PdpTolmdFcJoSy-J-OF1ev9pQAApI7iOC7BWUE0bx-08WT-yMgp-x2XlVGZu5mDr1FqPnItKAl24j-lNHI2r-POvTjc8Ju1L_BdKL9tzhb6lAQ16V-7G6F8iLpU_VUgnPtc1brrTyOcesg__y7G456F97ujv2_k-DWejTKfreyIPnY_lbc_dIhHXKAOg6Pn420W_a-vfDy0QvGrro7_KrmzicF3xEEnrxAg3W9z7EjnhYczL-B_x-tIyb3Qu9J12aA1h3_xx0gQ6ri1DqXGBrS_VoRIRUaBwYEAiXpS56BKMA80Em7xh-iWDTw=w2400-h1160-no"}) center center / cover no-repeat`}}>
                <div className="grommetux-box grommetux-box--full-horizontal grommetux-box--full-responsive grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none"></div>
              </div>
              <div class="grommetux-box grommetux-box--full-horizontal grommetux-box--full-responsive grommetux-box--direction-row grommetux-box--justify-end grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-none grommetux-hero__overlay">
                <a tabindex="-1" aria-hidden="true" id="skip-link-main_content" className="grommetux-skip-link-anchor">Main Content</a>
                <div className="grommetux-box grommetux-box--direction-column grommetux-box--justify-center grommetux-box--align-center grommetux-box--responsive grommetux-box--basis-1-2 grommetux-box--pad-none"></div>
                <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--basis-1-2 grommetux-box--pad-horizontal-large grommetux-box--pad-vertical-large grommetux-box--pad-between-medium">
                    <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-none grommetux-box--wrap grommetux-box--size-large grommetux-box--size grommetux-card">
                        <div className="grommetux-box grommetux-box--direction-column grommetux-box--responsive grommetux-box--pad-medium grommetux-card__content">
                            <label className="grommetux-label grommetux-label--uppercase grommetux-label--margin-none grommetux-label--medium">Learn to Life</label>
                            <h1 class="grommetux-heading grommetux-heading--strong">Accelerate your wallet with Budget Badger, he got yo back</h1>
                            <p className="grommetux-paragraph grommetux-paragraph--large grommetux-paragraph--margin-medium">Budget Badger can help you benefit now, just sign up and stop spending so much $$$</p>
                            <a href="#" style={{ color: "#000" }} className="grommetux-anchor grommetux-anchor--animate-icon grommetux-anchor--icon grommetux-anchor--icon-label grommetux-anchor--primary">
                              <svg version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className="grommetux-control-icon grommetux-control-icon-link-next grommetux-control-icon--responsive" aria-label="link next">
                                <path fill="none" stroke="#000" stroke-width="2" d="M2,12 L22,12 M13,3 L22,12 L13,21"></path>
                              </svg>Learn More
                            </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </Box>
          
          <Section>
            <div class="grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-none">
              <div class="grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-large grommetux-box--text-align-center grommetux-box--width-max-xxlarge grommetux-box--width-max">
                <h1 class="grommetux-heading grommetux-heading--strong grommetux-heading--margin-none">Sumo accumsan mel ignota hendrerit.</h1>
                <p class="grommetux-paragraph grommetux-paragraph--xlarge grommetux-paragraph--width-large">Lorem ipsum dolor sit amet, dicat sonet congue ei mei, est summo copiosae facilisi an. Sumo accumsan mel ea, eu ignota hendrerit consequuntur me.</p>
              </div>
            </div>
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
      </App>
    )
  }
}