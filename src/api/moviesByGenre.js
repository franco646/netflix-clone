import axios from "./baseAxios";

const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

const fetchMoviesGenres = async () => {
  const response = await axios.get(
    `genre/movie/list?api_key=${API_KEY}&language=es-MX`
  );
  return response.data.genres;
};

const fetchMoviesByGenre = async () => {
  const genres = await fetchMoviesGenres();
  const moviesByGenres = [];
  genres.forEach((genre) => {
    moviesByGenres.push(
      axios
        .get(
          `discover/movie?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}&with_watch_monetization_types=flatrate`
        )
        .then((response) => ({
          title: genre.name,
          genre: genre,
          movies: [...response.data.results],
        }))
    );
  });

  return await Promise.all(moviesByGenres);
};

export default fetchMoviesByGenre;
