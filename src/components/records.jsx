import React, { Component } from "react";

class records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false
    };
  }

  componentWillMount() {
    this.setState({
      isLoading: true
    });
    console.log("component will mount Called");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data,
          isLoading: false
        });
      });
  }

  render() {
    const postItems =
      this.state.posts &&
      this.state.posts.map(post => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        );
      });

    return (
      <div>
        <h2>Records</h2>
        {postItems}
        {this.state.isLoading ? <h1>Loading</h1> : ""}
      </div>
    );
  }
}

export default records;
