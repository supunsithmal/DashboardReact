import React, { Component } from "react";

class users extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Users</h1>
        <button className="btn btn-primary">Add User</button>
      </div>
    );
  }
}

export default users;
