import PaginationPanel from '../components/PaginationPanel';

import { connect } from 'react-redux';

import * as movieActions from '../actions/movies';


export default connect(null, movieActions)(PaginationPanel);