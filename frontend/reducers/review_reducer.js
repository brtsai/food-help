import { merge } from 'lodash';

import { RECEIVE_REVIEW, RECEIVE_REVIEWS, RECEIVE_REVIEW_TO_REMOVE } from '../actions/review_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);

  const stateCopy = merge({}, state);
  switch(action.type) {
    case RECEIVE_REVIEW:
      return merge({}, stateCopy, action.review);

    case RECEIVE_REVIEWS:
      return merge({}, stateCopy, action.reviews);
    
    case RECEIVE_REVIEW_TO_REMOVE:
      const reviewId = Object.keys(action.review)[0]
      delete stateCopy[reviewId];
      return stateCopy;

    case RECEIVE_BUSINESS:
      return merge({}, stateCopy, action.business.reviews)

    default:
      return state;
  }
};

export default reviewReducer;
