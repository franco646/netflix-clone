import { authActionsTypes } from "./auth.types";
import {
  profilePictureOne,
  profilePictureTwo,
  profilePictureThree,
} from "../../assets";

const initialState = {
  isAuthenticated: false,
  profiles: null,
  selectedProfile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionsTypes.LOGIN_USER: {
      return {
        ...state,
        isAuthenticated: true,
        profiles: [
          {
            name: "franco",
            image: profilePictureOne,
          },
          {
            name: "segundo",
            image: profilePictureTwo,
          },
          {
            name: "tercero",
            image: profilePictureThree,
          },
        ],
      };
    }
    case authActionsTypes.LOGOUT_USER: {
      return {
        ...state,
        isAuthenticated: false,
        profiles: null,
        selectedProfile: null,
      };
    }
    case authActionsTypes.SET_PROFILE: {
      return {
        ...state,
        selectedProfile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
