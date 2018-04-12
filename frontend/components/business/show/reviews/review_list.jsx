import React from 'react';

import ReviewListItem from './review_list_item';
class ReviewList extends React.Component {
  render () {
    console.log(this.props.reviews);
    console.log(this.props.userReviewId);
    
    return (
      <ul>
        {
          this.props.reviews.map(review => <ReviewListItem key={ review } review={ review } />)
        }
      </ul>
    );
  }
}

export default ReviewList;
