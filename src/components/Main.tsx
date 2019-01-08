import React from "react";
import App from "../containers/AppContainer";
import Login from "../containers/LoginContainer";

interface Props {
  user: User;
}

class Main extends React.Component<Props, object> {
  render() {
    return this.props.user ? (
      this.props.user.id ? (
        <App />
      ) : (
        <Login />
      )
    ) : (
      <Login />
    );
  }
}

export default Main;
