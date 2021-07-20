import React from "react";

import { NavLink } from "react-router-dom";

const NAV_ITEM_WRAPPER_STYLES = {
    display: 'flex'
}

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Full-stack FE Template
        </NavLink>

        <div className="nav-item-wrapper" style={NAV_ITEM_WRAPPER_STYLES}>
          <div className="nav-item me-3">
            <NavLink to="/login">Login</NavLink>
          </div>

          <div className="nav-item me-5">number of posts: {props.numberOfPosts}</div>
        </div>
      </div>
    </nav>
  );
}
