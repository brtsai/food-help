import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions'; 

import SessionPage from './session_page';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionPage);
