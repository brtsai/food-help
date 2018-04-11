import React from 'react'
import { Link } from 'react-router-dom';

class SearchResultItem extends React.Component {
  mapIdToStockImageUrl (id) {
    const imageUrls = [
      "https://scontent.cdninstagram.com/vp/42b4c0778a3daf9ac17cc8aecb2906ef/5B5BEE3E/t51.2885-15/sh0.08/e35/p640x640/26870995_737504946443421_4986542655124013056_n.jpg",
      "https://scontent.cdninstagram.com/vp/c54dd5aca82a7073e46c1e036eccb7d4/5B55C1A9/t51.2885-15/s640x640/sh0.08/e35/28152121_165953720865739_1522247889873534976_n.jpg",
      "https://scontent.cdninstagram.com/vp/b6139e2f614810312507340083100acb/5B675980/t51.2885-15/s640x640/sh0.08/e35/27892505_422662831479780_1102797140318486528_n.jpg",
      "https://scontent.cdninstagram.com/vp/a6345337e3f8717ccb1673bf61dbde8b/5AD0B5EE/t51.2885-15/s320x320/e35/29417525_585293405167767_787768809644621824_n.jpg",
      "https://scontent.cdninstagram.com/vp/1a1551ca874fbb897c50721bb1ce9ebd/5B55ED66/t51.2885-15/e35/p320x320/27576408_191774751577893_1680923175996620800_n.jpg"
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
      categories.push(<li key={ name + "-" + category }><a href={`/#/search?search_string=${category}&near_string=Soma,%20San%20F    rancisco,%20CA`}>{ category }</a></li>);
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
            Review
          </div>

        </div>
      </li>
    );
  }
}

export default SearchResultItem;
