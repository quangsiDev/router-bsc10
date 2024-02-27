import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";

export default class LoginPage extends Component {
  state = {
    username: "alice",
    password: "123",
  };
  handleChangeForm = (e) => {
    // e ~ event trên thẻ user đang tương tác
    console.log("😀 - e", e.target.name);
    let { value, name } = e.target;

    this.setState({ [name]: value });
    // setState
  };
  handleLogin = () => {
    console.log("login");
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: {
        taiKhoan: this.state.username,
        matKhau: this.state.password,
      },
      headers: {
        TokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAyLzA4LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyMjU1NjgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzIyNzA0NDAwfQ.e-yrLVynhd2bK9TJS-HXNAlwuCtvACqI4Xqr9XP2FbU",
      },
    })
      .then((res) => {
        toast("Login thành công");
        console.log(res);
      })
      .catch((err) => {
        toast("Login thất bại");
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container">
        <input
          name="username"
          onChange={this.handleChangeForm}
          value={this.state.username}
          type="text"
          class="form-control"
          placeholder="Username"
        />
        <input
          name="password"
          onChange={this.handleChangeForm}
          value={this.state.password}
          type="text"
          class="form-control"
          placeholder="Password"
        />
        <button onClick={this.handleLogin} className="btn btn-dark">
          Login
        </button>
      </div>
    );
  }
}

let user = {
  name: "alice",
  age: 20,
};
let key = "name";
// user.name
user[key] = "new value";
