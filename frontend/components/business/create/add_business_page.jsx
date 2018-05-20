import React from 'react';

import AddBusinessFormContainer from './add_business_form_container';
import AddBusinessMapContainer from './add_business_map_container';

import { clearErrors } from '../../../actions/business_actions';
import { createErrorBannerContainer } from '../../shared/errors/errors_banner_container';

class AddBusinessPage extends React.Component {
  render () {
    const BusinessErrorsBannerContainer = createErrorBannerContainer('business', clearErrors);

    return (
      <section className="add-business-page">
        <section className="add-business-page-errors">
          <BusinessErrorsBannerContainer />
        </section>
        <section className="add-business-page-container">
          <h2 className="add-business-page-title">Add a Business</h2>
          <section className="add-business-form-container">
            <section className="add-business-form-column">
              <AddBusinessFormContainer />
            </section>

            <section className="add-business-suggestion-column">

            </section>

            <section className="add-business-map-column">
              <AddBusinessMapContainer />
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default AddBusinessPage;
