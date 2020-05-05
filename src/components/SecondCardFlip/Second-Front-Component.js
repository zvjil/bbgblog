import React, {Component} from 'react';
import '../../style/second-front-card-flip.scss';

class SECOND_FRONT_COMPONENT extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isFlipped: false,
    };
  }
  render () {
    return (
      <div className="second-container">
        <div className="second-card">
          <h3 className="second-front-card-title">Submit Blog Entry</h3>
          <p className="second-front-card-description">
            Click here to submit your blog entry for review!
          </p>
        </div>
      </div>
    );
  }
}
export default SECOND_FRONT_COMPONENT;
