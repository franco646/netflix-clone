import axios from "../baseAxios";

import {
  moviesRequest,
  moviesRequestSuccess,
  moviesRequestFailure,
} from "../moviesCommon/moviesCommon.actions";

import { fetchMoviesByGenre } from "../moviesByGenre/moviesByGenre.actions";
import fetchMoviesByTrending from "../moviesByTrending/moviesByTrending.actions";

const fetchHomeMovies = (dispatch) => {
  try {
    dispatch(moviesRequest());
    const moviesByGenre = fetchMoviesByGenre();
    const trendingMovies = fetchMoviesByTrending();
    console.log(moviesByGenre, trendingMovies);
  } catch (error) {
    dispatch(moviesRequestFailure(error));
  }
};

export default fetchHomeMovies;
