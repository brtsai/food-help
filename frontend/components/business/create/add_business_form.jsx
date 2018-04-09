import React from 'react';

class AddBusinessForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { 
      owner_id: this.props.ownerId,
      price: 1
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (e) {
    e.preventDefault();
    console.log('submitting form');
    this.props.addBusiness(this.state);
  }

  update (type) {
    return e => {
      e.preventDefault();
      this.setState({
        [type]: e.target.value
      });
    };
  }

  updatePrice () {
    return e => {
      this.setState({
        price: parseInt(e.target.value)
      });
    }
  }

  render () {
    return (
      <form className="add-business-form">
        <label> Business Name
          <input type="string" onChange= { this.update('name') } placeholder="Mel's Diner" value={this.state.name} />
        </label>
        
        <label> Address
          <input type="string" onChange= { this.update('address') } placeholder="123 Main Street" value={this.state.address} />
        </label>
        
        <label> City
          <input type="string" onChange= { this.update('city') } placeholder="San Francisco"/>
        </label>

        <label> State
          <input type="string" onChange= { this.update('State') } placeholder="CA"/>
        </label>

        <label> City
          <input type="string" onChange= { this.update('city') } placeholder="San Francisco"/>
        </label>

        <label> Latitude
          <input type="number" step="any" onChange= { this.update('latitude') } placeholder="37.3318"/>
        </label>

        <label> Longitude
          <input type="number" step="any" onChange= { this.update('longitude') } placeholder="-122.0312"/>
        </label>


        <label> Price
          <label> $
            <input type="radio" onChange= { this.updatePrice() } name="price" value="1" checked={this.state.price === 1} />
          </label>
        
          <label> $$
            <input type="radio" onChange= { this.updatePrice() } name="price" value="2" checked={this.state.price === 2} />
          </label>
          
          <label> $$$
            <input type="radio" onChange= { this.updatePrice() } name="price" value="3" checked={this.state.price === 3} />
          </label>
          
          <label> $$$$
            <input type="radio" onChange= { this.updatePrice() } name="price" value="4" checked={this.state.price === 4} />
          </label>
          
          <label> $$$$$
            <input type="radio" onChange= { this.updatePrice() } name="price" value="5" checked={this.state.price === 5} />
          </label>
        </label>


        <input type="submit" onClick= { this.submitForm } value="Add Business"/>
      </form>
    );
  }
}

export default AddBusinessForm;
