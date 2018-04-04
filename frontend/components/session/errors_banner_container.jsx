import { connect } from 'react-redux';
import ErrorsBanner from './errors_banner';
const mapStateToProps = state => ({
  errors: state.errors.login
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsBanner);
