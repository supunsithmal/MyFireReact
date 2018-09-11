import React, { Component } from "react";
import Device from "./device";

class Devices extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2>Devices</h2>
          <hr className="my-4" />
          <div>
            <button className="btn btn-primary">New Device</button>
          </div>
        </div>
        <div>
          <Device />
          <Device />
          <Device />
          <Device />
          <Device />
        </div>
      </div>
    );
  }
}

export default Devices;
