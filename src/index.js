import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import App from "./components/app";

//store.dispatch(logUser(email))

ReactDOM.render(<App />, document.getElementById("root"));
