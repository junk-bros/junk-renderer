const initialState = {
  info: null,
  isFetching: false,
  error: ""
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_USER":
      return Object.assign({}, state, { info: action.user });
    case "FETCH_REQUEST":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "FETCH_SUCCESS":
      return initialState;
    case "FETCH_FAILURE":
      return Object.assign({}, initialState, {
        error: action.error
      });
    case "LOGIN_SUCCESS":
      const user = action.user;
      return Object.assign({}, initialState, { info: user });
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default user;
