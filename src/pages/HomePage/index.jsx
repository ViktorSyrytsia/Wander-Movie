import React from 'react';

import { Link } from 'react-router-dom';

import { Icon } from 'semantic-ui-react';

import './style.scss';

const HomePage = () => {
        return (
                <div className='home-page'>
                        <div className='home-page-title'>Welcome to Wander Movie</div>
                        <div className='home-page-container'>
                                <Link to='/movielist'><div className='home-page-movies'> <Icon name='film' size='massive' /><div>Movie</div></div></Link>
                                <Link to='/search'><div className='home-page-search'> <Icon name='search' size='massive' /><div>Search</div></div></Link>
                                <div className='home-page-categorys'> <Icon name='list alternate outline' size='massive' /><div>Category</div></div>
                                <div className='home-page-user'> <Icon name='user circle outline' size='massive' /><div>User</div></div>
                        </div>
                </div>
        )
}

export default HomePage
