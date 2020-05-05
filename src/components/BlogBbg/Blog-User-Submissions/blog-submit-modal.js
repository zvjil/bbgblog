import React, {Component} from 'react';
import ReactModal from 'react-modal';
import BlogSubmitForm from './blog-submission-form';
import '../../../style/blogsubmitmodal.scss';
import '../../../style/react-draft-wysiwyg.scss';

ReactModal.setAppElement ('.app-wrapper');

export default class BlogSubmitModal extends Component {
  constructor (props) {
    super (props);

    this.customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        marginRight: '50%',
        transform: 'translate(-50%, -50%',
      },
      overlay: {
        backgroundColor: 'rgba(1, 1, 1, 0.75)',
      },
    };

    this.handleSuccessfullFormSubmission = this.handleSuccessfullFormSubmission.bind (
      this
    );
    this.componentWillUnmount = this.componentWillUnmount.bind (this);
  }

  componentWillUnmount (BlogSubmitModal) {
    this.setState = {
      HamburgerMenu: '',
    };
  }

  handleSuccessfullFormSubmission (blog) {
    this.props.handleSuccessfulNewBlogSubmission (blog);
  }

  render () {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose ();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <BlogSubmitForm
          handleSuccessfullFormSubmission={this.handleSuccessfullFormSubmission}
        />
      </ReactModal>
    );
  }
}
