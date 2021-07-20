import React, { Component } from "react";

// Used to generate a unique ID for list items
import uniqid from "uniqid";

// ----- CONSTANTS ----- //

const DEFAULT_FORM_STYLES = {
  width: "100%",
  margin: "auto",
};

const INITIAL_STATE = {
  title: "",
  description: "",
};

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  // ----- STATE HELPER FUNCTIONS ----- //

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;

    const formData = {
      title,
      description,
      id: uniqid(),
    };

    this.props.addPost(formData);

    this.setState(INITIAL_STATE);
  };

  handleUpdateSubmit = (e) => {
    e.preventDefault();

    const { postId } = this.props;
    const { title, description } = this.state;

    const formData = {
      title,
      description,
    };

    this.props.updatePost(postId, formData);

    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form
        className="p-5"
        style={this.props.styles || DEFAULT_FORM_STYLES}
        onSubmit={this.props.postId ? this.handleUpdateSubmit : this.handleAddSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <div className="form-text">Title of your post</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <div className="form-text">The content of your post</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
