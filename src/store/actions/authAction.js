import axios from "axios";

export const register = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://museek.herokuapp.com/api/user/register",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log("error", error.response.data);
    dispatch({
      type: "REGISTER_FAIL",
      payload: error.response.data
    });
  }
};

export const login = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://museek.herokuapp.com/api/user/login",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "REGISTER_FAIL",
      payload: error.response.data
    });
  }
};

export function logout() {
  localStorage.clear();
  return {
    type: "UNAUTHENTICATED"
  };
}
