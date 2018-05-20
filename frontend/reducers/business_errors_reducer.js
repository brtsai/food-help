import { RECEIVE_BUSINESS_ERRORS } from '../actions/business_actions';
import { RECEIVE_ROUTE_CHANGE } from '../actions/app_actions';
import { RECEIVE_GEOCODING_ERRORS } from '../actions/geocoding_actions';
import { merge } from 'lodash';

const convertLocationErrors = errors => {
  const newErrors = [];
  const locationErrors = {
    "Address can't be blank": true,
    "City can't be blank": true,
    "State can't be blank": true,
    "Latitude can't be blank": true,
    "Longitude can't be blank": true,
  };
  let locationErrorPresent = false;

  errors.forEach(error => {
    if (locationErrors[error]) {
      locationErrorPresent = true;
    } else {
      newErrors.push(error);
    }
  });
  
  if (locationErrorPresent) newErrors.push('Invalid Location');

  return newErrors;

};

const businessErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BUSINESS_ERRORS:
      console.log(action.errors);
      const sanitisedErrors = convertLocationErrors(action.errors);
      console.log(sanitisedErrors);
      return sanitisedErrors;
      
    case RECEIVE_GEOCODING_ERRORS:
      return ['Invalid Location'];

    case RECEIVE_ROUTE_CHANGE:
      return [];

    default:
      return state;
  }
};

export default businessErrorsReducer;
