import React from 'react';

class ReviewForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.props.review || {
      user_id: this.props.userId,
      business_id: this.props.businessId,
      rating: "",
      review: ""
    };
    
    this.clearForm = this.clearForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.update = this.update.bind(this);
  }
  
  clearForm () {
    this.setState({
      rating: "",
      review: ""
    });
  }

  update (type) {
    return e => {
      e.preventDefault();
      this.setState({
        [type]: e.target.value
      });
    };
  }

  submitForm (e) {
    e.preventDefault();
    this.props.formAction(this.state).then(() => {
      this.props.closeForm();
    });
  }

  closeForm (e) {
    e.preventDefault();
    this.props.closeForm();
  }

  render () {
    return (
      <form onSubmit={ this.submitForm }>
        <select onChange= { this.update('rating') } value={ this.state.price }>
          <option value="" hidden>Select Your Rating</option>
          <option value="5">🌟🌟🌟🌟🌟</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">💫</option>
        </select>
        <textarea onChange= { this.update('review') }placeholder={ "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees." }>
        </textarea>
        <ul>
          <li>
            <input type="submit" value="Post Review" />
          </li>
          <li>
            <button onClick={ this.closeForm }>cancel</button>
          </li>
        </ul>
      </form>
    );
  }
}

export default ReviewForm;
