const initialState = {
  info: null,
  isFetching: false,
  error: ""
};

const user = (state = initialState, action: any) => {
  let resState;
  switch (action.type) {
    case "GET_USER":
      return Object.assign({}, state, { info: action.user });
    case "FETCH_REQUEST":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "FETCH_SUCCESS":
      const res = action.response;
      resState = res.status ? { info: res.user } : { error: res.message };
      return Object.assign({}, initialState, resState);
    case "FETCH_FAILURE":
      return Object.assign({}, initialState, {
        error: action.error
      });
    default:
      return state;
  }
};

export default user;
