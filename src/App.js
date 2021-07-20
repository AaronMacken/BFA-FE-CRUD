import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sample data coming from constants file
import { INITIAL_STATE } from "./constants";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  // ----- STATE HELPER FUNCTIONS ----- //

  addPost = (postData) => {
    const posts = [...this.state.posts, postData];

    this.setState({ posts });
  };

  deletePost = (clickedId) => {
    const posts = this.state.posts.filter((post) => {
      return post.id !== clickedId;
    });

    this.setState({ posts });
  };

  updatePost = (clickedId, postData) => {
    const posts = this.state.posts.map((post) => {
      const { title, description } = postData;
      const { id } = post;

      if (post.id === clickedId) {
        return {
          title,
          description,
          id,
        };
      }

      return post;
    });

    this.setState({ posts });
  };

  // ----- RENDERERS ----- //

  renderPostsPage = () => {
    return (
      <PostsPage
        addPost={this.addPost}
        deletePost={this.deletePost}
        updatePost={this.updatePost}
        posts={this.state.posts}
      />
    );
  };

  renderPostPage = () => {
    return <PostPage />;
  };

  render() {
    return (
      <Router>
        <Navbar numberOfPosts={this.state.posts.length} />
        <Switch>
          <Route exact path="/" component={this.renderPostsPage} />
          <Route path="/posts/:id" component={this.renderPostPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
