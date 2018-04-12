import React from 'react';

import ReviewForm from './review_form';
import ReviewList from './review_list';

class Reviews extends React.Component {
  render () {
    return (
      <div>
        Reviews Section!
        <div>
          <ReviewForm />
          <ReviewList />
        </div>
      </div>
    );
  }
}

export default Reviews;
