import MovieList from '../components/MovieList';

import { connect } from 'react-redux';
import * as getMovieActions from '../actions/getMovies';
import * as getGenresActions from '../actions/getGenres';
import * as movieActions from '../actions/movies';

const actions = { ...getMovieActions, ...getGenresActions, ...movieActions };

const mapStateToProps = ({ movies: { movieList, activePage, isMoviesLoading }, genres: { genresList } }) => ({
        movieList,
        activePage,
        genresList,
        isMoviesLoading
})

export default connect(mapStateToProps, actions)(MovieList);