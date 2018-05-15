import { merge } from 'lodash';

import { RECEIVE_GEOCODING, RECEIVE_GEOCODING_ERRORS } from '../actions/business_actions';

const geocodingReducer = (state = {}, action) => {
  console.log('geocoding reducer hit');
  return state;
};

export default geocodingReducer;

