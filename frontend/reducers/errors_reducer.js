import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import businessErrorsReducer from './business_errors_reducer';
import searchErrorsReducer from './search_errors_reducer';

export default combineReducers({ 
  login: sessionErrorsReducer,
  business: businessErrorsReducer,
  search: searchErrorsReducer
});
