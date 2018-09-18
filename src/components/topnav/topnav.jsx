import React, { Component } from "react";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>ABC Company</h2>
        <button className="btn-danger">Signout</button>
      </div>
    );
  }
}

export default TopNav;
