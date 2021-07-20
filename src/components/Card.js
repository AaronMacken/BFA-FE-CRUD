import React, { Component, Fragment } from "react";

import { NavLink } from "react-router-dom";

import Form from "./Form";

export default class Card extends Component {
  delete = () => {
    const { deletePost, id } = this.props;

    deletePost(id);
  };

  render() {
    return (
      <Fragment>
        {/* ===== CARD ===== */}
        <div className="card m-1 m-md-3">
          <div className="card-body">
            <NavLink to={`/posts/${this.props.id}`}>
              <h5 className="card-title">{this.props.title}</h5>
            </NavLink>
            <p className="card-text">{this.props.description}</p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${this.props.id}`}
            >
              Edit
            </button>
            <button className="btn btn-danger ms-3" onClick={this.delete}>
              Delete
            </button>
          </div>
        </div>

        {/* ===== MODAL ===== */}
        <div
          className="modal fade"
          id={`modal-${this.props.id}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Form updatePost={this.props.updatePost} postId={this.props.id} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
