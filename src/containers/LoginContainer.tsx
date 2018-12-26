import { connect } from "react-redux";
import Login from "../components/Login";
import { doLogin } from "../actions";

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  doLogin: (data: LoginData) => dispatch(doLogin(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
