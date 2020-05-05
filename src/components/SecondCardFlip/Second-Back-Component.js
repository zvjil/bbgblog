import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HomeblogpicTwo from '../../../static/assets/images/homeblogpictwo.jpg';
import '../../style/second-back-card-flip.scss';
import BlogSubmissions from '../BlogBbg/Blog-User-Submissions/blog-submissions';

class SECOND_BACK_COMPONENT extends Component {
  render () {
    return (
      <div className="second-back-containter">
        <div className="second-back-card">
          <img
            className="second-blog-img"
            src={HomeblogpicTwo}
            alt="picture of desk"
          />
          <Link
            className="second-blog-link"
            to="./../BlogBbg/Blog-User-Submissions/blog-submissions"
          >
            Submit Blog
          </Link>

        </div>
      </div>
    );
  }
}
export default SECOND_BACK_COMPONENT;
