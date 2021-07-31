import axios from "../baseAxios";

import {
  moviesRequest,
  moviesRequestSuccess,
  moviesRequestFailure,
} from "../moviesCommon/moviesCommon.actions";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const fetchMoviesGenres = async (dispatch) => {
  try {
    const response = await axios.get(
      `genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    return response.data.genres;
  } catch (error) {
    dispatch(moviesRequestFailure(error));
  }
};

export const fetchMoviesByGenre = () => {
  return async (dispatch) => {
    try {
      const genres = await fetchMoviesGenres(dispatch);
      const moviesByGenres = [];
      /**
       * const hola = await axios.get(
          `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=37&with_watch_monetization_types=flatrate`
        );
        console.log('HOLA', hola)
       */
      genres.forEach((genre) => {
        moviesByGenres.push(
          axios
            .get(
              `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}&with_watch_monetization_types=flatrate`
            )
            .then((response) => ({
              title: genre.name,
              genre: genre,
              movies: [...response.data.results],
            }))
        );
      });

      return await Promise.all(moviesByGenres);
    } catch (error) {
      dispatch(moviesRequestFailure(error));
    }
  };
};
