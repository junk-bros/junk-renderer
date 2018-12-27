import { connect } from "react-redux";
import Register from "../components/Register";
import { doReg } from "../actions";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  doReg: (data: RegData) => dispatch(doReg(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
