import { merge } from 'lodash';

import { RECEIVE_GEOCODING } from '../actions/geocoding_actions';

const convertGeocoding = geocoding => {
  console.log('attempting conversion');
  console.log(geocoding);

  return {

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

