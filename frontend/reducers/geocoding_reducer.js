import { merge } from 'lodash';

import { RECEIVE_GEOCODING } from '../actions/geocoding_actions';

const convertGeocoding = geocoding => {
  console.log('attempting conversion');
  console.log(geocoding);
  const formattedAddress = geocoding.formatted_address;
  const split = formattedAddress.split(',').map(component => component.trim());
  console.log(split);
  const address = split[0];
  const city = split[1];

  return {
    address,
    city,
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
