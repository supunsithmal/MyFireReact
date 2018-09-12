import React, { Component } from "react";
import { firebaseApp } from "../config/firebase";
import { connect } from "react-redux";
import { logUser } from "../actions";

class NavBar extends Component {
  signOut() {
    console.log("Signout clicked");
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">
          Records
        </a>
        <button
          className="btn btn-outline-light"
          onClick={() => this.signOut()}
        >
          Sign Out
        </button>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {};
}

export default connect(
  mapStateToProps,
  { logUser }
)(NavBar);
