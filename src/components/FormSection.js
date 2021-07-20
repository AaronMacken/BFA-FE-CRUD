import React, { Component } from "react";
import "./FormSection.css";

import Form from "./Form";

export default class FormSection extends Component {
  render() {
    return (
      <section className="formSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Create a post!</h1>
              <Form addPost={this.props.addPost} styles={{ width: "50%", margin: "auto" }} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
