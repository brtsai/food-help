import { merge } from 'lodash';

import { RECEIVE_BUSINESS } from '../actions/business_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BUSINESS:
      return action.business.users;
    
    default:
      return state;
  }
}

export default usersReducer;
