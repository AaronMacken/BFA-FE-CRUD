import React from "react";
import "./Footer.css";

import { NavLink } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <NavLink to="/" style={{ color: "#fff" }}>
          <h2>Take me home!</h2>
        </NavLink>
      </div>
    );
  }
}
