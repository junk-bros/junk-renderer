const initialState = {
  isFetching: false,
  error: "",
  collapsed: false,
  nowTab: 0
};

const global = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_COLLAPESD":
      return Object.assign({}, state, { collapsed: !state.collapsed });
    case "CHANGE_TAB":
      return Object.assign({}, state, { nowTab: action.tabID });
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
    default:
      return state;
  }
};

export default global;
