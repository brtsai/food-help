import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
  
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    case RECEIVE_ROUTE_CHANGE:
      return [];

    default:
      return state;
  }
};

export default sessionErrorsReducer;

