const initialState = {
        genresList: [],
        isGenresLoading: true
}

export default (state = initialState, action) => {
        switch (action.type) {
                case 'GENRES_LOADED':

                        return {
                                ...state,
                                genresList: action.payload,
                                isGenresLoading: false
                        }

                default:
                        return state
        }
}