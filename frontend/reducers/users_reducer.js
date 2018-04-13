import { merge } from 'lodash';

import { RECEIVE_BUSINESS } from '../actions/business_actions';
import { RECEIVE_REVIEW, RECEIVE_REVIEW_TO_REMOVE } from '../actions/review_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  const stateCopy = merge({}, state);
  let review;
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return action.business.users;

    case RECEIVE_REVIEW_TO_REMOVE:
      review = Object.values(action.review)[0];
      const user = stateCopy[review.user_id];
      const reviewIds = user.reviews;
      stateCopy[review.user_id].reviews = reviewIds.filter(id => (id !== review.id));
      return stateCopy;

    case RECEIVE_REVIEW:
      review = Object.values(action.review)[0];
      stateCopy[review.user_id].reviews.push(review.id);
      return stateCopy;

    default:
      return state;
  }
}

export default usersReducer;
