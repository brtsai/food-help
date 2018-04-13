import React from 'react';

class ReviewListItem extends React.Component {
  renderUserInformation () {
    return (
      <section className="review-list-item-user-information" >
        <img className="review-list-item-user-profile-picture" src={ this.props.user.profile_picture_url } ></img>
        <div className="review-list-item-user-name-and-location">
          <h6 className="review-list-item-user-name" >{ this.props.user.username }</h6>
          <div className="review-list-item-user-location" >{ this.props.user.city}, { this.props.user.state }</div>
        </div>
      </section>
    );
  }

  renderRating () {
    let ratingEmojis;
    switch(this.props.review.rating) {
      case 5:
        ratingEmojis = "🌟🌟🌟🌟🌟";
        break;

      case 4:
        ratingEmojis = "⭐⭐⭐⭐";
        break;

      case 3:
        ratingEmojis = "⭐⭐⭐";
        break;

      case 2:
        ratingEmojis = "⭐⭐";
        break;

      case 1:
        ratingEmojis = "💫";
        break;

      default:
        ratingEmojis = "Rating";
        break;
    }

    return (
      <div className="review-list-item-rating" >{ ratingEmojis }</div>
    );
  }

  renderDate () {
    const timestamp = this.props.review.created_at;
    const year = timestamp.substr(0,4);
    const month = timestamp.substr(5,2);
    const day = timestamp.substr(8,2);

    return (
      <div className="review-list-item-date" >
        { day }/{ month }/{ year }
      </div>
    );
  }

  renderReviewInformation () {
    return (
      <section className="review-list-item-review-information">
        <div className="review-list-item-rating-and-date">
          {
            this.renderRating()
          }
          {
            this.renderDate()
          }
        </div>
        <p className="review-list-item-review-content" >
          { this.props.review.review }
        </p>

        {
          this.props.buttons === undefined?
            ""
          :
            this.props.buttons
        }
      </section>
    );
  }

  render () {
    return (
      <li className="business-review-list-item">
        {
          this.renderUserInformation()
        }
        {
          this.renderReviewInformation()
        }
      </li>
    );
  }
}

export default ReviewListItem;
