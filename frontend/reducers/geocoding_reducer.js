import { merge } from 'lodash';

import { RECEIVE_GEOCODING } from '../actions/business_actions';

const geocodingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_GEOCODING:
      console.log('received geocoding');
      console.log(action.geocoding);
      return state;

    default:
      return state;
  }
};

export default geocodingReducer;

