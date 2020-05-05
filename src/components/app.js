import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import HamburgerMenu from './Navigation/hamburgermenu';
import Home from './HomeBbg/home';
import About from './AboutBbg/about';
import Contact from './ContactBbg/Contact';
import Blog from './BlogBbg/blog';
import BlogDetail from './BlogBbg/blog-detail';
import Auth from './AuthBbg/auth';
import NoMatch from './NotFoundBbg/NotFound';
import SocialLogin from './SocialLoginBbg/socialLogin';
import PortfolioManager from './AuthBbg/portfolio-manager';
import Icons from '../Helpers/icons';
import BlogSubmissions from './BlogBbg/Blog-User-Submissions/blog-submissions';
import BlogSubmitConfirm
  from './BlogBbg/Blog-User-Submissions/blog-submit-confirm';
export default class App extends Component {
  constructor (props) {
    super (props);

    Icons ();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind (this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind (this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind (this);
  }

  handleSuccessfulLogin () {
    this.setState ({
      loggedInStatus: 'LOGGED_IN',
    });
  }

  handleUnsuccessfulLogin () {
    this.setState ({
      loggedInStatus: 'NOT_LOGGED_IN',
    });
  }

  handleSuccessfulLogout () {
    this.setState ({
      loggedInStatus: 'NOT_LOGGED_IN',
    });
  }

  checkLoginStatus () {
    return axios
      .get ('https://api.devcamp.space/logged_in', {
        withCredentials: true,
      })
      .then (response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        if (loggedIn && loggedInStatus === 'LOGGED_IN') {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN') {
          this.setState ({
            loggedInStatus: 'LOGGED_IN',
          });
        } else if (!loggedIn && loggedInStatus === 'LOGGED_IN') {
          this.setState ({
            loggedInStatus: 'NOT_LOGGED_IN',
          });
        }
      })
      .catch (error => {
        console.log ('Error', error);
      });
  }

  componentDidMount () {
    this.checkLoginStatus ();
  }

  authorizedPages () {
    return [
      <Route
        key="portfolio-manager"
        path="/portfolio-manager"
        component={PortfolioManager}
      />,
    ];
  }

  render () {
    return (
      <div className="container">
        <Router>
          <div>
            <HamburgerMenu
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />

              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/socialLogin" component={SocialLogin} />

              <Route
                path="/blog"
                render={props => (
                  <Blog {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
              />

              <Route
                path="/b/:slug"
                render={props => (
                  <BlogDetail
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />

              {this.state.loggedInStatus === 'LOGGED_IN'
                ? this.authorizedPages ()
                : null}

              <Route component={BlogSubmissions} />
              <Route component={BlogSubmitConfirm} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
