import * as types from "../constants/ActionTypes";
import { login, register } from "../api/user";
import { getFiles } from "../api/file";
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

const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST
});

const fetchUserSuccess = () => ({
  type: types.FETCH_USER_SUCCESS
});

const fetchUserFailure = (error: string) => ({
  error,
  type: types.FETCH_USER_FAILURE
});

const loginSuccess = (user: User) => ({
  user,
  type: types.LOGIN_SUCCESS
});

export const doLogin = (data: LoginData) => (dispatch: any) => {
  dispatch(fetchUserRequest());
  return login(data).then(
    res => {
      dispatch(fetchUserSuccess());
      if (res.data && res.data.status === 1) {
        dispatch(loginSuccess(res.data.user));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        message.success("登录成功");
      } else {
        dispatch(fetchUserFailure(res.data.message));
        message.error(res.data.message);
      }
    },
    err => {
      message.error(err.message);
      dispatch(fetchUserFailure(err.message));
    },
  );
};

export const doReg = (data: RegData) => (dispatch: any) => {
  dispatch(fetchUserRequest());
  return register(data).then(
    res => {
      dispatch(fetchUserSuccess());
      if (res.data && res.data.status === 1) {
        message.success("注册成功");
      } else {
        dispatch(fetchUserFailure(res.data.message));
        message.error(res.data.message);
      }
    },
    err => {
      message.error(err.message);
      dispatch(fetchUserFailure(err.message));
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

const fetchFileRequest = () => ({
  type: types.FETCH_FILE_REQUEST
});

const fetchFileSuccess = () => ({
  type: types.FETCH_FILE_SUCCESS
});

const fetchFileFailure = (error: string) => ({
  error,
  type: types.FETCH_FILE_FAILURE
});

export const updateFiles = (files: JunkFile[]) => ({
  data: files,
  type: types.UPDATE_FILES
});

export const changeSelectedFile = (versionId: string) => ({
  versionId,
  type: types.CHANGE_SELECTED_FILE
});

export const doFetchFiles = (userId: string) => (dispatch: any) => {
  dispatch(fetchFileRequest());
  const hideLoading = message.loading("正在获取文件列表..", 0);
  return getFiles(userId).then(
    res => {
      hideLoading();
      dispatch(fetchFileSuccess());
      if (res.data && res.data.status === 1) {
        if (res.data["data"].length > 0) {
          dispatch(updateFiles(res.data["data"]));
          message.success("成功获取文件列表", 2);
        } else {
          message.info("你还没有上传任何文件，请先上传文件。", 2);
        }
      } else {
        dispatch(fetchFileFailure(res.data.message));
        message.error(res.data.message, 2);
      }
    },
    err => {
      hideLoading();
      message.error(err.message);
      dispatch(fetchFileFailure(err.message));
    },
  );
};
