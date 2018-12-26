import * as types from "../constants/ActionTypes";
import { login } from "../api/user";

export const toggleCollapsed = () => ({
  type: types.TOGGLE_COLLAPESD
});

export const changeTab = (tabID: number) => ({
  tabID,
  type: types.CHANGE_TAB
});

export const getUser = (user: User) => ({
  user,
  type: types.GET_USER
});

const fetchRequest = () => ({
  type: types.FETCH_REQUEST
});

const fetchSuccess = (response: FetchResponse) => ({
  response,
  type: types.FETCH_SUCCESS
});

const fetchFailure = (error: string) => ({
  error,
  type: types.FETCH_FAILURE
});

export const doLogin = (data: LoginData) => (dispatch: any) => {
  dispatch(fetchRequest());
  return login(data).then(
    res => {
      dispatch(fetchSuccess(res.data));
      if (res.data && res.data.status === 1) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    },
    err => dispatch(fetchFailure(err.message)),
  );
};
