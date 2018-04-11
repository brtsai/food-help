import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const receiveSearchErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

export const searchBusinesses = searchString => dispatch => (
  SearchAPIUtil.searchBusinesses(searchString).then(
    results => dispatch(receiveSearchResults(results)),
    errors => dispatch(receiveSearchErrors(errors))
  )
);

export const clearErrors = () => dispatch => (
  dispatch(receiveSearchErrors(errors))
);
