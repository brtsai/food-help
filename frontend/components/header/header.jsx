import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return <nav className="header-nav"><Link to="/"><img className="header-nav-logo" src="/assets/logo.png"></img></Link></nav>;
  }
}

export default Header;
