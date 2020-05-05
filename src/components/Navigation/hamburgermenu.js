import React, {Component} from 'react';
import {scaleRotate as Menu} from 'react-burger-menu';
import '../../style/navigation.scss';

class HamburgerMenu extends Component {
  showSettings (event) {
    event.preventDefault ();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="../about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="settings" className="menu-item--small" href="../auth">
          Settings
        </a>
      </Menu>
    );
  }
}
export default HamburgerMenu;
