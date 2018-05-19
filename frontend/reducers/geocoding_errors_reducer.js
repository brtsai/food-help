import { merge } from 'lodash';

import { RECEIVE_GEOCODING_ERRORS } from '../actions/geocoding_actions';

const geocodingErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_GEOCODING_ERRORS:
      return action.errors;
    
    default:
      return [];
  }
};

export default geocodingErrorsReducer;
