import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import { merge } from 'lodash';

const businessReducer = (state = {}, action) => {
  Object.freeze(state)

  const stateCopy = merge({}, state);
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return merge({}, stateCopy, action.business);

    case RECEIVE_BUSINESSES:
      return merge({}, stateCopy, action.businesses);

    default:
      return state;
  }
}

export default businessReducer;
