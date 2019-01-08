import { connect } from "react-redux";
import Main from "../components/Main";

const mapStateToProps = (state: any) => ({
  user: state.user.info
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
