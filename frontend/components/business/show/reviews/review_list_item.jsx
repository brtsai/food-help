import React from 'react';

class ReviewListItem extends React.Component {
  render () {
    console.log(this.props.review);
    return (
      <div>
        Review List Item
      </div>
    );
  }
}

export default ReviewListItem;
