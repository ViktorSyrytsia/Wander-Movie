export const getMovies = (page) => {

        return async (dispatch) => {
                return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4f83e253b02062a1e9406693dde5c328&page=${page}`)
                        .then(response => response.json())
                        .then((res) => {
                                dispatch({
                                        type: 'MOVIES_LOADED',
                                        payload: res
                                });

                        });
        }
}