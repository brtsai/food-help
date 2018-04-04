import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const newUser = merge({}, action.user);
      return newUser;
    default:
      return state;
  }
}

export default sessionReducer

