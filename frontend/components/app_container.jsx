import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { routeChanged } from '../actions/app_actions';
import App from './app';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  routeChanged: () => dispatch(routeChanged())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
