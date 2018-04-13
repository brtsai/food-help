import React from 'react';

class MapModal extends React.Component {
  componentDidMount() {
    console.log(this.props.business);
    const latitude = parseFloat(this.props.business.latitude);
    const longitude = parseFloat(this.props.business.longitude);
    // set the map to show SF
    const mapOptions = {
      center: { lat: latitude, lng: longitude }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render () {
    return (
      <div>
        Map Modal!
        <div className="google-map" ref={ map => this.mapNode = map }></div>
      </div>
    );
  }
}

export default MapModal;
