const initialState = {
  profile: {},
  errors: [],
  fav: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_PROFILE":
      return {
        ...state,
        ...payload,
        profile: payload,
        loading: false
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
    case "GET_FAV":
      return {
        ...state,
        ...payload,
        fav: payload.data
      };
    case "ADD_FAV_SUCCESS":
      return {
        ...state,
        ...payload
      };
    case "ADD_FAV_FAIL":
      return {
        ...state,
        errors: payload
      };
    case "DELETE_FAV":
      return {
        ...state,
        ...payload,
        fav: state.event.filter(favRemain => favRemain._id !== payload)
      };
    default:
      return state;
  }
}
