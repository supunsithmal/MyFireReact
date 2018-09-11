import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>

        {/* <div className="container-fluid text-center">
          <div className="row content">
            <div className="col-sm-2 sidenav">
              <p className="m-2 p-2">Option 1</p>
              <p className="m-2 p-2">Option 1</p>
              <p className="m-2 p-2">Option 1</p>
            </div>
            <div className="col-sm-8 text-left">
              <div className="jumbotron m-2">
                <h1 className="display-8">Records</h1>
                <Counters />
              </div>
            </div>
          </div>
        </div> */}

        {/* <footer
          className="container-fluid text-center"
          style={{ background: "#555555", paddingTop: 15, paddingBottom: 5 }}
        >
          <p>Footer Text</p>
        </footer> */}
      </React.Fragment>
    );
  }
}

export default App;
