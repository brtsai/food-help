import React from 'react';

class AddBusinessForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      owner_id: this.props.ownerId,
      price: 1,
      categories: [],
      //latitude: 37.7867,
      //longitude: -122.4
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    this.props.addBusiness(this.state).then(success => (this.props.history.push(`/biz/${Object.keys(success.business.business)[0]}`)));
  }

  update (type) {
    return e => {
      e.preventDefault();
      this.setState({
        [type]: e.target.value
      });
    };
  }

  removeCategoryAt (index) {
    return e => {
      let categories = this.state.categories;
      categories.splice(index, 1);
      this.setState({
        categories: categories
      });
    }
  }

  generateCategoryLi (category, index) {
    return (
      <li key={ category + index } className="add-business-category-entry" >
        <dt className="add-business-category-description-term" >{category}</dt>
        <button onClick={ this.removeCategoryAt(index) } className="add-business-category-remove-button" >✕</button>
      </li>
    );
  }

  renderCategories() {
    const categories = this.state.categories.map((category, index) => this.generateCategoryLi(category, index));
    return (
      <ul className="add-business-category-list">
        {categories}
      </ul>
    );
  }

  handleKeyPress () {
    return e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        let categories = this.state.categories
        categories.push(e.target.value);
        this.setState({
          categories: categories
        });
        e.target.value = "";
      }
    }
  }

/**
        <label> Neighbourhood
          <input type="string" onChange= { this.update('neighbourhood') } placeholder="Soma" value={this.state.neighbourhood} />
        </label>
        
        <label> Address
          <input type="string" onChange= { this.update('address') } placeholder="123 Main Street" value={this.state.address} />
        </label>
        
        <label> City
          <input type="string" onChange= { this.update('city') } placeholder="San Francisco" value={this.state.city} />
        </label>

        <label> State
          <input type="string" onChange= { this.update('state') } placeholder="CA" value={this.state.state} />
        </label>

        <label> Latitude
          <input type="number" step="any" onChange= { this.update('latitude') } placeholder="37.3318" value={this.state.latitude} />
        </label>

        <label> Longitude
          <input type="number" step="any" onChange= { this.update('longitude') } placeholder="-122.0312" value={this.state.longitude} />
        </label>

**/


  render () {
    return (
      <form className="add-business-form">
        <label> Business Name
          <input type="string" onChange= { this.update('name') } placeholder="Mel's Diner" value={this.state.name} />
        </label>

        <label> Location
          <input type="string"/>
        </label>

        <label> Price
          <select onChange= { this.update('price') } value={ this.state.price }>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </label>
        
        <label for="add-category"> Categories
        </label>
          
          {
            this.renderCategories()
          }
          
          {
            this.state.categories.length < 3 ? 
              <input id="add-category" type="string" onKeyPress= { this.handleKeyPress() } placeholder="(Hit Enter to Add a Category)" />
            :
              ""
          }

        <input type="submit" onClick= { this.submitForm } value="Add Business"/>
      </form>
    );
  }
}

export default AddBusinessForm;
