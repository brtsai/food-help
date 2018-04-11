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
    console.log(query);
    this.props.searchBusinesses(query.search_string);
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
    return <SearchResultsList businesses={this.props.businesses} businessOrder={this.props.searchResults} />;
  }

  render () {
    const SearchErrorsBannerContainer = createErrorBannerContainer('search', clearErrors);
    const query = this.parseUrlQueryString();
    return (
      <div className="search-results-page">
        <SearchErrorsBannerContainer />
        <section className="search-results-page-content">
          {
            this.props.searchResults.length > 0 ? 
              <h2 className="search-results-page-prologue">
                <strong>Best { decodeURIComponent(query.search_string) } </strong>
                near { decodeURIComponent(query.near_string) }
              </h2>
            :
              ""
          }
          {
            this.renderResultsList()
          }
        </section>
      </div>
    );
  }
}

export default SearchResultsPage;
