import React from 'react';
import { debounce } from 'lodash';

class AddBusinessForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      owner_id: this.props.ownerId,
      price: 1,
      categories: [],
      name: '',
      businessLocation: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.debouncedGeocode = debounce(this.props.geocodeLocation, 500);
  }

  getBusinessInfo() {
    return {
      owner_id: this.state.owner_id,
      price: this.state.price,
      name: this.state.name,
      categories: this.state.categories,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    };
  }

  submitForm (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const businessInfo = this.getBusinessInfo();
    this.props.addBusiness(businessInfo).then(
      success => (this.props.history.push(`/biz/${Object.keys(success.business.business)[0]}`))
    );
  }

  update (type, callback) {
    return e => {
      const value = e.target.value;
      e.preventDefault();
      this.setState({
        [type]: e.target.value
      },
      () => {
        if (callback !== undefined) callback(value);
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

  render () {
    return (
      <form className="add-business-form">
        <label> Business Name
          <input type="string" onChange= { this.update('name') } placeholder="Mel's Diner" value={this.state.name} />
        </label>

        <label> Location
          <input type="string" onChange= { this.update('businessLocation', this.debouncedGeocode) } value={this.state.businessLocation} />
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
        
        <label htmlFor="add-category"> Categories
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
