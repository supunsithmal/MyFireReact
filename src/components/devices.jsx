import React, { Component } from "react";
import Device from "./device";
import NewDevice from "./newdevice";
import { connect } from "react-redux";
import { showNewDevice } from "../actions/uiActions";

class Devices extends Component {
  addDevice() {
    this.props.showNewDevice(true);
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-9">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h2>Devices</h2>
            <hr className="my-4" />
            <div>
              <button
                className="btn btn-primary"
                onClick={() => this.addDevice()}
              >
                New Device
              </button>
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
        <NewDevice />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log("Reveived", state.ui.isNewDeviceShow);
  const isAlertShow = state.ui.isNewDeviceShow;
  return {
    isAlertShow
  };
}

export default connect(
  mapStateToProps,
  { showNewDevice }
)(Devices);
