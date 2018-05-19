import React from 'react';

class AddBusinessMap extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    //const latitude = parseFloat(this.props.business.latitude);
    //const longitude = parseFloat(this.props.business.longitude);
    // set the map to show SF
    const latitude = 37.3318;
    const longitude = -122.0312;
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

    this.setState({ marker });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(this.state);
    console.log(this.map);
  }

  render () {
    return (
      <div className="add-business-google-map-container">
        <div className="add-business-google-map" ref={ map => this.mapNode = map }></div>
      </div>

    );
  }

}

export default AddBusinessMap;
