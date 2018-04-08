import React from 'react';

class BusinessInfoSection extends React.Component {
  renderBusinessInfo () {
      return (
        <section>
          <h2 className="business-title">{ this.props.business.name }</h2>
        </section>
      );
  }
  
  render () {
    console.log(this.props.business);
    switch(this.props.businessFetched) {
      case true:
        return this.renderBusinessInfo();

      default:
        return <section></section>;
    }
  }
}

export default BusinessInfoSection;
