import React, { useState } from "react";
import "./App.css";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { TbTrashOff } from "react-icons/tb";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [currentId, setCurrentId] = useState(1);

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

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteToto = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  return (
    <div className="container">
      <h2>Todo App</h2>
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
      <h2>Todo List</h2>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  checked={todo.completed}
                  type="checkbox"
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <TbTrashOff onClick={() => deleteToto(todo.id)} className="btn remove" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
