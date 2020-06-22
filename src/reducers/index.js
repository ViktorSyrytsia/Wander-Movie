import movies from './movies';
import genres from './genres';
import theme from './theme';

import { combineReducers } from 'redux';

export default combineReducers({
        movies,
        genres,
        theme
})