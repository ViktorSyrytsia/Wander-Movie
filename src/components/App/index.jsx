import React from 'react';

import HeaderBar from '../../containers/HeaderBar';
import MovieList from '../../containers/MovieList';

import { ThemeContext } from './ThemeContext';

import './style.scss';

function App({ theme }) {



        return (
                <ThemeContext.Provider value={theme}>
                        < >
                                <HeaderBar />
                                <MovieList />
                        </>
                </ThemeContext.Provider>

        )
}



export default App;
