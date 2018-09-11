import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { firebaseApp } from "./config/firebase";

import App from "./App";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Counters from "./components/counters";
import Main from "./components/main";

ReactDOM.render(<Main />, document.getElementById("root"));
