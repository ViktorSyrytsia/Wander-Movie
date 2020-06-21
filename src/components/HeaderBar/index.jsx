import React, { useState, useContext } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import { ThemeContext } from '../App'

export default function HeaderBar() {
        const [activeItem, setActiveItem] = useState('Home');

        const handleItemClick = (name) => setActiveItem(name);

        const theme = useContext(ThemeContext);

        return (
                <Menu size='massive' stackable inverted={theme.inverted}>
                        <Menu.Item>
                                <Icon name='video camera' />Wander Movie
                        </Menu.Item>

                        <Menu.Item
                                name='Home'
                                active={activeItem === 'Home'}
                                onClick={() => handleItemClick('Home')}
                        >
                                Home
</Menu.Item>

                        <Menu.Item
                                name='Movies'
                                active={activeItem === 'Movies'}
                                onClick={() => handleItemClick('Movies')}
                        >
                                Movies
</Menu.Item>

                        <Menu.Item
                                name='Category'
                                active={activeItem === 'Category'}
                                onClick={() => handleItemClick('Category')}
                        >
                                Category
</Menu.Item>
                        <Menu.Item
                                position='right'
                                name='User'
                                active={activeItem === 'User'}
                                onClick={() => handleItemClick('User')}
                        >
                                User
</Menu.Item>
                </Menu>
        )
}
