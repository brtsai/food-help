import React from 'react';

class BusinessInfoSection extends React.Component {
  renderBusinessInfo () {
      return (
        <section>
          Business Info Section
        </section>
      );
  }

  render () {
    switch(this.props.businessFetched) {
      case true:
        return this.renderBusinessInfo();

      default:
        return <section></section>;
    }
  }
}

export default BusinessInfoSection;
