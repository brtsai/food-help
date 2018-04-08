import React from 'react';

import BusinessContainer from './business_container';

class BusinessPage extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.business !== undefined) { 
      if (parseInt(nextProps.match.params.businessId) !== this.props.business.id) {
        this.props.fetchBusiness(nextProps.match.params.businessId);
      }
    }
  }

  render () {
    return (
      <section>
        <BusinessContainer business={this.props.business} />
        <section>
          Other content on a business page
        </section>
      </section>
    );
  }
}

export default BusinessPage;
