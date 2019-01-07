import { connect } from "react-redux";
import Home from "../components/Home";
import { changeSelectedFile } from "../actions";

const mapStateToProps = (state: any) => ({
  userId: state.user.info.id,
  files: state.file.files,
  selectedFile: state.file.selectedFile
  // files: [
  //   {
  //     key: "sd1dg912gwd91b2wge912gdg19dt21",
  //     filename: "test1.csv",
  //     size: "68KB",
  //     versionId: "sd1dg912gwd91b2wge912gdg19dt21",
  //     lastModified: "2019-01-06 18:52",
  //     children: [
  //       {
  //         key: "sd1dg912gwd91b2wge912gdg19dt24",
  //         filename: "历史版本",
  //         size: "77KB",
  //         versionId: "sd1dg912gwd91b2wge912gdg19dt24",
  //         lastModified: "2019-01-06 18:32"
  //       },
  //       {
  //         key: "sd1dg912gwd91b2wge912gdg19dt25",
  //         filename: "历史版本",
  //         size: "12KB",
  //         versionId: "sd1dg912gwd91b2wge912gdg19dt25",
  //         lastModified: "2019-01-06 18:12"
  //       },
  //     ]
  //   },
  //   {
  //     key: "sd1dg912gwd91b2wge912gd41219dt22",
  //     filename: "test2321312312.csv",
  //     size: "53KB",
  //     versionId: "sd1dg912gwd91b2wge912gdg19dt22",
  //     lastModified: "2019-01-06 18:54"
  //   },
  //   {
  //     key: "sd1dg912gwd91b2wge912gdg19dt23",
  //     filename: "test3.csv",
  //     size: "98KB",
  //     versionId: "sd1dg912gwd91b2wge912gdg19dt23",
  //     lastModified: "2019-01-06 18:59"
  //   },
  // ],
});

const mapDispatchToProps = (dispatch: any) => ({
  handleChangeSelectedFile: (versionId: string) => {
    dispatch(changeSelectedFile(versionId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
