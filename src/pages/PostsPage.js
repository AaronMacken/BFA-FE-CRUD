import React from "react";

import FormSection from "../components/FormSection";
import PostsSection from "../components/PostsSection";

class PostsPage extends React.Component {
  render() {
    return (
      <div>
        <FormSection addPost={this.props.addPost} />
        <PostsSection
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

export default PostsPage;
