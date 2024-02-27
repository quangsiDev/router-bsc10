import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login - Form</NavLink>
        <NavLink to="/todos-api">Todos </NavLink>
      </div>
    );
  }
}
