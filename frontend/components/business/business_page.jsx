import React from 'react';

import BusinessContainer from './business_container';

class BusinessPage extends React.Component {
  componentDidMount() {
    this.props.fetchBusiness();
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
