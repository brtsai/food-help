import { connect } from 'react-redux'

import AddBusinessMap from './add_business_map.jsx';

const mapStateToProps = state => ({
  lat: state.ui.geocoding.lat,
  lng: state.ui.geocoding.lng
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddBusinessMap);
