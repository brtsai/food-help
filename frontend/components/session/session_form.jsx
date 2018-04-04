import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      city: '',
      state: '',
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
        <input type="text" onChange= { this.update('state') } value= { this.state.city } placeholder="State" />, 
      ] 
        : 
      [];
    return (
      <div>
        <strong>{ this.props.formType } form</strong>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange= { this.update('username') } value= { this.state.username } placeholder="Username" />
          <input type="password" onChange= { this.update('password') } value= { this.state.password} placeholder="Password" />
          { additionalFields }
          <input type="submit" value={ submitValue } />
        </form>
      </div>
    );
  }
}

export default SessionForm;
