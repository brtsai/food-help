import React from 'react';

class Greeting extends React.Component {
  
  logout() {
    return e => {
      this.props.logout().then(() => this.props.history.push('login'));
    };
  }

  login() {
    return e => {
      this.props.history.push('login');
    };
  }

  signup() {
    return e => {
      this.props.history.push('signup');
    };
  }

  render() {
    const user = this.props.currentUser
    return (
      <div>
        {
          user ? 
            <ul>
              <li>{user.username}</li>
              <li><button onClick={this.logout()}>Logout</button></li>
            </ul>
          : 
            <ul>
              <li><button onClick={this.login()}>Login</button></li>
              <li><button onClick={this.signup()}>Signup</button></li>
            </ul>
        }
      </div>
    )
  }
}

export default Greeting;
