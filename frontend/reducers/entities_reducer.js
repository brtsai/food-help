import { combineReducers } from 'redux';

import businessReducer from './business_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  businesses: businessReducer,
  searchResults: searchReducer
});
