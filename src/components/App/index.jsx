import React, { useContext } from 'react'
import HeaderBar from '../HeaderBar';

import { Container } from 'semantic-ui-react';

import MovieList from '../../containers/MovieList';

import './style.scss';

const themes = {
        light: {

                inverted: false,
                background: ''

        },
        dark: {
                inverted: true,
                background: false

        }
};

export const ThemeContext = React.createContext(themes.light);

function App() {

        const theme = useContext(ThemeContext);
        console.log(theme);


        return (
                <ThemeContext.Provider value={themes.dark}>
                        <div className={theme.background} >
                                <Container fluid >
                                        <HeaderBar />
                                        <MovieList />
                                </Container>
                        </div>
                </ThemeContext.Provider>

        )
}



export default App;
