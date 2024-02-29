import axios from "axios";
import React, { Component } from "react";
import { URL_TODOS } from "./api";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { setTodosAction } from "./todoSlice";

class FormTodo extends Component {
  state = {
    title: "",
  };

  handleChangeForm = (e) => {
    let { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  fetchAllTodos = () => {
    axios
      .get(URL_TODOS)
      .then((result) => {
        // đẩy list todo lên redux
        this.props.handleGetAllTodos(result.data);
        // this.setState({ todos: result.data });
      })
      .catch((err) => {});
  };
  handleAddTodo = () => {
    console.log(this.state);
    // gọi api create todo
    axios
      .post(URL_TODOS, {
        title: this.state.title,
        isCompleted: false,
      })
      .then((result) => {
        toast("Success");
        // gọi api lấy list todo mới nhất sau khi thêm thành công
        this.fetchAllTodos();
      })
      .catch((err) => {
        toast("Fail");
      });
  };
  render() {
    return (
      <div className="py-5">
        <input
          onChange={this.handleChangeForm}
          type="text"
          class="form-control"
          name="title"
          placeholder="Title Todo "
        />
        <button onClick={this.handleAddTodo} className="btn btn-success">
          Add Todo
        </button>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleGetAllTodos: (listTodo) => {
      dispatch(setTodosAction(listTodo));
    },
  };
};

export default connect(null, mapDispatchToProps)(FormTodo);
