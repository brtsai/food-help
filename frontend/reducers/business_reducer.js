import { merge } from 'lodash';

import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from '../actions/business_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { RECEIVE_REVIEW, RECEIVE_REVIEW_TO_REMOVE } from '../actions/review_actions';

const businessReducer = (state = {}, action) => {
  Object.freeze(state)

  const stateCopy = merge({}, state);
  let review;
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return merge({}, stateCopy, action.business.business);
    
    case RECEIVE_BUSINESSES:
      return merge({}, stateCopy, action.businesses);
    
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, stateCopy, action.results.businesses);

    case RECEIVE_REVIEW_TO_REMOVE:
      review = Object.values(action.review)[0];
      const business = stateCopy[review.business_id];
      const reviewIds = business.reviews;
      stateCopy[review.business_id].reviews = reviewIds.filter(id => (id !== review.id));
      return merge({}, stateCopy);

    case RECEIVE_REVIEW:
      review = Object.values(action.review)[0];
      stateCopy[review.business_id].reviews.push(review.id)
      return stateCopy;

    default:
      return state;
  }
}

export default businessReducer;
