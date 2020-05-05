import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import YOUR_FRONT_CCOMPONENT from './Front-Component';
import YOUR_BACK_COMPONENT from './Back-Component';
import '../../style/front-card.scss';
import '../../style/back-card.scss';

class Cardflip extends Component {
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

        <button className="front-flip-button" onClick={this.handleClick}>
          {<YOUR_FRONT_CCOMPONENT />}
        </button>

        <button className=" back-flip-button" onClick={this.handleClick}>
          {<YOUR_BACK_COMPONENT />}
        </button>

      </ReactCardFlip>
    );
  }
}
export default Cardflip;
