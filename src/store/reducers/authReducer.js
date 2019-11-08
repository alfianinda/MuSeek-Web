const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  errors: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case "REGISTER_FAIL":
      localStorage.removeItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        errors: payload
      };
    case "UNAUTHENTICATED":
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
