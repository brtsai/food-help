import React from 'react';

class SessionForm extends React.Component {
  render () {
    return (
      <div>
        <strong>{ this.props.formType } form</strong>
      </div>
    );
  }
}

export default SessionForm;
