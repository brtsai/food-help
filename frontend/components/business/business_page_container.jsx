import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BusinessPage from './business_page';
import { fetchBusiness } from '../../actions/business_actions'

const mapStateToProps = (state, routingInfo) => ({
  business: state.entities.businesses[routingInfo.match.params.businessId]
});

const mapDispatchToProps = (dispatch, routingInfo) => ({
  fetchBusiness: () => dispatch(fetchBusiness(routingInfo.match.params.businessId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessPage));
