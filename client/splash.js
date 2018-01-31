import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Splash from './components/pages/Splash.jsx';
import SplashSignIn from './Components/pages/SplashSignIn.jsx';
import SplashSignUp from './Components/pages/SplashSignUp.jsx';
import { App, Header, Box } from 'grommet';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

const httpLink = new HttpLink({ uri: 'http://localhost:1337/graphql' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

document.addEventListener('DOMContentLoaded', () => {
    return (
      ReactDOM.render(
            <ApolloProvider client={client}>
        <App centered={false}>
          <BrowserRouter>
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
                    <Link to={'/#'}>
                      <a style={{ color: "#000" }} class="grommetux-anchor">About</a>
                    </Link>
                    <Link to={'/SplashSignIn'}>
                      <a style={{ color: "#000" }} class="grommetux-anchor">Sign In</a>
                    </Link>
                    <Link to={'/SplashSignUp'}>
                      <a style={{ color: "#000" }} class="grommetux-anchor">Sign Up</a>
                    </Link>
                  </nav>
                  <Box flex={true}
                    justify='end'
                    direction='row'
                    responsive={false}>
                  </Box>
                </div>
              </Header>
              <Route exact={true} path="/" render={() => (
                <Splash />
              )} />
              <Route exact={true} path="/SplashSignIn" render={() => (
                <SplashSignIn client={client}/>
              )} />
              <Route exact={true} path="/SplashSignUp" render={() => (
                <SplashSignUp />
              )} />
            </div>
        </BrowserRouter>
      </App>
          </ApolloProvider>,
        document.getElementById('splash')
      )
    )
})