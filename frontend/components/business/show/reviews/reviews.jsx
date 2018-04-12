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

  redirectToLogin (e) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  openForm (e) {
    e.preventDefault();
    console.log('opening form');
    this.setState({
      formOpen: true
    });
  }

  closeForm (e) {
    e.preventDefault();
    console.log('closing form');
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
        console.log('user is logged in');
        buttonAction = this.openForm;
        break;

      case false:
        console.log('user not logged in');
      default:
        buttonAction = this.redirectToLogin;
        break;
    }

    return <button onClick={ buttonAction }>Write a Review</button>;
  }

  render () {
    const ReviewErrorsBannerContainer = createErrorBannerContainer('review', clearErrors);

    return (
      <div>
        <ReviewErrorsBannerContainer />
        Reviews Section!
        <div>
          {
            this.state.formOpen ?
              this.renderReviewForm()
            :
              this.renderCreateReviewButton()
          }
          <ReviewList />
        </div>
      </div>
    );
  }
}

export default Reviews;
