export const getMovieFromId = (id) => {

        return async (dispatch) => {
                return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f83e253b02062a1e9406693dde5c328`)
                        .then(response => response.json())
                        .then((res) => {
                                dispatch({
                                        type: 'MOVIE_FROM_ID_LOADED',
                                        payload: res
                                });

                        });
        }
}