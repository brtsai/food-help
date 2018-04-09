import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Business from './business';


const mapStateToProps = (state, routingInfo) => ({

});

const mapDispatchToProps = (dispatch, routingInfo) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Business));
