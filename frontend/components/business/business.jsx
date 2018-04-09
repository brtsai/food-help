import React from 'react';
import BusinessInfoSection from './business_info_section';
import BusinessGraphicInfoSection from './business_graphic_info_section';

class Business extends React.Component {
  businessFetched() {
    return !!this.props.business;
  }

  renderBusinessInfo () {
    return (
      <section className="business-show-container">
        <section className="business-show-component">
          <BusinessInfoSection business={this.props.business} />

          <BusinessGraphicInfoSection business={this.props.business} />

        </section>
      </section>
    );
  }


  render () {
    switch (this.businessFetched()) {
      case true:
        return this.renderBusinessInfo();

      default:
        return <section></section>;
    }
  }
}

export default Business;
