import * as types from "../constants/ActionTypes";

export const toggleCollapsed = () => ({
  type: types.TOGGLE_COLLAPESD
});

export const changeTab = (tabID: number) => ({
  tabID,
  type: types.CHANGE_TAB
});
