import * as BusinessAPIUtil from '../util/business_api_util';
import * as GeocodeAPIUtil from '../util/geocoding_api_util';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS_ERRORS = 'RECEIVE_BUSINESS_ERRORS';
export const RECEIVE_GEOCODING = 'RECEIVE_GEOCODING';
export const RECEIVE_GEOCODING_ERRORS = 'RECEIVE_GEOCODING_ERRORS';

export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveBusinessErrors = errors => ({
  type: RECEIVE_BUSINESS_ERRORS,
  errors
});

export const receiveGeocoding = geocoding => ({
  type: RECEIVE_GEOCODING,
  geocoding
});

export const receiveGeocodingErrors = errors => ({
  type: RECEIVE_GEOCODING_ERRORS,
  errors
});

export const fetchBusiness = businessId => dispatch => (
  BusinessAPIUtil.fetchBusiness(businessId).then(
    business => (dispatch(receiveBusiness(business))),
    errors => (dispatch(receiveBusinessErrors(Object.values(errors.responseJSON))))
  )
);

export const fetchBusinesses = () => dispatch => (
  BusinessAPIUtil.fetchBusinesses().then(
    businesses => (dispatch(receiveBusinesses(businesses))),
    errors => (dispatch(receiveBusinessErrors(Object.values(errors.responseJSON))))
  )
);

export const addBusiness = business => dispatch => (
  BusinessAPIUtil.addBusiness(business).then(
    business => (dispatch(receiveBusiness(business))),
    errors => (dispatch(receiveBusinessErrors(Object.values(errors.responseJSON))))
  )
);

export const clearErrors = () => dispatch => (
  dispatch(receiveBusinessErrors([]))
);

export const geocodeLocation = businessLocation => dispatch => (
  GeocodeAPIUtil.geocode(businessLocation).then(
    geocoding => (dispatch(receiveGeocoding(geocoding.results[0]))),
    errors => dispatch(receiveGeocodingErrors(Object.values(errors.responseJSON)))
  )
);
