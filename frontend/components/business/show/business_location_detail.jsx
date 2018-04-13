import React from 'react';

import MapModal from './map_modal';

class BusinessLocationDetail extends React.Component {
  constructor (props) {
    super(props);

    this.state = ({
      renderingModal: false
    });

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  staticMapImageString() {
    return "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=" + this.props.business.latitude + "," + this.props.business.longitude + "&zoom=16&size=286x135&markers=color:red%7C%7C" + this.props.business.latitude + "," + this.props.business.longitude + "&key=AIzaSyBPzCpqLjnn8cBlaCMdz1v0mlRMtlnW4Ro"
  }
  
  showModal (e) {
    e.preventDefault();
    this.setState({
      renderingModal: true
    });
  }

  hideModal (e) {
    e.preventDefault();
    this.setState({
      renderingModal: false
    });
  }

  render () {
    return (
      <section className="business-location-detail">
        <button onClick={ this.showModal } >
          <section className="business-static-map-image">
            <img src={this.staticMapImageString()}></img>
          </section>
        </button>
        <section className="business-location-info">
          <ul>
            <li>
              <i className="fa fa-map-marker"></i>
              <address>
                { this.props.business.address } <br />
                { this.props.business.city }, { this.props.business.state}
              </address>
            </li>
          </ul>
        </section>
        {
          this.state.renderingModal ? <MapModal business={ this.props.business } close={ this.hideModal } /> : ""
        }
      </section>
    );
  }
}

export default BusinessLocationDetail;
