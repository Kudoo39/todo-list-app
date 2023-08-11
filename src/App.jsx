import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <form className="container">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" />
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
    </>
  );
};

export default App;
