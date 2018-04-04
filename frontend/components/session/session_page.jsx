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
        session page component
        {
          this.sessionForm()
        }
      </div>
    );
  }
}

export default withRouter(SessionPage);
