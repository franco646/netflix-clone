import {
  MOVIES_REQUEST,
  MOVIES_REQUEST_SUCCESS,
  MOVIES_REQUEST_FAILURE,
} from "./moviesCommon.types";

import {
  fetchMoviesByGenre,
  fetchMoviesByTrending,
  fetchNetflixOriginalSeries,
} from "../../api";

export const moviesRequest = () => ({
  type: MOVIES_REQUEST,
});

export const moviesRequestSuccess = (movies) => {
  return {
    type: MOVIES_REQUEST_SUCCESS,
    payload: movies,
  };
};

export const moviesRequestFailure = (error) => {
  return {
    type: MOVIES_REQUEST_FAILURE,
    payload: {
      errorMsg: error.message,
    },
  };
};

export const fetchHomeMovies = () => {
  return async (dispatch) => {
    try {
      dispatch(moviesRequest());
      const trendingSeries = await fetchMoviesByTrending("tv", "Series");
      const netflixOriginals = await fetchNetflixOriginalSeries();
      const trendingMovies = await fetchMoviesByTrending();
      const moviesByGenre = await fetchMoviesByGenre();
      dispatch(
        moviesRequestSuccess([
          ...netflixOriginals,
          ...trendingSeries,
          ...trendingMovies,
          ...moviesByGenre,
        ])
      );
    } catch (error) {
      dispatch(moviesRequestFailure(error));
    }
  };
};
