import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderBar from '../../containers/HeaderBar';
import MovieList from '../../containers/MovieList';
import HomePage from '../../pages/HomePage';
import MoviePage from '../../containers/MoviePage';
import SearchPage from '../../containers/SearchPage';
import LoginPage from '../../pages/LoginPage';

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
                                <Route exact path="/search">
                                        <SearchPage />
                                </Route>
                                <Route exact path="/loginpage">
                                        <LoginPage />
                                </Route>
                                <Route path="/movielist/:id"
                                        render={(routerProps) => {
                                                return (<MoviePage {...routerProps} />)
                                        }} >
                                </Route>
                        </ThemeProvider>
                </Switch >


        )
}

export default App;
