const initialState = {
  event: [],
  errors: [],
  eventById: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload, payload2 } = action;

  switch (type) {
    case "ADD_EVENT_SUCCESS":
      return {
        ...state,
        ...payload
      };
    case "ADD_EVENT_FAIL":
      return {
        ...state,
        errors: payload
      };
    case "GET_EVENT_CUSTOMER":
      return {
        ...state,
        ...payload,
        event: payload.data,
        loading: false
      };
    case "GET_EVENT_MUSICIAN":
      return {
        ...state,
        ...payload,
        event: payload.data
      };
    case "GET_EVENT_DETAIL":
      return {
        ...state,
        ...payload,
        eventById: payload.data
      };
    case "EDIT_SUCCESS":
      return {
        ...state,
        ...payload
      };
    case "EDIT_FAIL":
      return {
        ...state,
        errors: payload
      };
    case "ACCEPTED":
      return {
        ...state,
        ...payload2,
        event: state.event.filter(eventChange => eventChange._id === payload2)
      };
    case "FAIL_ACCEPT":
      return {
        ...state,
        errors: payload
      };
    case "REJECTED":
      return {
        ...state,
        ...payload2,
        event: state.event.filter(eventChange => eventChange._id === payload2)
      };
    case "FAIL_REJECT":
      return {
        ...state,
        errors: payload
      };
    case "DELETE_EVENT":
      return {
        ...state,
        ...payload,
        event: state.event.filter(eventRemain => eventRemain._id !== payload)
      };
    default:
      return state;
  }
}
