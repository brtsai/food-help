import React from 'react';
import { withRouter } from 'react-router-dom';

class ErrorsBanner extends React.Component {
  
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.props.routeChanged();
    });
  }
  
  componentWillUnmount() {
    this.unlisten();
  }

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

export default withRouter(ErrorsBanner);
