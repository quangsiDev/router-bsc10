import React, { Component } from "react";
import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";

export default class TodosApiPage extends Component {
  render() {
    return (
      <div className="container">
        <FormTodo />
        <ListTodo />
      </div>
    );
  }
}
