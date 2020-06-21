import React, { useEffect } from 'react';

import { Card, Container } from 'semantic-ui-react';

import MovieCard from '../MovieCard';
import PaginationPanel from '../../containers/PaginationPanel';
import LoadingIndicator from '../LoadingIndicator';

function MovieList({ movieList: { results }, activePage, isMoviesLoading, getMovies, getGenres, genresList: { genres } }) {

        useEffect(() => {

                getGenres();
                getMovies(activePage);

        }, [activePage])


        return (
                <Container>
                        {
                                isMoviesLoading ? <LoadingIndicator /> :
                                        <><Card.Group itemsPerRow={5}>
                                                {results.map(movie => <MovieCard key={movie.id} movie={movie} genres={genres} />)}
                                        </Card.Group>
                                                <PaginationPanel />
                                        </>
                        }
                </Container>
        )
}




export default MovieList;
