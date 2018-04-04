import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.values(action.errors.responseJSON);
    default:
      return [];
  }
};

export default sessionErrorsReducer;

