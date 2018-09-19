import React, { Component } from "react";
import PropTypes from "prop-types";
import NewUser from "./users/newuser";
import UserCard from "./users/userCard";
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

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.user.user) {
  //     this.props.userList.unshift(nextProps.user.user);
  //   }
  // }

  render() {
    let users = [];

    if (this.props.userList.length > 0) {
      users = this.props.userList.map(user => {
        return <UserCard user={user} />;
      });
    }

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
        {this.props.progress.loading ? <h2>Loading</h2> : ""}
        {this.props.progress.failed ? <h2>Something wentt wrong</h2> : ""}
        <div className="row p-2">{users}</div>
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
    userList: state.user.items,
    progress: state.user.progress
  };
}

export default connect(
  mapStateToProps,
  {
    showNewUserDialog,
    fetchUsers
  }
)(Users);
