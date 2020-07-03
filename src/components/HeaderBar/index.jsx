import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context';

import { Menu, Icon, Button } from 'semantic-ui-react';



export default function HeaderBar({ activeUser }) {
        const [activeItem, setActiveItem] = useState('Home');
        const handleItemClick = (name) => setActiveItem(name);

        const { toggle, dark } = useContext(ThemeContext);

        return (
                <Menu size='massive' stackable inverted={dark}>
                        <Menu.Item>
                                <Icon name='video camera' />Wander Movie
                        </Menu.Item>

                        <Menu.Item
                                name='Home'
                                active={activeItem === 'Home'}
                                onClick={() => handleItemClick('Home')}
                        >
                                <Link to='/'>Home</Link>
                        </Menu.Item>

                        <Menu.Item
                                name='Movies'
                                active={activeItem === 'Movies'}
                                onClick={() => handleItemClick('Movies')}
                        >
                                <Link to='/movielist'>MovieList</Link>
                        </Menu.Item>

                        <Menu.Item
                                name='Search'
                                active={activeItem === 'Search'}
                                onClick={() => handleItemClick('Search')}
                        >
                                <Link to='/search'>Search</Link>
                        </Menu.Item>
                        <Menu.Item
                                position='right'
                        >
                                <Button

                                        onClick={toggle}
                                        color={dark ? 'twitter' : 'google plus'}
                                >{dark ? 'Dark' : 'Light'}</Button>
                        </Menu.Item>
                        <Menu.Item
                                position='right'
                                name={activeUser.userName}
                                active={activeItem === 'User'}
                                onClick={() => handleItemClick('User')}
                        >

                        </Menu.Item>
                </Menu>
        )
}
