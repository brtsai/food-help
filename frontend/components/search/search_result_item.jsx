import React from 'react'
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component {
  mapIdToStockImageUrl (id) {
    const imageUrls = [
      "/assets/shabu.jpg",
      "/assets/pho.jpg",
      "/assets/yayoi.jpg",
      "/assets/filam.jpg",
      "/assets/cake.jpg"
    ];

    return imageUrls[id%5];
  }

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
      categories.push(<li key={ name + "-" + category }><a href={`/#/search?search_string=${category}&near_string=Soma,%20San%20Francisco,%20CA`}>{ category }</a></li>);
    }
    return (
      <ul className="business-categories">
        { categories }
      </ul>
    );
  }

  render () {
    return (
      <li className="search-result-item">
        <Link to={ `/biz/${this.props.business.id}` }><img className="search-result-item-image" src= { this.mapIdToStockImageUrl(this.props.business.id)} ></img></Link>

        <div className="search-result-text-container">
          
          <div className="search-result-item-business-info-container">
            <div className="search-result-item-business-overview-container">
              <h4>
                { this.props.index }. <Link to={ `/biz/${this.props.business.id}` }>{ this.props.business.name } </Link>
              </h4>
              <div className="search-result-item-ratings-and-reviews">
                Ratings and Reviews
              </div>
              <div className="search-result-item-price-and-categories">
                { this.priceDollarSigns() }
                { this.props.business.businessCategories.length > 0 ? this.renderBulletSeparator() : "" }
                { this.renderCategories() }
              </div>
            </div>
            <div className="search-result-item-location-container">
              <div className="search-result-item-neighbourhood">
                { this.props.business.neighbourhood }
              </div>
              <div className="search-result-item-address">
                { this.props.business.address }
              </div>
            </div>
          </div>
          
          <div className="search-result-item-review-container">
          </div>

        </div>
      </li>
    );
  }
}

export default SearchResultItem;
