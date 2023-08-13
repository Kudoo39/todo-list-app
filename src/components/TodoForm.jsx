import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

const TodoForm = ({ setTodos, currentId, setCurrentId }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: currentId, title: newItem, completed: false },
      ];
    });
    setCurrentId(currentId + 1);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Add a new todo..."
        />
      </div>
      <BsFillPlusSquareFill onClick={handleSubmit} className="btn add" />
    </form>
  );
};

export default TodoForm;
