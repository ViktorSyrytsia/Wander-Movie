const initialState = {
        movieList: [],
        isMoviesLoading: true,
        activePage: 1
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'MOVIES_LOADED':

                        return {
                                ...state,
                                movieList: action.payload,
                                isMoviesLoading: false
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