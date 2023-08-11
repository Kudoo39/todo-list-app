import React from "react";

const App = () => {
  return (
    <form className="form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default App;
