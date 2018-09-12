import React, { Component } from "react";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <div className="col-3">
        <div className="nav flex-column" href="#">
          <a className="nav-link btn-light" href="#">
            Dashboard
          </a>
          <a className="nav-link btn-light" href="#">
            Reports
          </a>
          <a className="nav-link btn-dark" href="#">
            Devices
          </a>
          <a className="nav-link btn-light" href="#">
            Users
          </a>
          <a className="nav-link btn-light" href="#">
            Centers
          </a>
        </div>
      </div>
    );
  }
}

export default SideNav;
