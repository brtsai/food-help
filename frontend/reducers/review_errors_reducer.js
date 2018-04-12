import { RECEIVE_REVIEW_ERRORS } from '../actions/review_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      console.log('logging review errors action');
      console.log(action);
      return action.errors;

    case RECEIVE_ROUTE_CHANGE:
      return [];

    default:
      return state;
  }
};

export default reviewErrorsReducer;

