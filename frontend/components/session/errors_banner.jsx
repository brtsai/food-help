import React from 'react';

class ErrorsBanner extends React.Component {
  
  closeBanner() {
    return e => {
      this.props.clearErrors();
    };
  }

  willRender() {
    return Boolean(this.props.errors.length);
  }
  
  render() {
      console.log(`will render: ${ this.willRender() }`);
    return (
      <figure className="session-errors-banner">
        <ul> 
          { this.props.errors.map(error => <li>{error}</li>) }
        </ul>
        { this.willRender() ? <button onClick={ this.closeBanner() }>x</button> : "" }
      </figure>
      );
  }
}

export default ErrorsBanner;
