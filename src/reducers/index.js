import movies from './movies';
import genres from './genres';
import users from './users';

import { combineReducers } from 'redux';

export default combineReducers({
        movies,
        genres,
        users
})