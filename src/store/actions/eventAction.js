import axios from "axios";

export const addEvent = formData => async dispatch => {
  try {
    const res = await axios.post(
      "https://museek.herokuapp.com/api/event",
      formData
    );
    console.log(res.data);
    dispatch({
      type: "ADD_EVENT_SUCCESS",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "ADD_EVENT_FAIL",
      payload: error.response.data
    });
  }
};

export const getEventCustomer = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://museek.herokuapp.com/api/event?customerId=${id}`
    );
    console.log("get event by customer", res.data);
    dispatch({
      type: "GET_EVENT_CUSTOMER",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getEventMusician = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://museek.herokuapp.com/api/event?musicianId=${id}`
    );
    console.log("get event by musician", res.data);
    dispatch({
      type: "GET_EVENT_MUSICIAN",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const deleteEvent = id => async dispatch => {
  try {
    const res = await axios.delete(
      `https://museek.herokuapp.com/api/event/${id}`
    );
    console.log(res.data);
    console.log(id);
    dispatch({
      type: "DELETE_EVENT",
      payload: id
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const acceptEvent = (formData, id) => async dispatch => {
  try {
    const res = await axios.put(
      `https://museek.herokuapp.com/api/event/status/${id}`,
      formData
    );
    console.log(res.data);
    console.log(id);
    dispatch({
      type: "ACCEPTED",
      payload: id,
      payload2: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "FAIL_ACCEPT",
      payload: error.response.data
    });
  }
};

export const rejectEvent = (formData, id) => async dispatch => {
  try {
    const res = await axios.put(
      `https://museek.herokuapp.com/api/event/status/${id}`,
      formData
    );
    console.log(res.data);
    console.log(id);
    dispatch({
      type: "REJECTED",
      payload: id,
      payload2: res.data
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "FAIL_REJECT",
      payload: error.response.data
    });
  }
};

export const getEventDetail = id => async dispatch => {
  try {
    const res = await axios.get(`https://museek.herokuapp.com/api/event/${id}`);
    console.log("get event detail", res.data);
    dispatch({
      type: "GET_EVENT_DETAIL",
      payload: res.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const eventEdit = (formData, id) => async dispatch => {
  try {
    const res = await axios.put(
      `https://museek.herokuapp.com/api/event/${id}`,
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
