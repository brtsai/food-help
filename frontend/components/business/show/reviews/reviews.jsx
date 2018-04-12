import React from 'react';

import ReviewForm from './review_form';
import ReviewList from './review_list';
import { clearErrors } from '../../../../actions/review_actions';
import { createErrorBannerContainer } from '../../../shared/errors/errors_banner_container';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      formOpen: false
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
    this.setState({
      formOpen: false
    });
  }

  userIsLoggedIn() {
    return Object.keys(this.props.session).length !== 0;
  }

  renderReviewForm () {
    return <ReviewForm closeForm={ this.closeForm } userId={ Object.keys(this.props.session)[0] } businessId={ this.props.match.params.businessId } formAction={ this.props.addReview } />;
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

    return <button onClick={ buttonAction }>Write a Review</button>;
  }

  renderCreateReviewThings () {
    return (this.state.formOpen ? this.renderReviewForm() : this.renderCreateReviewButton());
  }

  render () {
    const ReviewErrorsBannerContainer = createErrorBannerContainer('review', clearErrors);
    console.log(this.props);
    return (
      <div>
        <ReviewErrorsBannerContainer />
        <div>
          {
            this.renderCreateReviewThings()
          }
          <ReviewList reviews={ this.props.reviews } userReviewId={ this.props.userReview === undefined ? -1 : this.props.userReview.id } />
        </div>
      </div>
    );
  }
}

export default Reviews;
