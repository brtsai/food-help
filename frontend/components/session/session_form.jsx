import React from 'react';

import { DEFAULT_PROFILE_PICTURE_URL } from '../../util/defaults';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      city: '',
      state: '',
      profile_picture_url: DEFAULT_PROFILE_PICTURE_URL
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render () {
    const submitValue = (this.props.formType === 'login') ? "Log In" : "Sign Up";
    const additionalFields = (this.props.formType === 'signup') ? 
      [
        <input type="text" onChange= { this.update('city') } value= { this.state.city } placeholder="City" />, 
        <input type="text" onChange= { this.update('state') } value= { this.state.state } placeholder="State" />, 
      ] 
        : 
      [];
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" onChange= { this.update('username') } value= { this.state.username } placeholder="Username" />
        <input type="password" onChange= { this.update('password') } value= { this.state.password} placeholder="Password" />
        { additionalFields }
        <input type="submit" value={ submitValue } />
      </form>
    );
  }
}

export default SessionForm;
