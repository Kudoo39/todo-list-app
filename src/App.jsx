import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <form className="form">
        <div className="form-row">
          <input type="text" id="item" placeholder="Add a new todo..." />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn">Delete</button>
          <label htmlFor="">
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default App;
