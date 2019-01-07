const initialState = {
  files: null,
  selectedFile: "",
  isFetching: false,
  error: ""
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
      return initialState;
    case "FETCH_FILE_FAILURE":
      return Object.assign({}, initialState, {
        error: action.error
      });
    case "UPDATE_FILES":
      const files = action.data;
      return Object.assign({}, initialState, { files });
    default:
      return state;
  }
};

export default file;
