import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user_id: this.props.userId,
      business_id: this.props.businessId,
      rating: "",
      review: ""
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (e) {
    e.preventDefault();
    console.log('posting review');
    this.props.formAction(this.state);
  }

  render () {
    console.log(this.props);
    return (
      <form onSubmit={ this.submitForm }>
        Add a review form
        <ul>
          <li>
            <input type="submit" value="Post Review" />
          </li>
          <li>
            <button onClick={ this.props.closeForm }>cancel</button>
          </li>
        </ul>
      </form>
    );
  }
}

export default ReviewForm;
