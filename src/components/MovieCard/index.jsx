import React, { useContext } from 'react'
import { Card, Popup, Image, Rating, Button } from 'semantic-ui-react'

import { ThemeContext } from '../../context';

import './style.scss';

export default function MovieCard({ movie, genres = [] }) {

        const defaultRating = Math.floor(movie.vote_average);

        const { genre_ids } = movie;

        const genreBadges = genres && genres.filter(genre => genre_ids.find(id => genre.id === id));

        const { dark } = useContext(ThemeContext);

        return (
                <Card className={dark ? 'card-dark' : ''} >
                        <Popup content={movie.overview} trigger={<Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} wrapped ui={false} />} />

                        <Card.Content>
                                <Card.Header>{movie.original_title}</Card.Header>
                                <Card.Meta>
                                        <span className='date'>{movie.release_date}</span>
                                </Card.Meta>
                                <Card.Description>
                                        {genreBadges.map(genre => (
                                                <Button

                                                        size='mini'
                                                        compact
                                                        basic
                                                        color={dark ? 'black' : 'red'}
                                                        key={genre.id}>{genre.name}</Button>))}
                                </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                                <Rating icon='star' defaultRating={defaultRating} maxRating={10} />
                        </Card.Content>
                </Card>
        )

}
