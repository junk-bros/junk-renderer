import * as types from "../constants/ActionTypes";
import { login, register } from "../api/user";
import { message } from "antd";

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

const fetchSuccess = () => ({
  type: types.FETCH_SUCCESS
});

const fetchFailure = (error: string) => ({
  error,
  type: types.FETCH_FAILURE
});

const loginSuccess = (user: User) => ({
  user,
  type: types.LOGIN_SUCCESS
});

export const doLogin = (data: LoginData) => (dispatch: any) => {
  dispatch(fetchRequest());
  return login(data).then(
    res => {
      dispatch(fetchSuccess());
      if (res.data && res.data.status === 1) {
        dispatch(loginSuccess(res.data.user));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        message.success("登录成功");
      } else {
        dispatch(fetchFailure(res.data.message));
        message.error(res.data.message);
      }
    },
    err => {
      message.error(err.message);
      dispatch(fetchFailure(err.message));
    },
  );
};

export const doReg = (data: RegData) => (dispatch: any) => {
  dispatch(fetchRequest());
  return register(data).then(
    res => {
      dispatch(fetchSuccess());
      if (res.data && res.data.status === 1) {
        message.success("注册成功");
      } else {
        dispatch(fetchFailure(res.data.message));
        message.error(res.data.message);
      }
    },
    err => {
      message.error(err.message);
      dispatch(fetchFailure(err.message));
    },
  );
};

export const doLogout = () => {
  localStorage.removeItem("user");
  message.success("注销成功");
  return {
    type: types.LOGOUT
  };
};
