import React from 'react';

import BusinessLocationDetail from './business_location_detail';
import BusinessImageTrifold from './business_image_trifold';

class BusinessGraphicInfoSection extends React.Component {

  render () {
    return (
      <section className="business-graphic-info-section">
        <BusinessLocationDetail business={this.props.business}/>
        <BusinessImageTrifold business={this.props.business}/>
      </section>
    );
  }
}

export default BusinessGraphicInfoSection;
