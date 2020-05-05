import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Headerbbg/Header';
import '../../../style/blog-submission.scss';
import BlogSubmitForm from './blog-submission-form';
import BlogSubmitModal from './blog-submit-modal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import BlogItem from '../blog-modal';
class BlogSubmissions extends Component {
  constructor () {
    super ();

    this.state = {
      blogModalIsOpen: false,
    };
    this.handleModalClose = this.handleModalClose.bind (this);
    this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind (
      this
    );
  }
  handleSuccessfulNewBlogSubmission (blog) {
    this.setState ({
      blogModalIsOpen: false,
      blogItems: [blog].concat (this.state.blogItems),
    });
  }

  handleModalClose () {
    this.setState ({
      blogModalIsOpen: false,
    });
  }
  render () {
    return (
      <div>
        <Header />
        <h2 className="blogsubmissiontitle">Blog Submission</h2>
        <h3 className="directions">
          Once you have submitted your entry it will be reviewed and posted if it meets the terms and conditions.
          {' '}
          If it does not you will be sent an email and be asked to revise.{' '}
        </h3>
        <h4 className="rulestitle">Rules</h4>
        <li className="rules">
          <ol>
            1.) Please avoid using profanity; anything full of profanity will be rejected.
          </ol>

          <ol>
            2.) Be sure to tell the full story so accurate advice can be suggested.
          </ol>

          <ol>
            3.) Be prepared to hear the truth when advice is offered and don't let it hurt your feelings.
          </ol>

          <ol>
            4.) When giving advice please think logically and give productive advice.

          </ol>

          <ol>
            5.) Be honest but also think about how you would feel in the same situation and try to be nice.
          </ol>
        </li>

        <BlogSubmitForm
          handleSuccessfulNewBlogSubmission={
            this.handleSuccessfulNewBlogSubmission
          }
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.blogModalIsOpen}
        />

      </div>
    );
  }
}

export default BlogSubmissions;
