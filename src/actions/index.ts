import { message } from "antd";

import * as types from "../constants/ActionTypes";
import { login, register } from "../api/user";
import { getFiles, deleteFiles, downloadFiles } from "../api/file";
import { dealDataToDeleteRequest, dealDataToDownloadRequest } from "../util";

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

export const updateFiles = (files: JunkFile[]) => ({
  data: files,
  type: types.UPDATE_FILES
});

export const changeSelectedFile = (versionId: string) => ({
  versionId,
  type: types.CHANGE_SELECTED_FILE
});

export const updateSelectedRowKeys = (selectedRowKeys: string[]) => ({
  selectedRowKeys,
  type: types.UPDATE_SELECTED_ROW_KEYS
});

export const doFetchFiles = (userId: string) => (dispatch: any) => {
  dispatch(fetchRequest());
  const hideLoading = message.loading("正在获取文件列表..", 0);
  return getFiles(userId).then(
    res => {
      hideLoading();
      dispatch(fetchSuccess());
      if (res.data && res.data.status === 1 && res.data["data"]) {
        if (res.data["data"].length > 0) {
          dispatch(updateFiles(res.data["data"]));
          message.success("成功获取文件列表");
        } else {
          dispatch(updateFiles(res.data["data"]));
          message.info("你还没有上传任何文件，请先上传文件。");
        }
      } else {
        dispatch(fetchFailure(res.data.message));
        message.error(res.data.message);
      }
    },
    err => {
      hideLoading();
      message.error(err.message);
      dispatch(fetchFailure(err.message));
    },
  );
};

export const doDeleteFiles = (userId: string, selectedRowKeys: string[]) => (
  dispatch: any,
) => {
  dispatch(fetchRequest());
  dispatch(changeDeleteLoading(true));
  return deleteFiles(dealDataToDeleteRequest(selectedRowKeys, userId)).then(
    res => {
      dispatch(fetchSuccess());
      dispatch(changeDeleteLoading(false));
      if (res.data && res.data.status === 1 && res.data["data"]) {
        message.success("删除成功");
        dispatch(updateFiles(res.data["data"]));
      } else {
        dispatch(fetchFailure(res.data.message));
        message.error(res.data.message);
      }
    },
    err => {
      message.error(err.message);
      dispatch(changeDeleteLoading(false));
      dispatch(fetchFailure(err.message));
    },
  );
};

export const doDownloadFiles = (userId: string, selectedRowKeys: string[]) => (
  dispatch: any,
) => {
  dispatch(fetchRequest());
  dispatch(changeDownloadLoading(true));
  const promises = dealDataToDownloadRequest(selectedRowKeys, userId).map(
    item => {
      return downloadFiles(item).then(
        res => {
          dispatch(fetchSuccess());
          if (res.data && res.data.status === 0) {
            dispatch(fetchFailure(res.data.message));
            message.error(res.data.message);
          } else {
            dispatch(fetchSuccess());
          }
        },
        err => {
          message.error(err.message);
          dispatch(fetchFailure(err.message));
        },
      );
    },
  );
  Promise.all(promises).then(res => {
    dispatch(changeDownloadLoading(false));
  });
};

const changeDeleteLoading = (isLoading: boolean) => ({
  isLoading,
  type: types.CHANGE_DELETE_LOADING
});

const changeDownloadLoading = (isLoading: boolean) => ({
  isLoading,
  type: types.CHANGE_DOWNLOAD_LOADING
});
