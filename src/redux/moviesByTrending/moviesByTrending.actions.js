import axios from "../baseAxios";

import { moviesRequestFailure } from "../moviesCommon/moviesCommon.actions";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const fetchMoviesByTrending = (apiCallType = "all", title = "Tendencias") => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/${apiCallType}/week?api_key=${API_KEY}`
      );
      return [{ title, movies: response.data.results }];
    } catch (error) {
      dispatch(moviesRequestFailure(error));
    }
  };
};

export default fetchMoviesByTrending;
