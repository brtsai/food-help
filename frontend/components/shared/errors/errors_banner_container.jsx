import { connect } from 'react-redux';

import ErrorsBanner from './errors_banner';
import { clearErrors } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.login
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

const mapStateToPropsWithError = errorType => {
  return state => ({
    errors: state.errors[errorType]
  });
}

const mapDispatchToPropsWithClearErrors = customClearErrors => {
  return dispatch => ({
    clearErrors: () => dispatch(customClearErrors())
  });
}

export const createErrorBannerContainer = (errorType, customClearErrors) => {
  return connect(mapStateToPropsWithError(errorType), mapDispatchToPropsWithClearErrors(customClearErrors))(ErrorsBanner);
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsBanner);
