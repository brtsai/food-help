import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Reviews from './reviews';
import { addReview, updateReview, removeReview } from '../../../../actions/review_actions';
import { selectReviews, userReview } from '../../../../selectors/review_selectors';

const mapStateToProps = (state, routerOptions) => ({
  session: state.session,
  reviews: selectReviews(state, routerOptions),
  userReview: userReview(state, routerOptions),
});

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(addReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  removeReview: reviewId => dispatch(removeReview(reviewId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reviews));
