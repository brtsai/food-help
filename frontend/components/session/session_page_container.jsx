import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions'; 

import SessionPage from './session_page';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
