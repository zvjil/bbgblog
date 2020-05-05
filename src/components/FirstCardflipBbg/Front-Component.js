import React, {Component} from 'react';
import '../../style/front-card.scss';
class YOUR_FRONT_COMPONENT extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isFlipped: false,
    };
  }
  render () {
    return (
      <div className="container">
        <div className="card">
          <h3 className="front-card-title">Read Blogs</h3>
          <p className="front-card-description">
            Click here to catch up the latest blogs submited and see if you can offer some help!
          </p>
        </div>
      </div>
    );
  }
}
export default YOUR_FRONT_COMPONENT;
