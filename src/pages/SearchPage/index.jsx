import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import MovieCard from '../../components/MovieCard';

const SearchPage = ({ movieFromSearch, getMovieFromSearch }) => {

        console.log(movieFromSearch.results);
        console.log(getMovieFromSearch);

        const [query, setQuery] = useState('');
        console.log(query);


        return (
                <div>
                        <h2>SEARCH</h2>
                        <input value={query} type='text' placeholder='enter movie name' onChange={(e) => { setQuery(e.target.value) }} ></input>
                        <button onClick={() => getMovieFromSearch(query)}>Find movie</button>
                        <><Card.Group itemsPerRow={5}>
                                {movieFromSearch.results && movieFromSearch.results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
                        </Card.Group>
                        </>
                </div>
        )
}

export default SearchPage
