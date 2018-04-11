import React from 'react';

import SearchResultsList from './search_results_list';

class SearchResultsPage extends React.Component {
  
  parseUrlQueryString () {
    let query = {};
    const hashString = window.location.hash;
    const queryString = hashString.slice(hashString.indexOf('?')+1, hashString.length);
    const queryParams = queryString.split('&');
    queryParams.forEach(queryParam => {
      const split = queryParam.split('=');
      query[split[0]] = split[1];
    });

    return query;
  }

  componentDidMount () {
    const query = this.parseUrlQueryString();
    if (query.search_string !== undefined) {
      this.props.searchBusinesses(query.search_string);
    }
  }

  renderResultsList() {

  }

  render () {

    console.log(this.props.searchResults);
    return (
      <div>
        Search Results
        {
          this.renderResultsList()
        }
      </div>
    );
  }
}

export default SearchResultsPage;
