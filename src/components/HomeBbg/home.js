import React, {Component} from 'react';
import '../../style/home-styles.scss';
import {Redirect} from 'react-router-dom';
import Header from '../Headerbbg/Header';
import {Link} from 'react-router-dom';
import SocialLogin from '../SocialLoginBbg/socialLogin';
import MyMoment from '../Momentbbg/moment-file';
import Cardflip from '../FirstCardflipBbg/cardflip';
import SecondCardFlip from '../SecondCardFlip/second-cardflip.js';

class Home extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      redirect: false,
    };
  }

  render () {
    if (!sessionStorage.getItem ('userData') || this.state.redirect) {
      return <Redirect to={'/socialLogin'} />;
    }

    if (this.state.pid > 0) {
      return <Redirect to={'/blog'} />;
    }

    return (
      <div className="container">
        <Header />

        <div className="home">

          <h2 className="home-title">Home</h2>

          <div className="time">
            <MyMoment />

          </div>
          <h2 className="greeting">
            Hi there what would you like to do today?
          </h2>
          <div className="card-grid">

            <div className="left-column">
              <SecondCardFlip />
            </div>

            <div className="right-column">
              <Cardflip />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
