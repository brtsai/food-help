import React from 'react';

import SearchResultsList from './search_results_list';
import { clearErrors } from '../../actions/search_actions'
import { createErrorBannerContainer } from '../shared/errors/errors_banner_container';

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

  searchBusinesses() {
    const query = this.parseUrlQueryString();
    if (query.search_string !== undefined) {
      this.props.searchBusinesses(query.search_string);
    }
  }

  componentDidMount () {
    this.searchBusinesses();
    this.unlistenRouteChanges = this.props.history.listen((location, action) =>  {
      this.searchBusinesses();
    });
  }

  componentWillUnmount () {
    this.unlistenRouteChanges();
  }

  renderResultsList() {
    const businessOrder = this.props.searchResults;
    console.log(this.props);
    return <SearchResultsList businesses={{}} businessOrder={[]} />;
  }

  render () {
    const SearchErrorsBannerContainer = createErrorBannerContainer('search', clearErrors);
    console.log(this.props.searchResults);
    return (
      <div>
        <SearchErrorsBannerContainer />
        Search Results
        {
          this.renderResultsList()
        }
      </div>
    );
  }
}

export default SearchResultsPage;
