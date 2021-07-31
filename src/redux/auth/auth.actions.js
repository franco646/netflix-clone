import { authActionsTypes } from "./auth.types";

export const loginUser = () => {
  localStorage.setItem("isAuthenticated", true);
  return {
    type: authActionsTypes.LOGIN_USER,
  };
};

export const logoutUser = () => ({
  type: authActionsTypes.LOGOUT_USER,
});

export const setProfile = (profile) => ({
  type: authActionsTypes.SET_PROFILE,
  payload: profile,
});
