import React from 'react';

// Note: Needs to receive businessOrder and businesses as props
class SearchResultsList extends React.Component {
  
  renderListItem (order, business) {
    return <li> {order}. {business.name} </li>
  }

  renderList () {
    return (
      <ul>
        <li>Search Results List</li>
      </ul>
    );
  }

  render () {
    console.log(this.props.businessOrder);
    console.log(this.props.businesses);
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
