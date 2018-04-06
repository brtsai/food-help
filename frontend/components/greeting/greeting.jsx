import React from 'react';

class Greeting extends React.Component {

  user() {
    return e => {
      e.preventDefault();

      this.props.history.push('/me');
    };
  }

  logout() {
    return e => {
      this.props.logout().then(() => this.props.history.push('/login'));
    };
  }

  login() {
    return e => {
      this.props.history.push('/login');
    };
  }

  signup() {
    return e => {
      this.props.history.push('/signup');
    };
  }

  render() {
    const user = this.props.currentUser
    return (
      <nav className="greeting-nav">
        {
          user ? 
            <ul className="greeting-nav-button-list">
              <li><button className="greeting-nav-user-profile-button" onClick={this.user()}>{user.username}</button></li>
              <li><button className="greeting-nav-logout-button" onClick={this.logout()}>Logout</button></li>
            </ul>
          : 
            <ul className="greeting-nav-button-list">
              <li><button className="greeting-nav-login-button" onClick={this.login()}>Login</button></li>
              <li><button className="greeting-nav-signup-button" onClick={this.signup()}>Signup</button></li>
            </ul>
        }
      </nav>
    )
  }
}

export default Greeting;
