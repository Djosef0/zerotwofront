import axios from "axios";
import { axiosInstance } from "../config";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
