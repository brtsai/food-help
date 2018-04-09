import React from 'react';

import AddBusinessFormContainer from './add_business_form_container';
import { clearErrors } from '../../../actions/business_actions'
import { createErrorBannerContainer } from '../../shared/errors/errors_banner_container';

class AddBusinessPage extends React.Component {
  render () {
    const BusinessErrorsBannerContainer = createErrorBannerContainer('business', clearErrors);

    return (
      <section className="add-business-page">
        <BusinessErrorsBannerContainer />
        Add Business Page Component
        <section className="add-business-page-container">
          <section className="add-business-form-column">
            <AddBusinessFormContainer />
          </section>

          <section className="add-business-errors-column">

          </section>

          <section className="add-business-map-column">

          </section>
        </section>
      </section>
    );
  }
}

export default AddBusinessPage;
