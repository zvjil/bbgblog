import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import teenwelcome from '../../components/Images/teenwelcome.jpg';
import Header from '../Headerbbg/Header';
import '../../style/socialLogin-styles.scss';

class SocialLogin extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loginError: false,
      redirect: false,
    };
    this.signup = this.signup.bind (this);
  }

  signup (res, type) {
    let postData;
    if (type === 'facebook' && res.email) {
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url,
      };
    }
    const auth2 = gapi.auth2.getAuthInstance ();
    if (type === 'google' && auth2.isSignedIn.get ()) {
      var profile = auth2.currentUser.get ().getBasicProfile ();
      postData = {
        ID: profile.getId (),
        FullName: profile.getName (),
        GivenName: profile.getGivenName (),
        FamilyName: profile.getFamilyName (),
        ImageURL: profile.getImageUrl (),
        Email: profile.getEmail (),
      };
    }
    if (postData) {
      PostData ('signup', postData).then (result => {
        let responseJson = result;
        sessionStorage.setItem ('userData', JSON.stringify (responseJson));
        this.setState ({redirect: true});
      });
    } else {
    }
  }
  render () {
    if (this.state.redirect || sessionStorage.getItem ('userData')) {
      return <Redirect to={'/'} />;
    }

    const responseFacebook = response => {
      console.log ('facebook console');
      console.log (response);
      this.signup (response, 'facebook');
    };

    const responseGoogle = response => {
      console.log ('google console');
      console.log (response);
      this.signup (response, 'google');
    };

    return (
      <div className="container">
        <Header />

        <div className="bodyText">
          <p className="body-text">
            Bully-B-Gone Blog is a safe space for every teenager where
            they can come to vent and read other teens stories about their bullying experiences and seek
            advice, plus have the opportunity to help others.
          </p>
        </div>
        <div className="rotator">
          <img className="align" img src={teenwelcome} alt="teen being sad" />
        </div>
        <div className="fbbutton">
          <FacebookLogin
            appId="2580971392000048"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>

        <div className="gbutton">
          <GoogleLogin
            clientId="403191765550-duk7c1do3705dlj8i6dnsr27oe7rlaq3.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
      </div>
    );
  }
}

export default SocialLogin;
