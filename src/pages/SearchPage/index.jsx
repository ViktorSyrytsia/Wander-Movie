import React, { useState, useEffect } from 'react';
import { Card, Container } from 'semantic-ui-react';
import MovieCard from '../../components/MovieCard';

import './style.scss';

const SearchPage = ({ movieFromSearch = [], getMovieFromSearch, getGenres, genresList: { genres } }) => {
        useEffect(() => {
                getGenres();
                getMovieFromSearch(query)
        }, [])

        const [query, setQuery] = useState('');

        return (
                <div>
                        <div className='search-container'>
                                <h2 className='search-title'>SEARCH</h2>
                                <input className='search-input' value={query} type='text' placeholder={query} onChange={(e) => { setQuery(e.target.value) }} ></input>
                                <button className='search-button' onClick={() => getMovieFromSearch(query)}>Find movie</button>
                        </div>

                        <Container><Card.Group itemsPerRow={5}>
                                {movieFromSearch.results && movieFromSearch.results.map(movie => <MovieCard key={movie.id} movie={movie} genres={genres} />)}
                        </Card.Group>
                        </Container>
                </div>
        )
}

export default SearchPage
