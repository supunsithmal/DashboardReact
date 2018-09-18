import React, { Component } from "react";
import PropTypes from "prop-types";
import NewUser from "./users/newuser";
import { connect } from "react-redux";
import { showNewUserDialog } from "../actions/ui-actions";
import { fetchUsers } from "../actions/user-actions";

class Users extends Component {
  openNewUserDialog() {
    console.log("New user dialog opened", this.props.isNewUserDialogOpened);
    this.props.showNewUserDialog(true);
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.userList.unshift(nextProps.user);
    }
  }

  render() {
    const users = this.props.userList.map(user => {
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
        {users}
        <br />
      </div>
    );
  }
}

// Users.propTypes = {
//   fetchUsers: PropTypes.func.isRequired,
//   users: PropTypes.array.isRequired
// };

function mapStateToProps(state) {
  return {
    isNewUserDialogOpened: state.ui.isNewUserDialogOpened,
    user: state.user.item,
    userList: state.user.items
  };
}

export default connect(
  mapStateToProps,
  {
    showNewUserDialog,
    fetchUsers
  }
)(Users);
