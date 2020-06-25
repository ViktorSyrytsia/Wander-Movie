export const getMovieFromSearch = (query) => {

        return async (dispatch) => {
                return fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f83e253b02062a1e9406693dde5c328&query=${query}`)
                        .then(response => response.json())
                        .then((res) => {
                                dispatch({
                                        type: 'MOVIE_FROM_SEARCH_LOADED',
                                        payload: res
                                });

                        });
        }
}