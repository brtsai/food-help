import { connect } from 'react-redux';

import { routeChanged } from '../../actions/session_actions';
import ErrorsBanner from './errors_banner';

const mapStateToProps = state => ({
  errors: state.errors.login
});

const mapDispatchToProps = dispatch => ({
  routeChanged: () => dispatch(routeChanged())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsBanner);
