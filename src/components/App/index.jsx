import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderBar from '../HeaderBar';
import MovieList from '../../containers/MovieList';
import HomePage from '../../pages/HomePage';

import { ThemeProvider } from '../../context';

import './style.scss';



const App = () => {
        return (

                <Switch>
                        <ThemeProvider>
                                <HeaderBar />
                                <Route exact path="/">
                                        <HomePage />
                                </Route>
                                <Route exact path="/movielist">
                                        <MovieList />
                                </Route>
                        </ThemeProvider>
                </Switch >


        )
}

export default App;
