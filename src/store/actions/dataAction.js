import axios from "axios";

export const editUser = formData => async dispatch => {
  try {
    const res = await axios.put(
      "https://museek.herokuapp.com/api/user/profile",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "EDIT_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "EDIT_FAIL",
      payload: error.response.data
    });
  }
};

export const getMusician = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://museek.herokuapp.com/api/user?role=musician"
    );

    console.log(res.data);
    dispatch({
      type: "GET_MUSICIAN",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getMusicianDetail = id => async dispatch => {
  try {
    const res = await axios.get(`https://museek.herokuapp.com/api/user/${id}`);
    console.log(res.data);
    dispatch({
      type: "GET_MUSICIAN_DETAIL",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getProfile = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://museek.herokuapp.com/api/user/profile"
    );
    dispatch({
      type: "GET_PROFILE",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getPrivacy = () => async dispatch => {
  try {
    const res = await axios.get(
      "https://museek.herokuapp.com/api/privacy-policy"
    );

    console.log(res.data);
    dispatch({
      type: "GET_PRIVACY",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getFav = () => async dispatch => {
  try {
    const res = await axios.get("https://museek.herokuapp.com/api/favorite");

    console.log(res.data);
    dispatch({
      type: "GET_FAV",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const addFav = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://museek.herokuapp.com/api/favorite",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "ADD_FAV_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "ADD_FAV_FAIL",
      payload: error.response.data
    });
  }
};

export const deleteFav = id => async dispatch => {
  try {
    const res = await axios.delete(
      `https://museek.herokuapp.com/api/favorite/${id}`
    );
    console.log(res.data);
    console.log(id);
    dispatch({
      type: "DELETE_FAV",
      payload: id
    });
  } catch (error) {
    console.log(error.response);
  }
};
