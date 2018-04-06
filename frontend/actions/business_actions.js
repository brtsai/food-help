import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS_ERRORS = 'RECEIVE_BUSINESS_ERRORS';

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

export const fetchBusiness = businessId => dispatch => (
  BusinessAPIUtil.fetchBusiness.then(
    business => (dispatch(receiveBusiness(business))),
    errors => (dispatch(receiveBusinessErrors(Object.values(errors.responseJSON))))
  )
);

export const fetchBusinesses = () => dispatch => (
  BusinessAPIUtil.fetchBusinesses.then(
    businesses => (dispatch(receiveBusinesses(businesses)))
  )
);
