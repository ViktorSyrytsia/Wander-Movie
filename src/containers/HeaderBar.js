import HeaderBar from '../components/HeaderBar';
import { connect } from 'react-redux';

const mapStateToProps = ({ users: { activeUser } }) => ({
        activeUser

})

export default connect(mapStateToProps)(HeaderBar)