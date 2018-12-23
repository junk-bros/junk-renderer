import { connect } from "react-redux";
import App from "../components/App";
import { toggleCollapsed } from "../actions";

const mapStateToProps = state => ({
  collapsed: state.layout.collapsed
});

const mapDispatchToProps = dispatch => ({
  toggleCollapsed: () => dispatch(toggleCollapsed)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
