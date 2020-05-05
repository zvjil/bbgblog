import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import SECOND_FRONT_COMPONENT from './Second-Front-Component';
import SECOND_BACK_COMPONENT from './Second-Back-Component';
import '../../style/second-front-card-flip.scss';
import '../../style/second-back-card-flip.scss';

class SecondCardFlip extends Component {
  constructor () {
    super ();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind (this);
  }

  handleClick (e) {
    e.preventDefault ();
    this.setState (prevState => ({isFlipped: !prevState.isFlipped}));
  }

  render () {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

        <button className="second-front-flip-button" onClick={this.handleClick}>
          {<SECOND_FRONT_COMPONENT />}
        </button>

        <button className="second-back-flip-button" onClick={this.handleClick}>
          {<SECOND_BACK_COMPONENT />}
        </button>

      </ReactCardFlip>
    );
  }
}
export default SecondCardFlip;
