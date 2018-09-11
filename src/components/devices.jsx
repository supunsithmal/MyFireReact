import React, { Component } from "react";

class Devices extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2>Devices</h2>
          <hr class="my-4" />
          <div>
            <button className="btn btn-primary">New Device</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Devices;
