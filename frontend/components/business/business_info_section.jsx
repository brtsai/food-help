import React from 'react';

class BusinessInfoSection extends React.Component {
  priceDollarSigns() {
    let dollars = "";
    for(let i = 0; i < this.props.business.price; i++) {
      dollars += "$";
    }
    return dollars;
  }

  renderCategories() {
    let categories = [];
    for (let i = 0; i < this.props.business.businessCategories.length; i++) {
      if (i > 0) {
        categories.push(', ');
      }
      categories.push(<li><a href="">{this.props.business.businessCategories[i]}</a></li>);
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
          <figure className="bullet-separator">•</figure>
          { this.renderCategories() }
        </h4>
      </section>
    );
  }
}

export default BusinessInfoSection;
