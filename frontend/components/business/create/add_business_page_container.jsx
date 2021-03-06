import { connect } from 'react-redux';

import AddBusinessPage from './add_business_page';
import { addBusiness } from '../../../actions/business_actions'

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  addBusiness: business => dispatch(addBusiness(business))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBusinessPage);
