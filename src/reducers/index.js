import movies from './movies';
import genres from './genres';

import { combineReducers } from 'redux';

export default combineReducers({
        movies,
        genres
})