import React, {Component} from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';
import RichTextEditor
  from '../Blog-User-Submissions/SubmissionForm/submit-rich-text-editor';
import '../../../style/blogFormSubmit.scss';
import '../../../style/rich-text-editor.scss';
import {withRouter} from 'react-router-dom';
import {Alert} from 'react-alert';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class BlogSubmitForm extends Component {
  _isMounted = false;
  constructor (props) {
    super (props);

    this.state = {
      id: '',
      title: '',
      blog_status: 'draft',
      content: '',
      featured_image: '',
      apiUrl: 'https://jillstemm.devcamp.space/portfolio/portfolio_blogs',
      apiAction: 'post',
      withRouter: true,
    };

    this.handleChange = this.handleChange.bind (this);
    this.handleSubmit = this.handleSubmit.bind (this);
    this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind (
      this
    );

    this.componentConfig = this.componentConfig.bind (this);
    this.djsConfig = this.djsConfig.bind (this);
    this.handleFeaturedImageDrop = this.handleFeaturedImageDrop.bind (this);
    this.deleteImage = this.deleteImage.bind (this);
    this.featuredImageRef = React.createRef ();
    this.handleHome = this.handleHome.bind (this);
    this.componentDidMount = this.componentDidMount.bind (this);
    this.componentWillMount = this.componentWillMount.bind (this);
  }

  handleHome () {
    this.props.history.push ('/');
    this.handleSubmit (event);
    if (this._isMounted) {
      this.componentWillUnmount ();
    }
  }

  componentWillUnmount () {
    this._isMounted = false;
  }

  deleteImage (imageType) {
    axios
      .delete (
        `https://api.devcamp.space/portfolio/delete-portfolio-blog-image/${this.props.blog.id}?image_type=${imageType}`,
        {withCredentials: true}
      )
      .then (response => {
        this.props.handleFeaturedImageDelete ();
      })
      .catch (error => {
        console.log ('deleteImage error', error);
      });
  }

  componentWillMount () {
    if (this.props.editMode) {
      this.setState ({
        id: this.props.blog.id,
        title: this.props.blog.title,
        blog_status: this.props.blog.blog_status,
        content: this.props.blog.content,
        apiUrl: `https://jillstemm.devcamp.space/portfolio/portfolio_blogs/${this.props.blog.id}`,
        apiAction: 'patch',
      });
    }
  }

  componentConfig () {
    return {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: 'https://httpbin.org/post',
    };
  }

  djsConfig () {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }

  handleFeaturedImageDrop () {
    return {
      addedfile: file => this.setState ({featured_image: file}),
    };
  }

  handleRichTextEditorChange (content) {
    this.setState ({content});
  }

  buildForm () {
    let formData = new FormData ();

    formData.append ('portfolio_blog[title]', this.state.title);
    formData.append ('portfolio_blog[blog_status]', this.state.blog_status);
    formData.append ('portfolio_blog[content]', this.state.content);

    if (this.state.featured_image) {
      formData.append (
        'portfolio_blog[featured_image]',
        this.state.featured_image
      );
    }

    return formData;
  }

  componentDidMount () {
    this._isMounted = true;
  }

  handleSubmit (event) {
    alert ('Thanks for your submission');

    axios ({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm (),
      withCredentials: true,
    })
      .then (response => {
        if (this.state.featured_image) {
          this.featuredImageRef.current.dropzone.removeAllFiles ();
        }
        if (this._isMounted) {
          this.setState ({
            title: '',
            blog_status: '',
            content: '',
            featured_image: '',
          });
        }
        if (this.props.editMode) {
          // Update blog detail
          this.props.handleUpdateFormSubmission (response.data.portfolio_blog);
        }
      })
      .catch (error => {
        console.log ('handleSubmit for blog error', error);
      });

    event.preventDefault ();
  }

  handleChange (event) {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  }

  render () {
    return (
      <form onSubmit={this.handleHome} className="submit-blog-form-wrapper">
        <div className="two-column">
          <input
            className="blog-title"
            type="text"
            onChange={this.handleChange}
            name="title"
            placeholder="Blog Title"
            value={this.state.title}
          />
        </div>

        <div className="one-column">
          <RichTextEditor
            className="rich-text"
            handleRichTextEditorChange={this.handleRichTextEditorChange}
            editMode={this.props.editMode || null}
            contentToEdit={
              this.props.editMode && this.props.blog.content
                ? this.props.blog.content
                : null
            }
          />
        </div>

        <div className="image-uploaders">
          {this.props.editMode && this.props.blog.featured_image_url
            ? <div className="portfolio-manager-image-wrapper">
                <img src={this.props.blog.featured_image_url} />

                <div className="image-removal-link">
                  <a onClick={() => this.deleteImage ('featured_image')}>
                    Remove file
                  </a>
                </div>
              </div>
            : <DropzoneComponent
                ref={this.featuredImageRef}
                config={this.componentConfig ()}
                djsConfig={this.djsConfig ()}
                eventHandlers={this.handleFeaturedImageDrop ()}
              >
                <div className="dz-message">Featured Image</div>
              </DropzoneComponent>}
        </div>

        <button className="submit-save-button">

          Save

        </button>

      </form>
    );
  }
}
export default withRouter (BlogSubmitForm);
