export const RECEIVE_ROUTE_CHANGE = 'RECEIVE_ROUTE_CHANGED';

export const receiveRouteChange = () => ({
  type: RECEIVE_ROUTE_CHANGE
});

export const routeChanged = () => dispatch => (
  dispatch(receiveRouteChange())
);
