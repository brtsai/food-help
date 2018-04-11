import { connect } from 'react-redux';

import SearchResultsPage from './search_results_page';
import { searchBusinesses } from '../../actions/search_actions';

const mapStateToProps = state => ({
  searchResults: state.entities.searchResults
});

const mapDispatchToProps = dispatch => ({
  searchBusinesses: searchString => dispatch(searchBusinesses(searchString))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);
