import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { error } from "util";
import { firebaseApp } from "../config/firebase";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: {
      message: ""
    }
  };

  signIn() {
    console.log("Sign In clicked", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error: error });
      });
  }

  render() {
    return (
      <div className="login-container shadow p-5 mb-5 bg-white rounded">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={event => this.setState({ email: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={() => this.signIn()}>
          Login
        </button>
        <div style={{ marginTop: 10 }}>{this.state.error.message}</div>
        <div style={{ marginTop: 10 }}>
          <Link to={"/signup"}>Dont have an account? SignUp</Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
