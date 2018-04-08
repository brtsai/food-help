import React from 'react';
import BusinessInfoSection from './business_info_section';
import BusinessGraphicInfoSection from './business_graphic_info_section';

class Business extends React.Component {
  componentDidMount () {
    this.props.fetchBusiness();
  }
  
  businessFetched() {
    return !!this.props.business;
  }

  render () {
    const businessFetched = this.businessFetched();
    return (
      <div>
        Business show Component
        
        <BusinessInfoSection business={this.props.business} businessFetched={ businessFetched } />

        <BusinessGraphicInfoSection business={this.props.business} businessFetched={ businessFetched } />

      </div>
    );
  }
}

export default Business;
