import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Reviews from './reviews';
import { addReview, updateReview, removeReview } from '../../../../actions/review_actions';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(addReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  removeReview: reviewId => dispatch(removeReview(reviewId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reviews));
