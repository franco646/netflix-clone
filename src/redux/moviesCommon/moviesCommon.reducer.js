import {
  MOVIES_REQUEST,
  MOVIES_REQUEST_SUCCESS,
  MOVIES_REQUEST_FAILURE,
} from "./moviesCommon.types";

const initialState = {
  status: "idle",
  error: null,
  movies: [],
};

const moviesByGenreReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_REQUEST: {
      return {
        ...state,
        status: "loading",
      };
    }
    case MOVIES_REQUEST_SUCCESS: {
      return {
        ...state,
        status: "succeeded",
        movies: [...state.movies, action.payload],
      };
    }
    case MOVIES_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.payload.errorMsg,
        status: "failed",
      };
    }
    default: {
      return state;
    }
  }
};

export default moviesByGenreReducer;
