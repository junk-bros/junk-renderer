const layout = (state = { collapsed: false }, action) => {
  switch (action.type) {
    case "TOGGLE_COLLAPESD":
      return { collapsed: !state.collapsed };
    default:
      return state;
  }
};

export default layout;
