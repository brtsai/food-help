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
    this.props.addBusiness(this.state).then(success => (this.props.history.push(`/biz/${Object.keys(success.business)[0]}`)));
  }

  update (type) {
    return e => {
      e.preventDefault();
      this.setState({
        [type]: e.target.value
      });
    };
  }

  render () {
    return (
      <form className="add-business-form">
        <label> Business Name
          <input type="string" onChange= { this.update('name') } placeholder="Mel's Diner" value={this.state.name} />
        </label>
        
        <label> Neighbourhood
          <input type="string" onChange= { this.update('neighbourhood') } placeholder="Soma" value={this.state.neighbourhood} />
        </label>
        
        <label> Address
          <input type="string" onChange= { this.update('address') } placeholder="123 Main Street" value={this.state.address} />
        </label>
        
        <label> City
          <input type="string" onChange= { this.update('city') } placeholder="San Francisco"/>
        </label>

        <label> State
          <input type="string" onChange= { this.update('state') } placeholder="CA"/>
        </label>

        <label> Latitude
          <input type="number" step="any" onChange= { this.update('latitude') } placeholder="37.3318"/>
        </label>

        <label> Longitude
          <input type="number" step="any" onChange= { this.update('longitude') } placeholder="-122.0312"/>
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

        <input type="submit" onClick= { this.submitForm } value="Add Business"/>
      </form>
    );
  }
}

export default AddBusinessForm;
