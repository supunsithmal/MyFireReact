import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import { firebaseApp } from "../config/firebase";
import { Provider } from "react-redux";
import { createStore } from "redux";

import SignIn from "./signin";
import SignUp from "./signup";
import Home from "./home";
import NotFound from "./notfound";

import reducer from "../reducers";
import logUser from "../actions";

const store = createStore(reducer);

class App extends Component {
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
      <Provider store={store}>
        <div>
          <Router path="/" component={Home}>
            <main>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/home" component={Home} />

              {//TODO possible error outcome
              this.state.user ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/signin" />
              )}
            </main>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
