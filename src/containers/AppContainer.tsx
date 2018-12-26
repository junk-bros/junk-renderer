import { connect } from "react-redux";
import App from "../components/App";
import { toggleCollapsed, changeTab } from "../actions";

const mapStateToProps = (state: any) => ({
  collapsed: state.global.collapsed,
  nowTab: state.global.nowTab,
  user: state.user.info
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleCollapsed: () => dispatch(toggleCollapsed()),
  changeTab: (tabID: number) => dispatch(changeTab(tabID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
