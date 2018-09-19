import React, { Component } from "react";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="p-2">
        <div class="card" style={{ width: "12em", height: "15em" }}>
          <img
            class="card-img-top"
            src="https://via.placeholder.com/350x100/008394/ffffff"
            alt="Card image cap"
          />
          <div class="card-body">
            <h6 class="card-title">{this.props.user.name}</h6>
            <p
              style={{
                display: "block",
                textOverflow: "ellipsis",
                maxLines: 1
              }}
            >
              {this.props.user.email}
            </p>
            <p>{this.props.user.phone}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
