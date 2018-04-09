import { connect } from 'react-redux';
import { addBusiness } from '../../../actions/business_actions'

import AddBusinessPage from './add_business_page';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  addBusiness: business => dispatch(addBusiness(business))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBusinessPage);
