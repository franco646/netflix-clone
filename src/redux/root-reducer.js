import { combineReducers } from "redux";

import auth from "./auth/auth.reducer";
import movies from "./moviesCommon/moviesCommon.reducer";

export default combineReducers({ auth, movies });
