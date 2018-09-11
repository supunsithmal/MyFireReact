import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { firebaseApp } from "../config/firebase";

import SignIn from "./signin";
import SignUp from "./signup";
import App from "./app";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.initAuthListner();
  }

  initAuthListner() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user has signed in", user);
        this.setState({ user: user });
      } else {
        console.log("userhas signed out or still needs to sign in");
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Router path="/">
        <div>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/app" component={App} />
          <div>
            {this.state.user ? (
              <Redirect to="/app" />
            ) : (
              <Redirect to="/signin" />
            )}
          </div>
          ;
        </div>
      </Router>
    );
  }
}

export default Main;
