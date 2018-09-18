import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Dashboard
        </a>
        <button className="btn btn-danger">Signout</button>
      </nav>
    );
  }
}

export default Header;
