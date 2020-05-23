import React, {Component} from 'react';
import Menu from '../Navigation/hamburgermenu';
import '../../style/Header.scss';

class Header extends Component {
  render () {
    return (
      <div className="container">
        <div className="header">
          <h1 className="header-title">Bully-B-Gone Blog</h1>
          <svg
            className="header-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              className="svg--sm"
              fill="#747474 "
              points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
            />
            <polygon
              className="svg--lg"
              fill="#747474"
              points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
            />
          </svg>
          <Menu />
        </div>

      </div>
    );
  }
}

export default Header;
