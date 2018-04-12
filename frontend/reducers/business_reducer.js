import { merge } from 'lodash';

import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const businessReducer = (state = {}, action) => {
  Object.freeze(state)

  const stateCopy = merge({}, state);
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return merge({}, stateCopy, action.business.business);
    
    case RECEIVE_BUSINESSES:
      return merge({}, stateCopy, action.businesses);
    
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, stateCopy, action.results.businesses);

    default:
      return state;
  }
}

export default businessReducer;
