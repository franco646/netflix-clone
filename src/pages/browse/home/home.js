import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchHomeMovies } from "../../../redux/moviesCommon/moviesCommon.actions";

import MoviesCarousel from "../../../components/moviesCarousel/moviesCarousel";

const Home = (props) => {
  const { fetchMovies, movies, status, error } = props;

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return error ? (
    <div style={{ color: "white" }}>Hay error {error}</div>
  ) : status === "loading" ? (
    <div style={{ color: "white" }}>CARGANDO...</div>
  ) : status === "succeeded" ? (
    movies[0].map((movie) => (
      <MoviesCarousel movies={movie.movies} title={movie.title} />
    ))
  ) : (
    <div style={{ color: "white" }}>No hay peliculas</div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  status: state.movies.status,
  error: state.movies.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchHomeMovies());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
