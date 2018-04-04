import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});
