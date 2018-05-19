import { merge } from 'lodash';

import { RECEIVE_GEOCODING } from '../actions/geocoding_actions';

const convertGeocoding = geocoding => {
  const formattedAddress = geocoding.formatted_address;
  const split = formattedAddress.split(',').map(component => component.trim());
  const address = split[0];
  const city = split[1];
  const state = split[2] ? split[2].split(' ')[0] : undefined;

  return {
    address,
    city,
    state,
    lat: geocoding.geometry.location.lat,
    lng: geocoding.geometry.location.lng
  };
}

const geocodingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GEOCODING:
      const converted = convertGeocoding(action.geocoding);
      return converted;

    default:
      return state;
  }
};

export default geocodingReducer;
