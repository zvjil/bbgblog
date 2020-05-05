import React, {Component} from 'react';
import axios from 'axios';
import BlogFeaturedImage from '../BlogBbg/Blog-featured-image';
import ReactHtmlParser from 'react-html-parser';
import Header from '../Headerbbg/Header';
import BlogForm from '../BlogBbg/blog-form';
import '../../style/blog-detail-styles.scss';

export default class BlogDetail extends Component {
  constructor (props) {
    super (props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
      editMode: false,
    };

    this.handleEditClick = this.handleEditClick.bind (this);
    this.handleFeaturedImageDelete = this.handleFeaturedImageDelete.bind (this);
    this.handleUpdateFormSubmission = this.handleUpdateFormSubmission.bind (
      this
    );
  }

  handleUpdateFormSubmission (blog) {
    this.setState ({
      blogItem: blog,
      editMode: false,
    });
  }

  handleFeaturedImageDelete () {
    this.setState ({
      blogItem: {
        featured_image_url: '',
      },
    });
  }

  handleEditClick () {
    console.log ('handle edit clicked');
    if (this.props.loggedInStatus === 'LOGGED_IN') {
      this.setState ({editMode: true});
    }
  }

  getBlogItem () {
    axios
      .get (
        `https://jillstemm.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then (response => {
        this.setState ({
          blogItem: response.data.portfolio_blog,
        });
      })
      .catch (error => {
        console.log ('getBlogItem error', error);
      });
  }

  componentDidMount () {
    this.getBlogItem ();
  }

  render () {
    const {
      title,
      content,
      featured_image_url,
      blog_status,
    } = this.state.blogItem;

    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm
            handleFeaturedImageDelete={this.handleFeaturedImageDelete}
            handleUpdateFormSubmission={this.handleUpdateFormSubmission}
            editMode={this.state.editMode}
            blog={this.state.blogItem}
          />
        );
      } else {
        return (
          <div className="blog-container">
            <Header />
            <div className="blog-detail-content-container">
              <h2
                className="blog-title-secondary"
                onClick={this.handleEditClick}
              >
                {title}
              </h2>

              <div className="featured-image-wrapper">
                <BlogFeaturedImage img={featured_image_url} />
              </div>

              <div className="blogcontent">{ReactHtmlParser (content)}</div>

            </div>
          </div>
        );
      }
    };

    return <div className="blog-container">{contentManager ()}</div>;
  }
}
