import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../context';
import { Button } from 'semantic-ui-react';

import { withRouter } from 'react-router';

import './style.scss';

function MoviePageComponent({ match: { params: { id } }, movieFromId, getMovieFromId, movieFromId: { vote_average } }) {

        const { dark } = useContext(ThemeContext);


        useEffect(() => {
                getMovieFromId(id);
        }, []);

        const { adult, title, release_date, genres, original_language, original_title, overview, poster_path } = movieFromId;

        return (
                <div className='movie-container'>
                        <div className='movieCard'>
                                <div className='movieCard-header'>{title}</div>
                                <div className='movieCard-content'>
                                        <div className='movieCard-content-image'>
                                                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='poster'></img>
                                        </div>
                                        <div className='movieCard-content-info'>
                                                <div className='movieCard-content-info-originalTitle'>Original title: <span className='original-title'>{original_title}</span></div>
                                                <div className='movieCard-content-info-releaseDate'>Release date: {release_date}</div>
                                                <div className='movieCard-content-info-adultsSector'>{adult ? '18+' : ''}</div>
                                                <div className='movieCard-content-info-genres'>
                                                        {genres && genres.map(genre => (
                                                                <Button
                                                                        size='medium'
                                                                        compact
                                                                        basic
                                                                        color={dark ? 'black' : 'red'}
                                                                        key={genre.id}>{genre.name}</Button>))}
                                                </div>
                                                <div className='movieCard-content-info-language'>Original language: <span className='original-language'>{original_language}</span> </div>
                                                <div className='movieCard-content-info-overview'>{overview}</div>
                                                <div className='movieCard-content-info-rating'>Rating:  <Button circular size='medium' color='yellow'>{vote_average}</Button></div>
                                                <div className='movieCard-buttons'>
                                                        <Button.Group fluid>
                                                                <Button color='twitter'>Leave a comment</Button>
                                                                <Button color='green'>Watch trailer</Button>
                                                                <Button color='google plus'>Add to MyWanderList</Button>
                                                        </Button.Group>
                                                </div>

                                        </div>
                                </div>

                        </div>
                </div >
        )
}

export const MoviePage = withRouter(MoviePageComponent)
