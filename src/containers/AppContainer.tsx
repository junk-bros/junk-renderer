import { connect } from "react-redux";
import App from "../components/App";
import { toggleCollapsed, changeTab, setUser } from "../actions";

const mapStateToProps = (state: any) => ({
  collapsed: state.global.collapsed,
  nowTab: state.global.nowTab,
  user: state.global.user
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleCollapsed: () => dispatch(toggleCollapsed()),
  changeTab: (tabID: number) => dispatch(changeTab(tabID)),
  setUser: (user: User) => dispatch(setUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
