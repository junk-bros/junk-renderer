import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import reducer from "./reducers/index";
import App from "./containers/AppContainer";
import { getUser } from "./actions";
import Register from "./components/Register";
import registerServiceWorker from "./registerServiceWorker";

const middleware: Redux.Middleware[] = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = Redux.createStore(reducer, Redux.applyMiddleware(...middleware));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  #root {
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

const user = JSON.parse(localStorage.getItem("user") || "{}");
console.log(user);
store.dispatch(getUser(user));

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
