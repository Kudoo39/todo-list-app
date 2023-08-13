import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const local = localStorage.getItem("Items");
    return local !== null ? JSON.parse(local) : [];
  });
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed } : todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  return (
    <div className="container">
      <h2>Todo App</h2>
      <TodoForm
        setTodos={setTodos}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <h2>Todo List</h2>
      {todos.length == 0 && <h4>Nothing to do, enjoy your day!</h4>}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
