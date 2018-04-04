import React from 'react';
import { withRouter } from 'react-router';

import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';

class SessionPage extends React.Component {
  
  sessionForm() {
    if (this.props.location.pathname === '/login') {
      return <LoginFormContainer />;
    } else if (this.props.location.pathname === '/signup') {
      return <SignupFormContainer />;
    }
    return <strong> neither login nor signup </strong>;
  }

  render () {
    return (
      <div>
        <section className="sessionForm">
          <ul>
            <li>
              demo login
            </li>
            <fieldset className="hr-line">
              <legend align="center">OR</legend>
            </fieldset>
            <li>
              {
                this.sessionForm()
              }
            </li>
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
