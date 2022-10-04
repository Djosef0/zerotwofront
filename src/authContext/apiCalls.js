import axios from "axios";
import { axiosInstance } from "../config";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  const Url = "https://projet.adaptable.app/api/"
  dispatch(loginStart());
  try {
    const res = await axios.post(Url+"auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
