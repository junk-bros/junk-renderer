import { FAKE_FILES_DATA } from "../constants";

const initialState = {
  files: FAKE_FILES_DATA,
  selectedFile: "",
  deleteLoading: false,
  downloadLoading: false,
  selectedRowKeys: []
};

const file = (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_SELECTED_FILE":
      return Object.assign({}, state, { selectedFile: action.versionId });
    case "UPDATE_FILES":
      return action.data
        ? Object.assign({}, state, { files: action.data, selectedRowKeys: [] })
        : state;
    case "UPDATE_SELECTED_ROW_KEYS":
      return Object.assign({}, state, {
        selectedRowKeys: action.selectedRowKeys
      });
    case "CHANGE_DELETE_LOADING":
      return Object.assign({}, state, {
        deleteLoading: action.isLoading
      });
    case "CHANGE_DOWNLOAD_LOADING":
      return Object.assign({}, state, {
        downloadLoading: action.isLoading
      });
    default:
      return state;
  }
};

export default file;
