import React from "react";
import "./App.css";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { TbTrashOff } from "react-icons/tb";

const App = () => {
  return (
    <div className="container">
      <h2>Todo App</h2>
      <form className="form">
        <div className="form-row">
          <input type="text" id="item" placeholder="Add a new todo..." />
        </div>
        <BsFillPlusSquareFill className="btn add" />
      </form>
      <h2>Todo List</h2>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input className="input" type="checkbox" />
            Item 1
            <TbTrashOff className="btn remove" />
          </label>

          <label htmlFor="">
            <input className="input" type="checkbox" />
            Item 2
            <TbTrashOff className="btn remove" />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default App;
