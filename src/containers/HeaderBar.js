import HeaderBar from '../components/HeaderBar';
import { connect } from 'react-redux';
import * as themeActions from '../actions/theme';



export default connect(null, themeActions)(HeaderBar); 