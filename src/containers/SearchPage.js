import SearchPage from '../pages/SearchPage';
import { connect } from 'react-redux';
import * as getMovieFromSearchActions from '../actions/getMovieFromSearch';
import * as getGenres from '../actions/getGenres';

const actions = { ...getMovieFromSearchActions, ...getGenres };

const mapStateToProps = ({ movies: { movieFromSearch }, genres: { genresList } }) => ({
        movieFromSearch,
        genresList

})

export default connect(mapStateToProps, actions)(SearchPage)