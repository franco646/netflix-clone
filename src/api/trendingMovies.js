import axios from "./baseAxios";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const fetchMoviesByTrending = async (
  apiCallType = "all",
  title = "Tendencias"
) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/${apiCallType}/week?api_key=${API_KEY}`
  );
  return [{ title, movies: response.data.results }];
};

export default fetchMoviesByTrending;
