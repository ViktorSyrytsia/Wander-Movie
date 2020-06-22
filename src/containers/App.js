import App from '../components/App/index';
import { connect } from 'react-redux';

const mapStateToProps = ({ theme }) => ({
        theme
})

export default connect(mapStateToProps)(App); 