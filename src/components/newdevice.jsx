import React, { Component } from "react";

class NewDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: ""
    };
  }

  render() {
    return (
      <div>
        <div class="modal alert" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add New Device</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Add new device</p>
                <div className="form-group">
                  <label for="ownername">Owner Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="ownername"
                    placeholder="Enter owner name"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDevice;
<div />;
