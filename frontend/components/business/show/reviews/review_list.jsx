import React from 'react';

import ReviewListItemContainer from './review_list_item_container';
class ReviewList extends React.Component {
  render () {
    const reviewsToRender = this.props.reviews.filter(review => review.id !== this.props.userReviewId);
    return (
      <ul className="business-review-list">
        {
          reviewsToRender.map(review => <ReviewListItemContainer key={ review.id } review={ review } />)
        }
      </ul>
    );
  }
}

export default ReviewList;
