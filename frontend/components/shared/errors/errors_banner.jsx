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
      const errorBanner = (
        <figure className="session-errors-banner">
          <ul className="session-errors-banner-errors-list"> 
            { this.props.errors.map(error => <li>{error}</li>) }
          </ul>
          <button className="session-errors-banner-close" onClick={ this.closeBanner() }>✕</button>
        </figure>
      );
    return (
        <div>
          { this.willRender() ? errorBanner : "" }
        </div>
      );
  }
}

export default ErrorsBanner;
