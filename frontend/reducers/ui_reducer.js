import { combineReducers } from 'redux';

import geocodingReducer from './geocoding_reducer';

export default combineReducers ({
  geocoding: geocodingReducer
});
