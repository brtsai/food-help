import * as ReviewAPIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_TO_REMOVE = 'RECEIVE_REVIEW_TO_REMOVE';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReviewToRemove = review => ({
  type: RECEIVE_REVIEW_TO_REMOVE,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const fetchReview = reviewId => dispatch => (
  ReviewAPIUtil.fetchReview(reviewId).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveReviewErrors(Object.values(errors.responseJSON)))
  )
);

export const fetchReviews = () => dispatch => (
  ReviewAPIUtil.fetchReviews().then(
    reviews => dispatch(receiveReviews(reviews)),
    errors => dispatch(receiveReviewErrors(Object.values(errors.responseJSON)))
  )
);

export const addReview = review => dispatch => (
  ReviewAPIUtil.addReview(review).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveReviewErrors(Object.values(errors.responseJSON)))
  )
);

export const updateReview = review => dispatch => (
    ReviewAPIUtil.updateReview(review).then(
    review => dispatch(receiveReview(review)),
    errors => dispatch(receiveReviewErrors(Object.values(errors.responseJSON)))
  )
);

export const removeReview = reviewId => dispatch => (
    ReviewAPIUtil.removeReview(reviewId).then(
    review => dispatch(receiveReviewToRemove(review)),
    errors => dispatch(receiveReviewErrors(Object.values(errors.responseJSON)))
  )
);
