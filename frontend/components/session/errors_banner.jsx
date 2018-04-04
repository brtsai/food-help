import React from 'react';

class ErrorsBanner extends React.Component {
  willRender() {
    return Boolean(this.props.errors.length);
  }

  render() {
      console.log(`will render: ${ this.willRender() }`);
    return (
      <figure className="session-errors-banner">
        {this.props.errors}
      </figure>
      );
  }
}

export default ErrorsBanner;
