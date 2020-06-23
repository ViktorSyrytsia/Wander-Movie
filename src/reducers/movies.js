const initialState = {
        movieList: [],
        isMoviesLoading: true,
        activePage: 1,
        movieFromId: {}
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'MOVIES_LOADED':

                        return {
                                ...state,
                                movieList: action.payload,
                                isMoviesLoading: false
                        }

                case 'MOVIE_FROM_ID_LOADED':
                        return {
                                ...state,
                                isMoviesLoading: false,
                                movieFromId: action.payload
                        }

                case 'ACTIVE_PAGE_CHANGE':
                        return {
                                ...state,
                                activePage: action.payload
                        }

                default:
                        return state
        }
}