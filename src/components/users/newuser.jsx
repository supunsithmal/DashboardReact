import React, { Component } from "react";
import { connect } from "react-redux";
import { showNewUserDialog } from "../../actions/ui-actions";
import { addUser } from "../../actions/user-actions";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: ""
    };
  }

  dismissDialog() {
    console.log("Dismissing dialog");
    this.props.showNewUserDialog(false);
  }

  saveUserDetails() {
    this.props.addUser({
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email
    });

    const user = {
      name: this.state.fname + " " + this.state.lname,
      email: this.state.email
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block", background: "#00000088" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new user
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => this.dismissDialog()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="firstname">First name:</label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  onChange={event =>
                    this.setState({ fname: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last name:</label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  onChange={event =>
                    this.setState({ lname: event.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.dismissDialog()}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.saveUserDetails()}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { showNewUserDialog, addUser }
)(NewUser);
