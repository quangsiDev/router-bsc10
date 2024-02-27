import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodosApiPage from "./pages/TodosApiPage/TodosApiPage";
function App() {
  return (
    <div>
      <ToastContainer autoClose={1000} />
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todos-api" element={<TodosApiPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
