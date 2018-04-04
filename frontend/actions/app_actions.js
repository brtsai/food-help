export const ROUTE_CHANGED = 'ROUTE_CHANGED';

export const registerRouteChanged = () => ({
  type: ROUTE_CHANGED
});

export const routeChanged = () => dispatch => (
  dispatch(registerRouteChanged())
);
