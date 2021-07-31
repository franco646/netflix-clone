import axios from "./baseAxios";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const fetchNetflixOriginalSeries = async (title = "Solo en Netflix") => {
  const response = await axios.get(
    `discover/tv?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
  );
  const series = response.data.results;
  console.log(series);
  return [{ title, movies: series }];
};

export default fetchNetflixOriginalSeries;
