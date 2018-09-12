import React, { Component } from "react";

import NavBar from "./navbar";
import Devices from "./devices";
import SideNav from "./sidenav";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <SideNav />
          <Devices />
        </div>
      </div>
    );
  }
}

export default Home;
