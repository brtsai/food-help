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
    console.log('posting review');
    this.props.formAction(this.state);
  }

  render () {
    console.log(this.props);
    return (
      <form onSubmit={ this.submitForm }>
        Add a review form
        <select onChange= { this.update('rating') } value={ this.state.price }>
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
            <button onClick={ this.props.closeForm }>cancel</button>
          </li>
        </ul>
      </form>
    );
  }
}

export default ReviewForm;
