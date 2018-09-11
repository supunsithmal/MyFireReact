import React, { Component } from "react";
import { Link } from "react-router-dom";
import { firebaseApp } from "../config/firebase";
import "./styles.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  }

  signUp() {
    console.log("State", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log("Sign up error", error);
        this.setState({ error: error });
      });
  }

  render() {
    return (
      <div className="login-container shadow p-5 mb-5 bg-white rounded">
        <div className="form-group">
          <h2>Sign Up</h2>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={() => this.signUp()}>
            Sign Up
          </button>
          <div style={{ marginTop: 10 }}>{this.state.error.message}</div>
          <div style={{ marginTop: 10 }}>
            <Link to={"/signin"}>Already a member? SignIn</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
