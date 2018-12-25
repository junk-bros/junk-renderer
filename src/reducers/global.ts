const defaultState = {
  collapsed: false,
  nowTab: 0
};

const global = (state = defaultState, action: any) => {
  switch (action.type) {
    case "TOGGLE_COLLAPESD":
      return Object.assign({}, state, { collapsed: !state.collapsed });
    case "CHANGE_TAB":
      return Object.assign({}, state, { nowTab: action.tabID });
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.user));
      return Object.assign({}, state, { user: action.user });
    default:
      return state;
  }
};

export default global;
