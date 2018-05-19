import { RECEIVE_BUSINESS_ERRORS } from '../actions/business_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';
import { merge } from 'lodash';

const businessErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BUSINESS_ERRORS:
      console.log(action.errors);
      return action.errors;

    case RECEIVE_ROUTE_CHANGE:
      return [];

    default:
      return state;
  }
};

export default businessErrorsReducer;
