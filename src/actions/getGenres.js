export const getGenres = () => {

        return async (dispatch) => {
                return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=4f83e253b02062a1e9406693dde5c328`)
                        .then(response => response.json())
                        .then((res) => {
                                dispatch({
                                        type: 'GENRES_LOADED',
                                        payload: res
                                });
                        });
        }
}