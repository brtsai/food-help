import { connect } from 'react-redux';

import HomePage from './homepage'

const mapStateToProps = state => ({
  currentUser: Object.values(state.session)[0]
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
