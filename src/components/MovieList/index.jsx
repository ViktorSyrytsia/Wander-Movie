import React, { useEffect, useContext } from 'react';

import { ThemeContext } from '../../context';

import { Card } from 'semantic-ui-react';

import MovieCard from '../MovieCard';
import PaginationPanel from '../../containers/PaginationPanel';
import LoadingIndicator from '../LoadingIndicator';

import './style.scss';

function MovieList({ movieList: { results }, activePage, isMoviesLoading, getMovies, getGenres, genresList: { genres } }) {

        const { dark } = useContext(ThemeContext);

        useEffect(() => {

                getGenres();
                getMovies(activePage);

        }, [activePage])



        return (

                <div className={`list-container${dark ? '-dark' : ''}`}>
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
