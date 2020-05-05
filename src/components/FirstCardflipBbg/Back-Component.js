import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Homeblogpic from '../../../static/assets/images/homeblogpic.jpg';
class YOUR_BACK_COMPONENT extends Component {
  render () {
    return (
      <div className="container">
        <div className="card">
          <img className="blog-img" src={Homeblogpic} alt="picture of desk" />
          <Link className="blog-link" to="../../Blog/Blog">Read Blog</Link>

        </div>
      </div>
    );
  }
}
export default YOUR_BACK_COMPONENT;
