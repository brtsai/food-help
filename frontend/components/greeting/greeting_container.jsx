import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions'; 
import Greeting from './greeting';


const mapStateToProps = state => ({
  currentUser: Object.values(state.session)[0]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
