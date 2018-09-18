import React, { Component } from "react";
import NewUser from "./users/newuser";
import { connect } from "react-redux";
import { showNewUserDialog } from "../actions/ui-actions";

class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewUserDialogOpened: false,
      user: {},
      userList: []
    };
  }

  openNewUserDialog() {
    console.log("New user dialog opened", this.props.isNewUserDialogOpened);
    this.props.showNewUserDialog(true);
  }

  componentWillMount() {
    //get users
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          userList: data
        });
      });
  }

  render() {
    const users = this.state.userList.map(user => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      );
    });
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Users</h1>
          <button
            className="btn btn-primary"
            onClick={() => this.openNewUserDialog()}
          >
            Add User
          </button>
        </div>
        {this.props.isNewUserDialogOpened ? <NewUser /> : ""}
        {this.props.user.fname}
        {users}
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isNewUserDialogOpened: state.ui.isNewUserDialogOpened,
    user: state.user.user
  };
}

export default connect(
  mapStateToProps,
  { showNewUserDialog }
)(users);
