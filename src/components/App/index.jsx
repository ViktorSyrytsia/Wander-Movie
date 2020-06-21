import React, { useContext } from 'react'
import HeaderBar from '../HeaderBar';

import { Container } from 'semantic-ui-react';

import MovieList from '../../containers/MovieList';

import './style.scss';

const themes = {
        light: {
                inverted: false,
        },
        dark: {
                inverted: true,
        }
};

export const ThemeContext = React.createContext(themes.light);

function App() {

        return (
                <ThemeContext.Provider value={themes.dark}>
                        <div >
                                <Container fluid >
                                        <HeaderBar />
                                        <MovieList />
                                </Container>
                        </div>
                </ThemeContext.Provider>

        )
}



export default App;
