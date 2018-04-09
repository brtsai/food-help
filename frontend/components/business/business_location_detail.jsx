import React from 'react';

class BusinessLocationDetail extends React.Component {
  staticMapImageString() {
    return "https://maps.googleapis.com/maps/api/staticmap?scale=2&center=" + this.props.business.latitude + "," + this.props.business.longitude + "8&zoom=15&size=286x135&markers=color:red%7C%7C37.7809504,-122.4067438&key=AIzaSyBPzCpqLjnn8cBlaCMdz1v0mlRMtlnW4Ro"
  }

  render () {
    return (
      <section className="business-location-detail">
        <section className="business-static-map-image">
          <img src={this.staticMapImageString()}></img>
        </section>
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
      </section>
    );
  }
}

export default BusinessLocationDetail;
