import React from 'react';

class SearchResultsList extends React.Component {
  
  renderList () {
    return (
      <ul>
        <li>Search Results List</li>
      </ul>
    );
  }

  render () {
    return (
      <div>
        Search results list
        {
          this.businessOrder.length > 0 ?
            this.renderList()
          :
            ""
        }
      </div>
    );
  }
}

export default SearchResultsList;
