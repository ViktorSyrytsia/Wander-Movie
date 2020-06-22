import React, { useEffect, useContext } from 'react';

import { ThemeContext } from '../App/ThemeContext';

import { Card } from 'semantic-ui-react';

import MovieCard from '../MovieCard';
import PaginationPanel from '../../containers/PaginationPanel';
import LoadingIndicator from '../LoadingIndicator';

import './style.scss';

function MovieList({ movieList: { results }, activePage, isMoviesLoading, getMovies, getGenres, genresList: { genres } }) {



        useEffect(() => {

                getGenres();
                getMovies(activePage);

        }, [activePage])

        const theme = useContext(ThemeContext);

        return (

                <div className={`list-container${theme.inverted ? '-dark' : ''}`}>
                        {
                                isMoviesLoading ? <LoadingIndicator /> :
                                        <><Card.Group itemsPerRow={5}>
                                                {results.map(movie => <MovieCard key={movie.id} movie={movie} genres={genres} />)}
                                        </Card.Group>
                                                <PaginationPanel />
                                        </>
                        }
                </div>


        )
}




export default MovieList;
