import React, { Component } from "react";
import { firebaseApp } from "../config/firebase";

class NavBar extends Component {
  signOut() {
    console.log("Signout clicked");
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
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

export default NavBar;
