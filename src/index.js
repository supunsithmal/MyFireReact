import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Main from "./components/main";

ReactDOM.render(<Main />, document.getElementById("root"));
