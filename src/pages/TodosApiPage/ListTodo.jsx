import axios from "axios";
import React, { Component } from "react";
import { URL_TODOS } from "./api";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { setTodosAction } from "./todoSlice";
class ListTodo extends Component {
  // state = {
  //   todos: [],
  // };

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
  componentDidMount() {
    // function này sẽ tự động được chạy khi user load page ( chạy sau render() )
    console.log("did mount");
    this.fetchAllTodos();
  }
  handleDelete = (id) => {
    axios
      .delete(`${URL_TODOS}/${id}`)
      .then((res) => {
        // gọi lại api lấy danh sách todos sau khi xoá thành công
        this.fetchAllTodos();
        toast("Success");
        console.log(res);
      })
      .catch((err) => {
        toast(<span className="text-danger display-4">Fail</span>);
        console.log(err);
      });
  };
  render() {
    console.log("render");
    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>IsComplete</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.props.todos.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <input type="checkbox" checked={item.isCompleted} />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    todos: state.todosSlice.todos,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleGetAllTodos: (listTodo) => {
      dispatch(setTodosAction(listTodo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
// LIFE CYCLE : mounting ~ sinh ra, updating ~ cập nhật, unmounting ~ biến mất
