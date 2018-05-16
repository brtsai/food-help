import { merge } from 'lodash';

import { RECEIVE_GEOCODING } from '../actions/geocoding_actions';

const convertGeocoding = geocoding => {
  console.log('attempting conversion');
  console.log(geocoding);
  const formattedAddress = geocoding.formatted_address;
  console.log(formattedAddress);
  const address = formattedAddress.split(',')[0];
  console.log(address);

  return {
    address,
    lat: geocoding.geometry.location.lat,
    lng: geocoding.geometry.location.lng
  };
}

const geocodingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GEOCODING:
      console.log('received geocoding');
      console.log(action.geocoding);
      const converted = convertGeocoding(action.geocoding);
      console.log(converted);
      return converted;

    default:
      return state;
  }
};

export default geocodingReducer;

