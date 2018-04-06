import { combineReducers } from 'redux';
import businessReducer from './business_reducer';

export default combineReducers({
  businesses: businessReducer
});
