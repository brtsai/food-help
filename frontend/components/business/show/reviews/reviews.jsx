import React from 'react';

import ReviewForm from './review_form';
import ReviewList from './review_list';
import ReviewListItemContainer from './review_list_item_container';
import { clearErrors } from '../../../../actions/review_actions';
import { createErrorBannerContainer } from '../../../shared/errors/errors_banner_container';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      formOpen: false,
      formAction: this.props.addReview
    };


    this.redirectToLogin = this.redirectToLogin.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  redirectToLogin () {
    this.props.history.push('/login');
  }

  openForm () {
    this.setState({
      formOpen: true
    });
  }

  closeForm () {
    this.props.clearErrors();
    this.setState({
      formOpen: false
    });
  }

  userIsLoggedIn () {
    return Object.keys(this.props.session).length !== 0;
  }

  userHasReview () {
    return this.props.userReview !== undefined;
  }

  renderReviewForm () {
    return <ReviewForm closeForm={ this.closeForm } userId={ Object.keys(this.props.session)[0] } businessId={ this.props.match.params.businessId } formAction={ this.props.formAction } review={ this.props.userReview } />;
  }

  renderCreateReviewButton () {
    let buttonAction;
    switch(this.userIsLoggedIn()) {
      case true:
        buttonAction = this.openForm;
        break;

      case false:
      default:
        buttonAction = this.redirectToLogin;
        break;
    }

    return (
      <div className="business-reviews-write-a-review-button-container">
        <button className="business-reviews-write-a-review-button" onClick={ buttonAction }>Write a Review</button>
      </div>
    );
  }


  renderUserReviewEditDeleteButtons () {
    return (
      <div className="user-review-edit-delete-buttons" >
        <button className="user-review-edit-button" ><i className="fa fa-edit"></i></button>
        <button className="user-review-delete-button" onClick={ () => this.props.removeReview(this.props.userReview.id) } ><i className="fa fa-trash" aria-hidden="true"></i></button>
      </div>
    );
  }

  renderUserReview () {
    return <ReviewListItemContainer review={ this.props.userReview } buttons={ this.renderUserReviewEditDeleteButtons() } />
  }

  renderCreateReviewThings () {
    return (this.state.formOpen ? this.renderReviewForm() : this.renderCreateReviewButton());
  }

  render () {
    const ReviewErrorsBannerContainer = createErrorBannerContainer('review', clearErrors);
    return (
      <div className="business-reviews-content">
        <ReviewErrorsBannerContainer />
        <div className="business-reviews-current-user-review-slot" >
          {
            this.userHasReview() ?
              this.renderUserReview()
            :
              this.renderCreateReviewThings()
          }

        </div>
        <ReviewList reviews={ this.props.reviews } userReviewId={ this.userHasReview() ? this.props.userReview.id : -1 } />
      </div>
    );
  }
}

export default Reviews;
