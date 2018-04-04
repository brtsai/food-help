import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class SessionPage extends React.Component {
  
  header() {
    if (this.props.location.pathname === '/login') {
      return "Log In to Food Help";
    } else if (this.props.location.pathname === '/signup') {
      return "Sign Up for Food Help";
    }
    return "Neither Log In nor Sign Up for Food Help";

  }

  topSection() {
    let header;
    let subHeader;

    switch(this.props.location.pathname) {
      case '/login':
        header = "Log In to Food Help";
        subHeader = <h3>New to Food Help? <Link to='signup'>Sign up</Link></h3>;
        break;

      case '/signup':
        header = "Sign Up for Food Help";
        subHeader = <h3>Connect with great local businesses</h3>;
        break;

      default:
        header = "Neither Log In nor Sign Up for Food Help";
        subHeader = "Neither Log In nor Sign Up Subheader"
        break;
    }
    
    header = <h2>{ header }</h2>;
    

    return (
      <section>
        { header }
        { subHeader }
        <button onClick={ this.props.demoLogin }>
          Demo Login
        </button>
      </section>
    );
  }

  sessionForm() {
    switch(this.props.location.pathname) {
      case '/login':
        return <LoginFormContainer />;

      case '/signup':
        return <SignupFormContainer />;

      default:
        return <strong> neither login nor signup </strong>;
    }
  }

  subtleLink() {
    switch(this.props.location.pathname) {
      case '/login':
        return <small>New to Food Help? <Link to='/signup'>Sign up</Link></small>;

      case '/signup':
        return <small>Already on Food Help? <Link to='/login'>Log in</Link></small>;

      default:
        return <strong> neither login nor signup </strong>;
    }
  }

  render () {
    return (
      <div>
        <section className="sessionForm">
          <ul>
            {
              this.topSection()
            }
            <fieldset className="hr-line">
              <legend align="center">OR</legend>
            </fieldset>
            {
              this.sessionForm()
            }
            {
              this.subtleLink()
            }
          </ul>
        </section>

        <section>
          <img className="session-page-art" src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png" />
        </section>
      </div>
    );
  }
}

export default withRouter(SessionPage);
