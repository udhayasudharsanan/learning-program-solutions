
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => alert("Error loading posts: " + error));
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.slice(0, 5).map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
