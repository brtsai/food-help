import React from 'react';

import BusinessContainer from './business_container';

class BusinessPage extends React.Component {
  render () {
    return (
      <section>
        <BusinessContainer />
        <section>
          Other content on a business page
        </section>
      </section>
    );
  }
}

export default BusinessPage;
