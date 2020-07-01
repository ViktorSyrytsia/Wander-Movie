import SignUpModalPage from '../pages/LoginPage/SignUpModalPage';
import { connect } from 'react-redux';
import * as userActions from '../actions/users';

const mapStateToProps = ({ users: { currentUser } }) => ({
        currentUser

})

export default connect(mapStateToProps, userActions)(SignUpModalPage);