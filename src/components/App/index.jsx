import React from 'react';

import HeaderBar from '../HeaderBar';
import MovieList from '../../containers/MovieList';

import { ThemeProvider } from '../../context';

import './style.scss';



const App = () => {
        return (
                <ThemeProvider>
                        <HeaderBar />
                        <MovieList />
                </ThemeProvider>
        )
}

export default App;
