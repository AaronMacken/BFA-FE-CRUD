import React, { Component } from "react";
import "./PostsSection.css";

import Card from "./Card";

export default class PostsSection extends Component {
  renderPosts = () => {
    return this.props.posts.map((post) => (
      <div key={post.id} className="col-12 col-sm-6">
        <Card
          title={post.title}
          description={post.description}
          id={post.id}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
        />
      </div>
    ));
  };

  render() {
    return (
      <section className="cardsSection">
        <div className="container">
          <div className="row">
            <h2>Posts!</h2>
            {this.renderPosts()}
          </div>
        </div>
      </section>
    );
  }
}
