import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Business from './business';
import { fetchBusiness } from '../../actions/business_actions'


const mapStateToProps = (state, routingInfo) => {
  return {
    business: state.entities.businesses[routingInfo.match.params.businessId]
  };
};

const mapDispatchToProps = (dispatch, routingInfo) => ({
  fetchBusiness: () => dispatch(fetchBusiness(routingInfo.match.params.businessId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Business));
