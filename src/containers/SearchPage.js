import SearchPage from '../pages/SearchPage';
import { connect } from 'react-redux';
import * as getMovieFromSearchActions from '../actions/getMovieFromSearch';

const mapStateToProps = ({ movies: { movieFromSearch } }) => ({
        movieFromSearch
})

export default connect(mapStateToProps, getMovieFromSearchActions)(SearchPage)