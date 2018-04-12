import React from 'react';

import ReviewListItem from './review_list_item';
class ReviewList extends React.Component {
  render () {
    const reviewsToRender = this.props.reviews.filter(review => review.id !== this.props.userReviewId);
    return (
      <ul>
        {
          reviewsToRender.map(review => <ReviewListItem key={ review } review={ review } />)
        }
      </ul>
    );
  }
}

export default ReviewList;
