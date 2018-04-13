import { connect } from 'react-redux';

import ReviewListItem from './review_list_item';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.review.user_id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListItem);
