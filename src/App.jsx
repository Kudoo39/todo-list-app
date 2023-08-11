import React from "react";
import "./App.css";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { TbTrashOff } from "react-icons/tb";

const App = () => {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <form className="form">
        <div className="form-row">
          <input type="text" id="item" placeholder="Add a new todo..." />
        </div>
        <BsFillPlusSquareFill className="btn" />
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <TbTrashOff className="btn" />
          <label htmlFor="">
            <input type="checkbox" />
            Item 2
          </label>
          <TbTrashOff className="btn" />
        </li>
      </ul>
    </div>
  );
};

export default App;
