import { FAKE_FILES_DATA } from "../constants";

const initialState = {
  files: FAKE_FILES_DATA,
  selectedFile: "",
  isFetching: false,
  error: "",
  deleteLoading: false,
  downloadLoading: false,
  selectedRowKeys: []
};

const file = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_SELECTED_FILE":
      return Object.assign({}, state, { selectedFile: action.versionId });
    case "FETCH_FILE_REQUEST":
      return Object.assign({}, state, {
        isFetching: true
      });
    case "FETCH_FILE_SUCCESS":
      return Object.assign({}, state, {
        isFetching: false
      });
    case "FETCH_FILE_FAILURE":
      return Object.assign({}, state, {
        error: action.error,
        isFetching: false
      });
    case "UPDATE_FILES":
      return action.data
        ? Object.assign({}, state, { files: action.data })
        : state;
    case "UPDATE_SELECTED_ROW_KEYS":
      return Object.assign({}, state, {
        selectedRowKeys: action.selectedRowKeys
      });
    default:
      return state;
  }
};

export default file;
