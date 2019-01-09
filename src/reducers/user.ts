const initialState = {
  info: null
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_USER":
      return Object.assign({}, state, { info: action.user });
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
