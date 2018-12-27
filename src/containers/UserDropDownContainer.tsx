import { connect } from "react-redux";
import UserDropDown from "../components/UserDropDown";
import { doLogout } from "../actions";

const mapStateToProps = (state: any) => ({
  username: state.user.info.username
});

const mapDispatchToProps = (dispatch: any) => ({
  doLogout: () => {
    dispatch(doLogout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDropDown);
