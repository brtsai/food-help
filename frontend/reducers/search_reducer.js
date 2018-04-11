import { merge } from 'lodash';

import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';

const searchReducer = (state = [], action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results.search_results;
    
    case RECEIVE_ROUTE_CHANGE:
      return state;

    default:
      return [];
  }
}

export default searchReducer;
