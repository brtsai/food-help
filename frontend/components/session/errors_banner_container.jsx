import { connect } from 'react-redux';

import ErrorsBanner from './errors_banner';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.login
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsBanner);
