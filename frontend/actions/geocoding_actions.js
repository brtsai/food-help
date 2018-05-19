import * as GeocodeAPIUtil from '../util/geocoding_api_util';

export const RECEIVE_GEOCODING = 'RECEIVE_GEOCODING';
export const RECEIVE_GEOCODING_ERRORS = 'RECEIVE_GEOCODING_ERRORS';

export const receiveGeocoding = geocoding => ({
  type: RECEIVE_GEOCODING,
  geocoding
});

export const receiveGeocodingErrors = errors => ({
  type: RECEIVE_GEOCODING_ERRORS,
  errors
});

export const geocodeLocation = businessLocation => dispatch => (
  GeocodeAPIUtil.geocode(businessLocation).then(
    geocoding => dispatch(receiveGeocoding(geocoding.results[0])),
    errors => dispatch(receiveGeocodingErrors(Object.values(errors.responseJSON)))
  )
);
