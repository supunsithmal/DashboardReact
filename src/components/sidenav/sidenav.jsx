import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "users"
    };
  }

  setSelected(selectedTitle) {
    console.log("Clicked", this.state.selected);
    this.state.selected = selectedTitle;
    this.setState({
      selected: selectedTitle
    });
  }

  selectedStyle(isSelected) {
    return isSelected
      ? "btn btn-primary btn-block"
      : "btn btn-light btn-block ";
  }

  render() {
    return (
      <div className="col-2 p-2 bg-light ">
        <a
          className={this.selectedStyle(this.state.selected == "users")}
          href="#"
          onClick={() => this.setSelected("users")}
        >
          Users
        </a>
        <a
          className={this.selectedStyle(this.state.selected == "records")}
          href="#/records"
          onClick={() => this.setSelected("records")}
        >
          Records
        </a>
        <a
          className={this.selectedStyle(this.state.selected == "settings")}
          href="#/settings"
          onClick={() => this.setSelected("settings")}
        >
          Settings
        </a>
      </div>
    );
  }
}

export default SideNav;
