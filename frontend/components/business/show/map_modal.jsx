import React from 'react';

class MapModal extends React.Component {
  componentDidMount() {
    const latitude = parseFloat(this.props.business.latitude);
    const longitude = parseFloat(this.props.business.longitude);
    // set the map to show SF
    const mapOptions = {
      center: { lat: latitude, lng: longitude }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map
    });
  }

  render () {
    return (
      <div className="map-modal-container">
        <div className="google-map-container">
          <button className="map-modal-close-button" onClick={ this.props.close} >Close<div className="map-modal-close-symbol">×</div></button>
          <div className="google-map" ref={ map => this.mapNode = map }></div>
        </div>
        <button onClick={ this.props.close} ><div className="map-modal-shader"></div></button>
      </div>
    );
  }
}

export default MapModal;
