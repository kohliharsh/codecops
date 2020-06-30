import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./constants";

//Register User
export const register = ({ name, email, password, password2 }) => async (
  dispatch
) => {
  const body = { name, email, password, password2 };
  try {
    const res = await axios.post("/api/user/register", body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
  dispatch({
    type: REGISTER_FAILURE,
  });
};

//Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await axios.post("/api/user/login", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.log(errors);
    }

    dispatch({
      type: LOGIN_FAILURE,
    });
  }
};
