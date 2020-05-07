import React, {Component} from 'react';
import Header from '../Headerbbg/Header';
import '../../style/contactus.scss';
import {Link} from 'react-router-dom';

class Contact extends Component {
  render () {
    return (
      <div>
        <Header />
        <h2 className="secondary-heading">Contact Us</h2>
        <div className="phoneinfo">
          <p className="phone">Phone: (740)-555-555</p>
        </div>
        <p className="email">Email: test@hotmail.com</p>

      </div>
    );
  }
}
export default Contact;
