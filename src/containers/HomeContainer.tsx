import { connect } from "react-redux";
import Home from "../components/Home";
import {
  changeSelectedFile,
  updateFiles,
  updateSelectedRowKeys
} from "../actions";

const mapStateToProps = (state: any) => ({
  userId: state.user.info.id,
  files: state.file.files,
  selectedFile: state.file.selectedFile,
  deleteLoading: state.file.deleteLoading,
  selectedRowKeys: state.file.selectedRowKeys
});

const mapDispatchToProps = (dispatch: any) => ({
  handleChangeSelectedFile: (versionId: string) => {
    dispatch(changeSelectedFile(versionId));
  },
  updateFiles: (files: JunkFile[]) => {
    dispatch(updateFiles(files));
  },
  updateSelectedRowKeys: (selectedRowKeys: [string]) => {
    dispatch(updateSelectedRowKeys(selectedRowKeys));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
