import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signup, login } from '../../actions/session_actions'; 

import SessionPage from './session_page';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(login({ username: 'guest', password: 'password' }))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionPage));
