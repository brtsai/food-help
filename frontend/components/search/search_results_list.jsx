import React from 'react';

import SearchResultItem from './search_result_item';

// Note: Needs to receive businessOrder and businesses as props
class SearchResultsList extends React.Component {
  
  renderListItem (order, business) {
    return <li> {order}. {business.name} </li>
  }

  renderList () {
    

    return (
      <ul className="search-results-list" >
        {
          this.props.businessOrder.map((id, index) => (
            <SearchResultItem key= { index + this.props.businesses[id].name + id } index={ index+1 } business={ this.props.businesses[id] } />
          ))
        }
      </ul>
    );
  }

  render () {
    if (this.props.businessOrder.length > 0) {
      return this.renderList()
    } else {
      return <div></div>;
    }
  }
}

export default SearchResultsList;
