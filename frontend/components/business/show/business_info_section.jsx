import React from 'react';

class BusinessInfoSection extends React.Component {
  priceDollarSigns() {
    let dollars = "";
    for(let i = 0; i < this.props.business.price; i++) {
      dollars += "$";
    }
    return dollars;
  }

  renderBulletSeparator() {
    return <figure className="bullet-separator">•</figure>;
  }

  renderCategories() {
    let categories = [];
    for (let i = 0; i < this.props.business.businessCategories.length; i++) {
      if (i > 0) {
        categories.push(', ');
      }
      const name = this.props.business.name
      const category = this.props.business.businessCategories[i];
      categories.push(<li key={ name + "-" + category }><a href="">{ category }</a></li>);
    }
    return (
      <ul className="business-categories">
        { categories }
      </ul>
    );
  }
 
  render () {
    return (
      <section className="business-info-section">
        <h2 className="business-name">{ this.props.business.name }</h2>
        <h4 className="rating-and-review-count">Ratings and Reviews</h4>
        <h4 className="price-and-categories">
          <figure className="business-price">{ this.priceDollarSigns() }</figure>
          { this.props.business.businessCategories.length > 0 ? this.renderBulletSeparator() : "" }
          { this.renderCategories() }
        </h4>
      </section>
    );
  }
}

export default BusinessInfoSection;
