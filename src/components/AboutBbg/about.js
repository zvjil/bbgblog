import React, {Component} from 'react';
import Header from '../Headerbbg/Header';
import '../../style/aboutus.scss';

class About extends Component {
  render () {
    return (
      <div>
        <Header />
        <h2 className="secondary-header">About Us</h2>
        <p className="aboutusparagragh">
          Bully-B-Gone is a small home-based business I started
          due to having seen and heard kids being bullied through my own kids’ friends
          There have been several teens commit suicide at the school
          and I want to do my part to help combat that and offer adult support
          that some kids may not have access to.
        </p>

      </div>
    );
  }
}
export default About;
