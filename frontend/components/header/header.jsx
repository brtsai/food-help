import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return <nav className="header-nav"><Link to="/"><img className="header-nav-logo" src="https://github.com/brtsai/food-help/blob/master/app/assets/images/logo.png"></img></Link></nav>;
  }
}

export default Header;
