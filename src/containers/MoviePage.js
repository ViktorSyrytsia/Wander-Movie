import { MoviePage } from '../components/MoviePage';
import { connect } from 'react-redux';
import * as getMoviesFromIdActions from '../actions/getMovieFromId'
import * as getGenresActions from '../actions/getGenres';

const actions = { ...getMoviesFromIdActions, ...getGenresActions };

const mapStateToProps = ({ movies: { movieFromId }, genres: { genresList } }) => ({
        movieFromId,
        genresList
})

export default connect(mapStateToProps, actions)(MoviePage);
