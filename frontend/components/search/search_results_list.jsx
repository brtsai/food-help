import React from 'react';

import SearchResultItem from './search_result_item';

// Note: Needs to receive businessOrder and businesses as props
class SearchResultsList extends React.Component {
  
  renderListItem (order, business) {
    return <li> {order}. {business.name} </li>
  }

  renderList () {
    

    return (
      <ul>
        {
          this.props.businessOrder.map((id, index) => (
            <li key= { index + this.props.businesses[id].name + id } >
              <SearchResultItem index={ index+1 } business={ this.props.businesses[id] } />
            </li>
          ))
        }
      </ul>
    );
  }

  render () {
    return (
      <div>
        Search results list
        {
          this.props.businessOrder.length > 0 ?
            this.renderList()
          :
            ""
        }
      </div>
    );
  }
}

export default SearchResultsList;
