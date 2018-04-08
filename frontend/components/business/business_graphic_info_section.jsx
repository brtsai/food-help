import React from 'react';

class BusinessGraphicInfoSection extends React.Component {
  renderBusinessGraphicInfoSection () {
    return (
      <section>
        Business Graphic Info Section
      </section>
    );
  }

  render () {
    switch (this.props.businessFetched) {
      case true:
        return this.renderBusinessGraphicInfoSection();

      default:
        return <section></section>;
    }
  }
}

export default BusinessGraphicInfoSection;
